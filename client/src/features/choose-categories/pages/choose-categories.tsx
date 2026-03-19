import { APP_CONFIG } from "@/app/config/app-config";
import animals from "@/assets/svg/animals.svg";
import BackButton from "@/components/common/back-button";
import { Button } from "@/components/ui/button";
import type { CategoryCardType, GameCategoryType } from "@/types/index.types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/category-card";

const GAME_CATEGORIES: CategoryCardType[] = [
  {
    type: "animals",
    title: "စကားလုံးဂိမ်း",
    image: animals,
  },
  {
    type: "foods",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
  {
    type: "locations",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
  {
    type: "countries",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
  {
    type: "movies",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
  {
    type: "jobs",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
  {
    type: "technologies",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
  {
    type: "imaginations",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
  {
    type: "supes",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
  {
    type: "nature",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
  {
    type: "histories",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
  {
    type: "sports",
    title: "အမေးအဖြေဂိမ်း",
    image: animals,
  },
];

export default function ChooseCategories() {
  const [category, setCategory] = useState<GameCategoryType | undefined>();
  const navigate = useNavigate();

  const handleClick = (type: GameCategoryType) => {
    setCategory(type);
  };

  const handleGameForward = () => {
    if (!category) return;

    localStorage.setItem(`${APP_CONFIG.APP_NAME}-category`, category);
    navigate("/voting");
  };

  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-7xl flex-col px-2 pb-2 pt-1 sm:px-4 space-y-4">
      <BackButton />

      <div className="flex flex-1 flex-col pt-8 md:pt-10">
        <header className="space-y-3 text-center md:space-y-4">
          <h1 className="text-[2.05rem] leading-none text-netural-100 md:text-[2.45rem]">
            ကစားမယ့်အမျိုးအစား ရွေးမယ်
          </h1>
        </header>

        <div className="mt-5 grid grid-cols-2 gap-4 pb-4 md:mt-7 md:grid-cols-3 md:gap-8">
          {GAME_CATEGORIES.map((item) => (
            <CategoryCard
              key={item.type}
              category={item}
              isSelected={item.type === category}
              onSelect={handleClick}
            />
          ))}
        </div>

        {/* <div className="flex items-center justify-center border max-w-4xl"> */}
        <Button
          className="text-[1.2rem] flex items-center justify-center tracking-wide md:text-[1.6rem]"
          onClick={handleGameForward}
          disabled={!category}
        >
          ရှေ့ဆက်မယ်
        </Button>
        {/* </div> */}
      </div>
    </section>
  );
}
