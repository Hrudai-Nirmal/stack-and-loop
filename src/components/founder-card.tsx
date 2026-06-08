import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
import { founder } from "@/lib/content";

type FounderCardProps = {
  showAboutLink?: boolean;
};

export function FounderCard({ showAboutLink = true }: FounderCardProps) {
  return (
    <div className="grid gap-8 rounded-lg border hairline bg-white/[0.03] p-6 md:grid-cols-[16rem_1fr] md:p-8">
      <div className="relative overflow-hidden rounded-lg border hairline bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_62%)] p-5">
        <div className="aspect-[4/5] rounded-lg border hairline bg-black/24 p-4">
          <div className="grid h-full place-items-center rounded-lg border border-[var(--accent-line)] bg-[var(--accent-soft)]">
            <div className="text-center">
              <p className="text-5xl font-semibold text-white">HN</p>
              <p className="mt-3 font-mono text-xs uppercase text-white/55">
                Stack and Loop
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center">
        <p className="font-mono text-sm uppercase text-white/55">
          Founder
        </p>
        <h2 className="mt-4 text-[clamp(2.2rem,8vw,3.5rem)] font-semibold leading-tight text-white">
          {founder.name}
        </h2>
        <p className="mt-3 text-xl leading-8 text-[var(--soft)]">
          {founder.title}
        </p>
        <p className="mt-6 max-w-2xl text-[clamp(1.08rem,4vw,1.28rem)] leading-8 text-[var(--muted)]">
          {founder.headline} {founder.bio}
        </p>
        <div className="mt-6 flex flex-col gap-3 text-sm text-white/70 sm:flex-row sm:items-center">
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} aria-hidden />
            {founder.location}
          </span>
          <a
            href={founder.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-white"
          >
            <ExternalLink size={16} aria-hidden />
            LinkedIn
          </a>
        </div>
        {showAboutLink ? (
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-3 text-base font-medium text-white/85 transition hover:text-white"
          >
            Learn more about Stack and Loop
            <ArrowRight size={18} aria-hidden />
          </Link>
        ) : null}
      </div>
    </div>
  );
}
