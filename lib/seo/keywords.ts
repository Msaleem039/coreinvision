export const pageKeywords = {
  home: {
    primary: "software development company",
    secondary: ["Next.js agency", "SaaS development services", "AI integration company"],
    longTail: [
      "custom software development USA",
      "hire Next.js development team",
      "B2B SaaS engineering partner",
    ],
    semantic: ["product engineering", "cloud-native apps", "workflow automation", "MERN stack"],
  },
  services: {
    primary: "software development services",
    secondary: ["web development agency", "AI development services", "DevOps consulting"],
    longTail: ["Next.js development company for startups", "n8n automation agency"],
    semantic: ["full-stack development", "technical delivery", "digital transformation"],
  },
  portfolio: {
    primary: "software development case studies",
    secondary: ["SaaS portfolio", "client success stories"],
    longTail: ["Next.js case study examples", "AI integration project results"],
    semantic: ["proof of work", "engineering outcomes", "product launches"],
  },
  blog: {
    primary: "software development blog",
    secondary: ["Next.js tutorials", "SaaS engineering insights"],
    longTail: ["how to build SaaS MVP", "AI integration best practices"],
    semantic: ["engineering leadership", "product strategy", "DevOps guides"],
  },
  contact: {
    primary: "hire software developers",
    secondary: ["software project inquiry", "free discovery call"],
    longTail: ["contact software agency USA", "WhatsApp software development USA"],
    semantic: ["project scoping", "technical consultation"],
  },
} as const;

export const seoStrategy = {
  internalLinking: [
    "Link service pages from homepage bento and footer.",
    "Cross-link related services at the bottom of each /services/[slug] page.",
    "Blog posts should link to relevant services and case studies.",
    "Portfolio case studies should link to matching service pages.",
    "Use descriptive anchor text (avoid 'click here').",
  ],
  contentSuggestions: [
    "Publish monthly posts on Next.js performance, SaaS billing, and AI guardrails.",
    "Create industry landing pages: fintech, logistics, healthcare ops.",
    "Expand case studies with measurable KPIs and tech stack tables.",
    "Add comparison pages: Next.js vs SPA, build vs buy automation.",
  ],
  offPage: [
    "Claim and optimize Google Business Profile for Long Branch, NJ.",
    "Maintain consistent NAP (name, address, phone) on LinkedIn and directories.",
    "Guest posts on dev communities (Dev.to, Hashnode) with author bios linking home.",
    "Partner pages with agencies and accelerators for referral backlinks.",
    "Publish open-source starters or n8n templates on GitHub.",
  ],
  backlinks: [
    "HARO / journalist queries for software and AI commentary.",
    "Local NJ tech chamber and startup event sponsorships.",
    "Podcast appearances for founders and CTO audience.",
    "Client testimonial pages with reciprocal logo links where appropriate.",
    "Directory listings: Clutch, GoodFirms, DesignRush (verified profiles only).",
  ],
  eeats: [
    "Show real team bios, delivery process, and case study metrics.",
    "Keep legal pages (privacy, terms, cookies) public and dated.",
    "Use author bylines on blog posts with LinkedIn links.",
    "Display client logos and structured review schema where authentic.",
  ],
};
