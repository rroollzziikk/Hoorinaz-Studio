import { ImageIcon } from "lucide-react";
import type { Category } from "@/lib/data";
import { categoryLabel } from "@/lib/data";

interface WorkTileProps {
  category: Category;
  year?: string;
  aspect?: "4/5" | "4/3" | "16/9" | "square";
}

/**
 * A quiet image placeholder for portfolio pieces that don't have a photo
 * yet — one neutral surface for every category, designed to be swapped
 * cleanly for a real photograph later.
 */
export function WorkTile({ category, year, aspect = "4/5" }: WorkTileProps) {
  const aspectClass =
    aspect === "4/5"
      ? "aspect-[4/5]"
      : aspect === "4/3"
        ? "aspect-[4/3]"
        : aspect === "16/9"
          ? "aspect-[16/9]"
          : "aspect-square";

  return (
    <div
      className={`relative media-placeholder w-full overflow-hidden rounded-sm border border-border ${aspectClass} transition-all duration-500 ease-luxury group-hover:border-foreground/30 group-hover:shadow-[0_24px_48px_-32px_hsl(20_10%_9%/0.25)]`}
    >
      <div className="absolute inset-0 grid place-items-center">
        <ImageIcon
          aria-hidden
          className="h-10 w-10 text-foreground/15 transition-transform duration-500 ease-luxury group-hover:scale-110"
          strokeWidth={1}
        />
      </div>

      <div className="absolute inset-x-5 top-5 flex items-baseline justify-between text-[10px] uppercase tracking-[0.24em]">
        <span className="text-accent">{categoryLabel[category]}</span>
        {year && <span className="text-muted-foreground">{year}</span>}
      </div>
    </div>
  );
}
