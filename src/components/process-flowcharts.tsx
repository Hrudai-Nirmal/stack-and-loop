import { ArrowRight } from "lucide-react";

const flows = [
  {
    title: "Lead intake to visible pipeline",
    description:
      "A common first build for teams that lose time sorting new inquiries across forms, inboxes, and DMs.",
    steps: [
      "Inquiry captured",
      "Context enriched",
      "Fit classified",
      "Owner routed",
      "Follow-up drafted",
      "Dashboard updated",
    ],
  },
  {
    title: "Client delivery to cleaner handoff",
    description:
      "A delivery workflow for small teams that need status updates, blockers, and client communication to stay aligned.",
    steps: [
      "Tasks collected",
      "Status summarized",
      "Blockers flagged",
      "Update drafted",
      "Human reviewed",
      "Client handoff sent",
    ],
  },
];

export function ProcessFlowcharts() {
  return (
    <section className="container border-t hairline pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="max-w-4xl">
        <p className="font-mono text-sm uppercase text-white/55">
          Example flows
        </p>
        <h2 className="mt-5 text-[clamp(2.2rem,8vw,3.35rem)] font-semibold leading-tight text-white">
          What the process can look like once it becomes a real workflow.
        </h2>
      </div>
      <div className="mt-10 grid gap-5">
        {flows.map((flow) => (
          <article
            key={flow.title}
            className="rounded-lg border hairline bg-white/[0.03] p-5 md:p-7"
          >
            <div className="grid gap-4 md:grid-cols-[0.55fr_1fr] md:items-start">
              <div>
                <h3 className="text-2xl font-medium text-white">
                  {flow.title}
                </h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {flow.description}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {flow.steps.map((step, index) => (
                  <div key={step} className="relative">
                    {index < flow.steps.length - 1 ? (
                      <ArrowRight
                        size={17}
                        aria-hidden
                        className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-[var(--accent-2)] lg:block"
                      />
                    ) : null}
                    <div className="h-full rounded-lg border hairline bg-black/18 p-4">
                      <p className="font-mono text-xs text-white/45">
                        0{index + 1}
                      </p>
                      <p className="mt-5 font-medium leading-6 text-white">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
