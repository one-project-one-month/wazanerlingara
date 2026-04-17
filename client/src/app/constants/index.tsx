import backgroundMusic from "@/assets/audio/background_sound.mp3";
import click from "@/assets/audio/click.mp3";
import Arluu from "@/assets/players/arluu.svg";
import Buutee from "@/assets/players/buutee.svg";
import Gawli from "@/assets/players/gawli.svg";
import Sarou from "@/assets/players/sarou.svg";
import type { Image } from "@/types/game.type";

export const GAME_CONFIG_STORAGE_KEY = "wazan-game-config";

export const GAME_SFX_FILES = {
  click,
  backgroundMusic,
};

export const GAME_IMAGE_ASSETS: Image[] = [
  { id: "1", url: Arluu, name: "Arluu" },
  { id: "2", url: Buutee, name: "Buutee" },
  { id: "3", url: Sarou, name: "Sarou" },
  { id: "4", url: Gawli, name: "Gawli" },
];
