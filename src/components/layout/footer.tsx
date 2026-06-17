import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <div className="container flex flex-col items-center gap-3 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Hoorinaz Studio. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="https://instagram.com" className="hover:text-foreground">
            Instagram
          </Link>
          <Link href="https://facebook.com" className="hover:text-foreground">
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
}
