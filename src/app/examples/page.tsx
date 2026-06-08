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
        title="Sample workflow breakdowns, without pretending they are case studies."
        description="These are illustrative patterns, not named client stories. They show how repetitive work can be shaped into a clearer system before anything gets automated."
      />

      <section className="container py-14 md:py-28">
        <div className="grid gap-5">
          {examples.map((example) => (
            <WorkflowMini key={example.title} example={example} detailed />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
