import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/content";
import type { ProcessVisualKey } from "@/lib/content";

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative">
      <div className="grid gap-5 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="group relative rounded-lg border hairline bg-white/[0.03] p-4 transition hover:border-white/24 hover:bg-white/[0.045]"
          >
            <div className="relative z-10">
              <ProcessVisual variant={step.visualKey} />
              <div className="mt-6 flex items-start gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-full border border-white/24 bg-[var(--panel)] font-mono text-sm text-white/72">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">{step.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted)]">
                    {step.summary}
                  </p>
                </div>
              </div>
              {!compact ? (
                <div className="mt-6 grid gap-4 border-t hairline pt-5 text-sm leading-6">
                  <p className="text-white/58">
                    <span className="font-mono uppercase text-white/36">
                      You bring
                    </span>
                    <br />
                    {step.client}
                  </p>
                  <p className="text-white/58">
                    <span className="font-mono uppercase text-white/36">
                      I deliver
                    </span>
                    <br />
                    {step.deliverable}
                  </p>
                </div>
              ) : null}
            </div>
            {index < processSteps.length - 1 ? (
              <ArrowRight
                aria-hidden
                className="absolute -right-3 top-[5.05rem] z-20 hidden text-white/56 lg:block"
                size={22}
              />
            ) : null}
          </article>
        ))}
      </div>
    </div>
  );
}

function ProcessVisual({ variant }: { variant: ProcessVisualKey }) {
  return (
    <div className="relative h-48 overflow-hidden rounded-lg border hairline bg-black/18">
      <svg
        viewBox="0 0 320 190"
        className="absolute inset-0 h-full w-full text-white/58"
        aria-hidden
      >
        {variant === "map" ? <MapVisual /> : null}
        {variant === "design" ? <DesignVisual /> : null}
        {variant === "build" ? <BuildVisual /> : null}
        {variant === "insights" ? <InsightsVisual /> : null}
      </svg>
    </div>
  );
}

function MapVisual() {
  return (
    <>
      <path
        d="M94 64L158 54L224 76M94 64L120 122M158 54L190 118M224 76L190 118M120 122L190 118M120 122L226 140"
        fill="none"
        stroke="rgba(255,255,255,0.42)"
        strokeLinecap="round"
        strokeWidth="1.25"
      />
      <TaskBox x={54} y={44} width={80} labelLines={["Intake", "task"]} active />
      <TaskBox x={136} y={33} width={70} labelLines={["Review"]} />
      <TaskBox x={204} y={58} width={66} labelLines={["Route"]} />
      <TaskBox x={86} y={105} width={76} labelLines={["Decision"]} />
      <TaskBox x={169} y={101} width={72} labelLines={["Action"]} active />
      <TaskBox x={203} y={131} width={72} labelLines={["Done"]} />
      <circle cx="158" cy="54" r="4" fill="#f7f8ff" />
      <circle cx="190" cy="118" r="11" fill="rgba(255,255,255,0.1)" />
    </>
  );
}

function DesignVisual() {
  return (
    <>
      <IsoBlock x={78} y={105} height={42} active />
      <IsoBlock x={120} y={81} height={66} />
      <IsoBlock x={166} y={105} height={42} active />
      <IsoBlock x={208} y={81} height={42} />
      <path
        d="M78 147L110 165L174 165L206 147M120 147L152 165L216 165L248 147M142 135L174 153M188 135L220 153M78 147L162 98M110 165L194 116M206 147L248 123"
        fill="none"
        stroke="rgba(255,255,255,0.16)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62 138L154 84L260 134L168 178Z"
        fill="rgba(255,255,255,0.018)"
        stroke="rgba(255,255,255,0.13)"
      />
      <path
        d="M112 87C145 63 178 70 205 94C222 108 237 107 251 98"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
    </>
  );
}

