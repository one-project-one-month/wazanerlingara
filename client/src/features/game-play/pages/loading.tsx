import CircularTimer from "@/components/ui/circular-timer";
import { useAppNavigation } from "@/lib/use-app-navigation";
import { useGameConfigStore } from "@/stores/game-config-store";

const GamePlayLoading = () => {
  const gameType = useGameConfigStore(s => s.config?.gameSetting.gameType);
  const { goTo } = useAppNavigation();

  return (


    <section className="w-full h-dvh flex flex-col justify-center items-center overflow-hidden">

      <h3 className="mb-2.5">ဂိမ်းစတင်ပါတော့မယ် ...</h3>
      <CircularTimer
        totalTime={5}
        onComplete={() => goTo(`/game-play/${gameType === "turnTimer" ? "turn-timer" : "duration-timer"}`)}
      />


    </section>

  )
}

export default GamePlayLoading