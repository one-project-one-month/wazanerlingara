import { useRef } from "react";
import { animate } from "animejs";
import viewButton from "@/assets/svg/role-reveal-screen/ViewButton.svg";

type Props = {
  currentPlayer: number;
  player: any;
  current: any;
  revealed: boolean;
  showBlur: boolean;
  confirmed: boolean;
  timeLeft: number;
  onCardClick: () => void;
  onReveal: (e?: React.MouseEvent) => void;
};

export default function RoleCard({
  currentPlayer,
  player,
  current,
  revealed,
  showBlur,
  confirmed,
  timeLeft,
  onCardClick,
  onReveal,
}: Props) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleRevealInternal = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();

    onReveal(e);

    if (cardRef.current) {
      animate(cardRef.current, {
        rotateY: [90, 0],
        opacity: [0, 1],
        duration: 400,
      });
    }
  };

  return (
    <div
      key={currentPlayer}
      onClick={onCardClick}
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
      <div className="absolute inset-0 rounded-4xl pointer-events-none z-0 shadow-[0_0_60px_rgba(255,255,255,0.25)]" />
      <div className="absolute inset-0 rounded-4xl border-[3px] border-white/60 z-10" />
      <div className="absolute inset-2 rounded-[26px] border-2 border-white/40 z-10" />

      <div className="absolute inset-3 rounded-3xl bg-black z-20 flex items-center justify-center overflow-hidden">
        <div ref={cardRef} className="flex flex-col items-center">
          {!revealed && (
            <>
              <img
                src={player.avatar}
                alt="avatar"
                className="w-30 h-30 md:w-44 md:h-44 object-contain mb-5"
              />
              <p className="text-[16px] md:text-lg text-white/90">
                {player.name}
              </p>
            </>
          )}

          {revealed && (
            <h2
              className={`text-2xl md:text-3xl font-semibold ${
                current.role === "Imposter" ? "text-red-500" : "text-white"
              }`}
            >
              {current.role === "Imposter" ? "Imposter" : current.word}
            </h2>
          )}
        </div>

        {showBlur && !revealed && (
          <div
            onClick={handleRevealInternal}
            className="absolute inset-0 backdrop-blur-2xl z-130 flex items-center justify-center"
          >
            <div className="absolute inset-0 backdrop-blur-xl bg-white/5" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),rgba(0,0,0,0.6))]" />
            <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <img src={viewButton} alt="view" />
          </div>
        )}
      </div>
    </div>
  );
}
