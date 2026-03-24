import { SoundManager } from "@/game/audio/SoundManager";
import { create } from "zustand";

type GameSfxStore = {
  manager: SoundManager | null;
  isLoaded: boolean;

  load: (files: Record<string, string>) => Promise<void>;
  play: (name: string, volume: number) => void;
  resume: () => void;
};

export const useGameSfxStore = create<GameSfxStore>((set, get) => ({
  manager: null,
  isLoaded: false,
  load: async (files) => {
    const manager = new SoundManager();
    await manager.load(files);
    set({ manager, isLoaded: true });
  },
  play: (name, volume) => {
    const manager = get().manager;
    if (!manager) return;
    manager.play(name, volume);
  },
  resume: () => {
    const manager = get().manager;
    if (!manager) return;
    manager.resume();
  },
}));
