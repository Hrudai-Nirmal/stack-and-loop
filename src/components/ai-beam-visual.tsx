"use client";

import {
  Bot,
  CalendarDays,
  ClipboardList,
  Database,
  FileText,
  Globe2,
  Mail,
  Search,
  UserRound,
} from "lucide-react";
import { useReducedMotion } from "motion/react";
import React from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

type RotatingTask = {
  label: string;
  icon: React.ReactNode;
  color: string;
  background: string;
};

const taskColumns: RotatingTask[][] = [
  [
    {
      label: "Lead intake",
      icon: <Mail size={20} />,
      color: "#4ecdc4",
      background: "rgba(78, 205, 196, 0.14)",
    },
    {
      label: "Gmail triage",
      icon: <GmailIcon />,
      color: "#ea4335",
      background: "rgba(234, 67, 53, 0.13)",
    },
    {
      label: "Form replies",
      icon: <FormIcon />,
      color: "#7c3aed",
      background: "rgba(124, 58, 237, 0.13)",
    },
    {
      label: "Calendar booking",
      icon: <CalendarDays size={20} />,
      color: "#34a853",
      background: "rgba(52, 168, 83, 0.13)",
    },
  ],
  [
    {
      label: "Research",
      icon: <FileText size={20} />,
      color: "#dcd7c9",
      background: "rgba(220, 215, 201, 0.1)",
    },
    {
      label: "Web scanning",
      icon: <Globe2 size={20} />,
      color: "#f59e0b",
      background: "rgba(245, 158, 11, 0.13)",
    },
    {
      label: "Notion notes",
      icon: <NotionIcon />,
      color: "#f4f4f4",
      background: "rgba(244, 244, 244, 0.1)",
    },
    {
      label: "Doc summaries",
      icon: <Search size={20} />,
      color: "#60a5fa",
      background: "rgba(96, 165, 250, 0.13)",
    },
  ],
  [
    {
      label: "Tasks",
      icon: <ClipboardList size={20} />,
      color: "#a27b5c",
      background: "rgba(162, 123, 92, 0.16)",
    },
    {
      label: "Slack routing",
      icon: <SlackIcon />,
      color: "#36c5f0",
      background: "rgba(54, 197, 240, 0.13)",
    },
    {
      label: "Sheet updates",
      icon: <SheetsIcon />,
      color: "#0f9d58",
      background: "rgba(15, 157, 88, 0.13)",
    },
    {
      label: "CRM cleanup",
      icon: <Database size={20} />,
      color: "#ff7a59",
      background: "rgba(255, 122, 89, 0.13)",
    },
  ],
];

export function AIBeamVisual() {
  const shouldReduceMotion = useReducedMotion();
  const [tick, setTick] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const intakeRef = React.useRef<HTMLDivElement>(null);
  const researchRef = React.useRef<HTMLDivElement>(null);
  const routingRef = React.useRef<HTMLDivElement>(null);
  const aiRef = React.useRef<HTMLDivElement>(null);
  const humanRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setTick((current) => current + 1);
    }, 2200);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  const rotatingTasks = taskColumns.map((column, index) => {
    const currentIndex = shouldReduceMotion ? 0 : (tick + index) % column.length;
    return column[currentIndex];
  });

  const beamProps = {
    containerRef,
    pathColor: "var(--line-strong)",
    pathOpacity: 0.22,
    pathWidth: 1.4,
    gradientStartColor: "var(--accent-2)",
    gradientStopColor: "var(--accent)",
    duration: shouldReduceMotion ? 0.001 : 4.8,
    repeat: shouldReduceMotion ? 0 : Infinity,
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[24rem] overflow-hidden rounded-lg border hairline bg-white/[0.025] p-6 md:min-h-[28rem] md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_42%)]" />
      <div className="relative grid min-h-[20rem] items-center gap-6 md:min-h-[24rem] md:grid-cols-[0.9fr_0.8fr_0.9fr]">
        <div className="grid gap-4">
          <BeamNode ref={intakeRef} task={rotatingTasks[0]} />
          <BeamNode ref={researchRef} task={rotatingTasks[1]} />
          <BeamNode ref={routingRef} task={rotatingTasks[2]} />
        </div>
        <div className="grid place-items-center">
          <BeamNode
            ref={aiRef}
            task={{
              label: "AI workflow",
              icon: <Bot size={24} />,
              color: "var(--accent)",
              background: "var(--accent-soft)",
            }}
            prominent
          />
        </div>
        <div className="grid place-items-center md:justify-items-end">
          <BeamNode
            ref={humanRef}
            task={{
              label: "Human review",
              icon: <UserRound size={24} />,
              color: "#dcd7c9",
              background: "rgba(220, 215, 201, 0.1)",
            }}
            prominent
          />
        </div>
      </div>

      <AnimatedBeam {...beamProps} fromRef={intakeRef} toRef={aiRef} curvature={-42} />
      <AnimatedBeam {...beamProps} fromRef={researchRef} toRef={aiRef} delay={0.8} />
      <AnimatedBeam {...beamProps} fromRef={routingRef} toRef={aiRef} curvature={42} delay={1.6} />
      <AnimatedBeam
        {...beamProps}
        fromRef={aiRef}
        toRef={humanRef}
        curvature={0}
        delay={2.1}
        duration={shouldReduceMotion ? 0.001 : 5.6}
      />
    </div>
  );
}

