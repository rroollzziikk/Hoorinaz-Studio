import { notFound } from "next/navigation";
import Link from "next/link";
import { workshops } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function WorkshopPage({ params }: { params: { slug: string } }) {
  const workshop = workshops.find((w) => w.slug === params.slug);
  if (!workshop) notFound();

  return (
    <div className="container py-16">
      <Link href="/workshops" className="text-sm text-muted-foreground hover:text-foreground">
        &larr; Back to Workshops
      </Link>
      <span className="mt-6 block text-xs uppercase tracking-wide text-muted-foreground">
        {workshop.mode}
      </span>
      <h1 className="mt-1 font-serif text-3xl font-semibold">{workshop.title}</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">{workshop.description}</p>
      <Button className="mt-6" size="lg">
        Register
      </Button>
    </div>
  );
}
