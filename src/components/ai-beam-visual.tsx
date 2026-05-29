"use client";

import {
  AudioLines,
  BellRing,
  Bot,
  CalendarDays,
  Database,
  FilePenLine,
  FileSearch,
  FileText,
  FileUser,
  Globe2,
  Kanban,
  LifeBuoy,
  ListChecks,
  Mail,
  MailCheck,
  Mic,
  PackageCheck,
  PenLine,
  Radar,
  ReceiptText,
  Search,
  UserPlus,
  UserRound,
} from "lucide-react";
import { useReducedMotion } from "motion/react";
import React from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { Gmail } from "@/components/ui/svgs/gmail";
import { GoogleSheets } from "@/components/ui/svgs/googleSheets";
import { Notion } from "@/components/ui/svgs/notion";
import { SanityDark } from "@/components/ui/svgs/sanityDark";
import { Slack } from "@/components/ui/svgs/slack";

type RotatingTask = {
  label: string;
  icon: React.ReactNode;
  color: string;
  background: string;
};

const taskColumns: RotatingTask[][] = [
  [
    task("Lead intake", <Mail size={20} />, "#4ecdc4"),
    task("Gmail triage", <Gmail className="size-5" />, "#ea4335"),
    task("Contact forms", <FormIcon />, "#7c3aed"),
    task("Meeting requests", <CalendarDays size={20} />, "#34a853"),
    task("Calendar booking", <CalendarDays size={20} />, "#4285f4"),
    task("Support tickets", <LifeBuoy size={20} />, "#f97316"),
    task("Client onboarding", <UserPlus size={20} />, "#a27b5c"),
    task("Invoice intake", <ReceiptText size={20} />, "#f59e0b"),
    task("Job applications", <FileUser size={20} />, "#60a5fa"),
    task("Voice notes", <Mic size={20} />, "#ec4899"),
  ],
  [
    task("Web research", <Globe2 size={20} />, "#f59e0b"),
    task("Competitor monitoring", <Radar size={20} />, "#ef4444"),
    task("Doc summaries", <FileText size={20} />, "#dcd7c9"),
    task("Call transcripts", <AudioLines size={20} />, "#22c55e"),
    task("CRM enrichment", <Database size={20} />, "#ff7a59"),
    task("Prospect research", <Search size={20} />, "#60a5fa"),
    task("Content briefs", <PenLine size={20} />, "#c084fc"),
    task("Notion lookup", <Notion className="size-5" />, "#f4f4f4"),
    task("Contract extraction", <FileSearch size={20} />, "#fbbf24"),
    task("Feedback clusters", <ClusterIcon />, "#fb7185"),
  ],
  [
    task("Slack routing", <Slack className="size-5" />, "#36c5f0"),
    task("Sheet updates", <GoogleSheets className="size-5" />, "#0f9d58"),
    task("CRM cleanup", <Database size={20} />, "#ff7a59"),
    task("Follow-up drafts", <MailCheck size={20} />, "#4ecdc4"),
    task("Proposal drafts", <FilePenLine size={20} />, "#a78bfa"),
    task("Status updates", <ListChecks size={20} />, "#38bdf8"),
    task("Task creation", <Kanban size={20} />, "#f97316"),
    task("Client handoff", <PackageCheck size={20} />, "#dcd7c9"),
    task("Approval reminders", <BellRing size={20} />, "#facc15"),
    task("CMS updates", <SanityDark className="size-5" />, "#f03e2f"),
  ],
];

function task(label: string, icon: React.ReactNode, color: string): RotatingTask {
  return {
    label,
    icon,
    color,
    background: colorToBackground(color),
  };
}

function colorToBackground(color: string) {
  return `${color}24`;
}

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
    }, 2100);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

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
          <BeamNode ref={intakeRef} tasks={taskColumns[0]} index={tick} />
          <BeamNode ref={researchRef} tasks={taskColumns[1]} index={tick + 3} />
          <BeamNode ref={routingRef} tasks={taskColumns[2]} index={tick + 6} />
        </div>
        <div className="grid place-items-center">
          <BeamNode
            ref={aiRef}
            tasks={[
              {
                label: "AI workflow",
                icon: <Bot size={24} />,
                color: "var(--accent)",
                background: "var(--accent-soft)",
              },
            ]}
            index={0}
            prominent
          />
        </div>
        <div className="grid place-items-center md:justify-items-end">
          <BeamNode
            ref={humanRef}
            tasks={[
              task("Human review", <UserRound size={24} />, "#dcd7c9"),
            ]}
            index={0}
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
    tasks: RotatingTask[];
    index: number;
    prominent?: boolean;
  }
>(function BeamNode({ index, prominent = false, tasks }, ref) {
  const activeIndex = tasks.length === 1 ? 0 : index % tasks.length;
  const activeTask = tasks[activeIndex];

  return (
    <div
      ref={ref}
      className={`relative z-10 flex items-center gap-3 rounded-lg border hairline bg-black/34 px-4 py-3 text-white/84 backdrop-blur-sm ${
        prominent ? "min-w-44 justify-center py-5 text-white" : "w-full max-w-56"
      }`}
    >
      <Reel
        tasks={tasks}
        activeIndex={activeIndex}
        kind="icon"
        style={
          {
            "--task-color": activeTask.color,
            "--task-bg": activeTask.background,
          } as React.CSSProperties
        }
      />
      <Reel tasks={tasks} activeIndex={activeIndex} kind="label" />
    </div>
  );
});

function Reel({
  activeIndex,
  kind,
  style,
  tasks,
}: {
  activeIndex: number;
  kind: "icon" | "label";
  style?: React.CSSProperties;
  tasks: RotatingTask[];
}) {
  return (
    <span
      className={kind === "icon" ? "beam-icon-reel" : "beam-label-reel"}
      style={style}
      aria-hidden={kind === "icon"}
    >
      <span
        className="beam-reel-track"
        style={{ transform: `translateY(-${activeIndex * (kind === "icon" ? 2.25 : 1.5)}rem)` }}
      >
        {tasks.map((taskItem) => (
          <span
            key={taskItem.label}
            className={kind === "icon" ? "beam-icon-reel__item" : "beam-label-reel__item"}
          >
            {kind === "icon" ? taskItem.icon : taskItem.label}
          </span>
        ))}
      </span>
    </span>
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

function ClusterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <circle cx="7.2" cy="8" r="3" fill="#fb7185" />
      <circle cx="16.6" cy="7.2" r="2.5" fill="#fda4af" />
      <circle cx="14.8" cy="16.2" r="3.3" fill="#be123c" />
      <path d="M9.7 9.2 13.9 14M14.1 8.7 9.8 8.3" stroke="#ffe4e6" strokeLinecap="round" strokeWidth="1.25" />
    </svg>
  );
}
