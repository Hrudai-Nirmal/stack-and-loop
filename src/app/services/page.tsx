import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServiceVisual } from "@/components/service-visual";
import { WorkflowDiagram } from "@/components/workflow-diagram";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Workflow audits, AI-assisted operations, tool integrations, and automation maintenance for practical teams.",
};

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <PageHero
        label="Services"
        title="Automation that makes the work feel lighter."
        description="Stack and Loop focuses on the practical middle: the handoffs, repeated decisions, and tool-to-tool movement that quietly consume your week."
      />

      <section className="container grid gap-10 py-20 md:grid-cols-[0.85fr_1.15fr] md:py-28">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
            The service is not more software. It is a cleaner way for work to
            move.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            Each engagement starts with the workflow you already have, then
            turns the repeatable parts into a system with useful AI assistance
            and clear human checks.
          </p>
          <Link
            href="/process"
            className="mt-8 inline-flex items-center gap-3 text-base font-medium text-white/85 hover:text-white"
          >
            See the process
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
        <WorkflowDiagram />
      </section>

      <section className="container pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border hairline bg-white/[0.03] p-7"
            >
              <ServiceVisual variant={service.visualKey} />
              <div className="mb-10 mt-7 h-px w-16 bg-[var(--accent-2)]/70" />
              <h2 className="text-2xl font-medium text-white">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--soft)]">
                {service.summary}
              </p>
              <p className="mt-6 border-t hairline pt-6 leading-7 text-[var(--muted)]">
                {service.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
