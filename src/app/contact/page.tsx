import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send Stack and Loop a project brief for an AI workflow automation project.",
};

const nextSteps = [
  {
    title: "Review",
    copy: "I read the brief and look for the workflow shape, tools involved, and likely first automation.",
  },
  {
    title: "Reply",
    copy: "You get a practical response with clarifying questions or a suggested next conversation.",
  },
  {
    title: "Recommend next step",
    copy: "If it is a fit, we choose the smallest useful system to design and build first.",
  },
];

export default function ContactPage() {
  return (
    <div className="page-shell">
      <PageHero
        label="Project brief"
        title="Tell me what keeps getting done twice."
        description="Send the workflow, tool stack, or recurring task that feels heavier than it should. A rough description is enough to start."
      />

      <section className="container grid gap-8 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <ContactForm />
        <aside className="rounded-lg border hairline bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-2xl font-medium text-white">
            What happens next
          </h2>
          <div className="mt-8 grid gap-6">
            {nextSteps.map((step, index) => (
              <div key={step.title} className="grid grid-cols-[3rem_1fr] gap-4">
                <div className="grid size-10 place-items-center rounded-full border border-white/24 font-mono text-sm text-white/72">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="font-medium text-white">{step.title}</h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">
                    {step.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
