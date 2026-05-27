"use client";

import React from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

type HeroParallaxItem = {
  title: string;
  summary: string;
  detail: string;
  thumbnail: React.ReactNode;
};

export function HeroParallax({
  products,
  scrollTargetRef,
}: {
  products: HeroParallaxItem[];
  scrollTargetRef: React.RefObject<HTMLElement | null>;
}) {
  const [activeTitle, setActiveTitle] = React.useState(products[0]?.title ?? "");
  const activeProduct =
    products.find((product) => product.title === activeTitle) ?? products[0];
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 140, damping: 28, bounce: 0 };
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.58], shouldReduceMotion ? [0, 0] : [17, 0]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.58], shouldReduceMotion ? [0, 0] : [-9, 0]),
    springConfig,
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.58], shouldReduceMotion ? [0.9, 0.9] : [1.08, 0.9]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.58], shouldReduceMotion ? [0, 0] : [10, 90]),
    springConfig,
  );
  const parentX = useSpring(
    useTransform(scrollYProgress, [0, 0.58], shouldReduceMotion ? [0, 0] : [260, 0]),
    springConfig,
  );
  const rowOneX = useSpring(useTransform(scrollYProgress, [0, 0.58], shouldReduceMotion ? [0, 0] : [130, 0]), springConfig);
  const rowTwoX = useSpring(useTransform(scrollYProgress, [0, 0.58], shouldReduceMotion ? [0, 0] : [-94, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.12], [0.76, 1]), springConfig);
  const serviceOpacity = useSpring(
    useTransform(scrollYProgress, [0.36, 0.54], [0, 1]),
    springConfig,
  );
  const serviceY = useSpring(
    useTransform(scrollYProgress, [0.36, 0.54], [24, 0]),
    springConfig,
  );
  const detailOpacity = useSpring(
    useTransform(scrollYProgress, [0.48, 0.58], [0, 1]),
    springConfig,
  );

  const rows = [
    products.slice(0, 4),
    products.slice(4, 8),
  ];
  const rowOffsets = [rowOneX, rowTwoX];

  if (!activeProduct) {
    return null;
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden [perspective:1200px]"
      aria-label="Workflow automation preview"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_44%,rgba(255,255,255,0.08),transparent_36%),linear-gradient(90deg,var(--background)_0%,transparent_28%,transparent_76%,var(--background)_100%)]" />
      <motion.div
        style={{ opacity: serviceOpacity, y: serviceY }}
        className="pointer-events-none container absolute inset-x-0 top-[6.5rem] z-[4] px-5"
      >
        <div className="grid gap-5 md:grid-cols-[1fr_24rem] md:items-start">
          <div>
            <p className="font-mono text-sm uppercase text-white/55">
              Services
            </p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              End-to-end workflow automation.
            </h2>
            <p className="mt-5 max-w-3xl text-xl leading-9 text-[var(--muted)] md:text-2xl md:leading-10">
              From workflow map to handoff, the system settles into one
              interactive grid you can inspect.
            </p>
          </div>
          <motion.div
            style={{ opacity: detailOpacity }}
            className="hidden rounded-lg border hairline bg-black/45 p-4 backdrop-blur-md md:block"
            aria-live="polite"
          >
            <p className="font-mono text-xs uppercase text-white/50">
              Selected
            </p>
            <h3 className="mt-2 text-xl font-semibold text-white">
              {activeProduct.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              {activeProduct.detail}
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          scale,
          x: parentX,
          y: translateY,
          opacity,
        }}
        className="absolute left-1/2 top-[52%] flex w-[92vw] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 will-change-transform sm:w-[52rem] md:top-[55%] md:w-[min(92vw,78rem)] md:gap-5"
      >
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            style={{ x: rowOffsets[rowIndex] }}
            className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
          >
            {row.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                active={product.title === activeProduct.title}
                onActivate={() => setActiveTitle(product.title)}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--background)]" />
    </div>
  );
}

function ProductCard({
  product,
  active,
  onActivate,
  shouldReduceMotion,
}: {
  product: HeroParallaxItem;
  active: boolean;
  onActivate: () => void;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.button
      type="button"
      onClick={onActivate}
      onFocus={onActivate}
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      className={`pointer-events-auto relative h-32 min-w-0 overflow-hidden rounded-lg border bg-white/[0.032] text-left transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70 sm:h-36 md:h-44 ${
        active
          ? "border-white/55 bg-white/[0.07]"
          : "hairline hover:border-white/28 hover:bg-white/[0.052]"
      }`}
      aria-pressed={active}
    >
      {product.thumbnail}
      <div className="absolute inset-x-0 bottom-0 border-t hairline bg-black/32 px-4 py-3 backdrop-blur-sm">
        <p className="font-mono text-[0.68rem] uppercase tracking-normal text-white/58">
          {product.title}
        </p>
        <p className="mt-1 hidden text-xs leading-5 text-white/62 md:block">
          {product.summary}
        </p>
      </div>
    </motion.button>
  );
}
