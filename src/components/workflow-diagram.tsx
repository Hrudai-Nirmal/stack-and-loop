const steps = ["Inputs", "Routing", "Human review", "Automated output"];

export function WorkflowDiagram() {
  return (
    <div className="surface rounded-lg p-6 md:p-8">
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step} className="relative rounded-lg border hairline bg-black/18 p-5">
            {index < steps.length - 1 ? (
              <span className="absolute top-1/2 -right-4 hidden h-px w-8 bg-white/42 md:block" />
            ) : null}
            <p className="font-mono text-xs text-white/55">
              0{index + 1}
            </p>
            <p className="mt-8 text-lg font-medium text-white">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
