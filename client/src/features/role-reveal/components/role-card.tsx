import { type RefObject } from "react";
import viewButton from "@/assets/svg/role-reveal-screen/ViewButton.svg";
import imposterPic from "@/assets/svg/role-reveal-screen/ImposterPic.svg";
import type { Player, Word } from "@/types/game.type.ts";

interface Props {
  currentPlayer: Player;
  word: Word;
  showBlur: boolean;
  revealed: boolean;
  confirmed: boolean;
  cardRef: RefObject<HTMLDivElement | null>;
  timeLeft: number;
  handleClickCard: () => void;
  handleReveal: (e?: React.MouseEvent) => void;
}

export default function RoleCard({
  currentPlayer,
  word,
  revealed,
  showBlur,
  confirmed,
  cardRef,
  timeLeft,
  handleClickCard,
  handleReveal,
}: Props) {
  const imposterId = "2";

  return (
    <div
      key={currentPlayer.id}
      onClick={handleClickCard}
      className={`
        relative
        w-65 h-90
        md:w-95 md:h-130
        lg:w-60 lg:h-75
        rounded-[30px]
        flex items-center justify-center
        ${
          timeLeft <= 0 || confirmed
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        }
      `}
    >
      {/*{glowing borders}*/}
      <div className="absolute inset-0 rounded-4xl pointer-events-none z-0 shadow-[0_0_60px_rgba(255,255,255,0.25)]" />
      <div className="absolute inset-0 rounded-4xl border-[3px] border-white/60 z-10" />
      <div className="absolute inset-2 rounded-[26px] border-2 border-white/40 z-10" />

      <div className="absolute inset-3 rounded-3xl bg-black z-20 flex items-center justify-center overflow-hidden">
        <div ref={cardRef} className="flex flex-col items-center">
          {!revealed && (
            <>
              <img
                src={currentPlayer.imageId ?? ""}
                alt="avatar"
                className="w-30 h-30 md:w-44 md:h-44 object-contain mb-5"
              />
              <p className="text-[16px] md:text-lg text-white/90">
                {currentPlayer.name}
              </p>
            </>
          )}

          {revealed && (
            <>
              <img
                src={
                  currentPlayer.id === imposterId
                    ? imposterPic
                    : (word.imageId ?? "")
                }
                alt="wordOrImposterImg"
                className="w-30 h-30 md:w-44 md:h-44 object-contain mb-5"
              />
              <h2
                className={`text-2xl md:text-3xl font-semibold ${
                  currentPlayer.id === imposterId
                    ? "text-red-500"
                    : "text-white"
                }`}
              >
                {currentPlayer.id === imposterId ? "Imposter" : word.text}
              </h2>
            </>
          )}
        </div>

        {showBlur && !revealed && (
          <div
            onClick={(event) => {
              event.stopPropagation();
              handleReveal();
            }}
            className="absolute inset-0 backdrop-blur-2xl z-130 flex items-center justify-center"
          >
            <div className="absolute inset-0 backdrop-blur-xl bg-white/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),rgba(0,0,0,0.6))]" />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay " />

            <img src={viewButton} alt="view" />
          </div>
        )}
      </div>
    </div>
  );
}
