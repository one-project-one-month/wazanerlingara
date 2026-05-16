import { APP_CONFIG } from "@/app/config/app-config"
import { Button } from "@/components/ui/button"
import CircularTimer from "@/components/ui/circular-timer"
import { useAppNavigation } from "@/lib/use-app-navigation"
import { useTimer } from "@/lib/use-timer"
import { useGameConfigStore } from "@/stores/game-config-store"
import ExitButton from "../components/exit-btn"

const DurationTimer = () => {

  const config = useGameConfigStore(s => s.config)
  const { goTo } = useAppNavigation();
  const {
    totalTime,
    timeLeft,
    isPaused,
    togglePause } = useTimer(
      config?.gameSetting.durationTimer || 0,
      false,
      () => goTo(APP_CONFIG.VOTING));


  return (
    <div className="max-w-7xl h-screen relative mx-auto py-6 flex flex-col  ">

      <ExitButton />


      <div className="flex flex-col items-center gap-4 my-14 ">
        <div className="flex items-center gap-2">
          <h3 className="font-bold">အမျိုးအစား:</h3>
          <span>{config?.category?.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="font-bold">Imposter အရေအတွက်:</h3>
          <span>(၁) ယောက်</span>
        </div>

      </div>
      <CircularTimer totalTime={totalTime} timeLeft={timeLeft} isPaused={isPaused} />


      {
        isPaused
          ? <div className="mt-auto w-full max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <Button variant="default" className="px-1.5 " onClick={() => goTo(APP_CONFIG.VOTING)}>
              မဲပေးမယ်
            </Button>
            <Button variant="outline" className="px-1.5 " onClick={() => togglePause()}>
              ကစားမယ်
            </Button>
          </div>
          : <div className="mt-auto w-full gap-4 max-w-xl mx-auto">
            <Button variant="default" className=" px-1.5 " onClick={() => togglePause()}>
              ခဏရပ်ပြီး ဆွေးနွေးမယ်
            </Button>
          </div>
      }



    </div >
  )
}

export default DurationTimer