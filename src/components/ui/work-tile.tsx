import {
  Shirt,
  Layers,
  TreePine,
  Gem,
  BriefcaseBusiness,
  Lamp,
  Flower2,
  type LucideIcon,
} from "lucide-react";
import type { Category } from "@/lib/data";
import { categoryLabel } from "@/lib/data";

const iconFor: Record<Category, LucideIcon> = {
  fashion: Shirt,
  textile: Layers,
  wood: TreePine,
  "leather-jewelry": Gem,
  "leather-goods": BriefcaseBusiness,
  interior: Lamp,
  styling: Flower2,
};

interface WorkTileProps {
  category: Category;
  year?: string;
  aspect?: "4/5" | "4/3" | "16/9" | "square";
}

/**
 * A typographic placeholder tile for portfolio pieces that don't have a
 * photo yet — category-tinted gradient, faded craft icon, gold corner
 * ornament. Designed to swap cleanly for a real image later.
 */
export function WorkTile({ category, year, aspect = "4/5" }: WorkTileProps) {
  const Icon = iconFor[category];
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
      className={`relative grain w-full overflow-hidden rounded-sm border border-border/40 preview-${category} ${aspectClass} transition-all duration-700 group-hover:border-primary/50`}
    >
      {/* warm vignette */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink-900/70" />

      {/* Faded craft icon — quiet center */}
      <div className="absolute inset-0 grid place-items-center">
        <Icon
          className="h-28 w-28 text-primary/15 transition-all duration-700 group-hover:scale-105 group-hover:text-primary/25 sm:h-32 sm:w-32"
          strokeWidth={1}
        />
      </div>

      {/* Top row — category eyebrow + year */}
      <div className="absolute inset-x-5 top-5 flex items-baseline justify-between text-[10px] uppercase tracking-[0.28em]">
        <span className="text-primary/85">{categoryLabel[category]}</span>
        {year && <span className="text-foreground/60">{year}</span>}
      </div>

      {/* Bottom-left Persian-tile corner ornament */}
      <svg
        aria-hidden
        viewBox="0 0 48 48"
        className="absolute bottom-3 left-3 h-8 w-8 text-primary/40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      >
        <path d="M2 24 L24 2 L46 24 L24 46 Z" />
        <path d="M14 24 L24 14 L34 24 L24 34 Z" />
        <circle cx="24" cy="24" r="1.5" fill="currentColor" />
      </svg>

      {/* Bottom-right hairline accent */}
      <span className="absolute bottom-5 right-5 h-px w-8 bg-gradient-to-l from-primary/60 to-transparent" />
    </div>
  );
}
