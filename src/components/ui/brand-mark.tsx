type Variant = "icon" | "compact" | "medallion";

interface BrandMarkProps {
  variant?: Variant;
  className?: string;
}

/**
 * Hoorinaz Art Studio — brand mark, designed in code.
 *
 * The shared pattern across every variant:
 *   1. A serif H in champagne gold (the crest)
 *   2. A thin gold rule punctuated by a small diamond
 *   3. The "Hoorinaz" wordmark in cream serif
 *   4. "ART STUDIO" in spaced gold caps
 *
 * Variants:
 *   - icon      : small round H crest (header/footer)
 *   - compact   : horizontal lockup — H crest + stacked wordmark
 *                 (alternative header treatment)
 *   - medallion : full vertical composition (hero & about)
 *
 * No external image dependency — sharp at every size, themed by CSS vars.
 */
export function BrandMark({ variant = "icon", className = "" }: BrandMarkProps) {
  if (variant === "icon") {
    return (
      <span
        className={`relative grid place-items-center overflow-hidden rounded-full border border-primary/45 bg-ink-900/40 ${className}`}
        aria-label="Hoorinaz Art Studio"
      >
        {/* inner gold hairline ring */}
        <span className="absolute inset-[3px] rounded-full border border-primary/20" />
        <span className="font-serif text-lg font-medium leading-none gold-text">
          H
        </span>
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <BrandMark variant="icon" className="h-10 w-10" />
        <div className="flex flex-col leading-none">
          <span className="font-serif text-lg font-medium tracking-tight text-foreground">
            Hoorinaz
          </span>
          <span className="mt-1 text-[8px] uppercase tracking-[0.4em] text-primary/85">
            Art Studio
          </span>
        </div>
      </div>
    );
  }

  // medallion — full wordmark composition
  return (
    <div
      className={`relative flex flex-col items-center ${className}`}
      role="img"
      aria-label="Hoorinaz Art Studio"
    >
      {/* soft gold glow behind */}
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(40 60% 50% / 0.18), transparent 70%)",
        }}
      />

      {/* The H crest */}
      <span
        className="font-serif font-medium leading-[0.85] gold-text drop-shadow-[0_4px_18px_hsl(40_60%_30%/0.35)]"
        style={{ fontSize: "clamp(7rem, 22vw, 12rem)" }}
      >
        H
      </span>

      {/* Gold rule with diamond divider */}
      <div className="mt-5 flex w-full max-w-[18rem] items-center gap-3">
        <span className="h-px flex-1 bg-gradient-to-l from-primary/80 to-transparent" />
        <span
          aria-hidden
          className="block h-1.5 w-1.5 rotate-45 bg-primary shadow-[0_0_8px_hsl(40_70%_50%/0.5)]"
        />
        <span className="h-px flex-1 bg-gradient-to-r from-primary/80 to-transparent" />
      </div>

      {/* Hoorinaz wordmark */}
      <p
        className="mt-6 font-serif font-normal leading-none tracking-tight text-foreground"
        style={{ fontSize: "clamp(2.5rem, 7vw, 4.25rem)" }}
      >
        Hoorinaz
      </p>

      {/* ART STUDIO caps */}
      <p className="mt-4 text-xs uppercase tracking-[0.55em] text-primary/85 sm:text-sm">
        Art Studio
      </p>
    </div>
  );
}
