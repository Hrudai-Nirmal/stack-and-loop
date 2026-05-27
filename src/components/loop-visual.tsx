import { BarChart3, Check, FileText, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const loopPath =
  "M88 282C165 119 286 124 379 276C472 428 593 435 672 282C594 132 473 128 379 276C285 424 165 432 88 282Z";

export function LoopVisual() {
  return (
    <div className="relative mx-auto aspect-[1.38/1] w-full max-w-3xl">
      <svg
        viewBox="0 0 760 550"
        className="absolute inset-0 h-full w-full overflow-visible"
        role="img"
        aria-label="Animated looping workflow diagram"
      >
        <defs>
          <linearGradient id="loopAccent" x1="90" x2="680" y1="430" y2="120">
            <stop stopColor="#536dff" />
            <stop offset="0.52" stopColor="#8aa2ff" />
            <stop offset="1" stopColor="#536dff" />
          </linearGradient>
          <radialGradient id="pointerGlow">
            <stop offset="0" stopColor="#f7f8ff" />
            <stop offset="0.35" stopColor="#8aa2ff" />
            <stop offset="1" stopColor="#536dff" stopOpacity="0" />
          </radialGradient>
          <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <marker
            id="arrowTip"
            markerHeight="8"
            markerWidth="8"
            orient="auto-start-reverse"
            refX="7"
            refY="4"
            viewBox="0 0 8 8"
          >
            <path d="M0 0L8 4L0 8" fill="none" stroke="#8aa2ff" strokeWidth="1.4" />
          </marker>
        </defs>

        <path id="loopMotionPath" d={loopPath} fill="none" stroke="transparent" />
        <path
          d={loopPath}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="24"
        />
        <path
          d={loopPath}
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.2"
        />
        <path
          d="M112 282C183 148 291 147 379 276C467 405 577 408 648 282"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
          strokeWidth="1"
        />
        <path
          d="M124 282C195 402 288 390 379 276C470 162 566 150 636 282"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
        <path
          className="trace-line"
          d={loopPath}
          fill="none"
          markerEnd="url(#arrowTip)"
          stroke="rgba(255,255,255,0.24)"
          strokeLinecap="round"
          strokeWidth="1.25"
        />
        <path
          className="trace-fast"
          d={loopPath}
          fill="none"
          markerEnd="url(#arrowTip)"
          stroke="url(#loopAccent)"
          strokeLinecap="round"
          strokeWidth="2.25"
          filter="url(#softGlow)"
        />

        <path d="M230 206L379 276L528 205" fill="none" stroke="rgba(255,255,255,0.12)" />
        <path d="M230 350L379 276L528 350" fill="none" stroke="rgba(255,255,255,0.12)" />
        <path d="M379 276V158" fill="none" stroke="rgba(255,255,255,0.08)" />
        <path d="M379 276V402" fill="none" stroke="rgba(255,255,255,0.08)" />

        <circle cx="379" cy="276" r="6" fill="#f7f8ff" />
        <circle
          className="pulse-dot"
          cx="379"
          cy="276"
          r="17"
          fill="rgba(83,109,255,0.22)"
        />

        <g className="motion-only" filter="url(#softGlow)">
          <circle r="18" fill="url(#pointerGlow)" opacity="0.95" />
          <circle r="5.5" fill="#f7f8ff" />
          <circle r="9" fill="none" stroke="#8aa2ff" strokeOpacity="0.45" />
          <animateMotion dur="8.8s" repeatCount="indefinite" rotate="auto">
            <mpath href="#loopMotionPath" />
          </animateMotion>
        </g>
        <g className="reduce-motion-only" filter="url(#softGlow)">
          <circle cx="379" cy="276" r="18" fill="url(#pointerGlow)" opacity="0.95" />
          <circle cx="379" cy="276" r="5.5" fill="#f7f8ff" />
          <circle cx="379" cy="276" r="9" fill="none" stroke="#8aa2ff" strokeOpacity="0.45" />
        </g>
      </svg>

      <Node className="left-[4%] top-[43%]" label="Input" icon={<FileText size={22} />} />
      <Node className="left-[52%] top-[12%]" label="AI assist" icon={<Sparkles size={22} />} />
      <Node className="left-[52%] bottom-[10%]" label="Insights" icon={<BarChart3 size={22} />} />
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
      className={`absolute grid size-16 place-items-center rounded-full border border-white/18 bg-[#111725]/88 text-white shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur transition duration-300 hover:border-[var(--accent-2)]/50 hover:text-[var(--accent-2)] ${className}`}
      aria-label={label}
    >
      {icon}
    </div>
  );
}
