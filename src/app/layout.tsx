import type { Metadata } from "next";
import { Fraunces, Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const farsi = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-farsi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hoorinaz Studio — Handcraft & Design",
  description:
    "A handcraft & design studio. Fashion, textile, wood, leather, and interior design — plus art workshops by Hoorinaz.",
  openGraph: {
    title: "Hoorinaz Studio",
    description:
      "Handcraft & design studio — made by hand, with care. Follow @hoorinaz.art on Instagram.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} ${farsi.variable}`}>
      <body className="relative flex min-h-screen flex-col font-sans text-foreground">
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
