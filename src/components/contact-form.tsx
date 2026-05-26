"use client";

import { FormEvent, useState } from "react";
import type { ReactNode } from "react";
import { track } from "@vercel/analytics";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { budgetRanges, timelineOptions } from "@/lib/content";

type FormState = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  companyOrProject: "",
  automationGoal: "",
  toolsUsed: "",
  timeline: "",
  budgetRange: "Not sure yet",
  notes: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/project-brief", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Something went wrong.");
      }

      setState("success");
      setMessage(
        "Thanks. Your brief has been sent, and I will review it before replying.",
      );
      setForm(initialForm);
      track("Project Brief Submitted");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "The brief could not be sent. Please try again.",
      );
    }
  }

  function updateField(name: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [name]: value }));
  }

  return (
    <form onSubmit={onSubmit} className="surface rounded-lg p-5 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" htmlFor="name" required>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="field"
          />
        </Field>
        <Field label="Email" htmlFor="email" required>
          <input
            id="email"
            name="email"
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="field"
          />
        </Field>
      </div>

      <Field label="Company or project" htmlFor="companyOrProject">
        <input
          id="companyOrProject"
          name="companyOrProject"
          value={form.companyOrProject}
          onChange={(event) =>
            updateField("companyOrProject", event.target.value)
          }
          className="field"
        />
      </Field>

      <Field
        label="What are you trying to automate?"
        htmlFor="automationGoal"
        required
      >
        <textarea
          id="automationGoal"
          name="automationGoal"
          required
          rows={5}
          value={form.automationGoal}
          onChange={(event) => updateField("automationGoal", event.target.value)}
          className="field resize-y"
        />
      </Field>

      <Field label="Tools you use" htmlFor="toolsUsed">
        <textarea
          id="toolsUsed"
          name="toolsUsed"
          rows={3}
          value={form.toolsUsed}
          onChange={(event) => updateField("toolsUsed", event.target.value)}
          className="field resize-y"
          placeholder="Slack, Gmail, Notion, Airtable, HubSpot, spreadsheets..."
        />
      </Field>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Timeline" htmlFor="timeline">
          <select
            id="timeline"
            name="timeline"
            value={form.timeline}
            onChange={(event) => updateField("timeline", event.target.value)}
            className="field"
          >
            <option value="">Select timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Budget range optional" htmlFor="budgetRange">
          <select
            id="budgetRange"
            name="budgetRange"
            value={form.budgetRange}
            onChange={(event) => updateField("budgetRange", event.target.value)}
            className="field"
          >
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Anything else" htmlFor="notes">
        <textarea
          id="notes"
          name="notes"
          rows={4}
          value={form.notes}
          onChange={(event) => updateField("notes", event.target.value)}
          className="field resize-y"
        />
      </Field>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-white/46">
          Your details are only used to understand the request and reply.
        </p>
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex h-14 items-center justify-center gap-3 rounded-lg bg-[var(--accent)] px-6 text-base font-medium text-white transition hover:bg-[#667dff] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting" ? (
            <Loader2 className="animate-spin" size={18} aria-hidden />
          ) : (
            <ArrowRight size={18} aria-hidden />
          )}
          Send project brief
        </button>
      </div>

      {message ? (
        <div
          className={`mt-6 flex gap-3 rounded-lg border p-4 text-sm leading-6 ${
            state === "success"
              ? "border-[var(--success)]/28 bg-[var(--success)]/8 text-[var(--success)]"
              : "border-red-300/25 bg-red-400/8 text-red-100"
          }`}
          role={state === "error" ? "alert" : "status"}
        >
          {state === "success" ? (
            <CheckCircle2 size={18} className="mt-0.5 shrink-0" aria-hidden />
          ) : null}
          {message}
        </div>
      ) : null}
    </form>
  );
}

function Field({
  children,
  htmlFor,
  label,
  required,
}: {
  children: ReactNode;
  htmlFor: string;
  label: string;
  required?: boolean;
}) {
  return (
    <div className="mt-5 first:mt-0">
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-white/76"
      >
        {label}
        {required ? (
          <span aria-hidden="true" className="text-[var(--accent-2)]">
            {" "}
            *
          </span>
        ) : null}
      </label>
      {children}
    </div>
  );
}
