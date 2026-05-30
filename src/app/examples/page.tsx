import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { WorkflowMini } from "@/components/workflow-mini";
import { examples } from "@/lib/content";

export const metadata: Metadata = {
  title: "Examples",
  description:
    "Anonymized examples of lead intake, content operations, and client delivery workflows Stack and Loop can improve.",
};

export default function ExamplesPage() {
  return (
    <div className="page-shell">
      <PageHero
        label="Examples"
        title="Workflow patterns you can recognize quickly."
        description="These are illustrative patterns, not named case studies. They show the kind of repetitive work Stack and Loop can turn into cleaner systems."
      />

      <section className="container py-14 md:py-28">
        <div className="grid gap-5">
          {examples.map((example) => (
            <WorkflowMini key={example.title} example={example} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
