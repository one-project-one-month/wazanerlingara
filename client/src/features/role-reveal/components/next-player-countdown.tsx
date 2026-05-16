import CircularTimer from "@/components/ui/circular-timer.tsx";
import { useTimer } from "@/lib/use-timer";
import type { Player } from "@/types/game.type.ts";

export default function NextPlayerCountdown({
  nextPlayer,
  onDone,
}: {
  nextPlayer: Player;
  onDone: () => void;
}) {
  const { totalTime, timeLeft } = useTimer(3, false, onDone);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <p className="mb-10 text-center text-white/80">
        ဖုန်းကို {nextPlayer.name} ဆီ ကမ်းပေးပါ။
      </p>

      <CircularTimer totalTime={totalTime} timeLeft={timeLeft} formatTime={false} />
    </div>
  );
}
