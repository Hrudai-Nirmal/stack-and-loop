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
      className="relative left-1/2 -mt-[6.25rem] min-h-[190svh] w-screen -translate-x-1/2 overflow-clip border-b hairline md:-mt-[7.5rem] md:min-h-[315vh]"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <HeroWorkflowParallax scrollTargetRef={sectionRef} />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="hero-copy-wash pointer-events-none absolute inset-y-0 left-0 z-[5] w-[78vw]"
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
            <h1 className="text-[clamp(3.05rem,14vw,4rem)] leading-[1.02] font-semibold text-balance text-white md:text-[5.1rem] xl:text-[6.25rem]">
              Make the work
              <br />
              move itself.
            </h1>
            <p className="mt-6 max-w-3xl text-[clamp(1.08rem,4.8vw,1.25rem)] leading-8 text-[var(--soft)] md:mt-8 md:text-[1.6rem] md:leading-[1.42]">
              I design AI-assisted workflows that turn repetitive work into
              reliable systems, so you and your team can move faster with fewer
              mistakes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10 md:gap-4">
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[var(--accent)] px-6 text-base font-medium text-white transition hover:bg-[var(--accent-2)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-line)] md:h-16 md:gap-4 md:px-8 md:text-lg"
              >
                Send project brief
                <ArrowRight size={20} aria-hidden />
              </Link>
              <Link
                href="/process"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-[var(--accent-line)] px-6 text-base font-medium text-white/90 transition hover:bg-[var(--accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-line)] md:h-16 md:gap-4 md:px-8 md:text-lg"
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
