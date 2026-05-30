type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="container border-b hairline pb-12 pt-4 md:pb-24 md:pt-6">
      <div className="max-w-5xl reveal">
        <p className="font-mono text-sm uppercase text-white/55">
          {label}
        </p>
        <h1 className="mt-5 max-w-5xl text-[clamp(3rem,12vw,4.25rem)] font-semibold leading-[1.08] text-balance text-white md:mt-6 md:text-[clamp(4.5rem,8.5vw,6rem)]">
          {title}
        </h1>
        <p className="mt-6 max-w-4xl text-[clamp(1.12rem,4.8vw,1.35rem)] leading-8 text-[var(--soft)] md:mt-8 md:text-2xl md:leading-10">
          {description}
        </p>
      </div>
    </section>
  );
}
