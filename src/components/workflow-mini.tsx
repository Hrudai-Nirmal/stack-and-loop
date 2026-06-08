import { ArrowRight } from "lucide-react";

type WorkflowMiniProps = {
  example: {
    slug?: string;
    title: string;
    problem: string;
    workflow: string;
    tools?: string;
    outcome: string;
    handoff?: string;
  };
  detailed?: boolean;
};

export function WorkflowMini({ detailed = false, example }: WorkflowMiniProps) {
  return (
    <article id={example.slug} className="scroll-mt-24 rounded-lg border hairline bg-white/[0.03] p-6">
      <h3 className="text-xl font-medium text-white">{example.title}</h3>
      <div className="my-6 flex items-center gap-3 text-white/58">
        <span className="h-px flex-1 bg-current opacity-40" />
        <ArrowRight size={18} aria-hidden />
        <span className="h-px flex-1 bg-current opacity-40" />
      </div>
      <div className={`grid gap-5 ${detailed ? "md:grid-cols-2" : ""}`}>
        <TextBlock label="Problem" value={example.problem} />
        <TextBlock label="Workflow" value={example.workflow} />
        {detailed && example.tools ? (
          <TextBlock label="Tools involved" value={example.tools} />
        ) : null}
        <TextBlock label="Outcome" value={example.outcome} />
        {detailed && example.handoff ? (
          <div className="md:col-span-2">
            <TextBlock label="Handoff" value={example.handoff} />
          </div>
        ) : null}
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
