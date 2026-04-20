import { APP_CONFIG } from "@/app/config/app-config";
import { Button } from "@/components/ui/button";
import CircularTimer from "@/components/ui/circular-timer";
import { useAppNavigation } from "@/lib/use-app-navigation";
import { useTimer } from "@/lib/use-timer";
import { useGameConfigStore } from "@/stores/game-config-store";
import { useState } from "react";
import ExitButton from "../components/exit-btn";

const GamePlayPage = () => {
  const config = useGameConfigStore(s => s.config)
  const [playerIndex, setPlayerIndex] = useState(0);
  const lastRound = config?.players.length === playerIndex + 1;

  const handleNextPlayer = () => {
    if (playerIndex < (config?.players.length || 0) - 1) {
      setPlayerIndex(playerIndex + 1);
      reset()
    }
  }

  const {
    totalTime,
    timeLeft,
    reset } = useTimer(config?.gameSetting.turnTimer || 10, false, handleNextPlayer);
  const { goTo } = useAppNavigation();

  return (

    <div className="max-w-7xl h-screen relative mx-auto py-6 flex flex-col ">

      <ExitButton />


      <div className="flex flex-col items-center gap-4 my-14 ">

        <div className="flex items-center gap-2">
          <h3 className="font-bold">အမျိုးအစား:</h3>
          <span>အစားအသောက်</span>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="font-bold">Imposter အရေအတွက်:</h3>
          <span>(၁) ယောက်</span>
        </div>
        <div className="flex items-center gap-2">
          <h3 className="font-bold">လက်ရှိ အလှည့်ကျသူ:</h3>
          <span>{config?.players[playerIndex].name}</span>
        </div>
      </div>
      <CircularTimer totalTime={totalTime} timeLeft={timeLeft} />



      <div className="mt-auto w-full max-w-xl mx-auto space-y-4 ">
        {
          !lastRound && <p className="text-center text-sm text-muted-foreground ">
            ပြောပြီးတာနဲ့ နောက်တစ်ယောက်အလှည့် ({config?.players[playerIndex + 1].name})အတွက် ခလုတ်ကို နှိပ်ပါ။
          </p>
        }

        {
          lastRound
            ? <Button
              variant="default"
              className="w-full px-1.5"
              onClick={() => goTo(APP_CONFIG.VOTING)}

            >
              မဲပေးမယ်
            </Button>
            : <Button
              variant="default"
              className="w-full px-1.5"
              onClick={handleNextPlayer}
            >
              နောက်တစ်ယောက်
            </Button>
        }


      </div>

    </div >
  );
};

export default GamePlayPage;