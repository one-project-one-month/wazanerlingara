import { APP_CONFIG } from "@/app/config/app-config";
import logoImage from "@/assets/svg/logo.svg";
import gameSetUpImage from "@/assets/svg/onboarding-1.svg";
import playIcon from "@/assets/svg/play-icon.svg";
import questionMarkIcon from "@/assets/svg/question-mark-icon.svg";
import settingIcon from "@/assets/svg/setting.svg";
import wordMarkImage from "@/assets/svg/wazanerlingara.svg";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import SetupPageSetting from "../components/setup-page-settings";
import { useGameConfigStore } from "@/stores/game-config-store";

export default function SetupPage() {
  const { config, setGameConfig } = useGameConfigStore();
  const navigate = useNavigate();

  const handleStartGame = () => {
    if (!config) {
      setGameConfig({
        id: crypto.randomUUID(),
        players: [],
        gameMode: "word",
        gameSetting: {
          imposterCount: 1,
          turnTimer: 5,
          durationTimer: 120,
          canImposterGetHint: false,
        },
        word: null,
        question: null,
        roundCount: 1,
        imposterIds: null,
        previousWordId: null,
        previousQuestionId: null,
        previousImposterId: null,
      });
    }

    navigate(APP_CONFIG.GAME_START);
  };

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto bg-black text-white lg:overflow-hidden">
      <div className="grid min-h-full w-full grid-cols-1 divide-y divide-white/10 lg:h-full lg:grid-cols-[35%_65%] lg:divide-x lg:divide-y-0 py-4 px-2 lg:px-6">
        {/* Left */}
        <section className="hidden lg:flex flex-col px-5 pb-8 pt-6 sm:px-7 lg:px-8 lg:pt-14">
          <div className="mb-8 flex items-center sm:mb-10">
            <img
              src={logoImage}
              alt="Wazanerlingara-logo"
              className="h-10 w-10 rounded-xl sm:h-14 sm:w-14"
            />
            <img
              src={wordMarkImage}
              alt="ဝစနာလက်ာရ"
              className="h-10 w-auto sm:h-16"
            />
          </div>

          <SetupPageSetting />

          <p className="mt-8 text-center text-xl lg:mt-auto">v 0.0.1</p>
        </section>

        {/* Right */}
        <section className="flex min-h-[56vh] flex-col px-4 pb-6 pt-4 sm:px-8 lg:min-h-0 lg:px-18 lg:pb-8 lg:pt-5 lg:border-l">
          <div className="flex justify-end lg:hidden">
            <button
              type="button"
              onClick={() => navigate("/setting")}
              className="cursor-pointer"
            >
              <img src={settingIcon} alt="setting-icon" />
            </button>
          </div>
          <div className="relative flex flex-1 items-center justify-center overflow-hidden">
            <img
              src={gameSetUpImage}
              alt="Game onboarding characters"
              className="relative z-10 h-auto min-w-60 max-w-96"
            />
          </div>

          <div className="mx-auto items-center grid w-full max-w-full grid-cols-1 gap-4 lg:grid-cols-2">
            <Button
              className="h-18 flex items-center justify-center text-2xl tracking-wide"
              onClick={handleStartGame}
            >
              <span className="inline-flex items-center gap-2">
                <img src={playIcon} alt="play-icon" className="size-8" />
                <span>စကစားကြမယ်</span>
              </span>
            </Button>

            <Button
              variant="outline"
              className="h-18 flex items-center justify-center text-2xl tracking-wide"
            >
              <span className="inline-flex items-center gap-2">
                <img
                  src={questionMarkIcon}
                  alt="help-icon"
                  className="size-8"
                />
                <span>ဘယ်လိုကစားရမလဲ?</span>
              </span>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
