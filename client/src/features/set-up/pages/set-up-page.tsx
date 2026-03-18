import { Button } from "@/components/ui/button";
import gameSetUpImage from "@/assets/svg/onboarding-1.svg";
import logoImage from "@/assets/svg/logo.svg";
import wordMarkImage from "@/assets/svg/wazanerlingara.svg";
import playIcon from "@/assets/svg/play-icon.svg";
import questionMarkIcon from "@/assets/svg/question-mark-icon.svg";
import SetupPageSetting from "../components/setup-page-settings";
import { useNavigate } from "react-router-dom";
import { APP_CONFIG } from "@/app/config/app-config";

export default function SetupPage() {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-10 overflow-y-auto bg-black text-white lg:overflow-hidden">
      <div className="grid min-h-full w-full grid-cols-1 divide-y divide-white/10 lg:h-full lg:grid-cols-[35%_65%] lg:divide-x lg:divide-y-0">
        {/* Left */}
        <section className="hidden md:flex flex-col px-5 pb-8 pt-6 sm:px-7 lg:px-8 lg:pt-14">
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
        <section className="flex min-h-[56vh] flex-col px-4 pb-6 pt-4 sm:px-8 lg:min-h-0 lg:px-18 lg:pb-8 lg:pt-5 border-l">
          <div className="relative flex flex-1 items-center justify-center overflow-hidden">
            <img
              src={gameSetUpImage}
              alt="Game onboarding characters"
              className="relative z-10 h-auto min-w-60 max-w-96"
            />
          </div>

          <div className="mx-auto grid w-full max-w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <Button
              className="h-20 text-lg font-semibold tracking-wide sm:text-2xl"
              onClick={() => navigate(APP_CONFIG.GAME_START)}
            >
              <span className="inline-flex items-center gap-3">
                {/* <PlayIcon /> */}
                <img src={playIcon} alt="play-icon" className="size-10" />
                <span>စကစားကြမယ်</span>
              </span>
            </Button>

            <Button
              variant="outline"
              className="h-20 border-2 border-netural-700 bg-black text-lg font-semibold tracking-wide text-netural-100 hover:border-netural-500 sm:text-2xl"
            >
              <span className="inline-flex items-center gap-3">
                <img
                  src={questionMarkIcon}
                  alt="help-icon"
                  className="size-10"
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
