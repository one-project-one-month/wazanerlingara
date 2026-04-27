import CircularTimer from "@/components/ui/circular-timer";
import { useAppNavigation } from "@/lib/use-app-navigation";
import { useTimer } from "@/lib/use-timer";
import { useGameConfigStore } from "@/stores/game-config-store";

const GamePlayLoading = () => {
  const gameType = useGameConfigStore(s => s.config?.gameSetting.gameType);
  const { goTo } = useAppNavigation();
  const { totalTime, timeLeft } = useTimer(5, false, () => goTo(`/game-play/${gameType === "turnTimer" ? "turn-timer" : "duration-timer"}`));

  return (


    <section className="w-full h-dvh flex flex-col justify-center items-center overflow-hidden">

      <h3 className="mb-2.5">ဂိမ်းစတင်ပါတော့မယ် ...</h3>
      <CircularTimer
        totalTime={totalTime}
        timeLeft={timeLeft}
      />


    </section>

  )
}

export default GamePlayLoading