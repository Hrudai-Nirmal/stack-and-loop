import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AIBeamVisual } from "@/components/ai-beam-visual";
import { CTASection } from "@/components/cta-section";
import { LandingHero } from "@/components/landing-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { WorkflowMini } from "@/components/workflow-mini";
import { examples } from "@/lib/content";

export default function Home() {
  return (
    <div className="page-shell">
      <LandingHero />

      <section className="border-y hairline bg-white/[0.025]">
        <div className="container grid gap-12 px-5 py-24 md:py-32">
          <div>
            <p className="font-mono text-sm uppercase text-white/55">
              Process
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              A clear loop from messy work to reliable system.
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--muted)] md:text-2xl md:leading-10">
              You bring the real workflow. I help map it, simplify it, build
              it, and improve it with feedback from the people using it.
            </p>
          </div>
          <AIBeamVisual />
          <ProcessTimeline compact />
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-sm uppercase text-white/55">
              Examples
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
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
