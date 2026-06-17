import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/shop", label: "Shop" },
  { href: "/workshops", label: "Workshops" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight">
          Hoorinaz Studio
        </Link>
        <nav className="flex gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
