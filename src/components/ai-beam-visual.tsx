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

type ManualTask = RotatingTask & {
  left: string;
  top: string;
};

const allTasks: RotatingTask[] = [
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
];

const taskColumns: RotatingTask[][] = Array.from({ length: 5 }, (_, index) =>
  allTasks.slice(index * 6, index * 6 + 6),
);

const automationSteps = [
  "Gathering the Pieces",
  "Figuring out the Plan",
  "Making the Move",
];

const manualTasks: ManualTask[] = [
  { ...allTasks[0], left: "13%", top: "22%" },
  { ...allTasks[1], left: "31%", top: "13%" },
  { ...allTasks[2], left: "55%", top: "14%" },
  { ...allTasks[3], left: "78%", top: "24%" },
  { ...allTasks[10], left: "86%", top: "48%" },
  { ...allTasks[12], left: "76%", top: "74%" },
  { ...allTasks[20], left: "55%", top: "84%" },
  { ...allTasks[21], left: "31%", top: "78%" },
  { ...allTasks[22], left: "13%", top: "58%" },
  { ...allTasks[28], left: "18%", top: "39%" },
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
  const [mode, setMode] = React.useState<"manual" | "transition" | "automated">("manual");
  const [automationStep, setAutomationStep] = React.useState(0);
  const [tick, setTick] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const manualHumanRef = React.useRef<HTMLDivElement>(null);
  const manualTaskRefs = React.useMemo(
    () => manualTasks.map(() => React.createRef<HTMLDivElement>()),
    [],
  );
  const intakeRef = React.useRef<HTMLDivElement>(null);
  const researchRef = React.useRef<HTMLDivElement>(null);
  const routingRef = React.useRef<HTMLDivElement>(null);
  const followupRef = React.useRef<HTMLDivElement>(null);
  const statusRef = React.useRef<HTMLDivElement>(null);
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

  React.useEffect(() => {
    if (mode !== "transition") {
      return;
    }

    const stepTimers = [
      window.setTimeout(() => setAutomationStep(1), 1200),
      window.setTimeout(() => setAutomationStep(2), 2400),
    ];
    const doneTimer = window.setTimeout(() => {
      setMode("automated");
    }, 4000);

    return () => {
      stepTimers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(doneTimer);
    };
  }, [mode, shouldReduceMotion]);

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
  const returnBeamProps = {
    ...beamProps,
    pathOpacity: 0,
    pathWidth: 1.2,
    duration: shouldReduceMotion ? 0.001 : 5.4,
    reverse: true,
  };
  const modeFadeClassName = "transition-opacity duration-700";
  const manualBeamClassName = `${modeFadeClassName} ${
    mode === "manual" ? "opacity-100" : "opacity-0"
  }`;
  const automatedBeamClassName = `${modeFadeClassName} ${
    mode === "automated" ? "opacity-100" : "opacity-0"
  }`;
  const automatedTaskRefs = [
    { ref: intakeRef, curvature: -52, delay: 0 },
    { ref: researchRef, curvature: -24, delay: 0.45 },
    { ref: routingRef, curvature: 0, delay: 0.9 },
    { ref: followupRef, curvature: 24, delay: 1.35 },
    { ref: statusRef, curvature: 52, delay: 1.8 },
  ];

  function toggleAutomation() {
    if (mode === "automated") {
      setMode("manual");
      return;
    }

    if (mode === "manual") {
      setAutomationStep(0);
      if (shouldReduceMotion) {
        setMode("automated");
        return;
      }
      setMode("transition");
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-[24rem] overflow-hidden rounded-lg border hairline bg-white/[0.025] p-6 md:min-h-[28rem] md:p-8"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),transparent_42%)]" />
      <button
        type="button"
        onClick={toggleAutomation}
        disabled={mode === "transition"}
        className="absolute right-5 top-5 z-30 rounded-lg border border-[var(--accent-line)] bg-[var(--accent-soft)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--accent-line)] disabled:cursor-default disabled:opacity-80"
      >
        {mode === "automated" ? "Manualise" : mode === "transition" ? "Automating" : "Automate"}
      </button>

      <div
        className={`absolute inset-0 z-10 ${modeFadeClassName} ${
          mode === "manual" ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          ref={manualHumanRef}
          className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-lg border hairline bg-black/46 px-5 py-4 text-white backdrop-blur-sm"
        >
          <span className="grid size-11 place-items-center rounded-lg border border-white/20 bg-white/8 text-white">
            <UserRound size={24} aria-hidden />
          </span>
          <span className="text-sm font-medium">Human operator</span>
        </div>

        {manualTasks.map((taskItem, index) => (
          <ManualTaskNode
            key={taskItem.label}
            ref={manualTaskRefs[index]}
            task={taskItem}
          />
        ))}
      </div>

      <div
        className={`absolute inset-0 z-20 grid place-items-center px-6 text-center transition-opacity duration-500 ${
          mode === "transition" ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="rounded-lg border hairline bg-black/44 px-8 py-7 backdrop-blur-sm">
          <p className="font-mono text-sm uppercase text-[var(--accent)]">
            Automating workflow
          </p>
          <div className="mt-4 h-8 overflow-hidden">
            <div
              className="beam-transition-step-track"
              style={{ transform: `translateY(-${automationStep * 2}rem)` }}
            >
              {automationSteps.map((step) => (
                <p
                  key={step}
                  className="flex h-8 items-center justify-center text-2xl font-semibold text-white"
                >
                  {step}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 grid min-h-[20rem] items-center gap-6 ${modeFadeClassName} md:min-h-[24rem] md:grid-cols-[0.95fr_0.75fr_0.9fr] ${
          mode === "automated" ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="grid gap-3">
          <BeamNode ref={intakeRef} tasks={taskColumns[0]} index={tick} />
          <BeamNode ref={researchRef} tasks={taskColumns[1]} index={tick + 1} />
          <BeamNode ref={routingRef} tasks={taskColumns[2]} index={tick + 2} />
          <BeamNode ref={followupRef} tasks={taskColumns[3]} index={tick + 3} />
          <BeamNode ref={statusRef} tasks={taskColumns[4]} index={tick + 4} />
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

      {manualTaskRefs.map((taskRef, index) => {
        const curvature = (index % 2 === 0 ? 34 : -34) + (index % 3) * 8;
        return (
          <React.Fragment key={manualTasks[index].label}>
            <AnimatedBeam
              {...beamProps}
              className={manualBeamClassName}
              fromRef={taskRef}
              toRef={manualHumanRef}
              curvature={curvature}
              delay={index * 0.18}
              duration={shouldReduceMotion ? 0.001 : 5.8}
            />
            <AnimatedBeam
              {...returnBeamProps}
              className={manualBeamClassName}
              fromRef={taskRef}
              toRef={manualHumanRef}
              curvature={curvature}
              delay={0.9 + index * 0.18}
              duration={shouldReduceMotion ? 0.001 : 6.2}
            />
          </React.Fragment>
        );
      })}

      {automatedTaskRefs.map(({ curvature, delay, ref }) => (
        <React.Fragment key={delay}>
          <AnimatedBeam
            className={automatedBeamClassName}
            {...beamProps}
            fromRef={ref}
            toRef={aiRef}
            curvature={curvature}
            delay={delay}
          />
          <AnimatedBeam
            className={automatedBeamClassName}
            {...returnBeamProps}
            fromRef={ref}
            toRef={aiRef}
            curvature={curvature}
            delay={delay + 1.1}
          />
        </React.Fragment>
      ))}
      <AnimatedBeam
        {...beamProps}
        className={automatedBeamClassName}
        fromRef={aiRef}
        toRef={humanRef}
        curvature={0}
        delay={2.1}
        duration={shouldReduceMotion ? 0.001 : 5.6}
      />
    </div>
  );
}

const ManualTaskNode = React.forwardRef<
  HTMLDivElement,
  {
    task: ManualTask;
  }
>(function ManualTaskNode({ task }, ref) {
  return (
    <div
      ref={ref}
      className="absolute z-10 flex w-36 -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-lg border hairline bg-black/34 px-3 py-2 text-white/84 backdrop-blur-sm md:w-40"
      style={{ left: task.left, top: task.top }}
    >
      <span
        className="beam-static-icon grid size-8 shrink-0 place-items-center rounded-lg border"
        style={
          {
            "--task-color": task.color,
            "--task-bg": task.background,
          } as React.CSSProperties
        }
      >
        {task.icon}
      </span>
      <span className="truncate text-xs font-medium md:text-sm">{task.label}</span>
    </div>
  );
});

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
