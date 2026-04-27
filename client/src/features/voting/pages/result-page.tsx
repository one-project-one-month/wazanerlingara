import type { VotingRouteState } from "@/features/voting/pages/voting-page";
import { useGameConfigStore } from "@/stores/game-config-store.ts";
import { useCallback, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { APP_CONFIG } from "@/app/config/app-config";
import ImposterWin from "@/assets/gif/imposter-win.svg";
import TeammatesWin from "@/assets/gif/teammates-win.svg";
import HomeIcon from "@/assets/svg/home.svg";
import PlayIcon from "@/assets/svg/play-icon.svg";
import { Button } from "@/components/ui/button.tsx";
import { useAppNavigation } from "@/lib/use-app-navigation";

const teammatesTrashTalks = [
  "ဒါဘဲလေ ၅တန်းကျောင်းသားတောင် ရိပ်မိတယ်",
  "ကမ္ဘာကျော် Imposterကြီး အဖမ်းခံရပါပြီ",
  "မိပြီလေ အထာက မရှိဘူး",
  "အသေအချာ ချက်ပြုတ်ခံလိုက်ရသော Imposterကြီး ဖြစ်ပါတယ်",
  "အထာတွေက နေဝင်သွားတဲ့ Imposter ကြီး ဖြစ်ပါတယ်",
  "မိမှာပေါ့ နှဖူးမှာ စာကပ်ထားတဲ့အတိုင်းပဲ",
  "တစ်ယောက်ယောက်တော့ ဦးနှောက်ကို အိမ်မှာ မေ့ခဲ့ပုံရတယ်",
  "Imposter အစား လူရွှင်တော်လုပ်ပါလား ပိုအောင်မြင်မှာ သေချာတယ်",
  "ဆရာကြီးတော့ ဆရာကြီးပဲ (ရယ်စရာကြီး)",
  "ဆရာကြီးတော့ ဆရာကြီးပဲ (ရှက်စရာကြီး)",
  "ချက်ပြုတ်တာကတော့ ဆရာကြီးပဲ၊ ဒါပေမယ့် အချက်လွန်ပြီး ဦးနှောက်ကတော့ အိုးထဲမှာ မီးကျွမ်းသွားရှာပြီ",
  "ပိုက်ဆံပေးမယ် ဈေးထဲမှာ ဦးနှောက်သွားဝယ်ချည်",
  "၂၀၀ပေးမယ် ဦးနှောက်အစိပ်သား သွားဝယ်ချည်",
  "Error 404: Imposter's Brain Not Found!",
  "Hintပေးထားတာတောင် အဖြစ်မရှိဘူး",
  "တစ်ယောက်ယောက်ကတော့ ဦးနှောက်ကို Airplane Mode ထားပြီး ဆော့နေတာ သေချာတယ်",
  "Imposter လုပ်မယ့်အစား ဦးနှောက်ကို ပြတိုက်မှာ သွားပြလိုက်ပါ၊ 'လုံးဝ မသုံးရသေးသော ပစ္စည်း' ဆိုပြီးတော့ပေါ့",
  "ဆယ်နှစ်ကြိုးစားဖို့ မပြောနဲ့ ဦးနှောက်ကို ပါကင်ဖောက်ဖို့တောင် အချိန်ယူရဦးမယ်ထင်တယ်",
];
const imposterTrashTalks = [
  "တစ်ဖွဲ့လုံး ဆရာကျကျ ချက်ပြုတ်ခံလိုက်ရပါပြီ!",
  "Imposter ကိုမိဖို့ ဆယ်နှစ် ကြိုးစားလိုက်ဦး",
  "တစ်ဖွဲ့လုံးကို လူတွေထင်နေတာ ပြောင်းဖူးတွေ ဖြစ်နေတယ်",
  "ဦးနှောက်ကတော့ ရှယ်ပဲ... ဒါပေမယ့် အလှဆင်ဖို့ပဲ သုံးတာထင်တယ်",
  "လူကြီးမင်းတို့ရဲ့ စုံထောက်ဉာဏ်ကတော့ ကမ္ဘာ့နံပါတ်တစ်ပါပဲ (နောက်ဆုံးကနေ ရေရင်)",
  "ဒီလောက် သိသာတာကို မမိတာ တမင်လွှတ်ပေးတာလို့ပဲ ယူဆလိုက်ပါတော့မယ်",
  "တော်လိုက်တာ ဒီ‌လောက်လွဲအောင် ဘယ်လိုဖြေလဲ",
  "တော်ရုံ Skill နဲ့တော့ တက်မလာနဲ့",
  "တော်လိုက်တာ တက်တက်စင်အောင်လွဲ",
  "ဆရာကြီးတွေပါပဲ (လွဲတဲ့နေရာမှာ)",
  "အပိုတွေ လျှောက်နုတ် အထာတွေ လျှောက်ထုတ်နေတာမဟုတ်ဘူး Imposter ချက်ပြုတ်နေတာ",
  "ပါကင်မဖောက်ရသေးသော ဦးနှောက်များ ရောင်းရန်ရှိသည်",
  "တစ်ဖွဲ့လုံး ဦးနှောက်ကို အိမ်မှာ မေ့ကျန်ခဲ့ကြတာလား",
  "ကြည့်ရတာတော့... ဒီနေ့ပွဲမှာ ဦးနှောက်ပါတဲ့သူ တစ်ယောက်မှ ပါမလာဘူးထင်တယ်",
  "စုံထောက်ဉာဏ်ကတော့ WiFi Signal လိုပဲ လိုတဲ့အချိန်ဆို ပျောက်သွားတယ်",
  "တစ်ဖွဲ့လုံး ဦးနှောက်ကို Airplane Mode ထားပြီး ဆော့နေတာ သေချာတယ်",
  "Error 404: Brain Not Found!",
  "လူကြီးမင်းတို့ရဲ့ ဉာဏ်ရည်က Debug လုပ်ဖို့ လိုနေပါပြီ",
  "စုံထောက်လုပ်မယ့်အစား... ဦးနှောက်ကို ပြတိုက်မှာ သွားပြလိုက်ပါ၊ 'လုံးဝ မသုံးရသေးသော ပစ္စည်း' ဆိုပြီးတော့ပေါ့",
  "ဆယ်နှစ် ကြိုးစားဖို့ မပြောနဲ့... ဦးနှောက်ကို ပါကင်ဖောက်ဖို့တောင် အချိန်ယူရဦးမယ်ထင်တယ်",
];

const ResultPage = () => {
  const location = useLocation();
  const { goTo } = useAppNavigation();
  const { config, resetGameConfig } = useGameConfigStore();

  const state = location.state as VotingRouteState | null;
  const votedFor = state?.votedFor;
  const handlePlayAgain = useCallback(() => {
    goTo(APP_CONFIG.CHOOSE_GAME_MODE);
  }, [goTo]);

  const handleExit = useCallback(() => {
    resetGameConfig();
    goTo("/");
  }, [resetGameConfig, goTo]);

  const isTeammatesWin = votedFor === config?.imposterId;

  const randomTrashTalk = useMemo(() => {
    if (!votedFor || !config) return "";
    const list = isTeammatesWin ? teammatesTrashTalks : imposterTrashTalks;
    return list[Math.floor(Math.random() * list.length)];
  }, [isTeammatesWin, votedFor, config]);

  if (!votedFor || !config) {
    return <Navigate to="/" replace />;
  }

  const imposterPlayer = config.players.find((p) => p.id === config.imposterId);
  const imposterName = imposterPlayer?.name || "Unknown";

  const hintCategory = config.category?.name || "N/A";
  const keywordText =
    config.gameMode === "word" ? config.word?.text : config.question?.text;

  const titleText = isTeammatesWin ? "Teammates Win!" : "Imposter Win!";
  const titleColor = isTeammatesWin ? "text-success-500" : "text-red-500";
  const displaySvg = isTeammatesWin ? TeammatesWin : ImposterWin;

  return (
    <main
      className={
        "flex flex-col py-4  items-center justify-center"
      }
    >
      <div
        className={
          "flex flex-col items-center justify-center gap-8 px-4 max-w-141.5"
        }
      >
        <header className={"text-center flex flex-col gap-2"}>
          <h1 className={`text-4xl md:text-5xl ${titleColor}`}>{titleText}</h1>
          <p className={"text-base md:text-xl lg:text-2xl"}>
            {randomTrashTalk}
          </p>
        </header>
        <div className={"rounded-2xl overflow-hidden"}>
          {/*will add more GIT later*/}
          <img
            src={displaySvg}
            alt={`${titleText} GIF`}
            className={"w-72 lg:w-80 aspect-square"}
          />
        </div>
        <div className={"flex flex-col gap-1 "}>
          <p className={"text-lg md:text-2xl"}>Imposter: {imposterName}</p>
          <p className={"text-lg md:text-2xl"}>Imposter Hint: {hintCategory}</p>
          <p className={"text-lg md:text-2xl"}>
            Keyword: {keywordText || "N/A"}
          </p>
        </div>
      </div>
      <div
        className={
          "flex flex-col lg:flex-row w-full lg:items-center lg:justify-center gap-4  max-w-xl mt-6"
        }
      >
        <Button onClick={handlePlayAgain}>
          <div className={"flex items-center gap-2 justify-center lg:w-80"}>
            <img
              src={PlayIcon}
              alt={"play again icon"}
              className={"max-w-sm"}
            />{" "}
            <p className={"text-xl"}>နောက်တစ်ပွဲဆော့မယ်</p>
          </div>
        </Button>
        <Button variant={"outline"} onClick={handleExit}>
          <div className={"flex items-center gap-2 justify-center lg:w-80"}>
            <img src={HomeIcon} alt={"Home icon"} className={"max-w-sm"} />{" "}
            <p className={"text-xl"}>ထွက်မယ်</p>
          </div>
        </Button>
      </div>
    </main>
  );
};
export default ResultPage;
