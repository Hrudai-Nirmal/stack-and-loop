import type { Metadata } from "next";
import { ActionLinks } from "@/components/action-links";
import { CTASection } from "@/components/cta-section";
import { FounderCard } from "@/components/founder-card";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Hrudai Nirmal, the AI Workflow Designer behind Stack and Loop.",
};

const principles = [
  {
    title: "Start with the real workflow",
    copy: "The useful system is usually hiding inside the messy version your team already runs every week.",
  },
  {
    title: "Keep humans in the loop",
    copy: "AI should handle repetitive movement and preparation, while people keep judgement, approvals, and quality visible.",
  },
  {
    title: "Build for handoff",
    copy: "A workflow is only useful if the team can understand it, use it, and improve it after the first version ships.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-shell">
      <PageHero
        label="About"
        title="A solo-run consultancy, built around clear systems."
        description="I work with small teams, agencies, and operators who want repetitive work to move with less manual coordination."
      />

      <section className="container py-14 md:py-24">
        <FounderCard showAboutLink={false} />
      </section>

      <section className="container grid gap-10 border-y hairline py-14 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div>
          <p className="font-mono text-sm uppercase text-white/55">
            Why Stack and Loop
          </p>
          <h2 className="mt-5 text-[clamp(2.2rem,8vw,3.35rem)] font-semibold leading-tight text-white">
            Calm automation for teams that already have enough noise.
          </h2>
        </div>
        <div className="grid gap-4">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-lg border hairline bg-white/[0.03] p-6"
            >
              <h3 className="text-xl font-medium text-white">
                {principle.title}
              </h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                {principle.copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-14 md:py-24">
        <div className="rounded-lg border hairline bg-white/[0.03] p-6 md:p-8">
          <p className="font-mono text-sm uppercase text-white/55">
            Start with a small conversation
          </p>
          <h2 className="mt-5 max-w-4xl text-[clamp(2.2rem,8vw,3.35rem)] font-semibold leading-tight text-white">
            Bring the workflow that keeps getting done twice.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            A rough description is enough. The first useful step is usually
            finding the smallest loop that should become more reliable.
          </p>
          <div className="mt-8">
            <ActionLinks />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
