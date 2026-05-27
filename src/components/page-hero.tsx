type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="container border-b hairline pb-16 pt-6 md:pb-24">
      <div className="max-w-5xl reveal">
        <p className="font-mono text-sm uppercase text-white/55">
          {label}
        </p>
        <h1 className="mt-6 text-6xl font-semibold leading-[1.08] text-balance text-white md:text-8xl">
          {title}
        </h1>
        <p className="mt-8 max-w-4xl text-2xl leading-10 text-[var(--soft)]">
          {description}
        </p>
      </div>
    </section>
  );
}
