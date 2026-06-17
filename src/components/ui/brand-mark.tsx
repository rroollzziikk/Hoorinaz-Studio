"use client";

import Image from "next/image";
import { useState } from "react";

type Variant = "icon" | "medallion";

interface BrandMarkProps {
  variant?: Variant;
  className?: string;
}

/**
 * Renders the Hoorinaz Art badge.
 * - "icon": small, clipped to a circle — for header/footer.
 * - "medallion": large, with a soft gold glow — for hero/about.
 *
 * The constructed mark is rendered first; the real /logo.png fades in on
 * top once it loads. If the file is missing or fails, the constructed
 * mark remains — no broken-image flash, no layout shift.
 */
export function BrandMark({ variant = "icon", className = "" }: BrandMarkProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const showImage = loaded && !failed;

  if (variant === "icon") {
    return (
      <span
        className={`relative block overflow-hidden rounded-full ring-1 ring-primary/30 ${className}`}
      >
        <FallbackIcon />
        <Image
          src="/logo.png"
          alt="Hoorinaz Art"
          fill
          sizes="64px"
          className={`object-cover transition-opacity duration-500 ${
            showImage ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          priority
        />
      </span>
    );
  }

  // medallion
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, hsl(40 60% 50% / 0.18), transparent 65%)",
        }}
      />
      <FallbackMedallion />
      <Image
        src="/logo.png"
        alt="Hoorinaz Art"
        fill
        sizes="(min-width: 768px) 16rem, 13rem"
        className={`rounded-full object-contain drop-shadow-[0_20px_40px_hsl(152_50%_4%/0.7)] transition-opacity duration-500 ${
          showImage ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        priority
      />
    </div>
  );
}

function FallbackIcon() {
  return (
    <span
      className="absolute inset-0 grid place-items-center"
      style={{
        background:
          "radial-gradient(circle at 30% 25%, hsl(152 45% 18%) 0%, hsl(152 45% 11%) 60%, hsl(152 50% 7%) 100%)",
      }}
    >
      <span className="font-serif text-base font-semibold gold-text">H</span>
    </span>
  );
}

function FallbackMedallion() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 rounded-full border border-primary/25" />
      <div className="absolute inset-2 rounded-full border border-primary/20" />
      <div
        className="absolute inset-4 grain rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, hsl(152 45% 18%) 0%, hsl(152 45% 11%) 60%, hsl(152 50% 7%) 100%)",
        }}
      />
      <div className="absolute inset-4 rounded-full border border-primary/35" />
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <p className="font-serif text-3xl italic gold-text leading-none sm:text-4xl">
            Hoorinaz
          </p>
          <p className="mt-1 font-serif text-lg italic text-primary/85 sm:text-xl">
            Art
          </p>
        </div>
      </div>
    </div>
  );
}
