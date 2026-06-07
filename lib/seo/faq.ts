import type { FaqItem } from "@/lib/seo/schema";

export const homeFaqs: FaqItem[] = [
  {
    question: "What types of software projects does coreinvision build?",
    answer:
      "We build production web applications with Next.js and MERN, AI-powered product features, B2B SaaS platforms, workflow automation with n8n and APIs, and AWS cloud deployments for startups and businesses across the United States.",
  },
  {
    question: "How long does a typical MVP take to launch?",
    answer:
      "Most scoped MVPs ship in 4–10 weeks with weekly demos. Timeline depends on integrations, design complexity, and compliance requirements. We provide a transparent roadmap after a short discovery call.",
  },
  {
    question: "Do you work with clients across the United States?",
    answer:
      "Yes. We partner with US startups and SMBs nationwide with async updates, Slack or WhatsApp communication, and overlapping hours for reviews and launches.",
  },
  {
    question: "Can you integrate AI into an existing product?",
    answer:
      "Yes. We add retrieval-augmented search, copilots, streaming chat UX, guardrails, and observability so AI features feel native—not demo-grade bolt-ons.",
  },
  {
    question: "How do you price software development engagements?",
    answer:
      "We offer sprint-based builds, product-team engagements, and retainers. After discovery we share a fixed scope range—no bait-and-switch quotes.",
  },
  {
    question: "Will I own the code and infrastructure?",
    answer:
      "Yes. You receive repository access, documentation, and deployment runbooks. We design for handoff from day one.",
  },
];

export const serviceFaqsBySlug: Record<string, FaqItem[]> = {
  "web-development": [
    {
      question: "Why choose Next.js for a business web application?",
      answer:
        "Next.js delivers server rendering for SEO, fast Core Web Vitals, and a mature ecosystem for auth, APIs, and incremental adoption—ideal for marketing sites, portals, and SaaS frontends.",
    },
    {
      question: "Do you build MERN stack applications as well?",
      answer:
        "Yes. We use MongoDB, Express, React, and Node when the architecture fits document-heavy workloads or existing MERN investments.",
    },
    {
      question: "How do you ensure performance and SEO on web projects?",
      answer:
        "We implement semantic HTML, metadata, structured data, image optimization, lazy loading, and Lighthouse-driven performance budgets before launch.",
    },
  ],
  "ai-integrations": [
    {
      question: "What AI integration services do you offer?",
      answer:
        "RAG pipelines, embeddings, streaming LLM UX, evaluation suites, prompt guardrails, and human handoff flows integrated into your existing product.",
    },
    {
      question: "How do you reduce hallucinations in production AI features?",
      answer:
        "We use retrieval with citations, policy prompts, output validation, logging, and feedback loops so support and product teams can trust responses.",
    },
  ],
  "saas-development": [
    {
      question: "Can you help from MVP to scale for B2B SaaS?",
      answer:
        "Yes. We implement billing with Stripe, multi-tenant patterns, admin dashboards, usage metering, and analytics expected by investors and enterprise buyers.",
    },
  ],
  "automation-apis": [
    {
      question: "Do you work with n8n and custom APIs?",
      answer:
        "We design idempotent automations, webhook layers, and observability so CRM, ERP, and product systems stay in sync without manual ops work.",
    },
  ],
  "cloud-devops": [
    {
      question: "Which cloud platforms do you support?",
      answer:
        "We are AWS-first with Docker, CI/CD, backups, and cost-aware architecture. We also support migrations and production hardening.",
    },
  ],
};
