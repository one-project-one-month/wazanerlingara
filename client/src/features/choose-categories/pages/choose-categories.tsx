import { APP_CONFIG } from "@/app/config/app-config";
import animals from "@/assets/svg/animals.svg";
import countries from "@/assets/svg/countries.svg";
import foods from "@/assets/svg/foods.svg";
import histories from "@/assets/svg/histories.svg";
import imaginations from "@/assets/svg/imaginations.svg";
import jobs from "@/assets/svg/jobs.svg";
import locations from "@/assets/svg/locations.svg";
import movies from "@/assets/svg/movies.svg";
import nature from "@/assets/svg/nature.svg";
import sports from "@/assets/svg/sports.svg";
import supes from "@/assets/svg/supes.svg";
import technologies from "@/assets/svg/technologies.svg";
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
    title: "အစားအသောက်",
    image: foods,
  },
  {
    type: "locations",
    title: "နေရာဒေသ",
    image: locations,
  },
  {
    type: "countries",
    title: "နိုင်ငံများ",
    image: countries,
  },
  {
    type: "movies",
    title: "ရုပ်ရှင်",
    image: movies,
  },
  {
    type: "jobs",
    title: "အလုပ်အကိုင်",
    image: jobs,
  },
  {
    type: "technologies",
    title: "နည်းပညာ",
    image: technologies,
  },
  {
    type: "imaginations",
    title: "စိတ်ကူးယဉ် အရာများ",
    image: imaginations,
  },
  {
    type: "supes",
    title: "စူပါဟီးရိုးများ",
    image: supes,
  },
  {
    type: "nature",
    title: "သဘာဝ",
    image: nature,
  },
  {
    type: "histories",
    title: "သမိုင်း",
    image: histories,
  },
  {
    type: "sports",
    title: "အားကစား",
    image: sports,
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
    navigate(APP_CONFIG.GAME_SETTING);
  };

  return (
    <section className="relative mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col px-2 pb-2 pt-1 sm:px-4">
      <div className="flex items-start gap-3 pt-1 md:block md:pt-0">
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
              key={item.type}
              category={item}
              isSelected={item.type === category}
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
