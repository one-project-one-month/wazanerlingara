import { Button } from "@/components/ui/button";
import CircularTimer from "@/components/ui/circular-timer";
import { useAppNavigation } from "@/lib/use-app-navigation";

const GamePlayPage = () => {

  const {goTo}=useAppNavigation();

  return (

    <div className="flex flex-col h-screen w-full items-center p-4 gap-y-6">
      
      <div className="flex justify-end w-full">
        <Button variant="outline" className="text-4xl">X</Button>
      </div>

 
      <div className="flex flex-col items-center gap-y-2">
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
          <span>ဘူးသီး</span>
        </div>
      </div>

      <CircularTimer totalTime={20} />


      <div className="mt-auto w-full flex flex-col items-center gap-4 pb-6">
        <span className="text-center text-sm text-muted-foreground">
          ပြောပြီးတာနဲ့ နောက်တစ်ယောက်အလှည့် (ဂေါ်လီ)အတွက် ခလုတ်ကို နှိပ်ပါ။
        </span>
        <Button variant="default" className="w-full px-1.5" onClick={()=>goTo('/game-play/duration-timer')}>
          နောက်တစ်ယောက်
        </Button>
      </div>

    </div>
  );
};

export default GamePlayPage;