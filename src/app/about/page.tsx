import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Ornament } from "@/components/ui/ornament";
import { InstagramIcon } from "@/components/ui/icons";
import { BrandMark } from "@/components/ui/brand-mark";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export default function AboutPage() {
  return (
    <div className="container py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-xs uppercase tracking-widest text-primary/80">About</p>
        <h1 className="mt-3 font-serif text-4xl font-medium sm:text-5xl">
          A small studio, made <span className="gold-text italic">slowly.</span>
        </h1>
        <Ornament className="mt-8" />
      </header>

      {/* ─────────────── English: medallion + bio ─────────────── */}
      <div className="mt-16 grid gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <BrandMark
            variant="medallion"
            className="mx-auto w-full max-w-sm"
          />
        </div>

        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed text-muted-foreground">
            Hoorinaz recently moved to Canada from Iran, bringing with her a
            lifetime of art and craft. She has been making since she was a
            child — sketching, painting, sewing, working leather and wood —
            and the studio you see here is a quiet continuation of that
            same long practice.
          </p>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Today she teaches what she loves, in small online and in-person
            workshops, and makes pieces by hand from her studio. Her work
            specialises in <span className="text-foreground">leather and wood</span> —
            crafts drawn from Persian tradition, brought into a quieter,
            contemporary key.
          </p>

          <div className="hairline my-8 max-w-xs" />

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/work">View the Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                <InstagramIcon className="mr-2 h-4 w-4" />
                Follow @hoorinaz.art
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* ─────────────── Farsi (Persian) — حوریناز ─────────────── */}
      <section
        dir="rtl"
        lang="fa"
        className="mx-auto mt-28 max-w-3xl text-center"
      >
        <Ornament className="mb-10" />

        <p className="font-farsi text-xs tracking-[0.3em] text-primary/80">
          درباره
        </p>

        {/* The name in Persian — display calligraphy */}
        <h2 className="mt-5 font-farsi text-6xl font-light leading-none gold-text sm:text-7xl">
          حوریناز
        </h2>

        <div className="mt-8 flex w-full items-center justify-center gap-3">
          <span className="h-px w-20 bg-gradient-to-l from-primary/70 to-transparent" />
          <span aria-hidden className="block h-1.5 w-1.5 rotate-45 bg-primary" />
          <span className="h-px w-20 bg-gradient-to-r from-primary/70 to-transparent" />
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-5 font-farsi text-[1.05rem] leading-loose text-muted-foreground sm:text-lg">
          <p>
            حوریناز هنرمندی است که به‌تازگی از ایران به کانادا کوچ کرده —
            با کوله‌باری از خاطره، رنگ، و دست‌هایی که از کودکی با هنر آشنا بوده‌اند.
          </p>
          <p>
            از همان سال‌های کوچکی، با مداد و قلم و سوزن و چرم بزرگ شده؛
            و امروز همان عشق دیرینه را در کارگاه‌های حضوری و آنلاینش به
            دیگران می‌آموزد.
          </p>
          <p>
            تخصص او در{" "}
            <span className="text-foreground">هنر چرم و چوب</span> است —
            اثرهایی که با دست، با حوصله، و با ریشه‌هایی در هنر کهن ایران
            ساخته می‌شوند.
          </p>
        </div>

        {/* Farsi-side CTA */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/workshops">
              <span className="font-farsi">کارگاه‌های آموزشی</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/shop">
              <span className="font-farsi">فروشگاه</span>
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
