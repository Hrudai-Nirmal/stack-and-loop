import { ActionLinks } from "@/components/action-links";

export function CTASection() {
  return (
    <section className="px-5 pb-16 md:pb-20">
      <div className="container surface rounded-lg p-6 md:p-12">
        <div className="grid gap-8">
          <div>
            <p className="font-mono text-sm uppercase text-white/55">
              Start small
            </p>
            <h2 className="mt-5 max-w-4xl text-[clamp(2.35rem,9vw,3.35rem)] font-semibold leading-tight text-white md:text-6xl">
              Send the workflow that keeps stealing attention.
            </h2>
            <p className="mt-5 max-w-3xl text-[clamp(1.08rem,4.5vw,1.28rem)] leading-8 text-[var(--muted)] md:mt-6 md:text-2xl md:leading-10">
              Share what you are trying to automate, book a lower-pressure
              workflow chat, or look through a sample breakdown first.
            </p>
          </div>
          <ActionLinks />
        </div>
      </div>
    </section>
  );
}
