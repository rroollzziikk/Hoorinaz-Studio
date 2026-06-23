import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export function Footer() {
  return (
    <footer className="relative z-10 mt-32 bg-ink-900 text-background">
      <div className="container grid gap-12 py-20 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="font-serif text-xl tracking-tight">Hoorinaz</span>
          <span className="ml-2 text-[10px] uppercase tracking-[0.4em] text-background/50">
            Studio
          </span>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-background/60">
            A design &amp; handcraft studio working across fashion, textile,
            wood, leather, and interior — made by hand, with care.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-sm border border-background/25 px-4 py-2 text-sm transition-colors duration-300 hover:border-background/70"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow @hoorinaz.art
          </a>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-background/45">
            Studio
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-background/70">
            <li><Link href="/about" className="hover:text-background">About</Link></li>
            <li><Link href="/contact" className="hover:text-background">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-background/45">
            Visit
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-background/70">
            <li><Link href="/work" className="hover:text-background">Work</Link></li>
            <li><Link href="/shop" className="hover:text-background">Shop</Link></li>
            <li><Link href="/workshops" className="hover:text-background">Workshops</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-background/45">
            Connect
          </h3>
          <ul className="mt-5 space-y-2.5 text-sm text-background/70">
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-background"
              >
                <InstagramIcon className="h-4 w-4" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@hoorinaz.ca"
                className="inline-flex items-center gap-2 hover:text-background"
              >
                <Mail className="h-4 w-4" /> hello@hoorinaz.ca
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container flex flex-col items-center justify-between gap-3 py-6 text-xs text-background/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Hoorinaz Studio. Made by hand.</p>
          <p className="uppercase tracking-[0.2em]">
            Toronto &middot; Online &amp; Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
