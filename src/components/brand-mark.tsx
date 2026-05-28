import Link from "next/link";

export function BrandMark() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-line)]"
      aria-label="Stack and Loop home"
    >
      <span className="relative grid size-8 place-items-center rounded-lg border border-[var(--accent-line)] bg-[var(--accent-soft)]">
        <svg viewBox="0 0 32 32" aria-hidden className="size-6 text-[var(--accent-2)]">
          <path
            d="M6 16c3.4-6 8.5-6 12 0s8.6 6 12 0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
          <path
            d="M6 16c3.4 6 8.5 6 12 0s8.6-6 12 0"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeOpacity="0.42"
            strokeWidth="1.8"
          />
        </svg>
      </span>
      <span className="text-lg font-semibold">Stack and Loop</span>
    </Link>
  );
}
