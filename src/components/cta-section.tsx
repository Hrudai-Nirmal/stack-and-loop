import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="px-5 pb-20">
      <div className="container surface rounded-lg p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-sm uppercase text-white/55">
              Start small
            </p>
            <h2 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-6xl">
              Send the workflow that keeps stealing attention.
            </h2>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--muted)] md:text-2xl md:leading-10">
              Share what you are trying to automate, the tools involved, and
              what a better version of the work would feel like.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[var(--accent)] px-6 text-base font-medium text-white transition hover:bg-[var(--accent-2)]"
          >
            Send project brief
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
