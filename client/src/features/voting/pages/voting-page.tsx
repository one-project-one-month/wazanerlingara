import { Button } from "@/components/ui/button.tsx";
import VotingConfirmationPopup from "@/features/voting/components/voting-confirmation-popup.tsx";
import VotingLoading from "@/features/voting/components/voting-loading.tsx";
import VotingPlayerCard from "@/features/voting/components/voting-player-card.tsx";
import { useGameConfigStore } from "@/stores/game-config-store.ts";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface VotingRouteState {
  votedFor: string[];
}

const VotingPage = () => {
  const [selectedPlayerIds, setSelectedPlayerIds] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { config } = useGameConfigStore();
  const players = config?.players || [];
  const playersLength = players.length ?? 0;
  const [votedPlayers, setVotedPlayers] = useState(
    players.map((p) => ({ id: p.id, name: p.name, votedCount: 0 })) || [],
  );
  const [voteCount, setVoteCount] = useState(0);

  const selectedPlayerNames = (() => {
    const names =
      config?.players
        .filter((p) => selectedPlayerIds.includes(p.id))
        .map((p) => p.name) || [];

    if (names.length === 0) return "";
    if (names.length === 1) return names[0];

    return `${names.slice(0, -1).join(", ")} နဲ့ ${names[names.length - 1]}`;
  })();

  const imposterCount = config?.gameSetting.imposterCount ?? 1;

  const toggleSelectPlayer = (id: string) => {
    setSelectedPlayerIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((p) => p !== id);
      }

      // limit selection to imposterCount
      if (prev.length >= (config?.gameSetting.imposterCount ?? 1)) {
        return prev;
      }

      return [...prev, id];
    });
  };

  const handleVoteClick = useCallback(() => {
    if (selectedPlayerIds.length === imposterCount) setIsModalOpen(true);
  }, [selectedPlayerIds, imposterCount]);

  const confirmVote = useCallback(() => {
    if (!selectedPlayerIds.length || playersLength <= 0) return;
    if (voteCount > playersLength) return;

    setIsModalOpen(false);
    setVotedPlayers((prev) =>
      prev.map((p) =>
        selectedPlayerIds.includes(p.id)
          ? { ...p, votedCount: p.votedCount + 1 }
          : p,
      ),
    );

    setSelectedPlayerIds([]);

    const nextVoteCount = voteCount + 1;
    setVoteCount(nextVoteCount);
    if (nextVoteCount === playersLength) {
      setIsLoading(true);
    }
  }, [playersLength, selectedPlayerIds, voteCount]);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        const sorted = [...votedPlayers].sort(
          (a, b) => b.votedCount - a.votedCount,
        );
        const imposterCount = config?.gameSetting.imposterCount ?? 1;

        const topVoted = sorted.slice(0, imposterCount);

        const routeState: VotingRouteState = {
          votedFor: topVoted.map((p) => p.id),
        };

        navigate("/result", { state: routeState });
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isLoading, navigate, votedPlayers, config]);

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
              ဘယ်သူ{imposterCount > 1 ? `တွေ` : ``}က Imposter{" "}
              {imposterCount > 1 ? `တွေ` : ``}လဲ
            </h1>
            <p className={"text-xl lg:text-3xl opacity-80"}>
              {imposterCount > 1
                ? `သံသယအရှိဆုံး ${imposterCount} ယောက်ကိုရွေးပါ`
                : `သံသယအရှိဆုံး တစ်ယောက်ကို ရွေးပါ။`}
            </p>
            <div className="flex">
              <h1 className={"text-xl md:text-2xl  "}>
                လက်ရှိ vote ရန်အလှည့်ကျသူ :
              </h1>
              <span className={"ml-1 text-xl lg:text-3xl opacity-80"}>
                {players[voteCount].name}
              </span>
            </div>
          </div>

          <div className="w-full flex justify-center py-4">
            <VotingPlayerCard
              players={
                players.filter((u) => u.id !== players[voteCount].id) || []
              }
              selectedPlayerIds={selectedPlayerIds}
              onSelect={toggleSelectPlayer}
            />
          </div>

          <div className={"mt-auto lg:mt-8 w-full lg:max-w-xl"}>
            <Button
              disabled={selectedPlayerIds.length !== imposterCount}
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
            playerName={selectedPlayerNames || ""}
          />
        </>
      )}
    </main>
  );
};
export default VotingPage;
