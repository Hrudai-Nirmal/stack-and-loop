export type ServiceVisualKey = "audit" | "ai" | "integrations" | "maintenance";
export type ProcessVisualKey = "map" | "design" | "build" | "insights";

type Service = {
  visualKey: ServiceVisualKey;
  title: string;
  summary: string;
  detail: string;
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
  { label: "Contact", href: "/contact" },
];

export const services: Service[] = [
  {
    visualKey: "audit",
    title: "Workflow audit",
    summary:
      "Map the repetitive work, handoffs, tools, and exceptions that slow the team down.",
    detail:
      "A focused review of current tools, recurring tasks, intake points, and decision paths so the right automation opportunities become obvious.",
  },
  {
    visualKey: "ai",
    title: "AI-assisted operations",
    summary:
      "Use AI where it helps: triage, drafting, research, routing, summaries, and structured output.",
    detail:
      "Design practical AI steps with human review points, clear prompts, and predictable outputs instead of fragile one-off experiments.",
  },
  {
    visualKey: "integrations",
    title: "Tool integrations",
    summary:
      "Connect the apps you already use into one cleaner flow with fewer manual transfers.",
    detail:
      "Bridge forms, spreadsheets, CRMs, docs, email, Slack, project tools, and databases into lightweight operational systems.",
  },
  {
    visualKey: "maintenance",
    title: "Automation maintenance",
    summary:
      "Keep the system understandable, documented, and easy to improve as your work changes.",
    detail:
      "Add monitoring, handoff notes, simple admin controls, and change-friendly documentation so the workflow remains useful after launch.",
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
    title: "Lead intake and routing",
    problem:
      "New inquiries arrive across forms, email, and DMs, then sit until someone manually sorts them.",
    workflow:
      "Capture each lead, enrich the context, classify fit, route it to the right place, and draft a follow-up.",
    outcome:
      "Faster first response, fewer missed leads, and a calmer handoff from interest to next step.",
  },
  {
    title: "Research and content operations",
    problem:
      "Ideas, references, drafts, and approvals live in separate places, making publishing feel heavier than it should.",
    workflow:
      "Collect inputs, summarize sources, generate structured drafts, track approvals, and prepare publishing assets.",
    outcome:
      "A repeatable content loop that keeps momentum without removing editorial judgement.",
  },
  {
    title: "Client delivery coordination",
    problem:
      "Project updates, documents, tasks, and client questions scatter across tools as delivery gets busy.",
    workflow:
      "Centralize updates, summarize progress, prepare status notes, and flag missing decisions before they block work.",
    outcome:
      "Cleaner client communication and fewer coordination gaps during active delivery.",
  },
];

export const budgetRanges = [
  "Not sure yet",
  "Under $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+",
];

export const timelineOptions = [
  "As soon as practical",
  "In the next 2-4 weeks",
  "This quarter",
  "Exploring for later",
];
