"use client";

import { Bot, ClipboardList, FileText, Mail, UserRound } from "lucide-react";
import { useReducedMotion } from "motion/react";
import React from "react";
import { AnimatedBeam } from "@/components/ui/animated-beam";

export function AIBeamVisual() {
  const shouldReduceMotion = useReducedMotion();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const intakeRef = React.useRef<HTMLDivElement>(null);
  const researchRef = React.useRef<HTMLDivElement>(null);
  const routingRef = React.useRef<HTMLDivElement>(null);
  const aiRef = React.useRef<HTMLDivElement>(null);
  const humanRef = React.useRef<HTMLDivElement>(null);

  const beamProps = {
    containerRef,
    pathColor: "rgba(255,255,255,0.2)",
    pathOpacity: 0.22,
    pathWidth: 1.4,
    gradientStartColor: "#f5f5f5",
    gradientStopColor: "#a1a1aa",
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
          <BeamNode ref={intakeRef} icon={<Mail size={20} />} label="Lead intake" />
          <BeamNode ref={researchRef} icon={<FileText size={20} />} label="Research" />
          <BeamNode ref={routingRef} icon={<ClipboardList size={20} />} label="Tasks" />
        </div>
        <div className="grid place-items-center">
          <BeamNode
            ref={aiRef}
            icon={<Bot size={24} />}
            label="AI workflow"
            prominent
          />
        </div>
        <div className="grid place-items-center md:justify-items-end">
          <BeamNode
            ref={humanRef}
            icon={<UserRound size={24} />}
            label="Human review"
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
    icon: React.ReactNode;
    label: string;
    prominent?: boolean;
  }
>(function BeamNode({ icon, label, prominent = false }, ref) {
  return (
    <div
      ref={ref}
      className={`relative z-10 flex items-center gap-3 rounded-lg border hairline bg-black/34 px-4 py-3 text-white/84 backdrop-blur-sm ${
        prominent ? "min-w-44 justify-center py-5 text-white" : "w-full max-w-56"
      }`}
    >
      <span className="grid size-9 place-items-center rounded-lg border border-white/14 bg-white/[0.045] text-white/78">
        {icon}
      </span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
});
