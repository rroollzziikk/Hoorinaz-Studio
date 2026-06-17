import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Wifi, MapPin, Clock, Users } from "lucide-react";
import { workshops } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const workshop = workshops.find((w) => w.slug === slug);
  if (!workshop) notFound();

  const ModeIcon = workshop.mode === "online" ? Wifi : MapPin;

  return (
    <article className="container py-16">
      <Link
        href="/workshops"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to Workshops
      </Link>

      <div className="mt-10 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] uppercase tracking-widest text-primary/90">
            <ModeIcon className="h-3 w-3" /> {workshop.mode === "online" ? "Online" : "In Person"}
          </div>
          <h1 className="mt-5 font-serif text-5xl font-medium leading-tight sm:text-6xl">
            {workshop.title}
          </h1>
          <div className="hairline mt-6 w-24" />
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {workshop.description}
          </p>

          <div className="mt-10 space-y-3 text-sm text-muted-foreground">
            <p className="font-serif text-2xl text-foreground">What you&apos;ll do</p>
            <ul className="mt-3 space-y-2">
              <li className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /> Begin with materials and tool orientation.</li>
              <li className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /> Practice the foundational technique on a sample piece.</li>
              <li className="flex gap-3"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" /> Finish a small piece of your own to take home.</li>
            </ul>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="surface-card sticky top-24 overflow-hidden rounded-2xl border border-primary/30 p-8">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-48 w-48 rounded-full"
              style={{ background: "radial-gradient(circle, hsl(40 60% 50% / 0.2), transparent 70%)" }}
            />
            {workshop.price && (
              <>
                <p className="text-xs uppercase tracking-widest text-primary/80">From</p>
                <p className="mt-1 font-serif text-5xl gold-text">{workshop.price}</p>
              </>
            )}

            <dl className="mt-8 space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="inline-flex items-center gap-2 text-muted-foreground">
                  <ModeIcon className="h-4 w-4" /> Format
                </dt>
                <dd className="font-medium capitalize">{workshop.mode}</dd>
              </div>
              {workshop.duration && (
                <div className="flex items-center justify-between gap-4">
                  <dt className="inline-flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" /> Length
                  </dt>
                  <dd className="font-medium">{workshop.duration}</dd>
                </div>
              )}
              <div className="flex items-center justify-between gap-4">
                <dt className="inline-flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" /> Group
                </dt>
                <dd className="font-medium">8 max</dd>
              </div>
            </dl>

            <div className="hairline my-6" />

            <Button size="lg" className="w-full">
              Register
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Spaces are limited. You&apos;ll receive a confirmation by email.
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
