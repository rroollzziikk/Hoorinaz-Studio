import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import { products, categoryLabel } from "@/lib/data";
import { Ornament } from "@/components/ui/ornament";
import { InstagramIcon } from "@/components/ui/icons";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export default function ShopPage() {
  return (
    <div className="container py-20">
      {/* ───────────── Header ───────────── */}
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] uppercase tracking-[0.32em] text-primary/80">
          Handmade craft · Jewelry
        </p>
        <h1 className="mt-4 font-serif text-4xl font-normal sm:text-5xl">
          The <span className="gold-text italic">shop</span>
        </h1>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          A small, slowly-growing collection of handmade leather jewelry —
          cut, dyed, and finished by hand at the studio.
        </p>
        <Ornament className="mt-8" />
      </header>

      {/* ───────────── Product grid ───────────── */}
      <div className="mt-20 grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <article key={p.slug} className="group">
            <Link
              href={p.etsyUrl || "#"}
              target={p.etsyUrl ? "_blank" : undefined}
              rel="noreferrer"
              className="block"
            >
              <div className="relative aspect-square overflow-hidden rounded-sm border border-border/40 bg-ink-700/60 transition-all duration-700 group-hover:border-primary/50">
                {p.comingSoon ? (
                  <div
                    className="grain absolute inset-0 grid place-items-center text-center"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 25%, hsl(152 42% 16%) 0%, hsl(152 45% 9%) 70%)",
                    }}
                  >
                    <div className="px-8">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-primary/80">
                        Photographed soon
                      </p>
                      <p className="mt-4 font-serif text-lg italic text-foreground/85">
                        New piece in studio
                      </p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                  />
                )}
                {/* Subtle vignette on hover */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {p.soldOut && (
                  <div className="absolute right-3 top-3 rounded-full bg-ink-900/80 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground/90 backdrop-blur-sm">
                    Sold
                  </div>
                )}

                {/* Hover affordance */}
                {!p.comingSoon && (
                  <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 translate-y-2 items-center gap-2 rounded-full border border-primary/40 bg-ink-900/75 px-4 py-2 text-xs tracking-wide text-foreground opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ShoppingBag className="h-3.5 w-3.5 text-primary" />
                    View on Etsy
                  </div>
                )}
              </div>
            </Link>

            {/* Caption */}
            <div className="mt-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-primary/75">
                {categoryLabel[p.category]}
              </p>
              <div className="mt-2 flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl leading-tight">{p.title}</h2>
                <span className="font-serif text-xl gold-text whitespace-nowrap">
                  ${p.price}
                  <span className="ml-1 text-xs text-muted-foreground/80">
                    {p.currency || "CAD"}
                  </span>
                </span>
              </div>
              <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>

              {p.etsyUrl && (
                <a
                  href={p.etsyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary opacity-80 transition-all hover:opacity-100 hover:gap-2.5"
                >
                  Buy on Etsy <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* ───────────── Quiet closing note ───────────── */}
      <section className="mx-auto mt-32 max-w-xl text-center">
        <Ornament />
        <p className="mt-8 font-serif text-2xl italic leading-relaxed text-foreground/90">
          More pieces arrive when they&apos;re ready.
          <br />
          Follow along on Instagram for first look.
        </p>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2.5 text-sm transition-all hover:border-primary hover:glow-gold"
        >
          <InstagramIcon className="h-4 w-4 text-primary" />
          @hoorinaz.art
        </a>
        <p className="mt-8 text-xs text-muted-foreground">
          For commissions or to ask about a custom piece, <Link href="/contact" className="text-primary hover:underline">write to the studio</Link>.
        </p>
      </section>
    </div>
  );
}
