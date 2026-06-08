export type ServiceVisualKey = "audit" | "ai" | "integrations" | "maintenance";
export type ProcessVisualKey = "map" | "design" | "build" | "insights";

type Service = {
  visualKey: ServiceVisualKey;
  title: string;
  summary: string;
  detail: string;
  deliverable: string;
};

type ProcessStep = {
  number: string;
  visualKey: ProcessVisualKey;
  title: string;
  summary: string;
  client: string;
  deliverable: string;
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Examples", href: "/examples" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const founder = {
  name: "Hrudai Nirmal",
  title: "AI Workflow Designer",
  location: "Bangalore, India",
  headline: "Helping small teams turn repetitive work into reliable systems.",
  bio:
    "I design AI workflows that take the repetitive work off your team's plate.",
  linkedin: "https://www.linkedin.com/in/hrudai-nirmal-0b589b1b8",
};

export const workflowChatHref =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || "/contact";
export const sampleWorkflowHref = "/examples#lead-intake-routing";

export const pricingSignal = {
  inr: "Workflow audits start at ₹15,000",
  usd: "$160",
  note: "USD shown with a clean planning conversion of $1 = ₹95.",
};

export const services: Service[] = [
  {
    visualKey: "audit",
    title: "Workflow audit",
    summary:
      "Map the repetitive work, handoffs, tools, and exceptions that slow the team down.",
    detail:
      "A focused review of current tools, recurring tasks, intake points, and decision paths so the right automation opportunities become obvious.",
    deliverable:
      "Delivered as a concise workflow map, ranked automation opportunities, and a recommended first build. Typically completed in 3-5 working days.",
  },
  {
    visualKey: "ai",
    title: "AI-assisted operations",
    summary:
      "Use AI where it helps: triage, drafting, research, routing, summaries, and structured output.",
    detail:
      "Design practical AI steps with human review points, clear prompts, and predictable outputs instead of fragile one-off experiments.",
    deliverable:
      "Delivered as a usable AI-assisted workflow with prompts, review checkpoints, and examples your team can test before relying on it.",
  },
  {
    visualKey: "integrations",
    title: "Tool integrations",
    summary:
      "Connect the apps you already use into one cleaner flow with fewer manual transfers.",
    detail:
      "Bridge forms, spreadsheets, CRMs, docs, email, Slack, project tools, and databases into lightweight operational systems.",
    deliverable:
      "Delivered as a connected flow between selected tools, with documented triggers, handoffs, and fallback steps for common exceptions.",
  },
  {
    visualKey: "maintenance",
    title: "Automation maintenance",
    summary:
      "Keep the system understandable, documented, and easy to improve as your work changes.",
    detail:
      "Add monitoring, handoff notes, simple admin controls, and change-friendly documentation so the workflow remains useful after launch.",
    deliverable:
      "Delivered as a maintenance pass with health checks, cleanup notes, small improvements, and a clear list of next changes.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    visualKey: "map",
    title: "Map the work",
    summary:
      "Identify the repeated tasks, inputs, decisions, tools, and points where people lose time or context.",
    client: "Screenshots, sample tasks, tool access, and the messy truth of how work currently happens.",
    deliverable:
      "A clear workflow map, automation opportunities, and a recommended first system to build.",
  },
  {
    number: "02",
    visualKey: "design",
    title: "Design the system",
    summary:
      "Shape the workflow into a simple loop with inputs, checks, AI assistance, and human review where it matters.",
    client:
      "Feedback on the proposed flow, success criteria, and any rules the system must respect.",
    deliverable:
      "A build plan with data flow, tools, fallback behavior, and the minimum interface needed.",
  },
  {
    number: "03",
    visualKey: "build",
    title: "Build the loop",
    summary:
      "Implement the automation, connect tools, write the prompts, and make the workflow usable day to day.",
    client:
      "Access to selected tools, quick reviews, and real examples to test against.",
    deliverable:
      "A working workflow with documentation, tested paths, and a handoff you can actually use.",
  },
  {
    number: "04",
    visualKey: "insights",
    title: "Improve with feedback",
    summary:
      "Watch how the system behaves in real use, surface automation insights, and make the next improvement obvious.",
    client:
      "Notes from the first users, edge cases, and any places where the system still feels heavy.",
    deliverable:
      "A cleaner v1, dashboard visibility, automation insights, and a short list of high-leverage next improvements.",
  },
];

export const examples = [
  {
    slug: "lead-intake-routing",
    title: "Lead intake and routing",
    problem:
      "New inquiries arrive across forms, email, and DMs, then sit until someone manually sorts them.",
    workflow:
      "Capture each lead, enrich the context, classify fit, route it to the right place, and draft a follow-up.",
    tools: "Website form, Gmail, Sheets or CRM, Slack, calendar links.",
    outcome:
      "Faster first response, fewer missed leads, and a calmer handoff from interest to next step.",
    handoff:
      "A lead record, fit summary, suggested next action, owner assignment, and a draft response ready for review.",
  },
  {
    slug: "research-content-ops",
    title: "Research and content operations",
    problem:
      "Ideas, references, drafts, and approvals live in separate places, making publishing feel heavier than it should.",
    workflow:
      "Collect inputs, summarize sources, generate structured drafts, track approvals, and prepare publishing assets.",
    tools: "Notion, Google Docs, Slack, research links, CMS or publishing checklist.",
    outcome:
      "A repeatable content loop that keeps momentum without removing editorial judgement.",
    handoff:
      "A structured brief, source summary, draft outline, approval status, and publishing checklist in one place.",
  },
  {
    slug: "client-delivery-coordination",
    title: "Client delivery coordination",
    problem:
      "Project updates, documents, tasks, and client questions scatter across tools as delivery gets busy.",
    workflow:
      "Centralize updates, summarize progress, prepare status notes, and flag missing decisions before they block work.",
    tools: "Slack, email, project tracker, shared docs, client update template.",
    outcome:
      "Cleaner client communication and fewer coordination gaps during active delivery.",
    handoff:
      "A weekly status note, blocker list, owner reminders, and client-ready update drafted from live project context.",
  },
];

export const budgetRanges = {
  INR: [
    "Not sure yet",
    "Under ₹15,000",
    "₹15,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000+",
  ],
  USD: [
    "Not sure yet",
    "Under $160",
    "$160 - $525",
    "$525 - $1,050",
    "$1,050+",
  ],
} as const;

export const faqs = [
  {
    question: "Will this work with the tools we already use?",
    answer:
      "Usually, yes. The first step is checking your current stack and choosing the smallest useful workflow that can run across the tools you already trust.",
  },
  {
    question: "What if our team is not technical?",
    answer:
      "The system is designed with handoff notes, review points, and simple operating instructions so non-technical team members can use it day to day.",
  },
  {
    question: "How do you handle sensitive business data?",
    answer:
      "Access is scoped to the workflow being built, unnecessary data is avoided, and sensitive steps are kept visible for review instead of hidden inside black-box automation.",
  },
  {
    question: "What happens if something breaks after delivery?",
    answer:
      "Maintenance can include monitoring, small fixes, documentation updates, and a clear path for improving the workflow as tools or team habits change.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A focused workflow audit can take 3-5 working days. Build timelines depend on tool access, complexity, and review speed, but the first useful version should stay intentionally small.",
  },
];

export const timelineOptions = [
  "As soon as practical",
  "In the next 2-4 weeks",
  "This quarter",
  "Exploring for later",
];
