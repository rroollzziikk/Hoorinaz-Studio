import { BrandMark } from "@/components/ui/brand-mark";

/** Quiet presentation of the brand medallion — no motion, no glow. */
export function HeroBrandFX() {
  return (
    <div className="relative flex items-center justify-center">
      <BrandMark variant="medallion" className="w-[14rem] sm:w-[16rem] md:w-[18rem]" />
    </div>
  );
}