const BeamNode = React.forwardRef<
  HTMLDivElement,
  {
    task: RotatingTask;
    prominent?: boolean;
  }
>(function BeamNode({ task, prominent = false }, ref) {
  return (
    <div
      ref={ref}
      className={`relative z-10 flex items-center gap-3 rounded-lg border hairline bg-black/34 px-4 py-3 text-white/84 backdrop-blur-sm ${
        prominent ? "min-w-44 justify-center py-5 text-white" : "w-full max-w-56"
      }`}
    >
      <span
        key={`${task.label}-icon`}
        className="beam-task-icon grid size-9 place-items-center rounded-lg border"
        style={
          {
            "--task-color": task.color,
            "--task-bg": task.background,
          } as React.CSSProperties
        }
      >
        {task.icon}
      </span>
      <span key={task.label} className="beam-task-label text-sm font-medium">
        {task.label}
      </span>
    </div>
  );
});

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path d="M4.5 6.5h15v11h-15z" fill="#fff" />
      <path d="M5.25 6.5 12 11.55 18.75 6.5" fill="none" stroke="#ea4335" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      <path d="M5.25 7.35v9.15" stroke="#34a853" strokeLinecap="round" strokeWidth="2.4" />
      <path d="M18.75 7.35v9.15" stroke="#4285f4" strokeLinecap="round" strokeWidth="2.4" />
      <path d="M5.25 16.5h13.5" stroke="#fbbc04" strokeLinecap="round" strokeWidth="2.4" />
    </svg>
  );
}

function SlackIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <rect x="10.1" y="3" width="3.2" height="8.2" rx="1.6" fill="#36c5f0" />
      <rect x="3" y="10.1" width="8.2" height="3.2" rx="1.6" fill="#36c5f0" />
      <rect x="12.8" y="3" width="3.2" height="8.2" rx="1.6" transform="rotate(90 14.4 7.1)" fill="#2eb67d" />
      <rect x="12.8" y="12.8" width="8.2" height="3.2" rx="1.6" fill="#2eb67d" />
      <rect x="10.1" y="12.8" width="3.2" height="8.2" rx="1.6" fill="#ecb22e" />
      <rect x="3" y="7.4" width="8.2" height="3.2" rx="1.6" transform="rotate(90 7.1 9)" fill="#e01e5a" />
    </svg>
  );
}

function SheetsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path d="M7 3h7l4 4v14H7z" fill="#0f9d58" />
      <path d="M14 3v5h4" fill="#8fd1ac" />
      <path d="M9.25 10.25h6.5M9.25 13h6.5M9.25 15.75h6.5M11.25 10.25v5.5M13.75 10.25v5.5" stroke="#fff" strokeLinecap="round" strokeWidth="0.9" />
    </svg>
  );
}

function NotionIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path d="M5 4.5 16.9 3.6 20 6.05v13.1L7.3 20.4 4 17.95V6.4z" fill="#f7f7f7" stroke="#111" strokeLinejoin="round" strokeWidth="1.2" />
      <path d="M8.2 8h2.3l4.1 6.3V8.6l-1.2-.15V8h3.2v.45l-1.1.15v8h-1.4l-4.8-7.2v6.4l1.35.18v.44H7.2v-.44l1.25-.18V8.7L8.2 8.45z" fill="#111" />
    </svg>
  );
}

function FormIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <rect x="5" y="3.8" width="14" height="16.4" rx="2.2" fill="#7c3aed" />
      <path d="M8.1 8.2h7.8M8.1 11.8h7.8M8.1 15.4h3.8" stroke="#fff" strokeLinecap="round" strokeWidth="1.5" />
      <circle cx="16.2" cy="15.4" r="1.3" fill="#fbbf24" />
    </svg>
  );
}
