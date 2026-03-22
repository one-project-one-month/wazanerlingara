import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { GAME_CONFIG_STORAGE_KEY } from "../app/constants";
import type { GameConfig } from "../types/game.type";

type GameConfigState = {
  config: GameConfig | null;
  setGameConfig: (config: GameConfig) => void;
  updateGameConfig: (patch: Partial<GameConfig>) => void;
  resetGameConfig: () => void;
};

export const useGameConfigStore = create<GameConfigState>()(
  persist(
    (set) => ({
      config: null,
      setGameConfig: (config) => set({ config }),
      updateGameConfig: (patch) =>
        set((state) =>
          state.config ? { config: { ...state.config, ...patch } } : state,
        ),
      resetGameConfig: () => set({ config: null }),
    }),
    {
      name: GAME_CONFIG_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ config: state.config }),
    },
  ),
);
