"use client";

import type { ReactNode } from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

const panels = [
  {
    title: "Intake",
    thumbnail: <IntakePanel />,
  },
  {
    title: "AI triage",
    thumbnail: <TriagePanel />,
  },
  {
    title: "Routing",
    thumbnail: <RoutingPanel />,
  },
  {
    title: "Human review",
    thumbnail: <ReviewPanel />,
  },
  {
    title: "Dashboard",
    thumbnail: <DashboardPanel />,
  },
  {
    title: "Handoff",
    thumbnail: <HandoffPanel />,
  },
  {
    title: "Research",
    thumbnail: <ResearchPanel />,
  },
  {
    title: "Client delivery",
    thumbnail: <DeliveryPanel />,
  },
];

export function HeroWorkflowParallax() {
  return <HeroParallax products={panels} />;
}

function PanelFrame({ children }: { children: ReactNode }) {
  return (
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.015))]">
      <svg viewBox="0 0 320 176" className="h-full w-full text-white/62" aria-hidden>
        {children}
      </svg>
    </div>
  );
}

function IntakePanel() {
  return (
    <PanelFrame>
      <rect x="42" y="40" width="236" height="96" rx="9" fill="rgba(0,0,0,0.18)" stroke="rgba(255,255,255,0.2)" />
      <path d="M64 64H144M64 83H124M64 102H158" stroke="rgba(255,255,255,0.52)" strokeLinecap="round" />
      <rect x="188" y="68" width="54" height="36" rx="7" fill="rgba(255,255,255,0.08)" stroke="currentColor" />
      <path d="M200 87H230" stroke="#f5f5f5" strokeLinecap="round" />
    </PanelFrame>
  );
}

function TriagePanel() {
  return (
    <PanelFrame>
      <path d="M60 92H122M198 92H260" stroke="rgba(255,255,255,0.2)" />
      <circle cx="90" cy="92" r="26" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" />
      <circle cx="160" cy="92" r="30" fill="rgba(255,255,255,0.08)" stroke="currentColor" />
      <circle cx="230" cy="92" r="26" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" />
      <path d="M147 92L157 102L176 78" stroke="#f5f5f5" strokeLinecap="round" strokeLinejoin="round" />
    </PanelFrame>
  );
}

function RoutingPanel() {
  return (
    <PanelFrame>
      <path d="M80 54L160 86L238 58M160 86L112 132M160 86L216 132" fill="none" stroke="rgba(255,255,255,0.34)" />
      {[80, 160, 238, 112, 216].map((cx, index) => (
        <circle
          key={cx}
          cx={cx}
          cy={index < 3 ? [54, 86, 58][index] : 132}
          r={index === 1 ? 17 : 13}
          fill={index === 1 ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.04)"}
          stroke={index === 1 ? "currentColor" : "rgba(255,255,255,0.24)"}
        />
      ))}
    </PanelFrame>
  );
}

function ReviewPanel() {
  return (
    <PanelFrame>
      <rect x="58" y="48" width="204" height="82" rx="9" fill="rgba(0,0,0,0.18)" stroke="rgba(255,255,255,0.22)" />
      <path d="M78 70H142M78 88H126M78 106H152" stroke="rgba(255,255,255,0.48)" strokeLinecap="round" />
      <circle cx="215" cy="88" r="24" fill="rgba(255,255,255,0.06)" stroke="currentColor" />
      <path d="M205 88L213 96L229 76" stroke="#f5f5f5" strokeLinecap="round" strokeLinejoin="round" />
    </PanelFrame>
  );
}

function DashboardPanel() {
  return (
    <PanelFrame>
      <rect x="48" y="42" width="224" height="100" rx="9" fill="rgba(0,0,0,0.18)" stroke="rgba(255,255,255,0.22)" />
      <path d="M70 68H102M118 68H150M166 68H198" stroke="rgba(255,255,255,0.22)" strokeLinecap="round" />
      <path d="M70 116C91 96 112 102 134 108C162 116 178 82 202 80C226 78 240 96 252 90" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <rect x="74" y="80" width="48" height="22" rx="5" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.24)" />
      <rect x="146" y="80" width="58" height="22" rx="5" fill="rgba(255,255,255,0.09)" stroke="currentColor" />
    </PanelFrame>
  );
}

function HandoffPanel() {
  return (
    <PanelFrame>
      <rect x="48" y="50" width="86" height="74" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)" />
      <rect x="186" y="50" width="86" height="74" rx="8" fill="rgba(255,255,255,0.08)" stroke="currentColor" />
      <path d="M72 74H110M72 92H100M210 74H248M210 92H236" stroke="rgba(255,255,255,0.52)" strokeLinecap="round" />
      <path d="M142 88H176M166 78L176 88L166 98" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </PanelFrame>
  );
}

function ResearchPanel() {
  return (
    <PanelFrame>
      <circle cx="108" cy="86" r="34" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.24)" />
      <path d="M132 110L154 132" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <rect x="178" y="54" width="72" height="20" rx="5" fill="rgba(255,255,255,0.08)" stroke="currentColor" />
      <path d="M178 94H254M178 112H236" stroke="rgba(255,255,255,0.42)" strokeLinecap="round" />
    </PanelFrame>
  );
}

function DeliveryPanel() {
  return (
    <PanelFrame>
      <path d="M70 62H250V122H70Z" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)" />
      <path d="M70 78L160 108L250 78" fill="none" stroke="currentColor" strokeLinecap="round" />
      <path d="M96 136H224" stroke="rgba(255,255,255,0.34)" strokeLinecap="round" />
      <circle cx="160" cy="108" r="5" fill="#f5f5f5" />
    </PanelFrame>
  );
}
