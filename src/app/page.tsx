import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { WorkTile } from "@/components/ui/work-tile";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { portfolioItems, categoryLabel } from "@/lib/data";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export default function Home() {
  const selected = portfolioItems.slice(0, 3);

  return (
    <>
      {/* ─────────────── Hero — full-bleed, image placeholder ─────────────── */}
      <section
        className="relative flex min-h-[78vh] w-full items-end overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900 sm:min-h-[88vh]"
        role="img"
        aria-label="Hero photograph placeholder — studio workspace, to be photographed"
      >
        <div aria-hidden className="absolute inset-0 grid place-items-center">
          <ImageIcon className="h-16 w-16 text-background/10 sm:h-20 sm:w-20" strokeWidth={1} />
        </div>
        <div className="absolute inset-0 bg-scrim-b" />

        <div className="container relative z-10 pb-16 pt-32 sm:pb-24">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.32em] text-background/70">
              Design &middot; Products &middot; Workshops
            </p>
            <h1 className="mt-5 max-w-2xl font-serif text-5xl font-normal leading-[1.08] text-background sm:text-6xl md:text-7xl">
              Made by hand,
              <br />
              <span className="italic">made to last.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-background/75">
              A small design &amp; handcraft studio working across fashion,
              leather, wood, and textile — drawn from Persian craft tradition.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/shop">Visit the Shop</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-background/35 text-background hover:border-background hover:bg-background/5"
              >
                <Link href="/work">View the Work</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────── Selected Work ─────────────── */}
      <section className="container py-24 sm:py-32">
        <Reveal className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-accent">
              Selected Work
            </p>
            <h2 className="mt-3 font-serif text-3xl font-normal sm:text-4xl">
              Pieces from the studio
            </h2>
          </div>
          <Link
            href="/work"
            className="group hidden items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
          >
            All work
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-luxury group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {selected.map((item, i) => (
            <Reveal key={item.slug} delay={i * 80}>
              <Link href={`/work/${item.slug}`} className="group block">
                <WorkTile category={item.category} year={item.year} aspect="4/5" />
                <div className="mt-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-accent">
                    {categoryLabel[item.category]}
                    {item.year && <span className="text-muted-foreground"> &middot; {item.year}</span>}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link href="/work" className="group inline-flex items-center gap-1.5 text-sm text-accent">
            See all work <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ─────────────── Studio · Workshops · Shop — quiet rows ─────────────── */}
      <section className="container py-24 sm:py-32">
        <div className="border-y border-border">
          {[
            {
              eyebrow: "Studio",
              title: "Commissions & bespoke work.",
              body: "Pieces made to your brief — fashion, textile, leather, or interior. Begin a conversation by writing to the studio.",
              href: "/contact",
              cta: "Start a project",
            },
            {
              eyebrow: "Workshops",
              title: "Learn the craft in person or online.",
              body: "Small groups, careful materials, the patient kind of teaching that makes the technique stick.",
              href: "/workshops",
              cta: "See workshops",
            },
            {
              eyebrow: "Shop",
              title: "Take home a piece.",
              body: "A small selection of handcrafted pieces, available now through the studio's collection.",
              href: "/shop",
              cta: "Visit the shop",
            },
          ].map((row, i) => (
            <Reveal key={row.eyebrow} delay={i * 60} as="div">
              <Link
                href={row.href}
                className={`group grid items-baseline gap-6 py-12 md:grid-cols-12 md:gap-12 ${i > 0 ? "border-t border-border" : ""}`}
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-accent md:col-span-2">
                  {row.eyebrow}
                </p>
                <h3 className="font-serif text-3xl font-normal leading-tight transition-colors duration-300 group-hover:text-accent md:col-span-7 md:text-4xl">
                  {row.title}
                </h3>
                <div className="md:col-span-3">
                  <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                    {row.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground">
                    {row.cta}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 ease-luxury group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─────────────── Instagram tile grid ─────────────── */}
      <section className="container py-24 sm:py-32">
        <Reveal className="text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">
            Latest from the studio
          </p>
          <p className="mt-4 font-serif text-3xl italic sm:text-4xl">
            Follow on @hoorinaz.art
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {(["fashion", "textile", "wood", "leather-jewelry", "leather-goods", "interior"] as const).map((cat, i) => (
            <Reveal key={cat} delay={i * 40}>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Instagram"
                className="group relative block aspect-square overflow-hidden rounded-sm border border-border media-placeholder transition-colors duration-300 hover:border-foreground/30"
              >
                <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <InstagramIcon className="h-5 w-5 text-foreground/60" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm transition-colors duration-300 hover:border-foreground"
          >
            <InstagramIcon className="h-4 w-4" />
            Open Instagram
          </a>
        </div>
      </section>
    </>
  );
}
