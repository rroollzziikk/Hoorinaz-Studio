import Link from "next/link";
import { workshops } from "@/lib/data";

export default function WorkshopsPage() {
  return (
    <div className="container py-16">
      <h1 className="font-serif text-3xl font-semibold">Workshops</h1>
      <p className="mt-2 text-muted-foreground">
        Online and in-person workshops to learn the craft hands-on.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workshops.map((workshop) => (
          <Link
            key={workshop.slug}
            href={`/workshops/${workshop.slug}`}
            className="rounded-lg border bg-secondary/30 p-6 transition-colors hover:bg-secondary/60"
          >
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              {workshop.mode}
            </span>
            <h2 className="mt-1 font-serif text-lg font-semibold">{workshop.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{workshop.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
