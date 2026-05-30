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
  const [isCompact, setIsCompact] = React.useState(false);
  const activeProduct =
    products.find((product) => product.title === activeTitle) ?? products[0];
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: scrollTargetRef,
    offset: ["start start", "end start"],
  });

  React.useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const update = () => setIsCompact(query.matches);

    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  const staticGrid = shouldReduceMotion || isCompact;
  const springConfig = { stiffness: 140, damping: 28, bounce: 0 };
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.58], staticGrid ? [0, 0] : [17, 0]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.58], staticGrid ? [0, 0] : [-9, 0]),
    springConfig,
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.58], staticGrid ? [1, 1] : [1.08, 0.9]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.58], staticGrid ? [0, 0] : [10, 90]),
    springConfig,
  );
  const parentX = useSpring(
    useTransform(scrollYProgress, [0, 0.58], staticGrid ? [0, 0] : [260, 0]),
    springConfig,
  );
  const rowOneX = useSpring(useTransform(scrollYProgress, [0, 0.58], staticGrid ? [0, 0] : [130, 0]), springConfig);
  const rowTwoX = useSpring(useTransform(scrollYProgress, [0, 0.58], staticGrid ? [0, 0] : [-94, 0]), springConfig);
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
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,transparent_28%,transparent_76%,var(--background)_100%)]" />
      <motion.div
        style={{ opacity: serviceOpacity, y: serviceY }}
        className="pointer-events-none container absolute inset-x-0 top-[6.5rem] z-[4] px-5"
      >
        <div className="grid gap-5 md:grid-cols-[1fr_24rem] md:items-start">
          <div>
            <p className="font-mono text-sm uppercase text-white/55">
              Services
            </p>
            <h2 className="mt-4 max-w-4xl text-[clamp(2.1rem,9vw,2.75rem)] font-semibold leading-tight text-white md:text-[3.2rem]">
              End-to-end workflow automation.
            </h2>
            <p className="mt-4 max-w-[18rem] text-base leading-7 text-[var(--muted)] sm:max-w-2xl md:text-[1.28rem] md:leading-9">
              Select a panel to inspect the workflow.
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
        className="absolute left-1/2 top-[58%] hidden w-[min(92vw,78rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-5 will-change-transform md:flex"
      >
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            style={{ x: rowOffsets[rowIndex] }}
            className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5"
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
      <motion.div
        style={{ opacity: serviceOpacity, y: serviceY }}
        className="absolute left-1/2 top-[66%] flex w-[calc(100vw-2.5rem)] -translate-x-1/2 -translate-y-1/2 flex-col gap-3 md:hidden"
      >
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-2 gap-3"
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
          </div>
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
      className={`pointer-events-auto relative h-36 min-w-0 overflow-hidden rounded-lg border bg-white/[0.032] text-left transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-line)] sm:h-44 md:h-52 ${
        active
          ? "border-[var(--accent-line)] bg-[var(--accent-soft)]"
          : "hairline hover:border-[var(--accent-line)] hover:bg-white/[0.052]"
      }`}
      aria-pressed={active}
    >
      {product.thumbnail}
      <div className="absolute inset-x-0 bottom-0 border-t hairline bg-black/32 px-3 py-2.5 backdrop-blur-sm md:px-4 md:py-3">
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