function BuildVisual() {
  return (
    <>
      <path
        d="M72 96C106 42 136 46 160 96C184 146 216 150 248 96C216 42 184 46 160 96C136 146 106 150 72 96Z"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeLinecap="round"
        strokeWidth="1.4"
      />
      <path
        d="M72 96C106 42 136 46 160 96C184 146 216 150 248 96C216 42 184 46 160 96C136 146 106 150 72 96Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2.2"
      />
      <circle cx="72" cy="96" r="14" fill="rgba(255,255,255,0.045)" stroke="rgba(255,255,255,0.26)" />
      <circle cx="160" cy="96" r="6" fill="#f7f8ff" />
      <circle cx="160" cy="96" r="16" fill="rgba(255,255,255,0.1)" />
      <circle cx="248" cy="96" r="14" fill="rgba(255,255,255,0.045)" stroke="rgba(255,255,255,0.26)" />
    </>
  );
}

function InsightsVisual() {
  return (
    <>
      <rect x="44" y="36" width="232" height="122" rx="10" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.24)" />
      <path d="M44 64H276M108 64V158" stroke="rgba(255,255,255,0.13)" />
      <path d="M64 51H86M118 51H146M158 51H180" stroke="rgba(255,255,255,0.34)" strokeLinecap="round" />
      <path d="M62 83H88M62 102H80M62 121H90M62 140H76" stroke="rgba(255,255,255,0.28)" strokeLinecap="round" />
      <rect x="124" y="80" width="48" height="28" rx="5" fill="rgba(255,255,255,0.08)" stroke="currentColor" />
      <rect x="186" y="80" width="58" height="28" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.22)" />
      <path d="M134 95H162M197 95H232" stroke="#f7f8ff" strokeLinecap="round" />
      <path d="M126 136C142 119 158 124 174 129C197 137 204 105 222 101C237 98 246 112 256 106" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M124 146H170M186 146H244" stroke="rgba(255,255,255,0.15)" strokeLinecap="round" />
      <circle cx="222" cy="101" r="5" fill="#f7f8ff" />
      <circle cx="222" cy="101" r="13" fill="rgba(255,255,255,0.1)" />
    </>
  );
}

function TaskBox({
  active = false,
  labelLines,
  width,
  x,
  y,
}: {
  active?: boolean;
  labelLines: string[];
  width: number;
  x: number;
  y: number;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height="34"
        rx="6"
        fill={active ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"}
        stroke={active ? "currentColor" : "rgba(255,255,255,0.24)"}
      />
      {labelLines.map((line, index) => (
        <text
          key={line}
          x={x + 12}
          y={y + 14 + index * 12}
          fill="rgba(247,248,255,0.72)"
          fontSize="8"
          fontFamily="var(--font-geist-mono), ui-monospace, monospace"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function IsoBlock({
  active = false,
  height,
  x,
  y,
}: {
  active?: boolean;
  height: number;
  x: number;
  y: number;
}) {
  const top = `M${x} ${y}L${x + 32} ${y - 18}L${x + 64} ${y}L${x + 32} ${y + 18}Z`;
  const left = `M${x} ${y}L${x + 32} ${y + 18}L${x + 32} ${y + 18 + height}L${x} ${y + height}Z`;
  const right = `M${x + 32} ${y + 18}L${x + 64} ${y}L${x + 64} ${y + height}L${x + 32} ${y + 18 + height}Z`;
  const base = `M${x} ${y + height}L${x + 32} ${y + 18 + height}L${x + 64} ${y + height}`;
  const chip = `M${x + 20} ${y + 1}L${x + 32} ${y - 6}L${x + 44} ${y + 1}L${x + 32} ${y + 8}Z`;

  return (
    <g>
      <path d={left} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" />
      <path d={right} fill="rgba(255,255,255,0.045)" stroke="rgba(255,255,255,0.17)" />
      <path d={base} fill="none" stroke="rgba(255,255,255,0.16)" />
      <path
        d={top}
        fill={active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)"}
        stroke={active ? "currentColor" : "rgba(255,255,255,0.24)"}
      />
      <path
        d={chip}
        fill={active ? "rgba(255,255,255,0.16)" : "rgba(255,255,255,0.09)"}
        stroke={active ? "#f7f8ff" : "rgba(247,248,255,0.62)"}
      />
      <path
        d={`M${x + 18} ${y + 7}L${x + 10} ${y + 11}M${x + 46} ${y + 7}L${x + 54} ${y + 11}M${x + 32} ${y - 8}V${y - 14}M${x + 32} ${y + 10}V${y + 15}`}
        stroke="rgba(247,248,255,0.5)"
        strokeLinecap="round"
      />
    </g>
  );
}
