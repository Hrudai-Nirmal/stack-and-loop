import { ArrowRight } from "lucide-react";

type WorkflowMiniProps = {
  example: {
    title: string;
    problem: string;
    workflow: string;
    outcome: string;
  };
};

export function WorkflowMini({ example }: WorkflowMiniProps) {
  return (
    <article className="rounded-lg border hairline bg-white/[0.03] p-6">
      <h3 className="text-xl font-medium text-white">{example.title}</h3>
      <div className="my-6 flex items-center gap-3 text-[var(--accent-2)]">
        <span className="h-px flex-1 bg-current opacity-40" />
        <ArrowRight size={18} aria-hidden />
        <span className="h-px flex-1 bg-current opacity-40" />
      </div>
      <div className="grid gap-5">
        <TextBlock label="Problem" value={example.problem} />
        <TextBlock label="Workflow" value={example.workflow} />
        <TextBlock label="Outcome" value={example.outcome} />
      </div>
    </article>
  );
}

function TextBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase text-white/42">{label}</p>
      <p className="mt-2 leading-7 text-[var(--muted)]">{value}</p>
    </div>
  );
}
