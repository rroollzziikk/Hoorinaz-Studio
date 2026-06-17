import { BrandMark } from "@/components/ui/brand-mark";

/**
 * Minimal decoration around the hero brand mark.
 * One slow thin gold ring, a soft gold halo that brightens on hover,
 * and a hair of lift on the mark. That's it.
 */
export function HeroBrandFX() {
  return (
    <div className="group relative isolate flex items-center justify-center">
      {/* Single thin rotating gold ring */}
      <svg
        aria-hidden
        viewBox="-100 -100 200 200"
        className="pointer-events-none absolute h-[125%] w-[125%] text-primary/30 [animation:spin_120s_linear_infinite] transition-all duration-700 group-hover:text-primary/60 group-hover:[animation-duration:60s]"
      >
        <circle cx="0" cy="0" r="96" fill="none" stroke="currentColor" strokeWidth="0.35" />
      </svg>

      {/* Soft gold halo, lifts on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -m-12 rounded-full opacity-60 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle, hsl(40 70% 50% / 0.18) 0%, transparent 65%)",
        }}
      />

      {/* The brand mark — a hair of lift on hover */}
      <div className="relative z-10 transition-transform duration-700 ease-out group-hover:scale-[1.01]">
        <BrandMark
          variant="medallion"
          className="w-[18rem] sm:w-[22rem] md:w-[24rem]"
        />
      </div>
    </div>
  );
}
