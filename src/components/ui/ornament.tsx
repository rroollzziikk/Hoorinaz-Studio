export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 text-primary/70 ${className}`}
      aria-hidden
    >
      <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60" />
      <svg
        viewBox="0 0 48 16"
        className="h-3.5 w-12 shimmer"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 8 Q 8 0 16 8 T 32 8 T 48 8" />
        <circle cx="24" cy="8" r="2.2" fill="currentColor" />
      </svg>
      <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/60" />
    </div>
  );
}

export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 80"
      className={`text-primary/35 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 40 Q 0 0 40 0" />
      <path d="M8 40 Q 8 8 40 8" />
      <circle cx="40" cy="40" r="1.5" fill="currentColor" />
    </svg>
  );
}
