import { ImagePreloadManager } from "@/game/images/ImagePreloadManager";
import type { Image } from "@/types/game.type";
import { create } from "zustand";

let imageLoadTask: Promise<void> | null = null;

type GameImageStore = {
  isLoaded: boolean;
  progress: number;
  imagesById: Record<string, Image>;

  load: (images: Image[]) => Promise<void>;
  getImage: (id: string) => Image | undefined;
  getImageUrl: (id: string) => string | undefined;
};

export const useGameImageStore = create<GameImageStore>((set, get) => ({
  isLoaded: false,
  progress: 0,
  imagesById: {},

  load: async (images) => {
    if (images.length === 0) {
      set({ isLoaded: true, progress: 1, imagesById: {} });
      return;
    }

    const nextById = Object.fromEntries(images.map((img) => [img.id, img]));
    const { isLoaded, imagesById } = get();
    if (
      isLoaded &&
      images.length === Object.keys(imagesById).length &&
      images.every((img) => imagesById[img.id]?.url === img.url)
    ) {
      return;
    }

    if (imageLoadTask) return imageLoadTask;

    imageLoadTask = (async () => {
      try {
        set({
          isLoaded: false,
          progress: 0,
          imagesById: nextById,
        });

        const manager = new ImagePreloadManager();
        await manager.load(images, (loaded, total) => {
          set({ progress: total > 0 ? loaded / total : 1 });
        });

        set({ isLoaded: true, progress: 1 });
      } finally {
        imageLoadTask = null;
      }
    })();

    return imageLoadTask;
  },

  getImage: (id) => get().imagesById[id],

  getImageUrl: (id) => get().imagesById[id]?.url,
}));
