type Variant = "icon" | "compact" | "medallion";

interface BrandMarkProps {
  variant?: Variant;
  className?: string;
}

/**
 * Hoorinaz Studio — wordmark, designed in code, no external image.
 *
 *   - icon      : small ink monogram badge (header/footer)
 *   - compact   : monogram + stacked wordmark (alternative header treatment)
 *   - medallion : full vertical composition (hero & about)
 */
export function BrandMark({ variant = "icon", className = "" }: BrandMarkProps) {
  if (variant === "icon") {
    return (
      <span
        className={`relative grid place-items-center rounded-full bg-ink-900 ${className}`}
        aria-label="Hoorinaz Studio"
      >
        <span className="font-serif text-lg font-medium leading-none text-background">
          H
        </span>
      </span>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        <BrandMark variant="icon" className="h-9 w-9" />
        <div className="flex flex-col leading-none">
          <span className="font-serif text-lg font-medium tracking-tight text-foreground">
            Hoorinaz
          </span>
          <span className="mt-1 text-[8px] uppercase tracking-[0.4em] text-accent">
            Studio
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
      aria-label="Hoorinaz Studio"
    >
      {/* The H mark */}
      <span
        className="font-serif font-medium leading-[0.85] text-foreground"
        style={{ fontSize: "clamp(5rem, 16vw, 8rem)" }}
      >
        H
      </span>

      {/* Hairline with diamond divider */}
      <div className="mt-5 flex w-full max-w-[14rem] items-center gap-3">
        <span className="h-px flex-1 bg-border" />
        <span aria-hidden className="block h-1.5 w-1.5 rotate-45 bg-accent" />
        <span className="h-px flex-1 bg-border" />
      </div>

      {/* Hoorinaz wordmark */}
      <p
        className="mt-6 font-serif font-normal leading-none tracking-tight text-foreground"
        style={{ fontSize: "clamp(2rem, 5.5vw, 3.25rem)" }}
      >
        Hoorinaz
      </p>

      {/* STUDIO caps */}
      <p className="mt-4 text-xs uppercase tracking-[0.5em] text-accent sm:text-sm">
        Studio
      </p>
    </div>
  );
}
