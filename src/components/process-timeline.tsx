import { ArrowRight } from "lucide-react";
import { processSteps } from "@/lib/content";
import type { ProcessVisualKey } from "@/lib/content";

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-[5.6rem] hidden h-px bg-white/12 lg:block" />
      <div className="grid gap-5 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <article
            key={step.title}
            className="group relative rounded-lg border hairline bg-white/[0.03] p-4 transition hover:border-white/24 hover:bg-white/[0.045]"
          >
            <div className="relative z-10">
              <ProcessVisual variant={step.visualKey} />
              <div className="mt-6 flex items-start gap-4">
                <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[var(--accent-2)]/35 bg-[var(--panel)] font-mono text-sm text-[var(--accent-2)]">
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
                className="absolute -right-3 top-[5.05rem] z-20 hidden text-[var(--accent-2)] lg:block"
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(83,109,255,0.14),transparent_58%)]" />
      <svg
        viewBox="0 0 320 190"
        className="absolute inset-0 h-full w-full text-[var(--accent-2)]"
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
      <path d="M62 48H258M62 94H258M62 140H258" stroke="rgba(255,255,255,0.12)" />
      <path d="M86 48V140M160 48V140M234 48V140" stroke="rgba(255,255,255,0.12)" />
      <rect x="74" y="62" width="58" height="34" rx="6" fill="rgba(83,109,255,0.14)" stroke="currentColor" />
      <rect x="177" y="106" width="64" height="28" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.26)" />
      <path className="service-sketch-line" d="M74 150C110 112 142 130 178 86C205 54 230 58 252 70" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <circle cx="104" cy="79" r="5" fill="#f7f8ff" />
    </>
  );
}

function DesignVisual() {
  return (
    <>
      <path d="M68 95C104 48 138 48 160 95C182 142 216 142 252 95" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
      <path className="trace-fast" d="M68 95C104 142 138 142 160 95C182 48 216 48 252 95" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <circle cx="68" cy="95" r="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.26)" />
      <circle cx="160" cy="95" r="18" fill="rgba(83,109,255,0.15)" stroke="currentColor" />
      <circle cx="252" cy="95" r="16" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.26)" />
      <path d="M126 56L194 134M126 134L194 56" stroke="rgba(255,255,255,0.1)" />
    </>
  );
}

function BuildVisual() {
  return (
    <>
      <rect x="58" y="50" width="204" height="94" rx="8" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.24)" />
      <path d="M78 74H128M78 91H112M78 108H136" stroke="rgba(255,255,255,0.45)" strokeLinecap="round" />
      <path d="M164 71H236M164 94H218M164 117H244" stroke="currentColor" strokeLinecap="round" />
      <path className="service-sketch-line" d="M140 95H158" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      <circle cx="148" cy="95" r="5" fill="#f7f8ff" />
      <path d="M230 45L238 58L252 62L240 70L236 84L226 72L212 70L224 60Z" fill="none" stroke="#f7f8ff" strokeLinejoin="round" />
    </>
  );
}

function InsightsVisual() {
  return (
    <>
      <rect x="48" y="42" width="224" height="112" rx="9" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.24)" />
      <path d="M72 72H122M72 90H104" stroke="rgba(255,255,255,0.4)" strokeLinecap="round" />
      <path d="M70 128C92 104 114 114 136 119C164 126 176 102 194 78C214 52 238 70 250 84" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <rect x="176" y="104" width="64" height="26" rx="5" fill="rgba(83,109,255,0.16)" stroke="currentColor" />
      <path d="M188 117H228" stroke="#f7f8ff" strokeLinecap="round" />
      <circle cx="194" cy="78" r="5" fill="#f7f8ff" />
      <circle cx="194" cy="78" r="14" fill="rgba(83,109,255,0.2)" />
      <path d="M74 148H112M126 148H164M178 148H232" stroke="rgba(255,255,255,0.14)" strokeLinecap="round" />
    </>
  );
}
