"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import React from "react";
import { HeroWorkflowParallax } from "@/components/hero-workflow-parallax";
import { Spotlight } from "@/components/ui/spotlight-new";

export function LandingHero() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [heroInteractive, setHeroInteractive] = React.useState(true);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHeroInteractive(latest < 0.5);
  });
  const contentOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.28, 0.46], [1, 1, 0]),
    { stiffness: 120, damping: 24, bounce: 0 },
  );
  const contentY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.46],
      shouldReduceMotion ? [0, 0] : [0, -72],
    ),
    { stiffness: 120, damping: 24, bounce: 0 },
  );
  const overlayOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.36, 0.58], [1, 1, 0]),
    { stiffness: 120, damping: 24, bounce: 0 },
  );

  return (
    <section
      ref={sectionRef}
      className="relative left-1/2 -mt-[6.25rem] min-h-[315vh] w-screen -translate-x-1/2 overflow-clip border-b hairline md:-mt-[7.5rem]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <Spotlight
          gradientFirst="radial-gradient(68% 68% at 50% 32%, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.08) 38%, transparent 74%)"
          gradientSecond="radial-gradient(48% 48% at 50% 50%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.045) 62%, transparent 100%)"
          gradientThird="radial-gradient(46% 46% at 50% 50%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.025) 72%, transparent 100%)"
          translateY={-430}
          width={760}
          height={1500}
          smallWidth={310}
          duration={10}
          xOffset={140}
        />
        <HeroWorkflowParallax scrollTargetRef={sectionRef} />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-[78vw] bg-[linear-gradient(90deg,var(--background)_0%,rgba(5,5,5,0.98)_52%,rgba(5,5,5,0.78)_74%,transparent_100%)]"
        />
        <div
          className={`container relative z-10 flex h-full items-center px-5 ${
            heroInteractive ? "" : "pointer-events-none"
          }`}
        >
          <motion.div
            style={{ opacity: contentOpacity, y: contentY }}
            className={`max-w-4xl ${heroInteractive ? "" : "pointer-events-none"}`}
          >
            <h1 className="text-7xl leading-[1.02] font-semibold text-balance text-white md:text-8xl xl:text-[7.35rem]">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
