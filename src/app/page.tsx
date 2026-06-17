import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Ornament } from "@/components/ui/ornament";
import { InstagramIcon } from "@/components/ui/icons";
import { BrandMark } from "@/components/ui/brand-mark";
import { portfolioItems, categoryLabel } from "@/lib/data";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export default function Home() {
  const selected = portfolioItems.slice(0, 3);

  return (
    <>
      {/* ─────────────── Hero — centered, minimal ─────────────── */}
      <section className="container flex min-h-[80vh] flex-col items-center justify-center py-24 text-center reveal">
        {/* Brand mark — leather-and-gold badge (with graceful fallback) */}
        <BrandMark
          variant="medallion"
          className="aspect-square w-52 sm:w-60 md:w-64"
        />

        <p className="mt-12 text-[11px] uppercase tracking-[0.32em] text-primary/80">
          Handcraft &amp; Design Studio
        </p>

        <h1 className="mt-5 font-serif text-5xl font-normal leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Made by hand.
          <br />
          <span className="gold-text italic">Made with care.</span>
        </h1>

        <p className="mt-7 max-w-md text-base leading-relaxed text-muted-foreground">
          A small atelier in Toronto — fashion, textile, wood, leather, and
          interior design, drawn from Persian craft tradition.
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

      {/* ─────────────── Selected Work — three pieces ─────────────── */}
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
              <div
                className={`relative grain aspect-[4/5] w-full overflow-hidden rounded-sm border border-border/30 preview-${item.category} transition-all duration-700 group-hover:border-primary/50`}
              >
                <div className="absolute inset-0 bg-ink-fade opacity-50" />
              </div>
              <div className="mt-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-primary/75">
                  {categoryLabel[item.category]}
                  {item.year && <span className="text-muted-foreground/70"> · {item.year}</span>}
                </p>
                <h3 className="mt-2 font-serif text-2xl">{item.title}</h3>
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

      {/* ─────────────── Studio · Workshops · Shop ─────────────── */}
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

      {/* ─────────────── Quiet Instagram note ─────────────── */}
      <section className="container py-24 text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-primary/80">
          Latest from the studio
        </p>
        <p className="mt-4 font-serif text-3xl italic sm:text-4xl">
          Follow on <span className="gold-text">@hoorinaz.art</span>
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-sm transition-all hover:border-primary hover:glow-gold"
        >
          <InstagramIcon className="h-4 w-4 text-primary" />
          Open Instagram
        </a>
      </section>
    </>
  );
}
