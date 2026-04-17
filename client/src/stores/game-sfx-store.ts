import { SoundManager } from "@/game/audio/SoundManager";
import { create } from "zustand";

type GameSfxStore = {
  manager: SoundManager | null;
  isLoaded: boolean;
  musicEnabled: boolean,
  soundEnabled: boolean,
  load: (files: Record<string, string>) => Promise<void>;
  play: (name: string, volume: number, loop: boolean) => void;
  resume: () => void;
  pause: (name: string) => void;
  toggleMusic: () => void;
  toggleSound: () => void
};

export const useGameSfxStore = create<GameSfxStore>((set, get) => ({
  manager: null,
  isLoaded: false,
  musicEnabled: false,
  soundEnabled: false,
  load: async (files) => {
    const manager = new SoundManager();
    await manager.load(files);
    set({ manager, isLoaded: true });
  },
  play: (name, volume, loop) => {
    const { manager, musicEnabled, soundEnabled } = get();
    if (!manager) return;
    const isMusic = name === "backgroundMusic";
    if (isMusic && !musicEnabled) return;
    if (!isMusic && !soundEnabled) return;
    manager.play(name, volume, loop);
  },
  resume: () => {
    const manager = get().manager;
    if (!manager) return;
    manager.resume();
  },
  pause: (name: string) => {
    const manager = get().manager;
    if (!manager) return;
    manager.pause(name);
  },
  toggleMusic: () => {
    const { manager, musicEnabled } = get()
    if (!musicEnabled) {
      manager?.play("backgroundMusic", 0.5, true);
    } else {
      manager?.pause("backgroundMusic");

    }
    set({ musicEnabled: !musicEnabled })
  },
  toggleSound: () => {
    set((state) => ({ soundEnabled: !state.soundEnabled }))
  }
}));
