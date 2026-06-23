export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-3 ${className}`}
      aria-hidden
    >
      <span className="h-px w-10 bg-border" />
      <span className="block h-1 w-1 rotate-45 bg-accent/70" />
      <span className="h-px w-10 bg-border" />
    </div>
  );
}

export function CornerOrnament({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 80"
      className={`text-border ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M0 40 Q 0 0 40 0" />
    </svg>
  );
}
