import { useEffect, useState } from "react";

import { APP_CONFIG } from "@/app/config/app-config.ts";
import ConfirmModal from "@/components/ui/confirm-modal.tsx";
import BottomSection from "@/features/role-reveal/components/bottom-section.tsx";
import RoleCard from "@/features/role-reveal/components/role-card.tsx";
import TopSection from "@/features/role-reveal/components/top-section.tsx";
import type { GameConfig, Player } from "@/types/game.type.ts";
import { useNavigate } from "react-router-dom";

import { GameConfigNotFound } from "@/features/role-reveal/components/game-config-not-found.tsx";
import InstructionText from "@/features/role-reveal/components/instruction-text.tsx";
import NextPlayerCountdown from "@/features/role-reveal/components/next-player-countdown.tsx";
import { useRoleReveal } from "@/features/role-reveal/hooks/use-role-reveal.ts";
import { getGameConfig } from "@/features/role-reveal/utils/get-game-config.ts";
import { shuffleArray } from "@/lib/shuffle.ts";
import { useGameConfigStore } from "@/stores/game-config-store";



const shuffledImages = shuffleArray(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"])
export default function RoleRevealPage() {
  const navigate = useNavigate();
  const updateGameConfig = useGameConfigStore(s => s.updateGameConfig);
  const [gameConfig] = useState(getGameConfig);


  const { gameMode, word, question, imposterId } = gameConfig as GameConfig;

  const [players, setPlayers] = useState<Player[]>(gameConfig?.players ?? []);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);
  const [showNextPlayerCountdown, setShowNextPlayerCountdown] =
    useState<boolean>(false);

  const revealContent = gameMode === "word" ? word?.text : question?.text;
  const revealImageId = gameMode === "word" ? word?.imageId : question?.imageId;
  const hint = gameMode === "word" ? word?.hint : question?.hint;

  const {
    currentPlayer,
    nextPlayer,
    currentPlayerIndex,
    revealed,
    confirmed,
    showBlur,
    timeLeft,
    isResettingProgressBar,
    cardRef,
    handleClickCard,
    handleReveal,
    handleConfirm,
    goToNextPlayer,
  } = useRoleReveal({
    players: players,
  });

  useEffect(() => {
    const updatedPlayers = players.map((p, i) => ({
      ...p,
      imageId: shuffledImages[i % shuffledImages.length],
    }));

    setPlayers(updatedPlayers);
    updateGameConfig({ players: updatedPlayers });
  }, []);

  const handleNextPlayerCountDownDone = () => {
    setShowNextPlayerCountdown(false);
    goToNextPlayer();
  };

  if (gameConfig == null) {
    return <GameConfigNotFound />;
  }
  return (
    <div className="min-h-[97vh] bg-black text-white flex flex-col items-center justify-between px-4 py-5">
      <TopSection
        timeLeft={timeLeft}
        isResettingProgressBar={isResettingProgressBar}
        handleClickBack={() => setShowExitModal(true)}
      />
      <p className="text-center text-sm md:text-lg text-gray-300">
        အမျိုးအစား - {gameConfig.category?.name}
      </p>
      <RoleCard
        currentPlayer={currentPlayer}
        revealed={revealed}
        showBlur={showBlur}
        confirmed={confirmed}
        cardRef={cardRef}
        timeLeft={timeLeft}
        handleClickCard={handleClickCard}
        handleReveal={handleReveal}
        revealContent={revealContent ?? ""}
        revealImageId={revealImageId ?? ""}
        imposterId={imposterId!!}
        imposterCanGetHint={gameConfig.gameSetting.canImposterGetHint}
        hint={hint ?? ""}
      />

      <InstructionText confirmed={confirmed} />

      <BottomSection
        currentPlayerIndex={currentPlayerIndex}
        playersLength={gameConfig.players.length}
        nextPlayerName={nextPlayer?.name || ""}
        confirmed={confirmed}
        revealed={revealed}
        timeLeft={timeLeft}
        handleConfirm={handleConfirm}
        handleClickNext={() => setShowNextPlayerCountdown(true)}
      />

      <ConfirmModal
        open={showExitModal}
        title="ထွက်မှာသေချာပြီလား"
        description="အခုထွက်လိုက်ရင် ကစားလက်စပွဲစဉ် ပျက်သွားပါလိမ့်မယ်"
        confirmText="ထွက်မယ်"
        cancelText="ဆက်ကစားမယ်"
        onConfirm={() => navigate(APP_CONFIG.GAME_SETTING)}
        onClose={() => setShowExitModal(false)}
      />

      {showNextPlayerCountdown && (
        <NextPlayerCountdown
          nextPlayer={nextPlayer}
          onDone={handleNextPlayerCountDownDone}
        />
      )}
    </div>
  );
}
