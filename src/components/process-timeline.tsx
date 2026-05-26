import { processSteps } from "@/lib/content";

export function ProcessTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-8 hidden h-[calc(100%-4rem)] w-px bg-white/12 md:block" />
      <div className="grid gap-5">
        {processSteps.map((step) => (
          <article
            key={step.title}
            className="relative grid gap-6 rounded-lg border hairline bg-white/[0.03] p-6 md:grid-cols-[4rem_1fr_1fr]"
          >
            <div className="relative z-10 grid size-12 place-items-center rounded-full border border-[var(--accent-2)]/40 bg-[var(--panel)] font-mono text-sm text-[var(--accent-2)]">
              {step.number}
            </div>
            <div>
              <h2 className="text-2xl font-medium text-white">{step.title}</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">{step.summary}</p>
            </div>
            <div className="grid gap-4 text-sm leading-6">
              <p className="text-white/58">
                <span className="font-mono uppercase text-white/36">You bring</span>
                <br />
                {step.client}
              </p>
              <p className="text-white/58">
                <span className="font-mono uppercase text-white/36">I deliver</span>
                <br />
                {step.deliverable}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
