import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ServiceVisual } from "@/components/service-visual";
import { SMBServiceExamples } from "@/components/smb-service-examples";
import { faqs, pricingSignal, services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Workflow audits, AI-assisted operations, tool integrations, and automation maintenance for small teams, agencies, and operators.",
};

export default function ServicesPage() {
  return (
    <div className="page-shell">
      <PageHero
        label="Services"
        title="Automation that makes the work feel lighter."
        description="Stack and Loop focuses on the practical middle: the handoffs, repeated decisions, and tool-to-tool movement that quietly consume your week."
      />

      <section className="container grid gap-10 py-14 md:grid-cols-[0.85fr_1.15fr] md:py-28">
        <div>
          <h2 className="text-[clamp(2.1rem,8vw,3rem)] font-semibold leading-tight text-white md:text-5xl">
            The service is not more software. It is a cleaner way for work to
            move.
          </h2>
          <p className="mt-5 text-[clamp(1.05rem,4.4vw,1.22rem)] leading-8 text-[var(--muted)] md:mt-6 md:text-xl md:leading-9">
            Each engagement starts with the workflow you already have, then
            turns the repeatable parts into a system with useful AI assistance
            and clear human checks.
          </p>
          <div className="mt-8 rounded-lg border hairline bg-white/[0.03] p-5">
            <p className="font-mono text-xs uppercase text-white/45">
              Pricing signal
            </p>
            <p className="mt-2 text-2xl font-medium text-white">
              {pricingSignal.inr} / {pricingSignal.usd}
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {pricingSignal.note}
            </p>
          </div>
          <Link
            href="/process"
            className="mt-8 inline-flex items-center gap-3 text-base font-medium text-white/85 hover:text-white"
          >
            See the process
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
        <SMBServiceExamples />
      </section>

      <section className="container pb-16 md:pb-24">
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border hairline bg-white/[0.03] p-7"
            >
              <ServiceVisual variant={service.visualKey} />
              <div className="mb-10 mt-7 h-px w-16 bg-[var(--accent)]" />
              <h2 className="text-2xl font-medium text-white">
                {service.title}
              </h2>
              <p className="mt-4 leading-7 text-[var(--soft)]">
                {service.summary}
              </p>
              <p className="mt-6 border-t hairline pt-6 leading-7 text-[var(--muted)]">
                {service.detail}
              </p>
              <p className="mt-6 rounded-lg border hairline bg-white/[0.025] p-4 leading-7 text-[var(--soft)]">
                {service.deliverable}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container border-y hairline py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-sm uppercase text-white/55">
              FAQ
            </p>
            <h2 className="mt-5 text-[clamp(2.2rem,8vw,3.35rem)] font-semibold leading-tight text-white">
              Practical questions before you share access or budget.
            </h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-lg border hairline bg-white/[0.03] p-6"
              >
                <h3 className="text-xl font-medium text-white">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
