import {
  BarChart3,
  FileArchive,
  Headphones,
  MailCheck,
  Sparkles,
  UserPlus,
} from "lucide-react";

const smbServices = [
  {
    title: "Lead follow-up",
    copy: "Capture inquiries, enrich context, draft replies, and route warm leads.",
    icon: MailCheck,
  },
  {
    title: "Invoice intake",
    copy: "Read invoices, file documents, extract fields, and prepare approval notes.",
    icon: FileArchive,
  },
  {
    title: "CRM cleanup",
    copy: "Standardize records, enrich missing fields, and flag stale opportunities.",
    icon: Sparkles,
  },
  {
    title: "Client onboarding",
    copy: "Collect details, create folders, assign tasks, and send kickoff updates.",
    icon: UserPlus,
  },
  {
    title: "Support triage",
    copy: "Classify tickets, summarize history, route owners, and draft first responses.",
    icon: Headphones,
  },
  {
    title: "Weekly reporting",
    copy: "Pull updates, summarize progress, surface bottlenecks, and refresh dashboards.",
    icon: BarChart3,
  },
];

export function SMBServiceExamples() {
  return (
    <div className="surface rounded-lg p-5 md:p-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {smbServices.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="rounded-lg border hairline bg-white/[0.03] p-4 transition hover:border-[var(--accent-line)] hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-[var(--accent-line)] bg-[var(--accent-soft)] text-[var(--accent-2)]">
                  <Icon size={19} aria-hidden />
                </span>
                <div>
                  <h3 className="font-medium text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                    {service.copy}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
