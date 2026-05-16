import type { GameConfig } from "@/types/game.type.ts";

export function getGameConfig(): GameConfig | null {
  try {
    const stored = localStorage.getItem("wazan-game-config");
    if (!stored) return null;
    return JSON.parse(stored).state.config;
  } catch {
    return null;
  }
}
