import { APP_CONFIG } from "@/app/config/app-config";
import chat from "@/assets/svg/chat-bubble.svg";
import magnify from "@/assets/svg/magnify.svg";
import BackButton from "@/components/common/back-button";
import { Button } from "@/components/ui/button";
import { useGameSettingStore } from "@/stores/game-setting-store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type GameType = "WORDS" | "Q&A";

const GAME_TYPES = [
  {
    type: "WORDS ",
    title: "စကားလုံးဂိမ်း",
    description: "လျှို့ဝှက်စကားလုံး မသိတဲ့သူကို ရှာမယ်",
    image: magnify,
  },
  {
    type: "Q&A",
    title: "အမေးအဖြေဂိမ်း",
    description: "မေးခွန်းမသိဘဲ ဖြေနေတဲ့သူကို ရှာမယ်",
    image: chat,
  },
];

const GameMode = () => {
  const { setMode: setGameMode } = useGameSettingStore()
  const [mode, setMode] = useState<GameType | undefined>();
  const navigate = useNavigate();
  const handleClick = (type: GameType) => {
    setMode(type);
  };

  const handleGameForward = () => {
    if (!mode) return;
    setGameMode(mode);
    navigate(APP_CONFIG.CHOOSE_CATEGORIES);
  };

  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-2xl flex-col px-2 pb-2 pt-1 sm:px-4">
      <div className="flex items-start gap-3 pt-1 md:block md:pt-0">
        <BackButton />

        <header className="flex-1 space-y-3 text-center md:space-y-4 md:pt-8 md:text-center">
          <h1 className="text-[2.05rem] leading-none text-netural-100 md:text-[2.45rem]">
            ဂိမ်းအမျိုးအစား ရွေးမယ်
          </h1>
        </header>
      </div>

      <div className="mt-5 flex flex-1 flex-col md:mt-7">
        <div className="space-y-4">
          {GAME_TYPES.map(({ type, title, description, image }) => (
            <button
              key={type}
              type="button"
              onClick={() => handleClick(type as GameType)}
              className={`flex w-full cursor-pointer items-start gap-4 rounded-2xl border p-4 ${type === mode ? "border-white ring-2 ring-white" : "border-white/70"}`}
            >
              <img
                src={image}
                alt={title}
                className="aspect-square w-20 md:w-24"
              />
              <div className="flex flex-col items-start">
                <h2 className="text-[1.25rem] text-netural-100 md:text-[1.45rem]">
                  {title}
                </h2>
                <p className="text-netural-200">{description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-auto space-y-3 pb-1 text-center">
          <Button
            type="button"
            className="flex items-center justify-center text-[1.6rem] tracking-wide md:text-[2rem]"
            onClick={handleGameForward}
            disabled={!mode}
          >
            ရှေ့ဆက်မယ်
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GameMode;
