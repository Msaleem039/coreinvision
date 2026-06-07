import type { FaqItem } from "@/lib/seo/schema";

export type ServiceSeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroSubtitle: string;
  sections: { heading: string; paragraphs: string[] }[];
  benefits: string[];
  features: string[];
  relatedSlugs: string[];
  faqs: FaqItem[];
};

export const serviceSeoPages: ServiceSeoPage[] = [
  {
    slug: "web-development",
    title: "Web Development Services",
    metaTitle: "Next.js & MERN Web Development Company",
    metaDescription:
      "Expert Next.js and MERN web development for startups and SMBs. SEO-ready, fast, accessible sites and apps. USA-based delivery. Get a free quote.",
    keywords: [
      "web development company",
      "Next.js development",
      "MERN stack agency",
      "custom web applications",
    ],
    heroSubtitle:
      "Production-grade web applications engineered for performance, search visibility, and long-term maintainability.",
    sections: [
      {
        heading: "Modern web development for revenue-critical products",
        paragraphs: [
          "Your website or web application is often the first touchpoint for investors, customers, and partners. We build with Next.js App Router, TypeScript, and proven MERN patterns so you ship quickly without sacrificing quality. Every project includes semantic HTML, accessible components, and technical SEO foundations that help Google understand and rank your pages.",
          "Whether you need a high-conversion marketing site, a authenticated customer portal, or an internal operations dashboard, our senior engineers own the full stack—from database design to deployment pipelines.",
        ],
      },
      {
        heading: "Next.js development that scores on Core Web Vitals",
        paragraphs: [
          "Search engines and users reward fast experiences. We optimize Largest Contentful Paint with next/image, priority hints, and font strategies. Cumulative Layout Shift stays low through reserved space and stable components. Interaction to Next Paint improves via code splitting, server components where appropriate, and lean client bundles.",
          "We implement dynamic metadata, canonical URLs, Open Graph tags, structured data, and XML sitemaps so your marketing and product pages are crawlable and shareable across social channels.",
        ],
      },
      {
        heading: "MERN stack when your architecture calls for it",
        paragraphs: [
          "For document-centric workloads or teams already invested in MongoDB and Express, we deliver MERN applications with clear API boundaries, validation, and testing. React frontends connect to Express services with consistent auth, logging, and error handling.",
          "We help you choose between Next.js full-stack routes and separate MERN services based on team skills, scale requirements, and integration needs—not hype.",
        ],
      },
      {
        heading: "Design systems and scalable frontends",
        paragraphs: [
          "We build reusable UI with Tailwind CSS and component libraries aligned to your brand. Design tokens, dark mode, and responsive layouts ship as part of the codebase you own. Storybook or living documentation keeps design and engineering aligned as you grow.",
        ],
      },
      {
        heading: "Delivery process built for founders",
        paragraphs: [
          "Weekly demos, transparent backlogs, and Slack or WhatsApp updates keep stakeholders informed across US time zones. You receive repository access, environment documentation, and handoff sessions so your team can extend the product after launch.",
        ],
      },
    ],
    benefits: [
      "Faster time-to-market with senior-led squads",
      "SEO and performance baked in from sprint one",
      "Accessible, mobile-first responsive UI",
      "Clear ownership of code and infrastructure",
      "Integrations with CRMs, payments, and analytics",
    ],
    features: [
      "Next.js App Router & SSR/SSG",
      "TypeScript end-to-end",
      "REST & GraphQL APIs",
      "Auth (OAuth, magic links, RBAC)",
      "CMS & headless content",
      "E-commerce & checkout flows",
      "CI/CD and preview deployments",
      "Monitoring and error tracking",
    ],
    relatedSlugs: ["saas-development", "cloud-devops", "ai-integrations"],
    faqs: [],
  },
  {
    slug: "ai-integrations",
    title: "AI Integration Services",
    metaTitle: "AI Integration & LLM Development Services",
    metaDescription:
      "Production AI integrations: RAG, copilots, embeddings, and guardrails for SaaS and web apps. Ship trustworthy LLM features. Book a discovery call.",
    keywords: ["AI integration services", "LLM development", "RAG implementation", "AI copilot development"],
    heroSubtitle:
      "Ship AI features that feel native—retrieval, streaming UX, evaluations, and guardrails included.",
    sections: [
      {
        heading: "AI that belongs in your product—not a demo",
        paragraphs: [
          "Teams rush to add chat widgets without retrieval, logging, or fallback paths. We integrate large language models into your existing workflows: support copilots with citations, document search, sales assistants, and internal ops tools. Each feature is designed with human handoff, audit trails, and cost controls.",
          "Our engineers implement embeddings pipelines, vector stores, and prompt templates versioned alongside application code so improvements are repeatable and measurable.",
        ],
      },
      {
        heading: "Retrieval-augmented generation (RAG) done right",
        paragraphs: [
          "We chunk, embed, and index your knowledge base with metadata filters so answers stay relevant to the user's role and account. Responses include source links where appropriate, reducing hallucination risk and building user trust.",
          "Evaluation suites track accuracy, latency, and regression as you update models or content. We monitor token usage and set budgets to keep operating costs predictable.",
        ],
      },
      {
        heading: "Streaming UX and production observability",
        paragraphs: [
          "Users expect responsive interfaces. We stream tokens safely, handle cancellation, and surface errors gracefully. Logs capture prompts, retrieved context hashes, and feedback signals for continuous improvement.",
        ],
      },
      {
        heading: "Security, compliance, and responsible AI",
        paragraphs: [
          "PII redaction, role-based access to knowledge, and policy prompts align with your industry constraints. We document data flows for security reviews and help you choose models and hosting regions appropriate to your customers.",
        ],
      },
    ],
    benefits: [
      "Higher deflection for support and ops teams",
      "Searchable institutional knowledge",
      "Measurable quality via evals and feedback",
      "Controlled cost with caching and routing",
      "Faster feature iteration with logged experiments",
    ],
    features: [
      "OpenAI & compatible model APIs",
      "Vector databases & embeddings",
      "RAG pipelines & re-ranking",
      "Streaming chat interfaces",
      "Tool calling & agents",
      "Guardrails & moderation",
      "Analytics & eval dashboards",
      "Human-in-the-loop workflows",
    ],
    relatedSlugs: ["saas-development", "automation-apis", "web-development"],
    faqs: [],
  },
  {
    slug: "saas-development",
    title: "SaaS Development Services",
    metaTitle: "SaaS Development Company — MVP to Scale",
    metaDescription:
      "Build and scale B2B SaaS: billing, auth, multi-tenant architecture, admin dashboards. Investor-ready engineering. Talk to our SaaS team today.",
    keywords: ["SaaS development company", "B2B SaaS engineering", "SaaS MVP development", "multi-tenant SaaS"],
    heroSubtitle:
      "From founder MVP to scalable B2B SaaS—billing, auth, analytics, and reliability included.",
    sections: [
      {
        heading: "SaaS engineering investors expect",
        paragraphs: [
          "Investors and enterprise buyers look for more than a prototype. We implement Stripe billing, subscription lifecycle webhooks, usage metering, and admin tooling so you can sell and support customers confidently. Multi-tenant patterns isolate data while keeping operations efficient.",
          "Our squads have shipped vertical SaaS, internal platforms, and API-first products for US startups and growth-stage businesses.",
        ],
      },
      {
        heading: "MVP scope that de-risks your roadmap",
        paragraphs: [
          "We define a thin vertical slice: auth, core workflow, payments or trial gating, and one integration that proves value. Weekly demos validate assumptions before you commit to a larger build.",
        ],
      },
      {
        heading: "Scale-ready architecture without over-engineering",
        paragraphs: [
          "PostgreSQL, Redis, background jobs, and observability are introduced when metrics justify them—not on day one. We document trade-offs so your team understands when to shard, cache, or extract services.",
        ],
      },
      {
        heading: "Growth features: onboarding, analytics, and retention",
        paragraphs: [
          "Product analytics, email triggers, in-app guides, and feature flags help you iterate post-launch. We integrate tools you already use or recommend lightweight alternatives.",
        ],
      },
    ],
    benefits: [
      "Faster path to paid pilots",
      "Billing and auth patterns that scale",
      "Clear tenant isolation and RBAC",
      "Investor-ready codebase and docs",
      "Ongoing roadmap support via retainer",
    ],
    features: [
      "Stripe & subscription billing",
      "OAuth & SSO",
      "Multi-tenant data models",
      "Admin & ops dashboards",
      "Usage metering & plans",
      "Webhooks & partner APIs",
      "Email & notification systems",
      "SOC2-friendly logging patterns",
    ],
    relatedSlugs: ["web-development", "cloud-devops", "ai-integrations"],
    faqs: [],
  },
  {
    slug: "automation-apis",
    title: "Automation & API Development",
    metaTitle: "n8n Automation & Custom API Development",
    metaDescription:
      "Workflow automation with n8n, webhooks, and custom APIs. Connect CRM, ERP, and product systems. Reduce manual ops. Free consultation.",
    keywords: ["workflow automation", "n8n development", "custom API development", "CRM integration"],
    heroSubtitle:
      "Reliable automations and API layers that connect your stack without brittle scripts.",
    sections: [
      {
        heading: "Stop losing leads and orders to manual handoffs",
        paragraphs: [
          "Spreadsheets and ad-hoc scripts break as volume grows. We design n8n workflows and custom APIs with idempotency, retries, and alerting so sales, support, and operations stay synchronized.",
        ],
      },
      {
        heading: "Custom API development for partners and products",
        paragraphs: [
          "Public and internal APIs ship with OpenAPI documentation, authentication, rate limits, and versioning. We integrate HubSpot, Salesforce, Shopify, WhatsApp Business, and bespoke ERP endpoints.",
        ],
      },
      {
        heading: "Observability for business-critical automations",
        paragraphs: [
          "Dead-letter queues, structured logs, and dashboards show when integrations fail—before customers notice. Runbooks document recovery steps for your team.",
        ],
      },
    ],
    benefits: [
      "Less manual coordination",
      "Fewer data entry errors",
      "Faster lead routing",
      "Auditable integration history",
      "Extensible partner APIs",
    ],
    features: [
      "n8n workflow design",
      "Webhook receivers",
      "REST & GraphQL APIs",
      "Queue-based jobs",
      "CRM & ERP connectors",
      "WhatsApp & email triggers",
      "Error monitoring",
      "Documentation & handoff",
    ],
    relatedSlugs: ["web-development", "cloud-devops", "ai-integrations"],
    faqs: [],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Services",
    metaTitle: "AWS Cloud & DevOps Engineering Services",
    metaDescription:
      "AWS, Docker, CI/CD, and zero-downtime deployments for web and SaaS products. Production hardening and cost optimization. Talk to our DevOps team.",
    keywords: ["AWS DevOps services", "Docker deployment", "cloud migration", "CI/CD consulting"],
    heroSubtitle:
      "AWS-first deployments with Docker, CI/CD, backups, and pragmatic cost control.",
    sections: [
      {
        heading: "Launch and sleep well",
        paragraphs: [
          "Production incidents erode trust. We implement health checks, autoscaling policies, backup schedules, and deployment strategies that minimize downtime. Infrastructure is documented as code where it helps your team move faster.",
        ],
      },
      {
        heading: "Docker and container orchestration",
        paragraphs: [
          "Consistent environments from local to production reduce 'works on my machine' issues. We containerize applications and configure ECS, EKS, or simpler setups matched to your scale.",
        ],
      },
      {
        heading: "CI/CD pipelines developers actually use",
        paragraphs: [
          "Preview environments, automated tests, and gated production releases integrate with GitHub Actions or your preferred provider. Secrets management follows least-privilege principles.",
        ],
      },
      {
        heading: "Cost reviews that respect your runway",
        paragraphs: [
          "We right-size instances, leverage caching, and set billing alerts. Quarterly reviews identify waste without compromising reliability.",
        ],
      },
    ],
    benefits: [
      "Higher uptime and faster releases",
      "Documented infrastructure",
      "Security-minded defaults",
      "Disaster recovery planning",
      "Predictable cloud spend",
    ],
    features: [
      "AWS architecture",
      "Docker & containers",
      "CI/CD pipelines",
      "IaC (Terraform/CDK)",
      "Monitoring & alerts",
      "Backup & restore",
      "CDN & edge caching",
      "Migration projects",
    ],
    relatedSlugs: ["web-development", "saas-development", "automation-apis"],
    faqs: [],
  },
];

export function getServiceSeoPage(slug: string): ServiceSeoPage | undefined {
  return serviceSeoPages.find((p) => p.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return serviceSeoPages.map((p) => p.slug);
}
