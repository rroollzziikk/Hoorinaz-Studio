"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { BrandMark } from "@/components/ui/brand-mark";

const links = [
  { href: "/work", label: "Work" },
  { href: "/shop", label: "Shop" },
  { href: "/workshops", label: "Workshops" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const INSTAGRAM_URL = "https://www.instagram.com/hoorinaz.art/";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="Hoorinaz Art Studio — home"
          className="group"
        >
          <BrandMark variant="compact" className="transition-opacity group-hover:opacity-90" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Hoorinaz on Instagram"
            className="ml-2 inline-flex h-9 items-center gap-2 rounded-full border border-primary/40 px-3 text-xs tracking-wide text-foreground transition-all hover:border-primary hover:glow-gold"
          >
            <InstagramIcon className="h-3.5 w-3.5 text-primary" />
            @hoorinaz.art
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/60 text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="container flex flex-col gap-1 py-3 text-sm">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-md px-2 py-2.5 text-foreground"
            >
              <InstagramIcon className="h-4 w-4 text-primary" />
              @hoorinaz.art
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
