import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Cloud,
  Code2,
  Layers,
  LineChart,
  Server,
  Shield,
  Workflow,
} from "lucide-react";

export type ServiceOffering = {
  label: string;
  href: string;
};

export type ServicePillar = {
  id: string;
  title: string;
  headline: string;
  description: string;
  offerings: ServiceOffering[];
  image: string;
  imageAlt: string;
  slug?: string;
};

export const servicesHero = {
  title: "Our Services",
  headline: "SEO, web design, and lead generation for local businesses.",
  description:
    "We build fast, modern, and conversion-focused websites for startups, local businesses, and growing companies. Our services include web development, UI/UX design, and SEO optimization. From local search optimization to custom web design, we build digital experiences that attract customers and convert them into real inquiries.",
};

export const servicePillars: ServicePillar[] = [
  {
    id: "custom-development",
    title: "Custom Application Development",
    headline: "Build the software your business actually needs",
    description:
      "When off-the-shelf tools can't support your workflows, custom development gives you control. We build secure, scalable web applications tailored to how your organization operates—using Next.js, TypeScript, and modern cloud architecture.",
    slug: "web-development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=70",
    imageAlt: "Developers building a custom web application dashboard",
    offerings: [
      { label: "Web-Based Business Applications", href: "/services/web-development" },
      { label: "Web Application Development", href: "/services/web-development" },
      { label: "Content Management Systems", href: "/services/web-development" },
      { label: "AI & Automation", href: "/services/ai-integrations" },
      { label: "Web Services & APIs", href: "/services/automation-apis" },
      { label: "E-Commerce", href: "/contact" },
      { label: "E-Learning", href: "/contact" },
      { label: "SaaS Platforms", href: "/services/saas-development" },
    ],
  },
  {
    id: "design-ux",
    title: "Design & User Experience",
    headline: "Design people actually want to use",
    description:
      "The most powerful software will sit ignored if users find it unintuitive. Our design partners create interfaces that reflect your brand and make complex systems easier for users to understand and adopt.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=70",
    imageAlt: "UI design wireframes and user experience planning",
    offerings: [
      { label: "User Interface (UI) Design", href: "/contact" },
      { label: "Web Application Design", href: "/contact" },
      { label: "Mobile Design", href: "/contact" },
      { label: "Design Systems", href: "/services/web-development" },
    ],
  },
  {
    id: "strategy",
    title: "Strategy & Planning",
    headline: "Start with clarity",
    description:
      "Before any code is written, we help define what should be built—and why. Our planning process uncovers business goals, technical constraints, and user needs so your project starts with a clear direction.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=70",
    imageAlt: "Team strategy workshop planning a software project",
    offerings: [
      { label: "Web Strategy", href: "/contact" },
      { label: "Technical Requirements Gathering", href: "/contact" },
      { label: "Strategy Workshop", href: "/contact" },
      { label: "MVP Scoping", href: "/services/saas-development" },
    ],
  },
  {
    id: "data-integration",
    title: "Data & Systems Integration",
    headline: "Connect your systems and your data",
    description:
      "We design and implement data architectures that keep your systems in sync. Whether integrating third-party platforms or modernizing legacy databases, we help eliminate silos and improve reliability.",
    slug: "automation-apis",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=70",
    imageAlt: "Server room representing data and systems integration",
    offerings: [
      { label: "Database Architecture & Integration", href: "/services/automation-apis" },
      { label: "System Integrations", href: "/services/automation-apis" },
      { label: "CRM & ERP Connectors", href: "/services/automation-apis" },
      { label: "Workflow Automation (n8n)", href: "/services/automation-apis" },
    ],
  },
];

export type PlatformHighlight = {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
};

export const platformHighlights: PlatformHighlight[] = [
  {
    name: "Next.js",
    slug: "nextdotjs",
    icon: Code2,
    description:
      "Our primary framework for production web apps—server rendering, App Router, and performance tuned for SEO and Core Web Vitals. Ideal for marketing sites, portals, and SaaS frontends.",
  },
  {
    name: "Node.js & TypeScript",
    slug: "nodedotjs",
    icon: Server,
    description:
      "A modern backend stack for APIs, real-time features, and full-stack TypeScript. We build maintainable services that scale with your product and integrate cleanly with your existing tools.",
  },
  {
    name: "AWS & Cloud",
    slug: "amazonaws",
    icon: Cloud,
    description:
      "Enterprise-grade hosting, containers, and CI/CD on AWS. We deploy reliable, cost-aware infrastructure with monitoring, backups, and zero-downtime release patterns.",
  },
];

export const ongoingSupport = {
  title: "Ongoing Support & Delivery",
  description:
    "Our role doesn't stop at deployment. We provide structured delivery and ongoing support to keep your systems running smoothly and evolving with your business.",
  items: [
    { label: "Project Management", icon: BarChart3 },
    { label: "Quality Assurance", icon: Shield },
    { label: "Website Hosting", icon: Cloud },
    { label: "User Experience Optimization", icon: LineChart },
    { label: "DevOps & Monitoring", icon: Workflow },
    { label: "Retainer Support", icon: Layers },
  ],
};

export const servicesTrustStats = [
  { value: "99%", label: "Client recommend rate" },
  { value: "100%", label: "Project satisfaction focus" },
  { value: "4.9★", label: "Average client rating" },
];

export const servicesCta = {
  title: "Not sure where to start?",
  description:
    "If you're unsure which service fits your needs, start with a strategy session or contact us to discuss your goals. We'll help you define the right next step.",
};
