import { ArrowRight } from "lucide-react";
import { ServiceVisual } from "@/components/service-visual";
import type { ServiceVisualKey } from "@/lib/content";

type ServicePreviewProps = {
  service: {
    visualKey: ServiceVisualKey;
    title: string;
    summary: string;
    detail: string;
  };
};

export function ServicePreview({ service }: ServicePreviewProps) {
  return (
    <article className="group rounded-lg border hairline bg-white/[0.03] p-4 transition hover:border-white/24 hover:bg-white/[0.045]">
      <ServiceVisual variant={service.visualKey} />
      <div className="mb-7 mt-6 flex items-center justify-between text-white/58">
        <span className="h-px w-12 bg-current opacity-65" />
        <ArrowRight
          size={18}
          aria-hidden
          className="transition group-hover:translate-x-1"
        />
      </div>
      <h3 className="text-xl font-medium text-white">{service.title}</h3>
      <p className="mt-4 leading-7 text-[var(--muted)]">{service.summary}</p>
    </article>
  );
}
