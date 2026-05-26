import { BarChart3, Check, FileText, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

export function LoopVisual() {
  return (
    <div className="relative mx-auto aspect-[1.38/1] w-full max-w-3xl">
      <svg
        viewBox="0 0 760 550"
        className="absolute inset-0 h-full w-full overflow-visible"
        role="img"
        aria-label="Looping workflow diagram"
      >
        <defs>
          <linearGradient id="loopAccent" x1="120" x2="650" y1="450" y2="110">
            <stop stopColor="#536dff" />
            <stop offset="1" stopColor="#8aa2ff" />
          </linearGradient>
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M94 286C178 98 290 106 380 276C470 446 594 453 681 274"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.2"
        />
        <path
          d="M94 286C178 474 290 466 380 296C470 126 594 119 681 298"
          fill="none"
          stroke="rgba(255,255,255,0.17)"
          strokeWidth="1.2"
        />
        <path
          className="trace-line"
          d="M94 286C178 98 290 106 380 276C470 446 594 453 681 274"
          fill="none"
          stroke="rgba(255,255,255,0.32)"
          strokeLinecap="round"
          strokeWidth="1.4"
        />
        <path
          className="trace-fast"
          d="M94 286C178 474 290 466 380 296C470 126 594 119 681 298"
          fill="none"
          stroke="url(#loopAccent)"
          strokeLinecap="round"
          strokeWidth="2.4"
          filter="url(#softGlow)"
        />
        <path
          d="M253 210L380 276L505 212"
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
        />
        <path
          d="M253 342L380 296L505 361"
          fill="none"
          stroke="rgba(255,255,255,0.16)"
          strokeWidth="1"
        />
        <circle cx="380" cy="286" r="6" fill="#f7f8ff" />
        <circle
          className="pulse-dot"
          cx="380"
          cy="286"
          r="12"
          fill="rgba(83,109,255,0.24)"
        />
      </svg>

      <Node className="left-[4%] top-[43%]" label="Input" icon={<FileText size={22} />} />
      <Node className="left-[50%] top-[15%]" label="Assist" icon={<Sparkles size={22} />} />
      <Node className="left-[50%] bottom-[13%]" label="Review" icon={<BarChart3 size={22} />} />
      <Node className="right-[3%] top-[43%]" label="Done" icon={<Check size={22} />} />
    </div>
  );
}

function Node({
  className,
  icon,
  label,
}: {
  className: string;
  icon: ReactNode;
  label: string;
}) {
  return (
    <div
      className={`absolute grid size-16 place-items-center rounded-full border border-white/18 bg-[#111725]/88 text-white shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur ${className}`}
      aria-label={label}
    >
      {icon}
    </div>
  );
}
