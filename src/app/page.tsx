import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AIBeamVisual } from "@/components/ai-beam-visual";
import { CTASection } from "@/components/cta-section";
import { HeroWorkflowParallax } from "@/components/hero-workflow-parallax";
import { ProcessTimeline } from "@/components/process-timeline";
import { ServicePreview } from "@/components/service-preview";
import { Spotlight } from "@/components/ui/spotlight-new";
import { WorkflowMini } from "@/components/workflow-mini";
import { examples, services } from "@/lib/content";

export default function Home() {
  return (
    <div className="page-shell">
      <section className="container relative min-h-[calc(100vh-9rem)] overflow-hidden border-b hairline pb-24 md:pb-28">
        <Spotlight
          gradientFirst="radial-gradient(68% 68% at 50% 32%, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.08) 38%, transparent 74%)"
          gradientSecond="radial-gradient(48% 48% at 50% 50%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.045) 62%, transparent 100%)"
          gradientThird="radial-gradient(46% 46% at 50% 50%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.025) 72%, transparent 100%)"
          translateY={-460}
          width={720}
          height={1400}
          smallWidth={300}
          duration={10}
          xOffset={140}
        />
        <div className="relative z-10 grid min-h-[calc(100vh-17rem)] items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="max-w-4xl reveal">
            <h1 className="text-7xl leading-[1.03] font-semibold text-balance text-white md:text-8xl xl:text-[6.7rem]">
              Smarter systems.
              <br />
              Less busywork.
            </h1>
            <p className="mt-9 max-w-3xl text-2xl leading-10 text-[var(--soft)] md:text-3xl md:leading-[1.42]">
              I design AI-assisted workflows that turn repetitive work into
              reliable systems, so you and your team can move faster with fewer
              mistakes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-16 items-center justify-center gap-4 rounded-lg bg-white px-8 text-lg font-medium text-black transition hover:bg-white/88 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
              >
                Send project brief
                <ArrowRight size={20} aria-hidden />
              </Link>
              <Link
                href="/process"
                className="inline-flex h-16 items-center justify-center gap-4 rounded-lg border hairline px-8 text-lg font-medium text-white/90 transition hover:border-white/35 hover:bg-white/[0.04] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
              >
                See how it works
                <ArrowRight size={20} aria-hidden />
              </Link>
            </div>
          </div>
          <div className="reveal reveal-delay-1 -mr-8 lg:-mr-16">
            <HeroWorkflowParallax />
          </div>
        </div>
      </section>

      <section className="container py-24 md:py-32">
        <div className="max-w-4xl">
          <p className="font-mono text-sm uppercase text-white/55">
            Services
          </p>
          <h2 className="mt-5 text-5xl font-semibold leading-tight text-white md:text-6xl">
            End-to-end workflow automation.
          </h2>
          <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--muted)] md:text-2xl md:leading-10">
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
