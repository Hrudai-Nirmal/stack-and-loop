import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, CalendarDays, ExternalLink } from "lucide-react";
import { founder, sampleWorkflowHref, workflowChatHref } from "@/lib/content";

type ActionLinksProps = {
  compact?: boolean;
};

export function ActionLinks({ compact = false }: ActionLinksProps) {
  return (
    <div className={`flex flex-col gap-3 ${compact ? "" : "sm:flex-row sm:flex-wrap"}`}>
      <ActionLink href="/contact" variant="primary">
        Send project brief
        <ArrowRight size={18} aria-hidden />
      </ActionLink>
      <ActionLink href={workflowChatHref}>
        <CalendarDays size={18} aria-hidden />
        Book workflow chat
      </ActionLink>
      <ActionLink href={sampleWorkflowHref}>
        See sample breakdown
        <ArrowRight size={18} aria-hidden />
      </ActionLink>
      <ActionLink href={founder.linkedin}>
        <ExternalLink size={18} aria-hidden />
        Connect on LinkedIn
      </ActionLink>
    </div>
  );
}

function ActionLink({
  children,
  href,
  variant = "secondary",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const className =
    variant === "primary"
      ? "inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[var(--accent)] px-6 text-base font-medium text-white transition hover:bg-[var(--accent-2)]"
      : "inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-[var(--accent-line)] px-5 text-base font-medium text-white/88 transition hover:bg-[var(--accent-soft)]";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
