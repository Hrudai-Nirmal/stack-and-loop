export type ProjectBriefPayload = {
  name: string;
  email: string;
  companyOrProject: string;
  automationGoal: string;
  toolsUsed: string;
  timeline: string;
  budgetRange?: string;
  notes?: string;
  website?: string;
};

type ValidationResult =
  | { ok: true; data: ProjectBriefPayload }
  | { ok: false; message: string };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, maxLength: number) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

export function validateProjectBrief(input: unknown): ValidationResult {
  if (!input || typeof input !== "object") {
    return { ok: false, message: "Please send a valid project brief." };
  }

  const raw = input as Record<string, unknown>;
  const data: ProjectBriefPayload = {
    name: text(raw.name, 120),
    email: text(raw.email, 180).toLowerCase(),
    companyOrProject: text(raw.companyOrProject, 180),
    automationGoal: text(raw.automationGoal, 1800),
    toolsUsed: text(raw.toolsUsed, 600),
    timeline: text(raw.timeline, 120),
    budgetRange: text(raw.budgetRange, 120),
    notes: text(raw.notes, 1200),
    website: text(raw.website, 180),
  };

  if (data.website) {
    return { ok: true, data };
  }

  if (!data.name || !data.email || !data.automationGoal) {
    return {
      ok: false,
      message: "Please add your name, email, and what you want to automate.",
    };
  }

  if (!emailPattern.test(data.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  return { ok: true, data };
}

export function formatBriefHtml(brief: ProjectBriefPayload) {
  const rows = [
    ["Name", brief.name],
    ["Email", brief.email],
    ["Company or project", brief.companyOrProject || "Not provided"],
    ["Automation goal", brief.automationGoal],
    ["Tools used", brief.toolsUsed || "Not provided"],
    ["Timeline", brief.timeline || "Not provided"],
    ["Budget range", brief.budgetRange || "Not provided"],
    ["Notes", brief.notes || "Not provided"],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #101522; line-height: 1.6;">
      <h1 style="font-size: 22px; margin: 0 0 16px;">New Stack and Loop project brief</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 680px;">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border-top: 1px solid #e6e8ef; padding: 12px 16px 12px 0; width: 180px; color: #5b6475; vertical-align: top;">${escapeHtml(label)}</td>
                <td style="border-top: 1px solid #e6e8ef; padding: 12px 0; white-space: pre-wrap;">${escapeHtml(value)}</td>
              </tr>
            `,
          )
          .join("")}
      </table>
    </div>
  `;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
