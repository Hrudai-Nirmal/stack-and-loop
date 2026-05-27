const loopPath =
  "M78 230C144 91 250 94 330 224C410 354 516 359 584 230C516 101 410 96 330 224C250 352 144 369 78 230Z";

export function StaticLoopVisual() {
  return (
    <div className="relative mx-auto aspect-[1.45/1] w-full max-w-3xl">
      <svg
        viewBox="0 0 660 460"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label="Static loop workflow mark"
      >
        <defs>
          <linearGradient id="staticLoopStroke" x1="78" x2="584" y1="356" y2="104">
            <stop stopColor="rgba(255,255,255,0.22)" />
            <stop offset="0.5" stopColor="rgba(255,255,255,0.92)" />
            <stop offset="1" stopColor="rgba(255,255,255,0.28)" />
          </linearGradient>
        </defs>
        <path
          d={loopPath}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeLinecap="round"
          strokeWidth="28"
        />
        <path
          d={loopPath}
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeLinecap="round"
          strokeWidth="1.25"
        />
        <path
          d={loopPath}
          fill="none"
          stroke="url(#staticLoopStroke)"
          strokeLinecap="round"
          strokeWidth="2.6"
        />
        <circle cx="330" cy="224" r="4" fill="rgba(255,255,255,0.9)" />
        <circle cx="330" cy="224" r="10" fill="none" stroke="rgba(255,255,255,0.16)" />
      </svg>
    </div>
  );
}
