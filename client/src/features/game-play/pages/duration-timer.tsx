import { APP_CONFIG } from "@/app/config/app-config"
import { Button } from "@/components/ui/button"
import CircularTimer from "@/components/ui/circular-timer"
import { useAppNavigation } from "@/lib/use-app-navigation"
import { useTimer } from "@/lib/use-timer"
import { useGameConfigStore } from "@/stores/game-config-store"

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
    <div className="flex flex-col h-screen w-full items-center p-4 gap-y-6">

      <div className="flex justify-end w-full">
        <Button variant="outline" className="text-4xl">X</Button>
      </div>


      <div className="flex flex-col items-center gap-y-2">
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
          ? <div className="mt-auto w-full flex  items-center gap-4 pb-6">
            <Button variant="default" className="w-full px-1.5" onClick={() => goTo(APP_CONFIG.VOTING)}>
              မဲပေးမယ်
            </Button>
            <Button variant="outline" className="w-full px-1.5" onClick={() => togglePause()}>
              ကစားမယ်
            </Button>
          </div>
          : <Button variant="default" className="w-full px-1.5 mt-auto" onClick={() => togglePause()}>
            ခဏရပ်ပြီး ဆွေးနွေးမယ်
          </Button>
      }



    </div>
  )
}

export default DurationTimer