import Link from "next/link";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Design",
    description:
      "Fashion and textile design, painting on wood, leather jewelry and goods, plus interior styling — all made by hand.",
    href: "/work",
  },
  {
    title: "Shop",
    description: "Browse handcrafted pieces and find them on Etsy.",
    href: "/shop",
  },
  {
    title: "Workshops",
    description: "Join an online or in-person workshop and learn the craft.",
    href: "/workshops",
  },
];

export default function Home() {
  return (
    <>
      <section className="container flex flex-col items-center gap-6 py-24 text-center">
        <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Hoorinaz Studio
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          A handcraft &amp; design studio — fashion, textile, wood, leather,
          and interior design, made with care.
        </p>
        <div className="flex gap-3">
          <Button asChild size="lg">
            <Link href="/work">View the Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/workshops">Join a Workshop</Link>
          </Button>
        </div>
      </section>

      <section className="container grid gap-6 pb-24 sm:grid-cols-3">
        {pillars.map((pillar) => (
          <Link
            key={pillar.title}
            href={pillar.href}
            className="rounded-lg border bg-secondary/30 p-6 transition-colors hover:bg-secondary/60"
          >
            <h2 className="font-serif text-xl font-semibold">{pillar.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {pillar.description}
            </p>
          </Link>
        ))}
      </section>
    </>
  );
}
