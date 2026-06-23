import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { products, categoryLabel } from "@/lib/data";
import { InstagramIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { Ornament } from "@/components/ui/ornament";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export default function ShopPage() {
  return (
    <div>
      {/* ───────────── Full-bleed banner, image placeholder ───────────── */}
      <section
        className="relative flex min-h-[42vh] w-full items-end overflow-hidden bg-gradient-to-br from-ink-700 to-ink-900 sm:min-h-[50vh]"
        role="img"
        aria-label="Shop banner photograph placeholder — featured collection"
      >
        <div aria-hidden className="absolute inset-0 grid place-items-center">
          <ImageIcon className="h-14 w-14 text-background/10" strokeWidth={1} />
        </div>
        <div className="absolute inset-0 bg-scrim-b" />
        <div className="container relative z-10 pb-14 pt-28">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.32em] text-background/70">
              Handmade Craft &middot; Leather Jewelry
            </p>
            <h1 className="mt-4 font-serif text-4xl font-normal text-background sm:text-5xl">
              The shop
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-background/75">
              A small, slowly-growing collection of handmade pieces — cut,
              dyed, and finished by hand at the studio.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ───────────── Product grid ───────────── */}
      <div className="container py-24 sm:py-28">
        <div className="grid gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 80}>
              <article className="group">
                <Link
                  href={p.etsyUrl || "#"}
                  target={p.etsyUrl ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block"
                  aria-label={`View ${p.title}, $${p.price} ${p.currency || "CAD"}`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-card transition-colors duration-500 ease-luxury group-hover:border-foreground/25">
                    {p.comingSoon ? (
                      <div className="media-placeholder absolute inset-0 grid place-items-center text-center">
                        <div className="px-8">
                          <ImageIcon
                            aria-hidden
                            className="mx-auto h-8 w-8 text-foreground/20"
                            strokeWidth={1}
                          />
                          <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-accent">
                            Photographed soon
                          </p>
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-1000 ease-luxury group-hover:scale-[1.035]"
                      />
                    )}

                    {p.soldOut && (
                      <div className="absolute right-3 top-3 rounded-sm border border-border bg-background/90 px-3 py-1 text-[10px] uppercase tracking-widest text-foreground">
                        Sold
                      </div>
                    )}
                  </div>
                </Link>

                {/* Caption */}
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-accent">
                    {categoryLabel[p.category]}
                  </p>
                  <div className="mt-2 flex items-baseline justify-between gap-4">
                    <h2 className="font-serif text-2xl leading-tight">{p.title}</h2>
                    <span className="whitespace-nowrap font-serif text-xl text-foreground">
                      ${p.price}
                      <span className="ml-1 text-xs text-muted-foreground">
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
                      className="mt-4 inline-flex items-center gap-1.5 text-sm text-foreground transition-all duration-300 hover:gap-2.5 hover:text-accent"
                    >
                      View piece <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ───────────── Quiet closing note ───────────── */}
        <Reveal className="mx-auto mt-32 max-w-xl text-center" as="section">
          <Ornament />
          <p className="mt-8 font-serif text-2xl italic leading-relaxed text-foreground">
            More pieces arrive when they&apos;re ready.
            <br />
            Follow along on Instagram for first look.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm transition-colors duration-300 hover:border-foreground"
          >
            <InstagramIcon className="h-4 w-4" />
            @hoorinaz.art
          </a>
          <p className="mt-8 text-xs text-muted-foreground">
            For commissions or to ask about a custom piece,{" "}
            <Link href="/contact" className="text-accent hover:underline">
              write to the studio
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </div>
  );
}
