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
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link
          href="/"
          aria-label="Hoorinaz Studio — home"
          className="group"
        >
          <BrandMark variant="compact" className="transition-opacity duration-300 group-hover:opacity-70" />
        </Link>

        <nav className="hidden items-center gap-9 text-[0.8rem] uppercase tracking-[0.12em] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 h-px w-0 bg-foreground transition-all duration-300 ease-luxury group-hover:w-full" />
            </Link>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Hoorinaz Studio on Instagram"
            className="inline-flex h-9 items-center gap-2 rounded-sm border border-border px-3 text-foreground transition-colors duration-300 hover:border-foreground"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-foreground md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 bg-background md:hidden">
          <nav className="container flex flex-col gap-1 py-4 text-sm uppercase tracking-[0.1em]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-sm px-2 py-3 text-foreground"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
