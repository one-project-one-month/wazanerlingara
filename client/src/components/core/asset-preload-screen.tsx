import Progress from "@/components/ui/progress";
import { useGameImageStore } from "@/stores/game-image-store";

export default function AssetPreloadScreen() {
  const progress = useGameImageStore((s) => s.progress);
  const pct = Math.round(progress * 100);

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center gap-6 bg-black px-8 text-white">
      <p className="text-lg font-medium tracking-wide text-white/90">Loading assets…</p>
      <div className="w-full max-w-sm space-y-2">
        <Progress value={pct} max={100} />
        <p className="text-center text-sm text-white/60">{pct}%</p>
      </div>
    </div>
  );
}
