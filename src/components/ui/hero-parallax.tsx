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

export function HeroParallax({ products }: { products: HeroParallaxItem[] }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 180, damping: 32, bounce: 0 };
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-36, 36]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [32, -32]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-18, 18]),
    springConfig,
  );

  const rows = [
    products.slice(0, 3),
    products.slice(3, 6),
    products.slice(6, 8),
  ];

  return (
    <div
      ref={ref}
      className="relative h-[23rem] overflow-hidden md:h-[32rem] lg:h-[35rem] [perspective:1000px]"
      aria-label="Workflow automation preview"
    >
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,transparent_18%,transparent_82%,var(--background)_100%)]" />
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : 10,
          rotateZ: shouldReduceMotion ? 0 : -7,
          y: translateY,
        }}
        className="absolute left-1/2 top-1/2 flex w-[48rem] -translate-x-1/2 -translate-y-1/2 flex-col gap-5 md:w-[56rem]"
      >
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            style={{ x: rowIndex === 1 ? translateXReverse : translateX }}
            className={`flex gap-5 ${rowIndex === 1 ? "pl-16" : ""}`}
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
  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : { y: -8 }}
      className="relative h-36 w-64 shrink-0 overflow-hidden rounded-lg border hairline bg-white/[0.035] transition hover:border-white/28 md:h-44 md:w-80"
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
