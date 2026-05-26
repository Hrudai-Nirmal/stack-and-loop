import type { Metadata } from "next";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/process-timeline";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A simple four-step process for mapping, designing, building, and improving AI-assisted workflows.",
};

export default function ProcessPage() {
  return (
    <div className="page-shell">
      <PageHero
        label="Process"
        title="A calm path from messy workflow to useful automation."
        description="The work stays structured and transparent: map what happens today, design the loop, build the first reliable system, then improve it with real use."
      />

      <section className="container py-20 md:py-28">
        <ProcessTimeline />
      </section>

      <CTASection />
    </div>
  );
}
