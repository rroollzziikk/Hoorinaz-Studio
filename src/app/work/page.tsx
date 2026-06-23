import Link from "next/link";
import { categories, portfolioItems, categoryLabel } from "@/lib/data";
import { Ornament } from "@/components/ui/ornament";
import { WorkTile } from "@/components/ui/work-tile";

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
        <p className="text-xs uppercase tracking-widest text-accent">Portfolio</p>
        <h1 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
          The <span className="italic text-accent">work</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          A selection of handcrafted pieces across mediums — fashion, textile,
          wood, leather, and interiors.
        </p>
        <Ornament className="mt-8" />
      </header>

      {/* Category chips */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        <Link href="/work" className={chip(!active)}>All</Link>
        {categories.map((cat) => (
          <Link key={cat} href={`/work?category=${cat}`} className={chip(active === cat)}>
            {categoryLabel[cat]}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link key={item.slug} href={`/work/${item.slug}`} className="group block">
            <WorkTile category={item.category} year={item.year} aspect="4/5" />
            <div className="mt-5">
              <p className="text-[10px] uppercase tracking-[0.24em] text-accent">
                {categoryLabel[item.category]}
                {item.year && <span className="text-muted-foreground"> · {item.year}</span>}
              </p>
              <h2 className="mt-2 font-serif text-2xl">{item.title}</h2>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {items.length === 0 && (
        <div className="mt-20 text-center text-muted-foreground">
          No pieces in this category yet.{" "}
          <Link href="/work" className="text-accent hover:underline">See all work</Link>.
        </div>
      )}
    </div>
  );
}

function chip(active: boolean) {
  return [
    "rounded-sm border px-4 py-1.5 text-sm capitalize transition-colors duration-300",
    active
      ? "border-foreground bg-foreground text-background"
      : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground",
  ].join(" ");
}
