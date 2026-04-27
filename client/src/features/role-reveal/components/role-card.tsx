import viewButton from "@/assets/svg/ViewButton.svg";
import { useGameImageStore } from "@/stores/game-image-store";
import type { Player } from "@/types/game.type.ts";
import { animate } from "animejs";
import { type RefObject, useEffect, useState } from "react";

interface Props {
  currentPlayer: Player;
  revealContent: string;
  revealImageId?: string;
  imposterId: string;
  imposterCanGetHint: boolean;
  hint: string;
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
  revealContent,
  revealImageId,
  imposterId,
  imposterCanGetHint,
  hint,
  revealed,
  showBlur,
  confirmed,
  cardRef,
  timeLeft,
  handleClickCard,
  handleReveal,
}: Props) {
  const getUrl = useGameImageStore(s => s.getImageUrl);
  const [playerAvatarUrl, setPlayerAvatarUrl] = useState<string | undefined>(
    undefined,
  );

  const isDisabled = timeLeft <= 0 || confirmed;

  useEffect(() => {
    const imageId = currentPlayer.imageId ?? "1";
    const playerAvatarUrl = getUrl(imageId);
    setPlayerAvatarUrl(playerAvatarUrl);

    const cardEl = cardRef.current;
    if (cardEl)
      animate(cardEl, {
        rotateY: [90, 0],
        opacity: [0, 1],
        duration: 800,
      });
  }, [currentPlayer.id, currentPlayer.imageId, cardRef, getUrl]);

  return (
    <div
      key={currentPlayer.id}
      role="button"
      tabIndex={isDisabled ? -1 : 0}
      aria-disabled={isDisabled}
      onClick={() => {
        if (isDisabled) return;
        handleClickCard();
      }}
      onKeyDown={(e) => {
        if (isDisabled) return;
        if (e.key === "Enter") handleClickCard();
      }}
      className={`
        relative
        w-65 h-90
        md:w-95 md:h-130
        lg:w-60 lg:h-75
        rounded-[30px]
        flex items-center justify-center
        ${isDisabled
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
        <div ref={cardRef} className="  flex flex-col items-center">
          {!revealed && (
            <>
              {playerAvatarUrl ? (
                <img
                  loading={"lazy"}
                  src={playerAvatarUrl}
                  alt="avatar"
                  className="w-40 h-40 md:w-50 md:h-50 object-contain mb-5"
                />
              ) : (
                <h2>Loading Image...</h2>
              )}
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
                    ? getUrl("imposter")
                    : (revealImageId ?? "")
                }
                alt="wordOrImposterImg"
                className="w-50 h-50  object-contain mb-5"
              />
              <h2
                className={`text-2xl text-center md:text-3xl font-semibold ${currentPlayer.id === imposterId
                  ? "text-red-500"
                  : "text-white"
                  }`}
              >
                {currentPlayer.id === imposterId ? "Imposter" : revealContent}
              </h2>
              {currentPlayer.id === imposterId && imposterCanGetHint
                ? `hint- ${hint}`
                : ""}
            </>
          )}
        </div>

        {showBlur && !revealed && (
          <button
            type={"button"}
            tabIndex={0}
            onClick={(event) => {
              event.stopPropagation();
              handleReveal();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.stopPropagation();
                handleReveal();
              }
            }}
            className="absolute inset-0 backdrop-blur-2xl z-130 flex items-center justify-center"
          >
            <div className="absolute inset-0 backdrop-blur-xl bg-white/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),rgba(0,0,0,0.6))]" />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay " />

            <img src={viewButton} alt="view" />
          </button>
        )}
      </div>
    </div>
  );
}
