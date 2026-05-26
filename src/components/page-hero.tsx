type PageHeroProps = {
  label: string;
  title: string;
  description: string;
};

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="container border-b hairline pb-16 pt-6 md:pb-24">
      <div className="max-w-4xl reveal">
        <p className="font-mono text-sm uppercase text-[var(--accent-2)]">
          {label}
        </p>
        <h1 className="mt-6 text-5xl font-semibold leading-tight text-balance text-white md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--soft)]">
          {description}
        </p>
      </div>
    </section>
  );
}
