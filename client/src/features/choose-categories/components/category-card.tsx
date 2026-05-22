import { cn } from "@/lib/util";
import { useGameImageStore } from "@/stores/game-image-store";
import type { Category } from "@/types/game.type.ts";
import type { GameCategoryType } from "@/types/index.types";

type CategoryCardProps = {
  category: Category;
  isSelected: boolean;
  onSelect: (type: GameCategoryType) => void;
};

export default function CategoryCard({
  category,
  isSelected,
  onSelect,
}: CategoryCardProps) {
  const { getImageUrl } = useGameImageStore();

  return (
    <button
      type="button"
      onClick={() => onSelect(category.id as GameCategoryType)}
      aria-pressed={isSelected}
      className={cn(
        "border flex flex-col rounded-2xl py-2 md:py-4 bg-white/10 items-center justify-center cursor-pointer",
        isSelected
          ? "border-white ring-3 ring-white"
          : "border-white/70 hover:border-white",
      )}
    >
      <img
        src={getImageUrl(category.imageId ?? "all")}
        alt={category.id}
        className="size-30 w-full md:size-36"
      />

      <p className="text-xl lg:text-2xl text-center">{category.name}</p>
    </button>
  );
}
