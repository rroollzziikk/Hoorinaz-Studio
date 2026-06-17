import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ornament } from "@/components/ui/ornament";
import { InstagramIcon } from "@/components/ui/icons";
import { BrandMark } from "@/components/ui/brand-mark";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export default function AboutPage() {
  return (
    <div className="container py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-widest text-primary/80">About</p>
        <h1 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
          A small studio, made <span className="gold-text italic">slowly.</span>
        </h1>
        <Ornament className="mt-8" />
      </header>

      <div className="mt-16 grid gap-12 md:grid-cols-12 md:items-center">
        {/* Brand mark (with graceful fallback if /logo.png is not yet uploaded) */}
        <div className="md:col-span-5">
          <BrandMark
            variant="medallion"
            className="mx-auto aspect-square w-full max-w-sm"
          />
        </div>

        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hoorinaz Studio is a handcraft &amp; design practice working across
            fashion and textile design, painting on wood, leather jewelry and
            leather goods, and interior design and styling. Every piece is
            made by hand, with an eye for warmth and detail.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The work draws on Persian craft traditions — tilework geometry,
            tooled leather, hand-painted motifs — and brings them into a
            quieter, contemporary key. Tools are mostly old. Pace is mostly
            slow. The result is the kind of object you keep.
          </p>

          <div className="hairline my-8 max-w-xs" />

          <p className="font-serif text-2xl">Alongside the studio</p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Hoorinaz teaches online and in-person workshops for anyone who
            wants to learn the craft — small groups, careful materials, and
            time to actually finish something.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/work">View the Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <InstagramIcon className="mr-2 h-4 w-4" />
                Follow @hoorinaz.art
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
