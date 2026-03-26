import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

import TopSection from "@/features/role-reveal/components/top-section.tsx";
import RoleCard from "@/features/role-reveal/components/role-card.tsx";
import InstructionText from "@/features/role-reveal/components/instruction-text.tsx";
import BottomSection from "@/features/role-reveal/components/bottom-section.tsx";
import ExitModal from "@/features/role-reveal/components/exit-modal.tsx";

import avatar1 from "@/assets/svg/role-reveal-screen/Avatar1.svg";
import avatar2 from "@/assets/svg/role-reveal-screen/Avatar2.svg";
import avatar3 from "@/assets/svg/role-reveal-screen/Avatar3.svg";
import avatar4 from "@/assets/svg/role-reveal-screen/Avatar4.svg";
import iceCream from "@/assets/svg/role-reveal-screen/ice-cream.svg";
import type { GameConfig, Player } from "@/types/game.type.ts";
import CircularTimer from "@/components/ui/circular-timer.tsx";

const players: Player[] = [
  { id: "1", name: "Shin Thant Kyaw", imageId: avatar1 },
  { id: "2", name: "Wunna Aung", imageId: avatar2 },
  { id: "3", name: "Wai Yann Lin", imageId: avatar3 },
  { id: "4", name: "Thant Htoo Aung", imageId: avatar4 },
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
};

const question = {
  id: "2",
  text: " မန်ယူဖန်ဖြစ်ရတာဘာတွေကောင်းလည်း",
  imageId: iceCream,
};
const gameConfig: GameConfig = {
  id: "1",
  players,
  gameMode: "question",
  category,
  gameSetting,
  word,
  question,
  roundCount: 3,
  imposterId: "3",
};

export default function RoleRevealPage() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isResettingProgressBar, setIsResettingProgressBar] = useState(false);

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const [showBlur, setShowBlur] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const [showExitModal, setShowExitModal] = useState(false);
  const [showNextCountdown, setShowNextCountdown] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const currentPlayer = players[currentPlayerIndex];
  const nextPlayer = players[currentPlayerIndex + 1];

  const { gameMode, word, question, imposterId } = gameConfig;
  const revealImageId = gameMode === "word" ? word?.imageId : question?.imageId;
  const revealContent = gameMode === "word" ? word?.text : question?.text;

  const handleClickCard = () => {
    if (timeLeft <= 0 || revealed || showBlur || confirmed) return;
    setShowBlur(true);
  };

  const handleReveal = () => {
    setShowBlur(false);
    setRevealed(true);
    if (cardRef.current) {
      animate(cardRef.current, {
        rotateY: [90, 0],
        opacity: [0, 1],
        duration: 400,
      });
    }
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setRevealed(false);
    setShowBlur(false);
  };

  const handleNextPlayerCountdownDone = () => {
    setShowNextCountdown(false);

    setIsResettingProgressBar(true);
    setCurrentPlayerIndex((currentIndex) => currentIndex + 1);
    setTimeLeft(10);
    setRevealed(false);
    setShowBlur(false);
    setConfirmed(false);

    setTimeout(() => setIsResettingProgressBar(false), 50);
  };

  //timer for progress bar
  useEffect(() => {
    if (timeLeft <= 0) {
      if (!confirmed) {
        setConfirmed(true);
        setRevealed(false);
        setShowBlur(false);
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((time) => time - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, confirmed]);

  return (
    <div className="min-h-[97vh] bg-black text-white flex flex-col justify-between px-4 py-5 md:py-10 md:px-8 lg:py-1">
      <div className="w-full md:max-w-175 lg:max-w-150 mx-auto flex flex-col flex-1 justify-between">
        <TopSection
          timeLeft={timeLeft}
          isResettingProgressBar={isResettingProgressBar}
          handleClickBack={() => setShowExitModal(true)}
        />

        <div className="flex-1 flex items-center justify-center py-4 md:py-6 lg:py-2">
          <div className="w-full flex flex-col items-center gap-6 lg:gap-3">
            <p className="text-center text-sm md:text-lg text-gray-300">
              အမျိုးအစား - {gameConfig.category?.name}
            </p>

            <RoleCard
              currentPlayer={currentPlayer}
              revealContent={revealContent ?? ""}
              revealImageId={revealImageId ?? ""}
              imposterId={imposterId!!}
              revealed={revealed}
              showBlur={showBlur}
              confirmed={confirmed}
              cardRef={cardRef}
              timeLeft={timeLeft}
              handleClickCard={handleClickCard}
              handleReveal={handleReveal}
            />

            <InstructionText confirmed={confirmed} />
          </div>
        </div>

        <BottomSection
          currentPlayerIndex={currentPlayerIndex}
          playersLength={players.length}
          nextPlayerName={nextPlayer ? nextPlayer.name : ""}
          confirmed={confirmed}
          revealed={revealed}
          timeLeft={timeLeft}
          handleConfirm={handleConfirm}
          handleClickNext={() => setShowNextCountdown(true)}
        />

        {showExitModal && <ExitModal onClose={() => setShowExitModal(false)} />}
        {showNextCountdown && (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white z-50">
            <p className="mb-10 text-center text-sm md:text-lg lg:text-xl text-white/80">
              ဖုန်းကို {nextPlayer.name} ဆီ ကမ်းပေးပါ။
            </p>
            <CircularTimer
              totalTime={3}
              onComplete={handleNextPlayerCountdownDone}
            />
          </div>
        )}
      </div>
    </div>
  );
}
