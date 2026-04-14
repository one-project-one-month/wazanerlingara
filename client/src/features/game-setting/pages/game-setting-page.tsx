import { APP_CONFIG } from "@/app/config/app-config";
import BackButton from "@/components/common/back-button";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import GameInfo from "../components/game-info";
import ImposterCounter from "../components/imposter-counter";
import TimerModeSetting from "../components/timer-mode";
import ToggleImposterHint from "../components/toggle-imposter-hint";
import { useGameConfigStore } from "@/stores/game-config-store.ts";
import { questions, words } from "@/app/constants/words-and-questions.ts";
import { getRandomItemExcluding } from "@/lib/get-random-item-excluding.ts";
import { getRandomItem } from "@/lib/get-random-item.ts";

const GameSetting = () => {
  const navigate = useNavigate();
  const { config, updateGameConfig } = useGameConfigStore();

  const handleGameStarted = () => {
    if (!config?.category || !config.players?.length) return;
    const {
      category,
      players,
      previousWordId,
      previousQuestionId,
      previousImposterId,
    } = config;

    const wordsByCategory = words.filter(
      (word) => word.categoryId === category.id,
    );

    const questionsByCategory = questions.filter(
      (q) => q.categoryId === category.id,
    );

    const randomWord = getRandomItemExcluding(
      wordsByCategory,
      previousWordId ?? undefined,
    );

    const randomQuestion = getRandomItemExcluding(
      questionsByCategory,
      previousQuestionId ?? undefined,
    );

    const imposter =
      getRandomItemExcluding(players, previousImposterId ?? undefined) ||
      getRandomItem(players);

    if (!randomWord || !randomQuestion || !imposter) {
      console.error("Game start failed: missing data");
      return;
    }

    updateGameConfig({
      word: randomWord,
      question: randomQuestion,
      imposterId: imposter.id,
      previousWordId: randomWord.id,
      previousQuestionId: randomQuestion.id,
      previousImposterId: imposter.id,
    });
    navigate(APP_CONFIG.ROLE_REVEAL);
  };
  return (
    <section className="relative mx-auto flex w-full max-w-2xl flex-col py-4 px-2 lg:px-6">
      <div className="flex items-start justify-center md:block">
        <BackButton />

        <header className="flex-1 space-y-3 text-center md:space-y-4 md:pt-8 md:text-center">
          <h1 className="text-[2.05rem] leading-none text-netural-100 md:text-[2.45rem]">
            ဂိမ်းဆက်တင်
          </h1>
        </header>
      </div>

      <main className="mt-5 space-y-10 flex flex-1 flex-col md:mt-7 rounded-2xl">
        <div className="space-y-6">
          <ImposterCounter />
          <TimerModeSetting />
          <ToggleImposterHint />
          <GameInfo />
        </div>
        <Button
          className="flex items-center justify-center text-[1.6rem] tracking-wide md:text-[2rem]"
          onClick={handleGameStarted}
        >
          ဂိမ်းစမယ်
        </Button>
      </main>
    </section>
  );
};

export default GameSetting;
