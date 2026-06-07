export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  updatedAt?: string;
  author: { name: string; role: string; linkedin?: string };
  category: string;
  tags: string[];
  readingTimeMinutes: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-seo-checklist-2026",
    title: "Next.js SEO Checklist for SaaS Websites (2026)",
    description:
      "A practical technical SEO checklist for Next.js App Router: metadata, Core Web Vitals, structured data, and crawlability.",
    excerpt:
      "Ship faster without sacrificing search visibility. This checklist covers metadata, sitemaps, schema, and performance for Next.js apps.",
    content: `Search engines reward fast, crawlable, well-structured sites. If you ship with Next.js App Router, you already have powerful primitives—metadata APIs, server components, and image optimization—but only if you use them consistently.

## Start with metadata and canonical URLs

Every route should export unique title and description values. Keep titles under 60 characters and descriptions under 160. Set \`metadataBase\` in your root layout and use canonical URLs to prevent duplicate content issues.

## Structured data builds trust

Add Organization, WebSite, and page-specific schema (FAQ, Service, Article). JSON-LD in the document head helps rich results and clarifies entity relationships for Google.

## Performance is a ranking signal

Optimize LCP with priority images and font loading. Reduce CLS with explicit dimensions. Improve INP by minimizing client JavaScript on critical paths. Lazy-load below-the-fold sections.

## Internal linking and content depth

Service pages should exceed superficial copy. Link related services, case studies, and blog posts with descriptive anchors. Publish FAQs that match real sales questions.

## Measure and iterate

Use Search Console, Lighthouse CI, and real-user monitoring. SEO is not a one-time launch task—it is part of your delivery definition of done.`,
    publishedAt: "2026-03-01",
    author: {
      name: "CoreInvision Engineering",
      role: "Technical SEO & Delivery",
      linkedin: "https://www.linkedin.com/company/coreinvision",
    },
    category: "Technical SEO",
    tags: ["Next.js", "SEO", "Core Web Vitals", "SaaS"],
    readingTimeMinutes: 8,
  },
  {
    slug: "saas-mvp-scope-guide",
    title: "How to Scope a B2B SaaS MVP Without Overbuilding",
    description:
      "Founder-friendly guide to defining MVP scope, billing, auth, and the one integration that proves product value.",
    excerpt:
      "Investors want traction, not feature laundry lists. Here is how we scope MVPs that ship in weeks—not quarters.",
    content: `The most common MVP mistake is building for scale before you have paying users. Start with a vertical slice: authentication, one core workflow, and a path to payment or qualified trial.

## Define the success metric first

Is it activated accounts, paid pilots, or support ticket deflection? The metric determines scope—not the other way around.

## Billing can be simple at first

Stripe Checkout or a single plan with webhooks beats custom billing engines for early stage. Add usage metering when pricing strategy requires it.

## One integration that proves value

Pick the CRM, data source, or workflow that makes your product indispensable. Defer nice-to-have integrations until after validation.

## Document assumptions

Weekly demos with stakeholders surface misalignment early. Write down what is explicitly out of scope for v1.

We help founders translate vision into a backlog that fits runway. Book a discovery call if you want a second opinion on your MVP scope.`,
    publishedAt: "2026-02-12",
    author: {
      name: "CoreInvision Product Team",
      role: "SaaS Delivery",
    },
    category: "SaaS",
    tags: ["MVP", "Product Strategy", "Startups"],
    readingTimeMinutes: 6,
  },
  {
    slug: "ai-rag-production-guide",
    title: "RAG in Production: Guardrails, Evals, and UX Patterns",
    description:
      "How to ship retrieval-augmented AI features with citations, logging, and human handoff—not demo-grade chat widgets.",
    excerpt:
      "Production AI needs retrieval, evaluation, and fallback paths. This guide covers patterns we use on client projects.",
    content: `Retrieval-augmented generation improves answer quality by grounding responses in your documents. Production RAG also needs guardrails, observability, and UX that sets user expectations.

## Chunking and metadata matter

Structure content with headings and metadata filters so retrieval respects roles, products, or regions. Re-ranking can improve precision for support use cases.

## Always cite sources when possible

Citations reduce hallucination risk and help agents verify answers. UI should make sources easy to open.

## Log prompts and feedback

Capture thumbs up/down and escalation events. Run periodic evals when you change models or content.

## Plan for human handoff

When confidence is low, route to a human with context attached. Your copilot should accelerate agents—not replace accountability.

We integrate AI into existing SaaS products with these patterns baked in from sprint one.`,
    publishedAt: "2026-01-20",
    author: {
      name: "CoreInvision AI Practice",
      role: "AI Integration",
    },
    category: "AI",
    tags: ["RAG", "LLM", "AI Integration"],
    readingTimeMinutes: 7,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const current = getBlogPost(slug);
  if (!current) return blogPosts.slice(0, limit);
  return blogPosts
    .filter((p) => p.slug !== slug && (p.category === current.category || p.tags.some((t) => current.tags.includes(t))))
    .slice(0, limit);
}

export const blogCategories = [...new Set(blogPosts.map((p) => p.category))];
