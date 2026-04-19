import backgroundMusic from "@/assets/audio/background_sound.mp3";
import click from "@/assets/audio/click.mp3";
//for avatars and imposter image
import avatar1 from "@/assets/players/Avatars/Avatar1.svg";
import avatar10 from "@/assets/players/Avatars/Avatar10.svg";
import avatar2 from "@/assets/players/Avatars/Avatar2.svg";
import avatar3 from "@/assets/players/Avatars/Avatar3.svg";
import avatar4 from "@/assets/players/Avatars/Avatar4.svg";
import avatar5 from "@/assets/players/Avatars/Avatar5.svg";
import avatar6 from "@/assets/players/Avatars/Avatar6.svg";
import avatar7 from "@/assets/players/Avatars/Avatar7.svg";
import avatar8 from "@/assets/players/Avatars/Avatar8.svg";
import avatar9 from "@/assets/players/Avatars/Avatar9.svg";
import imposter from "@/assets/players/ImposterPic.svg";
//for category images
import animals from "@/assets/categories/animals.svg";
import countries from "@/assets/categories/countries.svg";
import foods from "@/assets/categories/foods.svg";
import histories from "@/assets/categories/histories.svg";
import imaginations from "@/assets/categories/imaginations.svg";
import jobs from "@/assets/categories/jobs.svg";
import locations from "@/assets/categories/locations.svg";
import movies from "@/assets/categories/movies.svg";
import nature from "@/assets/categories/nature.svg";
import sports from "@/assets/categories/sports.svg";
import superheroes from "@/assets/categories/supes.svg";
import technologies from "@/assets/categories/technologies.svg";


import type { Image } from "@/types/game.type";

export const GAME_CONFIG_STORAGE_KEY = "wazan-game-config";

export const GAME_SFX_FILES = {
  click,
  backgroundMusic,
};


export const GAME_IMAGE_ASSETS: Image[] = [
  { id: "1", url: avatar1, name: "Pic 1" },
  { id: "2", url: avatar2, name: "Pic 2" },
  { id: "3", url: avatar3, name: "Pic 3" },
  { id: "4", url: avatar4, name: "Pic 4" },
  { id: "5", url: avatar5, name: "Pic 5" },
  { id: "6", url: avatar6, name: "Pic 6" },
  { id: "7", url: avatar7, name: "Pic 7" },
  { id: "8", url: avatar8, name: "Pic 8" },
  { id: "9", url: avatar9, name: "Pic 9" },
  { id: "10", url: avatar10, name: "Pic 10" },
  { id: "imposter", url: imposter, name: "Imposter Pic" },
  { id: "animals", url: animals, name: "တိရစ္ဆာန်များ" },
  { id: "foods", url: foods, name: "အစားအသောက်" },
  { id: "locations", url: locations, name: "နေရာဒေသ" },
  { id: "countries", url: countries, name: "နိုင်ငံများ" },
  { id: "movies", url: movies, name: "ရုပ်ရှင်" },
  { id: "jobs", url: jobs, name: "အလုပ်အကိုင်" },
  { id: "technologies", url: technologies, name: "နည်းပညာ" },
  { id: "imaginations", url: imaginations, name: "စိတ်ကူးယဉ် အရာများ" },
  { id: "superheroes", url: superheroes, name: "စူပါဟီးရိုးများ" },
  { id: "nature", url: nature, name: "သဘာဝ" },
  { id: "histories", url: histories, name: "သမိုင်း" },
  { id: "sports", url: sports, name: "အားကစား" },
];


