import Link from "next/link";
import { ArrowUpRight, Wifi, MapPin } from "lucide-react";
import { workshops } from "@/lib/data";
import { Ornament } from "@/components/ui/ornament";
import { Reveal } from "@/components/ui/reveal";

export default function WorkshopsPage() {
  return (
    <div className="container py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-widest text-accent">Workshops</p>
        <h1 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
          Learn the <span className="italic text-accent">craft.</span>
        </h1>
        <p className="mt-5 text-muted-foreground">
          Small groups, careful materials, and the patient kind of teaching
          that makes the technique stick. Choose online from anywhere, or join
          us in person in Toronto.
        </p>
        <Ornament className="mt-8" />
      </header>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workshops.map((w, i) => {
          const Icon = w.mode === "online" ? Wifi : MapPin;
          return (
            <Reveal key={w.slug} delay={(i % 3) * 80}>
              <Link
                href={`/workshops/${w.slug}`}
                className="group surface-card relative flex h-full flex-col overflow-hidden rounded-sm border border-border p-7 transition-colors duration-500 ease-luxury hover:border-foreground/25"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-sm border border-border px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                    <Icon className="h-3 w-3" /> {w.mode === "online" ? "Online" : "In Person"}
                  </div>
                  {w.price && (
                    <span className="font-serif text-2xl text-accent">{w.price}</span>
                  )}
                </div>

                <h2 className="mt-6 font-serif text-2xl">{w.title}</h2>
                <div className="hairline mt-3 w-16" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {w.description}
                </p>

                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{w.duration}</span>
                  <span className="inline-flex items-center gap-1.5 text-foreground opacity-80 transition-all group-hover:opacity-100 group-hover:gap-2.5">
                    Details <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
