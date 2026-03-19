import { cn } from "@/lib/util";
import type { CategoryCardType, GameCategoryType } from "@/types/index.types";

type CategoryCardProps = {
  category: CategoryCardType;
  isSelected: boolean;
  onSelect: (type: GameCategoryType) => void;
};

export default function CategoryCard({
  category,
  isSelected,
  onSelect,
}: CategoryCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(category.type)}
      aria-pressed={isSelected}
      className={cn(
        "border-2 flex flex-col rounded-2xl px-4 py-3 md:px-8 md:py-4 bg-white/10 items-center justify-center cursor-pointer duration-200",
        isSelected
          ? "border-white ring-2 ring-white"
          : "border-white/70 hover:border-white",
      )}
    >
      <img
        src={category.image}
        alt={category.type}
        className="size-28 md:size-36"
      />

      <p className="text-base md:text-lg text-center">{category.title}</p>
    </button>
  );
}
