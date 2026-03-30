import { useEffect, useState } from "react";

import TopSection from "@/features/role-reveal/components/top-section.tsx";
import RoleCard from "@/features/role-reveal/components/role-card.tsx";
import BottomSection from "@/features/role-reveal/components/bottom-section.tsx";

import avatar1 from "@/assets/svg/role-reveal-screen/Avatars/Avatar1.svg";
import avatar2 from "@/assets/svg/role-reveal-screen/Avatars/Avatar2.svg";
import avatar3 from "@/assets/svg/role-reveal-screen/Avatars/Avatar3.svg";
import avatar4 from "@/assets/svg/role-reveal-screen/Avatars/Avatar4.svg";
import avatar5 from "@/assets/svg/role-reveal-screen/Avatars/Avatar5.svg";
import avatar6 from "@/assets/svg/role-reveal-screen/Avatars/Avatar6.svg";
import avatar7 from "@/assets/svg/role-reveal-screen/Avatars/Avatar7.svg";
import avatar8 from "@/assets/svg/role-reveal-screen/Avatars/Avatar8.svg";
import avatar9 from "@/assets/svg/role-reveal-screen/Avatars/Avatar9.svg";
import avatar10 from "@/assets/svg/role-reveal-screen/Avatars/Avatar10.svg";
import avatar11 from "@/assets/svg/role-reveal-screen/Avatars/Avatar11.svg";
import avatar12 from "@/assets/svg/role-reveal-screen/Avatars/Avatar12.svg";
import avatar13 from "@/assets/svg/role-reveal-screen/Avatars/Avatar13.svg";
import avatar14 from "@/assets/svg/role-reveal-screen/Avatars/Avatar14.svg";
import avatar15 from "@/assets/svg/role-reveal-screen/Avatars/Avatar15.svg";
import avatar16 from "@/assets/svg/role-reveal-screen/Avatars/Avatar16.svg";
import avatar17 from "@/assets/svg/role-reveal-screen/Avatars/Avatar17.svg";
import avatar18 from "@/assets/svg/role-reveal-screen/Avatars/Avatar18.svg";
import avatar19 from "@/assets/svg/role-reveal-screen/Avatars/Avatar19.svg";
import avatar20 from "@/assets/svg/role-reveal-screen/Avatars/Avatar20.svg";
import avatar21 from "@/assets/svg/role-reveal-screen/Avatars/Avatar21.svg";
import avatar22 from "@/assets/svg/role-reveal-screen/Avatars/Avatar22.svg";
import avatar23 from "@/assets/svg/role-reveal-screen/Avatars/Avatar23.svg";
import avatar24 from "@/assets/svg/role-reveal-screen/Avatars/Avatar24.svg";
import iceCream from "@/assets/svg/role-reveal-screen/ice-cream.svg";
import type { GameConfig, Image, Player } from "@/types/game.type.ts";
import { useNavigate } from "react-router-dom";
import { APP_CONFIG } from "@/app/config/app-config.ts";
import ConfirmModal from "@/components/ui/confirm-modal.tsx";

import { useRoleReveal } from "@/features/role-reveal/hooks/use-role-reveal.ts";
import { shuffleArray } from "@/features/role-reveal/utils/shuffle.ts";
import NextPlayerCountdown from "@/features/role-reveal/components/next-player-countdown.tsx";
import InstructionText from "@/features/role-reveal/components/instruction-text.tsx";

const playerss: Player[] = [
  { id: "1", name: "Shin Thant Kyaw", imageId: null },
  { id: "2", name: "Wunna Aung", imageId: null },
  { id: "3", name: "Wai Yann Lin", imageId: null },
  { id: "4", name: "Thant Htoo Aung", imageId: null },
];

const category = {
  id: "1",
  name: "အစားအသောက်",
};

const gameSetting = {
  imposterCount: 1,
  turnTimer: 10,
  durationTimer: 300,
  canImposterGetHint: true,
};

const word = {
  id: "1",
  text: "ရေခဲမုန့်",
  imageId: iceCream,
  hint: "နွေရာသီ",
};

const question = {
  id: "2",
  text: " မန်ယူဖန်ဖြစ်ရတာဘယ်လိုနေလဲ?",
  imageId: iceCream,
  hint: "အရူးလင်လုပ်",
};
const gameConfig: GameConfig = {
  id: "1",
  players: playerss,
  gameMode: "question",
  category,
  gameSetting,
  word,
  question,
  roundCount: 3,
  imposterId: "3",
};

const images: Image[] = [
  { id: "1", url: avatar1, name: "Pic 1" },
  { id: "2", url: avatar2, name: "Pic 2" },
  { id: "3", url: avatar3, name: "Pic 3" },
  { id: "4", url: avatar4, name: "Pic 4" },
  { id: "5", url: avatar5, name: "Pic 5" },
  { id: "6", url: avatar6, name: "Pic 6" },
  { id: "7", url: avatar7, name: "Pic 7" },
  { id: "8", url: avatar8, name: "Pic 8" },
  { id: "9", url: avatar9, name: "Pic 9" },
  { id: "10", url: avatar10, name: "Pic 10" },
  { id: "11", url: avatar11, name: "Pic 11" },
  { id: "12", url: avatar12, name: "Pic 12" },
  { id: "13", url: avatar13, name: "Pic 13" },
  { id: "14", url: avatar14, name: "Pic 14" },
  { id: "15", url: avatar15, name: "Pic 15" },
  { id: "16", url: avatar16, name: "Pic 16" },
  { id: "17", url: avatar17, name: "Pic 17" },
  { id: "18", url: avatar18, name: "Pic 18" },
  { id: "19", url: avatar19, name: "Pic 19" },
  { id: "20", url: avatar20, name: "Pic 20" },
  { id: "21", url: avatar21, name: "Pic 21" },
  { id: "22", url: avatar22, name: "Pic 22" },
  { id: "23", url: avatar23, name: "Pic 23" },
  { id: "24", url: avatar24, name: "Pic 24" },
];

export default function RoleRevealPage() {
  const navigate = useNavigate();

  const [players, setPlayers] = useState<Player[]>(playerss);
  const [showExitModal, setShowExitModal] = useState<boolean>(false);
  const [showNextPlayerCountdown, setShowNextPlayerCountdown] =
    useState<boolean>(false);

  const { gameMode, word, question, imposterId } = gameConfig;
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
    const shuffledImages = shuffleArray(images);

    setPlayers((prev) =>
      prev.map((p, i) => ({
        ...p,
        imageId: shuffledImages[i % shuffledImages.length].url,
      })),
    );
  }, []);

  const handleNextPlayerCountDownDone = () => {
    setShowNextPlayerCountdown(false);
    goToNextPlayer();
  };

  return (
    <div className="min-h-[97vh] bg-black text-white flex flex-col items-center justify-between px-4 py-5">
      <TopSection
        timeLeft={timeLeft}
        isResettingProgressBar={isResettingProgressBar}
        handleClickBack={() => setShowExitModal(true)}
      />

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
        imposterCanGetHint={gameSetting.canImposterGetHint}
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
