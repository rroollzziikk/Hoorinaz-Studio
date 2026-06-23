import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { portfolioItems, categoryLabel } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/ui/icons";
import { WorkTile } from "@/components/ui/work-tile";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export default async function WorkItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = portfolioItems.find((i) => i.slug === slug);
  if (!item) notFound();

  const next = portfolioItems.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <article className="container py-16">
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Work
      </Link>

      <header className="mt-10 max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-accent">
          {categoryLabel[item.category]}
          {item.year && <span className="ml-3 text-muted-foreground/80">{item.year}</span>}
        </p>
        <h1 className="mt-4 font-serif text-5xl font-medium leading-tight sm:text-6xl">
          {item.title}
        </h1>
        <div className="hairline mt-6 w-24" />
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </header>

      <div className="group mt-12">
        <WorkTile category={item.category} year={item.year} aspect="16/9" />
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Each piece begins on paper — a sketched idea, a swatch of fabric, a
            scrap of leather. From there the work moves slowly: cutting,
            dyeing, stitching, finishing.
          </p>
          <p>
            For commissions or to ask about availability, send a note via the{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact page
            </Link>
            , or follow the latest pieces on Instagram.
          </p>
        </div>
        <aside className="surface-card rounded-md border border-border p-6">
          <p className="text-xs uppercase tracking-widest text-accent">Details</p>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Category</dt>
              <dd className="font-medium">{categoryLabel[item.category]}</dd>
            </div>
            {item.year && (
              <div className="flex items-center justify-between">
                <dt className="text-muted-foreground">Year</dt>
                <dd className="font-medium">{item.year}</dd>
              </div>
            )}
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Made</dt>
              <dd className="font-medium">By hand, in studio</dd>
            </div>
          </dl>
          <div className="hairline my-6" />
          <Button asChild variant="outline" className="w-full">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <InstagramIcon className="mr-2 h-4 w-4" />
              See on Instagram
            </a>
          </Button>
        </aside>
      </div>

      {/* More work */}
      <section className="mt-24">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-2xl">More from the studio</h2>
          <Link href="/work" className="text-sm text-muted-foreground hover:text-primary">
            All work →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {next.map((n) => (
            <Link key={n.slug} href={`/work/${n.slug}`} className="group block">
              <WorkTile category={n.category} year={n.year} aspect="4/3" />
              <div className="mt-3">
                <p className="text-[10px] uppercase tracking-widest text-accent">
                  {categoryLabel[n.category]}
                </p>
                <h3 className="mt-1 font-serif text-lg">{n.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
