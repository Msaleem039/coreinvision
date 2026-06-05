import type { LucideIcon } from "lucide-react";
import { Cloud, Code2, Layers, Sparkles, Workflow } from "lucide-react";

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  highlights: string[];
  useCases: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "web-development",
    title: "Web development",
    description:
      "Production-grade Next.js and MERN applications with performance, SEO, and accessibility baked in.",
    icon: Code2,
    highlights: ["App Router & SSR", "Design systems", "CI/CD pipelines"],
    useCases: ["Marketing sites", "Customer portals", "Internal tools"],
  },
  {
    slug: "ai-integrations",
    title: "AI integrations",
    description:
      "LLM features, retrieval pipelines, and guardrails that feel native to your product—not bolted on.",
    icon: Sparkles,
    highlights: ["RAG & embeddings", "Streaming UX", "Evals & monitoring"],
    useCases: ["Support copilots", "Doc search", "Workflow assistants"],
  },
  {
    slug: "saas-development",
    title: "SaaS development",
    description:
      "From MVP to scale: billing, auth, multi-tenant patterns, and analytics your investors expect.",
    icon: Layers,
    highlights: ["Stripe & auth", "Admin dashboards", "Usage metering"],
    useCases: ["B2B SaaS", "Vertical software", "Founder MVPs"],
  },
  {
    slug: "automation-apis",
    title: "Automation & APIs",
    description:
      "Reliable n8n flows and custom API layers that connect CRMs, ERPs, and your product surface.",
    icon: Workflow,
    highlights: ["n8n & webhooks", "Idempotent jobs", "Observability"],
    useCases: ["Lead routing", "Ops automation", "Partner integrations"],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "AWS-first deployments with Docker, IaC-minded setups, and pragmatic cost controls.",
    icon: Cloud,
    highlights: ["AWS & Docker", "Zero-downtime releases", "Backups & DR"],
    useCases: ["Production launches", "Migrations", "Cost reviews"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    body: "We align on goals, constraints, and success metrics—fast. No bloated workshops.",
  },
  {
    step: "02",
    title: "Blueprint",
    body: "Architecture, UX flows, and a delivery plan you can share with stakeholders.",
  },
  {
    step: "03",
    title: "Build",
    body: "Weekly demos, transparent backlog, and code you can own from day one.",
  },
  {
    step: "04",
    title: "Launch & grow",
    body: "Hardening, monitoring, and iterative improvements as usage ramps.",
  },
];

export const testimonials = [
  {
    quote:
      "coreinvision shipped our customer dashboard in four weeks with better performance than our old React SPA. Communication was crisp across time zones.",
    name: "Jordan M.",
    role: "CTO",
    org: "Series A SaaS · USA",
    flag: "🇺🇸",
  },
  {
    quote:
      "We needed WhatsApp-friendly updates and a team that understood local business pace. They delivered automation that cut manual order work by half.",
    name: "Ayesha K.",
    role: "Operations Director",
    org: "Retail group · Pakistan",
    flag: "🇵🇰",
  },
  {
    quote:
      "Their AI integration felt like a product feature, not a demo. Guardrails, logging, and UX polish were all there.",
    name: "Elena R.",
    role: "Head of Product",
    org: "Agency partner · USA",
    flag: "🇺🇸",
  },
];

export const trustLogos = [
  "Northwind Labs",
  "Atlas Commerce",
  "Riverstone Health",
  "Crescent Media",
  "Summit Fintech",
];

export const portfolioProjects = [
  {
    slug: "atlas-billing",
    title: "Atlas Billing Platform",
    sector: "B2B SaaS · USA",
    problem:
      "Manual invoicing and fragmented usage data slowed expansion into mid-market accounts.",
    solution:
      "Built a Next.js billing console with Stripe Connect, usage exports, and role-based admin.",
    tech: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "AWS"],
    results: ["40% faster month-close", "99.95% uptime post-launch"],
    accent: "from-indigo-500/30 to-cyan-500/20",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=70",
  },
  {
    slug: "crescent-ops",
    title: "Crescent Ops Hub",
    sector: "Logistics · Pakistan",
    problem:
      "Dispatch teams relied on spreadsheets and WhatsApp threads, causing missed handoffs.",
    solution:
      "Unified dashboard with live status, n8n automations, and WhatsApp-triggered alerts.",
    tech: ["Next.js", "n8n", "REST APIs", "Docker", "AWS"],
    results: ["50% less manual coordination", "Sub-2s page loads nationwide"],
    accent: "from-violet-500/30 to-fuchsia-500/20",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=70",
  },
  {
    slug: "summit-copilot",
    title: "Summit Support Copilot",
    sector: "Fintech · USA",
    problem:
      "Support volume spiked after a product launch; macros could not keep up with policy nuances.",
    solution:
      "Retrieval-augmented assistant with citations, audit logs, and human handoff paths.",
    tech: ["Next.js", "OpenAI", "Vector DB", "Redis", "AWS"],
    results: ["22% ticket deflection", "CSAT +0.4 in 60 days"],
    accent: "from-cyan-500/30 to-blue-500/20",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=70",
  },
];

export const pricingTiers = [
  {
    name: "Sprint",
    price: "$12k – $25k",
    description: "MVP, landing systems, or scoped module in 3–6 weeks.",
    features: [
      "Dedicated lead engineer",
      "Weekly demos & async updates",
      "Handoff docs & repo access",
    ],
    cta: "Book a scoping call",
    highlighted: false,
  },
  {
    name: "Product team",
    price: "$35k – $90k",
    description: "Multi-surface product work with design partners as needed.",
    features: [
      "Full-stack squad (2–3)",
      "QA, observability, releases",
      "Slack + WhatsApp channel",
    ],
    cta: "Discuss your roadmap",
    highlighted: true,
  },
  {
    name: "Retainer",
    price: "Custom",
    description: "Ongoing roadmap execution for teams post-launch.",
    features: [
      "Prioritized backlog",
      "On-call for incidents",
      "Quarterly architecture reviews",
    ],
    cta: "Talk retainers",
    highlighted: false,
  },
];

export const team = [
  {
    name: "Leadership",
    role: "Engineering & delivery",
    bio: "Former product engineers from high-growth SaaS and agency environments.",
    initials: "V",
  },
  {
    name: "Design partners",
    role: "Brand & product UI",
    bio: "Specialists in design systems, motion, and conversion-focused marketing pages.",
    initials: "D",
  },
  {
    name: "Cloud practice",
    role: "AWS & reliability",
    bio: "Pragmatic DevOps: ship fast, sleep well, keep invoices predictable.",
    initials: "C",
  },
];
