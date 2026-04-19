import { APP_CONFIG } from "@/app/config/app-config";

import { GAME_CATEGORIES } from "@/app/constants/words-and-questions.ts";
import BackButton from "@/components/common/back-button";
import { Button } from "@/components/ui/button";
import { useGameConfigStore } from "@/stores/game-config-store";
import type { GameCategoryType } from "@/types/index.types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/category-card";

export default function ChooseCategories() {
  const { config, updateGameConfig } = useGameConfigStore();
  const [category, setCategory] = useState<GameCategoryType | undefined>();
  const navigate = useNavigate();

  const handleClick = (type: GameCategoryType) => {
    setCategory(type);
  };

  const handleGameForward = () => {
    if (!category) return;

    const selectedCategory = GAME_CATEGORIES.find(
      (item) => item.id === category,
    );
    if (!selectedCategory) return;

    if (config) {
      updateGameConfig({
        category: {
          id: selectedCategory.id,
          name: selectedCategory.name,
          imageId: selectedCategory.imageId,
        },
      });
      navigate(APP_CONFIG.GAME_SETTING);
    }
  };

  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col py-4 px-2 lg:px-6">
      <div className="flex items-start gap-3 md:block">
        <BackButton />

        <header className="flex-1 space-y-3 text-center md:space-y-4 md:pt-8 md:text-center">
          <h1 className="text-[2.05rem] leading-none text-netural-100 md:text-[2.45rem]">
            ရွေးချယ်စရာ အမျိုးအစားများ
          </h1>
        </header>
      </div>

      <div className="mt-5 flex flex-1 flex-col md:mt-7">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {GAME_CATEGORIES.map((item) => (
            <CategoryCard
              key={item.id}
              category={item}
              isSelected={item.id === category}
              onSelect={handleClick}
            />
          ))}
        </div>

        <div className="mt-10 space-y-3 pb-1 text-center">
          <Button
            type="button"
            className="flex items-center justify-center text-[1.6rem] tracking-wide md:text-[2rem]"
            onClick={handleGameForward}
            disabled={!category}
          >
            ရှေ့ဆက်မယ်
          </Button>
        </div>
      </div>
    </section>
  );
}
