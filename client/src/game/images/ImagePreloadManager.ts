import type { Image } from "@/types/game.type";

function preloadOne(image: Image): Promise<void> {
  return new Promise((resolve) => {
    const el = new Image();
    el.onload = () => {
      const decoding = el.decode?.();
      if (decoding) {
        decoding.catch(() => {}).finally(() => resolve());
      } else {
        resolve();
      }
    };
    el.onerror = () => {
      console.warn(`[ImagePreloadManager] failed to load: ${image.id}`, image.url);
      resolve();
    };
    el.src = image.url;
  });
}

export class ImagePreloadManager {
  async load(
    images: Image[],
    onProgress?: (loaded: number, total: number) => void,
  ): Promise<void> {
    const total = images.length;
    if (total === 0) {
      onProgress?.(0, 0);
      return;
    }

    let loaded = 0;
    const bump = () => {
      loaded += 1;
      onProgress?.(loaded, total);
    };

    await Promise.all(
      images.map(async (img) => {
        await preloadOne(img);
        bump();
      }),
    );
  }
}
