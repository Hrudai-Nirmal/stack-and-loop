"use client";

import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";
import { CalendarDays, ExternalLink, FileText, UserRound } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { founder, sampleWorkflowHref, workflowChatHref } from "@/lib/content";

type ContactMode = "brief" | "call" | "sample" | "linkedin";

const options: Array<{
  id: ContactMode;
  label: string;
  copy: string;
}> = [
  {
    id: "brief",
    label: "Send project brief",
    copy: "Best when you already know the workflow you want to improve.",
  },
  {
    id: "call",
    label: "Book a call/meeting",
    copy: "Best when you want to talk through the workflow first.",
  },
  {
    id: "sample",
    label: "See sample breakdown",
    copy: "Best when you want to see the shape of a workflow before reaching out.",
  },
  {
    id: "linkedin",
    label: "Connect on LinkedIn",
    copy: "Best when you want a lighter first touch.",
  },
];

export function ContactOptions() {
  const [active, setActive] = useState<ContactMode>("brief");

  return (
    <div className="grid gap-6">
      <div className="grid gap-3 md:grid-cols-4">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setActive(option.id)}
            className={`rounded-lg border p-4 text-left transition ${
              active === option.id
                ? "border-[var(--accent-line)] bg-[var(--accent-soft)]"
                : "hairline bg-white/[0.025] hover:border-[var(--accent-line)]"
            }`}
            aria-pressed={active === option.id}
          >
            <span className="block font-medium text-white">{option.label}</span>
            <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">
              {option.copy}
            </span>
          </button>
        ))}
      </div>

      {active === "brief" ? <ContactForm /> : null}
      {active === "call" ? <BookingPanel onBrief={() => setActive("brief")} /> : null}
      {active === "sample" ? <SamplePanel /> : null}
      {active === "linkedin" ? <LinkedInPanel /> : null}
    </div>
  );
}

function BookingPanel({ onBrief }: { onBrief: () => void }) {
  const hasCalendly = !workflowChatHref.startsWith("/");

  if (hasCalendly) {
    return (
      <div className="surface overflow-hidden rounded-lg p-0">
        <iframe
          src={workflowChatHref}
          title="Book a call or meeting"
          className="h-[42rem] w-full border-0 bg-white"
        />
      </div>
    );
  }

  return (
    <Panel
      icon={<CalendarDays size={22} aria-hidden />}
      label="Booking link not configured yet"
      title="Use the project brief for now, and I will reply with next times."
      copy="Once the Calendly link is added, this option will show the booking calendar directly on the page."
    >
      <button
        type="button"
        onClick={onBrief}
        className="inline-flex h-14 items-center justify-center rounded-lg bg-[var(--accent)] px-6 text-base font-medium text-white transition hover:bg-[var(--accent-2)]"
      >
        Send project brief
      </button>
    </Panel>
  );
}

function SamplePanel() {
  return (
    <Panel
      icon={<FileText size={22} aria-hidden />}
      label="Sample breakdown"
      title="See how a messy lead intake workflow becomes a clearer system."
      copy="The sample shows the pain, tools involved, workflow, expected outcome, and handoff without pretending it is a named case study."
    >
      <Link
        href={sampleWorkflowHref}
        className="inline-flex h-14 items-center justify-center rounded-lg border border-[var(--accent-line)] px-6 text-base font-medium text-white/88 transition hover:bg-[var(--accent-soft)]"
      >
        Open sample breakdown
      </Link>
    </Panel>
  );
}

function LinkedInPanel() {
  return (
    <Panel
      icon={<UserRound size={22} aria-hidden />}
      label="LinkedIn"
      title={`Connect with ${founder.name}.`}
      copy={`${founder.headline} I am based in ${founder.location}, and you can start with a simple message if a brief feels too heavy right now.`}
    >
      <a
        href={founder.linkedin}
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-[var(--accent-line)] px-6 text-base font-medium text-white/88 transition hover:bg-[var(--accent-soft)]"
      >
        Connect on LinkedIn
        <ExternalLink size={18} aria-hidden />
      </a>
    </Panel>
  );
}

function Panel({
  children,
  copy,
  icon,
  label,
  title,
}: {
  children: ReactNode;
  copy: string;
  icon: ReactNode;
  label: string;
  title: string;
}) {
  return (
    <div className="surface rounded-lg p-6 md:p-8">
      <div className="flex items-start gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-lg border border-[var(--accent-line)] bg-[var(--accent-soft)] text-[var(--accent-2)]">
          {icon}
        </span>
        <div>
          <p className="font-mono text-sm uppercase text-white/55">{label}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">{copy}</p>
          <div className="mt-7">{children}</div>
        </div>
      </div>
    </div>
  );
}
