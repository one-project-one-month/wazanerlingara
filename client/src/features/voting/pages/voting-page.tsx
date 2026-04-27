import { Button } from "@/components/ui/button.tsx";
import VotingConfirmationPopup from "@/features/voting/components/voting-confirmation-popup.tsx";
import VotingLoading from "@/features/voting/components/voting-loading.tsx";
import VotingPlayerCard from "@/features/voting/components/voting-player-card.tsx";
import { useGameConfigStore } from "@/stores/game-config-store.ts";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface VotingRouteState {
  votedFor: string | number | null;
}

const VotingPage = () => {
  const [selectedPlayerId, setSelectedPlayerId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const navigate = useNavigate();
  const { config } = useGameConfigStore();
  const playersLength = config?.players.length ?? 0;
  const [votedPlayers, setVotedPlayers] = useState(
    config?.players.map((p) => ({ id: p.id, name: p.name, votedCount: 0 })) || [],
  )
  const [voteCount, setVoteCount] = useState(0);

  const selectedPlayerName =
    config?.players.find((p) => p.id === selectedPlayerId)?.name || "";

  const handleVoteClick = useCallback(() => {
    if (selectedPlayerId) setIsModalOpen(true);
  }, [selectedPlayerId]);

  const confirmVote = useCallback(() => {
    if (!selectedPlayerId || playersLength <= 0) return;
    if (voteCount > playersLength) return;

    setIsModalOpen(false);
    setVotedPlayers((prev) => prev.map((p) => p.id === selectedPlayerId ? { ...p, votedCount: p.votedCount + 1 } : p));

    const nextVoteCount = voteCount + 1;
    setVoteCount(nextVoteCount);
    if (nextVoteCount === playersLength) {
      console.log("All players have voted");
      setIsLoading(true);
    }
  }, [playersLength, selectedPlayerId, voteCount]);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        const sorted = [...votedPlayers].sort((a, b) => b.votedCount - a.votedCount);
        const routeState: VotingRouteState = { votedFor: sorted[0]?.id ?? null };
        navigate("/result", { state: routeState });
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isLoading, navigate, votedPlayers]);

  return (
    <main
      className={
        "flex flex-col items-center justify-start lg:justify-center  gap-6 md:gap-8 lg:p-0 max-w-5xl mx-auto py-4"
      }
    >
      {isLoading ? (
        <VotingLoading />
      ) : (
        <>
          <div
            className={
              "flex flex-col items-center justify-center w-full gap-2 md:gap-4 text-center"
            }
          >
            <h1 className={"text-3xl md:text-4xl lg:text-5xl "}>
              ဘယ်သူက Imposter လဲ
            </h1>
            <p className={"text-xl lg:text-3xl opacity-80"}>
              သံသယအရှိဆုံး တစ်ယောက်ကို ရွေးပါ။
            </p>
          </div>

          <div className="w-full flex justify-center py-4">
            <VotingPlayerCard
              players={config?.players || []}
              selectedPlayerId={selectedPlayerId}
              onSelect={setSelectedPlayerId} />
          </div>

          <div className={"mt-auto lg:mt-8 w-full lg:max-w-xl"}>
            <Button
              disabled={!selectedPlayerId}
              onClick={handleVoteClick}
              className="w-full cursor-pointer text-xl"
            >
              မဲပေးမယ်
            </Button>
          </div>

          <VotingConfirmationPopup
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onConfirm={confirmVote}
            playerName={selectedPlayerName || ""}
          />
        </>
      )}
    </main>
  );
};
export default VotingPage;
