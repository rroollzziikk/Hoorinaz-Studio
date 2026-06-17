import Link from "next/link";
import { categories, portfolioItems, categoryLabel } from "@/lib/data";
import { Ornament } from "@/components/ui/ornament";

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category: active } = await searchParams;
  const items = active
    ? portfolioItems.filter((item) => item.category === active)
    : portfolioItems;

  return (
    <div className="container py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-widest text-primary/80">Portfolio</p>
        <h1 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
          The <span className="gold-text italic">work</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          A selection of handcrafted pieces across mediums — fashion, textile,
          wood, leather, and interiors.
        </p>
        <Ornament className="mt-8" />
      </header>

      {/* Category chips */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        <Link
          href="/work"
          className={chip(!active)}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/work?category=${cat}`}
            className={chip(active === cat)}
          >
            {categoryLabel[cat]}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="group block overflow-hidden rounded-xl border border-border/40 surface-card transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
          >
            <div
              className={`relative grain aspect-[4/3] w-full overflow-hidden preview-${item.category}`}
            >
              <div className="absolute inset-0 bg-ink-fade opacity-70" />
              <div className="absolute left-4 top-4 rounded-full border border-primary/40 bg-ink-900/60 px-2.5 py-1 text-[10px] uppercase tracking-widest text-primary/90 backdrop-blur-sm">
                {categoryLabel[item.category]}
              </div>
              {item.year && (
                <div className="absolute right-4 top-4 text-[10px] uppercase tracking-widest text-foreground/80">
                  {item.year}
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl">{item.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {items.length === 0 && (
        <div className="mt-20 text-center text-muted-foreground">
          No pieces in this category yet. <Link href="/work" className="text-primary hover:underline">See all work</Link>.
        </div>
      )}
    </div>
  );
}

function chip(active: boolean) {
  return [
    "rounded-full border px-4 py-1.5 text-sm capitalize transition-all",
    active
      ? "border-primary bg-gold-gradient text-primary-foreground"
      : "border-border/50 text-muted-foreground hover:border-primary/50 hover:text-foreground",
  ].join(" ");
}
