import type { Player } from "@/types/game.type.ts";
import CircularTimer from "@/components/ui/circular-timer.tsx";

export default function NextPlayerCountdown({
  nextPlayer,
  onDone,
}: {
  nextPlayer: Player;
  onDone: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
      <p className="mb-10 text-center text-white/80">
        ဖုန်းကို {nextPlayer.name} ဆီ ကမ်းပေးပါ။
      </p>

      <CircularTimer totalTime={3} onComplete={onDone} />
    </div>
  );
}
