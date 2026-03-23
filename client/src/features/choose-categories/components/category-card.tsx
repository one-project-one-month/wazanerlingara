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
        "border flex flex-col rounded-2xl py-2 md:py-4 bg-white/10 items-center justify-center cursor-pointer",
        isSelected
          ? "border-white ring-3 ring-white"
          : "border-white/70 hover:border-white",
      )}
    >
      <img
        src={category.image}
        alt={category.type}
        className="size-30 w-full md:size-36"
      />

      <p className="text-xl lg:text-2xl text-center">{category.title}</p>
    </button>
  );
}
