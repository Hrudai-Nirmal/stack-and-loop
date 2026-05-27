import type { ServiceVisualKey } from "@/lib/content";

export function ServiceVisual({ variant }: { variant: ServiceVisualKey }) {
  return (
    <div className="relative h-40 overflow-hidden rounded-lg border hairline bg-black/18">
      <svg
        viewBox="0 0 320 160"
        className="absolute inset-0 h-full w-full text-white/58"
        aria-hidden
      >
        {variant === "audit" ? <AuditVisual /> : null}
        {variant === "ai" ? <AIVisual /> : null}
        {variant === "integrations" ? <IntegrationsVisual /> : null}
        {variant === "maintenance" ? <MaintenanceVisual /> : null}
      </svg>
    </div>
  );
}

function AuditVisual() {
  return (
    <>
      <path d="M44 42H276M44 78H276M44 114H276" stroke="rgba(255,255,255,0.13)" />
      <path d="M88 28V132M160 28V132M232 28V132" stroke="rgba(255,255,255,0.13)" />
      <rect x="56" y="52" width="64" height="44" rx="6" fill="rgba(255,255,255,0.08)" stroke="currentColor" />
      <rect x="172" y="86" width="48" height="28" rx="5" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.28)" />
      <path d="M54 128C102 96 142 118 184 70C214 36 246 42 274 56" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      <circle cx="88" cy="74" r="5" fill="#f7f8ff" />
      <circle cx="196" cy="100" r="4" fill="currentColor" />
    </>
  );
}

function AIVisual() {
  return (
    <>
      <rect x="42" y="46" width="78" height="68" rx="8" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.24)" />
      <path d="M60 66H102M60 82H90M60 98H108" stroke="rgba(255,255,255,0.5)" strokeLinecap="round" />
      <path d="M124 80C156 80 158 52 188 52C218 52 218 80 248 80" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      <rect x="206" y="48" width="72" height="64" rx="8" fill="rgba(255,255,255,0.08)" stroke="currentColor" />
      <path d="M224 69H260M224 86H252" stroke="#f7f8ff" strokeLinecap="round" />
      <path d="M174 94L181 80L188 94L202 101L188 108L181 122L174 108L160 101Z" fill="none" stroke="#f7f8ff" strokeLinejoin="round" />
    </>
  );
}

function IntegrationsVisual() {
  const nodes = [
    [72, 52],
    [160, 38],
    [246, 62],
    [110, 112],
    [220, 112],
  ];

  return (
    <>
      <path d="M72 52L160 38L246 62M72 52L110 112L220 112L246 62M160 38L220 112" fill="none" stroke="rgba(255,255,255,0.18)" />
      <path d="M72 52L160 38L246 62L220 112L110 112Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      {nodes.map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r={index === 1 ? 18 : 14} fill={index === 1 ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)"} stroke={index === 1 ? "currentColor" : "rgba(255,255,255,0.28)"} />
          <circle cx={cx} cy={cy} r="3.5" fill={index === 1 ? "#f7f8ff" : "currentColor"} />
        </g>
      ))}
    </>
  );
}

function MaintenanceVisual() {
  return (
    <>
      <rect x="46" y="40" width="228" height="82" rx="8" fill="rgba(255,255,255,0.035)" stroke="rgba(255,255,255,0.24)" />
      <path d="M64 102C88 78 108 84 130 91C154 99 174 91 194 63C217 31 244 53 258 70" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M64 61H110M64 75H92" stroke="rgba(255,255,255,0.42)" strokeLinecap="round" />
      <circle cx="194" cy="63" r="5" fill="#f7f8ff" />
      <circle cx="194" cy="63" r="13" fill="rgba(255,255,255,0.1)" />
      <path d="M222 98H250M222 108H242" stroke="rgba(255,255,255,0.36)" strokeLinecap="round" />
    </>
  );
}
