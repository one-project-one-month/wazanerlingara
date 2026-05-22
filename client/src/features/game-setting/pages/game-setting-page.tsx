import { APP_CONFIG } from "@/app/config/app-config";
import BackButton from "@/components/common/back-button";
import { Button } from "@/components/ui/button";
import { getWeightedRandomItems } from "@/lib/get-weighted-random-items.ts";
import { useAppNavigation } from "@/lib/use-app-navigation";
import { useGameConfigStore } from "@/stores/game-config-store.ts";
import GameInfo from "../components/game-info";
import ImposterCounter from "../components/imposter-counter";
import TimerModeSetting from "../components/timer-mode";
import ToggleImposterHint from "../components/toggle-imposter-hint";
import { getRandomItemExcluding } from "@/lib/get-random-item-excluding.ts";
import { questions, words } from "@/app/constants/words-and-questions.ts";

const GameSetting = () => {
  const { goTo } = useAppNavigation();
  const { config, updateGameConfig } = useGameConfigStore();

  const handleGameStarted = () => {
    if (!config?.category || !config.players?.length) return;
    const {
      gameSetting,
      players,
      category,
      previousImposterIds,
      previousWordId,
      previousQuestionId,
    } = config;

    const wordsByCategory =
      category.id !== "all"
        ? words.filter((word) => word.categoryId === category.id)
        : words;

    console.log("wordsByCategory", wordsByCategory);

    const questionsByCategory =
      category.id !== "all"
        ? questions.filter((q) => q.categoryId === category.id)
        : questions;

    const randomWord = getRandomItemExcluding(
      wordsByCategory,
      previousWordId ?? undefined,
    );

    const randomQuestion = getRandomItemExcluding(
      questionsByCategory,
      previousQuestionId ?? undefined,
    );

    const imposterCount = gameSetting.imposterCount;

    const imposters = getWeightedRandomItems({
      players,
      count: imposterCount,
      previousIds: previousImposterIds ?? [],
    });
    const imposterIds = imposters.map((imposter) => imposter.id);
    if (!randomWord || !randomQuestion || !imposters.length) {
      console.error("Game start failed: missing data");
      return;
    }

    updateGameConfig({
      word: randomWord,
      question: randomQuestion,
      imposterIds: imposterIds,
      previousWordId: randomWord.id,
      previousQuestionId: randomQuestion.id,
      previousImposterIds: imposterIds,
    });
    goTo(APP_CONFIG.ROLE_REVEAL);
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
