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
  thumbnail: React.ReactNode;
};

export function HeroParallax({
  products,
  scrollTargetRef,
}: {
  products: HeroParallaxItem[];
  scrollTargetRef: React.RefObject<HTMLElement | null>;
}) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 140, damping: 28, bounce: 0 };
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.82], shouldReduceMotion ? [0, 0] : [17, 0]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.82], shouldReduceMotion ? [0, 0] : [-9, 0]),
    springConfig,
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.82], shouldReduceMotion ? [0.88, 0.88] : [1.12, 0.88]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.82], shouldReduceMotion ? [0, 0] : [10, -36]),
    springConfig,
  );
  const rowOneX = useSpring(useTransform(scrollYProgress, [0, 0.82], shouldReduceMotion ? [0, 0] : [130, 0]), springConfig);
  const rowTwoX = useSpring(useTransform(scrollYProgress, [0, 0.82], shouldReduceMotion ? [0, 0] : [-94, 0]), springConfig);
  const rowThreeX = useSpring(useTransform(scrollYProgress, [0, 0.82], shouldReduceMotion ? [0, 0] : [86, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.12], [0.76, 1]), springConfig);

  const rows = [
    products.slice(0, 3),
    products.slice(3, 6),
    products.slice(6, 8),
  ];
  const rowOffsets = [rowOneX, rowTwoX, rowThreeX];

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden [perspective:1200px]"
      aria-label="Workflow automation preview"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_44%,rgba(255,255,255,0.08),transparent_36%),linear-gradient(90deg,var(--background)_0%,transparent_28%,transparent_76%,var(--background)_100%)]" />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          scale,
          y: translateY,
          opacity,
        }}
        className="absolute left-[56%] top-[52%] flex w-[44rem] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 will-change-transform sm:w-[52rem] md:left-[76%] md:w-[66rem] md:gap-5 xl:left-[78%] xl:w-[74rem]"
      >
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            style={{ x: rowOffsets[rowIndex] }}
            className={`grid grid-cols-3 gap-4 md:gap-5 ${rowIndex === 2 ? "w-2/3" : "w-full"}`}
          >
            {row.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
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
  shouldReduceMotion,
}: {
  product: HeroParallaxItem;
  shouldReduceMotion: boolean | null;
}) {
  const settleOpacity = React.useMemo(() => ({ opacity: 1 }), []);

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      animate={settleOpacity}
      className="pointer-events-auto relative h-32 min-w-0 overflow-hidden rounded-lg border hairline bg-white/[0.032] transition hover:border-white/28 sm:h-36 md:h-44"
    >
      {product.thumbnail}
      <div className="absolute inset-x-0 bottom-0 border-t hairline bg-black/32 px-4 py-3 backdrop-blur-sm">
        <p className="font-mono text-[0.68rem] uppercase tracking-normal text-white/58">
          {product.title}
        </p>
      </div>
    </motion.article>
  );
}
