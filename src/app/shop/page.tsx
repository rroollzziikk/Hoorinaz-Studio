import { portfolioItems } from "@/lib/data";

export default function ShopPage() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-3xl font-semibold">Shop</h1>
      <p className="mt-2 text-muted-foreground">
        Pieces available now — each one links out to the Etsy shop.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <a
            key={item.slug}
            href="https://www.etsy.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border bg-secondary/30 p-6 transition-colors hover:bg-secondary/60"
          >
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              {item.category.replace("-", " ")}
            </span>
            <h2 className="mt-1 font-serif text-lg font-semibold">{item.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            <span className="mt-3 inline-block text-sm font-medium text-primary">
              View on Etsy &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
