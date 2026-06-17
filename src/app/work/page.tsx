import Link from "next/link";
import { categories, portfolioItems } from "@/lib/data";

export default function WorkPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const active = searchParams.category;
  const items = active
    ? portfolioItems.filter((item) => item.category === active)
    : portfolioItems;

  return (
    <div className="container py-16">
      <h1 className="font-serif text-3xl font-semibold">Work</h1>
      <p className="mt-2 text-muted-foreground">
        A portfolio of handcrafted design work across mediums.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/work"
          className={`rounded-full border px-3 py-1 text-sm ${
            !active ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
          }`}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/work?category=${category}`}
            className={`rounded-full border px-3 py-1 text-sm capitalize ${
              active === category
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
          >
            {category.replace("-", " ")}
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="rounded-lg border bg-secondary/30 p-6 transition-colors hover:bg-secondary/60"
          >
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              {item.category.replace("-", " ")}
            </span>
            <h2 className="mt-1 font-serif text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
