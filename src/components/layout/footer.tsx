import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { BrandMark } from "@/components/ui/brand-mark";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-border/40 bg-ink-700/70">
      <div className="container grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <BrandMark variant="compact" className="text-[1rem]" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A handcraft &amp; design studio working across fashion, textile,
            wood, leather, and interior design — each piece quietly made by
            hand.
          </p>
          <div className="hairline mt-8 max-w-xs" />
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 text-sm transition-all hover:border-primary hover:glow-gold"
          >
            <InstagramIcon className="h-4 w-4 text-primary" />
            Follow @hoorinaz.art
          </a>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs uppercase tracking-widest text-primary/80">
            Studio
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground">About</Link></li>
            <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-xs uppercase tracking-widest text-primary/80">
            Visit
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li><Link href="/work" className="hover:text-foreground">Work</Link></li>
            <li><Link href="/shop" className="hover:text-foreground">Shop</Link></li>
            <li><Link href="/workshops" className="hover:text-foreground">Workshops</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs uppercase tracking-widest text-primary/80">
            Connect
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <InstagramIcon className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@hoorinaz.ca"
                className="inline-flex items-center gap-2 hover:text-foreground"
              >
                <Mail className="h-4 w-4" /> hello@hoorinaz.ca
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/30">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Hoorinaz Studio. Made by hand.</p>
          <p className="tracking-widest uppercase">
            Toronto &middot; <span className="text-primary/80">Online &amp; Worldwide</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
