import { notFound } from "next/navigation";
import Link from "next/link";
import { portfolioItems } from "@/lib/data";

export default function WorkItemPage({ params }: { params: { slug: string } }) {
  const item = portfolioItems.find((i) => i.slug === params.slug);
  if (!item) notFound();

  return (
    <div className="container py-16">
      <Link href="/work" className="text-sm text-muted-foreground hover:text-foreground">
        &larr; Back to Work
      </Link>
      <span className="mt-6 block text-xs uppercase tracking-wide text-muted-foreground">
        {item.category.replace("-", " ")}
      </span>
      <h1 className="mt-1 font-serif text-3xl font-semibold">{item.title}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{item.description}</p>
    </div>
  );
}
