import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Ornament } from "@/components/ui/ornament";
import { InstagramIcon } from "@/components/ui/icons";
import { HeroBrandFX } from "@/components/ui/hero-brand-fx";
import { WorkTile } from "@/components/ui/work-tile";
import { portfolioItems, categoryLabel } from "@/lib/data";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export default function Home() {
  const selected = portfolioItems.slice(0, 3);

  return (
    <>
      {/* ─────────────── Hero — the wordmark, dressed in light ─────────────── */}
      <section className="container flex min-h-[88vh] flex-col items-center justify-center py-20 text-center reveal">
        <HeroBrandFX />

        <p className="mt-12 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          A small handcraft &amp; design atelier in Toronto — fashion, textile,
          wood, leather, and interior, drawn from Persian craft tradition.
        </p>

        <p className="mt-8 font-serif text-2xl italic text-foreground/90 sm:text-3xl">
          Made by hand. <span className="gold-text">Made with care.</span>
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
          <Link href="/work" className="group inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary">
            View the Work
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <span className="hidden h-4 w-px bg-border/60 sm:inline-block" />
          <Link href="/workshops" className="group inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary">
            Join a Workshop
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <span className="hidden h-4 w-px bg-border/60 sm:inline-block" />
          <Link href="/shop" className="group inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary">
            Visit the Shop
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <Ornament className="mt-16" />
      </section>

      {/* ─────────────── Selected Work — etched plate tiles ─────────────── */}
      <section className="container py-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-primary/80">
              Selected Work
            </p>
            <h2 className="mt-3 font-serif text-3xl font-normal sm:text-4xl">
              Pieces from the studio
            </h2>
          </div>
          <Link
            href="/work"
            className="group hidden items-center gap-1.5 text-sm text-muted-foreground hover:text-primary sm:inline-flex"
          >
            All work
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {selected.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="group block"
            >
              <WorkTile category={item.category} year={item.year} aspect="4/5" />
              <div className="mt-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary/75">
                  {categoryLabel[item.category]}
                  {item.year && <span className="text-muted-foreground/70"> · {item.year}</span>}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center sm:hidden">
          <Link href="/work" className="group inline-flex items-center gap-1.5 text-sm text-primary">
            See all work <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ─────────────── Studio · Workshops · Shop — quiet rows ─────────────── */}
      <section className="container py-24">
        <div className="border-y border-border/30">
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
              body: "A small selection of handcrafted pieces, available now through the studio's Etsy shop.",
              href: "/shop",
              cta: "Visit the shop",
            },
          ].map((row, i) => (
            <Link
              key={row.eyebrow}
              href={row.href}
              className={`group grid items-baseline gap-6 py-10 md:grid-cols-12 md:gap-12 ${i > 0 ? "border-t border-border/30" : ""}`}
            >
              <p className="text-[11px] uppercase tracking-[0.32em] text-primary/80 md:col-span-2">
                {row.eyebrow}
              </p>
              <h3 className="font-serif text-3xl font-normal leading-tight transition-colors group-hover:text-primary md:col-span-7 md:text-4xl">
                {row.title}
              </h3>
              <div className="md:col-span-3">
                <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {row.body}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary">
                  {row.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────────── Instagram tile grid ─────────────── */}
      <section className="container py-24">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.32em] text-primary/80">
            Latest from the studio
          </p>
          <p className="mt-4 font-serif text-3xl italic sm:text-4xl">
            Follow on <span className="gold-text">@hoorinaz.art</span>
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {(["fashion","textile","wood","leather-jewelry","leather-goods","interior"] as const).map((cat) => (
            <a
              key={cat}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className={`group relative grain aspect-square overflow-hidden rounded-sm border border-border/30 preview-${cat} transition-all hover:border-primary/50`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink-900/70" />
              <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="rounded-full bg-ink-900/70 p-3 backdrop-blur-sm">
                  <InstagramIcon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-sm transition-all hover:border-primary hover:glow-gold"
          >
            <InstagramIcon className="h-4 w-4 text-primary" />
            Open Instagram
          </a>
        </div>
      </section>
    </>
  );
}
