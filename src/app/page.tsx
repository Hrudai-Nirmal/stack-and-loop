import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { LoopVisual } from "@/components/loop-visual";
import { ServicePreview } from "@/components/service-preview";
import { WorkflowMini } from "@/components/workflow-mini";
import { examples, processSteps, services } from "@/lib/content";

export default function Home() {
  return (
    <div className="page-shell">
      <section className="container relative min-h-[calc(100vh-10rem)] border-b hairline pb-24 md:pb-28">
        <div className="grid min-h-[calc(100vh-18rem)] items-center gap-8 lg:grid-cols-[1fr_0.95fr]">
          <div className="max-w-3xl reveal">
            <h1 className="text-6xl leading-[1.16] font-semibold text-balance text-white md:text-7xl">
              Smarter systems.
              <br />
              Less busywork.
            </h1>
            <p className="mt-9 max-w-2xl text-xl leading-9 text-[var(--soft)] md:text-2xl">
              I design AI-assisted workflows that turn repetitive work into
              reliable systems, so you and your team can move faster with fewer
              mistakes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-16 items-center justify-center gap-4 rounded-lg bg-[var(--accent)] px-8 text-base font-medium text-white shadow-[0_18px_50px_rgba(83,109,255,0.3)] transition hover:bg-[#667dff] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-2)]"
              >
                Send project brief
                <ArrowRight size={20} aria-hidden />
              </Link>
              <Link
                href="/process"
                className="inline-flex h-16 items-center justify-center gap-4 rounded-lg border hairline px-8 text-base font-medium text-white/90 transition hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-2)]"
              >
                See how it works
                <ArrowRight size={20} aria-hidden />
              </Link>
            </div>
          </div>
          <div className="reveal reveal-delay-1">
            <LoopVisual />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-5 hidden text-center md:block">
          <p className="font-mono text-xs uppercase text-[var(--accent-2)]">
            Services
          </p>
          <p className="mt-3 text-2xl text-white/88">
            End-to-end workflow automation.
          </p>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-sm uppercase text-[var(--accent-2)]">
            Services
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
            End-to-end workflow automation.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
            From the first workflow map to the last handoff detail, the work is
            designed to make your day feel lighter, not more technical.
          </p>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServicePreview key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="border-y hairline bg-white/[0.025]">
        <div className="container grid gap-12 px-5 py-24 md:grid-cols-[0.9fr_1.1fr] md:py-32">
          <div>
            <p className="font-mono text-sm uppercase text-[var(--accent-2)]">
              Process
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white md:text-5xl">
              A clear loop from messy work to reliable system.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
              You bring the real workflow. I help map it, simplify it, build
              it, and improve it with feedback from the people using it.
            </p>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className="grid gap-5 rounded-lg border hairline bg-white/[0.035] p-6 md:grid-cols-[4rem_1fr]"
              >
                <div className="font-mono text-sm text-[var(--accent-2)]">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-sm uppercase text-[var(--accent-2)]">
              Examples
            </p>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white md:text-5xl">
              Practical patterns, not inflated case studies.
            </h2>
          </div>
          <Link
            href="/examples"
            className="inline-flex items-center gap-3 text-base font-medium text-white/85 transition hover:text-white"
          >
            View examples
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {examples.map((example) => (
            <WorkflowMini key={example.title} example={example} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
