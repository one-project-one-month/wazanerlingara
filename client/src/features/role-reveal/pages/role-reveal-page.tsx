import { useEffect, useRef, useState } from "react";
import { animate } from "animejs";

import TopSection from "@/features/role-reveal/components/top-section.tsx";
import RoleCard from "@/features/role-reveal/components/role-card.tsx";
import InstructionText from "@/features/role-reveal/components/instruction-text.tsx";
import BottomSection from "@/features/role-reveal/components/bottom-section.tsx";
import ExitModal from "@/features/role-reveal/components/exit-modal.tsx";

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
import CircularTimer from "@/components/ui/circular-timer.tsx";
import { useNavigate } from "react-router-dom";
import { APP_CONFIG } from "@/app/config/app-config.ts";

const players: Player[] = [
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
  players,
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
  const [timeLeft, setTimeLeft] = useState(10);
  const [isResettingProgressBar, setIsResettingProgressBar] = useState(false);

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);

  const [showBlur, setShowBlur] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const [showExitModal, setShowExitModal] = useState(false);
  const [showNextCountdown, setShowNextCountdown] = useState(false);

  const [playersState, setPlayersState] = useState<Player[]>(players);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const currentPlayer = playersState[currentPlayerIndex];
  const nextPlayer = playersState[currentPlayerIndex + 1];

  const { gameMode, word, question, imposterId } = gameConfig;
  const revealImageId = gameMode === "word" ? word?.imageId : question?.imageId;
  const revealContent = gameMode === "word" ? word?.text : question?.text;
  const hint =
    gameMode === "word" ? (word?.hint ?? "") : (question?.hint ?? "");
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

  useEffect(() => {
    const assignRandomImagesToPlayers = () => {
      setPlayersState((prevPlayers) => {
        let shuffledImages = [...images];
        for (let i = shuffledImages.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledImages[i], shuffledImages[j]] = [
            shuffledImages[j],
            shuffledImages[i],
          ];
        }

        return prevPlayers.map((player, index) => ({
          ...player,
          imageId: shuffledImages[index % shuffledImages.length].url,
        }));
      });
    };
    assignRandomImagesToPlayers();
  }, []);

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
              imposterCanGetHint={gameSetting.canImposterGetHint}
              hint={hint}
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

        {showExitModal && (
          <ExitModal
            onConfirmExit={() => navigate(APP_CONFIG.GAME_SETTING)}
            onClose={() => setShowExitModal(false)}
          />
        )}
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
