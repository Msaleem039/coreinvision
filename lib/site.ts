export const siteConfig = {
  name: "coreinvision",
  tagline: "Premium software for ambitious teams",
  /** Shown under the logo in the footer (like “IT Solutions” in your reference). */
  footerTagline: "Software solutions",
  description:
    "International software agency building Next.js apps, AI-powered SaaS, and automation for startups in the USA and growing businesses in Pakistan.",
  /** Location line in the footer — edit only here if your address changes. */
  location: "Long Branch, New Jersey, United States (Remote)",
  phone: "",
  url: "https://coreinvision.com.com",
  email: "hello@coreinvision.com.com",
  /** E.164 without + for wa.me links — replace with your number */
  whatsappE164: "923001234567",
  calendlyUrl: "https://calendly.com/coreinvision/intro",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappE164}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export type FooterSocialKey = "facebook" | "linkedin" | "whatsapp" | "x";

export type FooterSocialItem =
  | { key: "facebook" | "linkedin" | "x"; href: string; label: string }
  | { key: "whatsapp"; label: string };

/** Replace `href` with your real profile URLs when ready. WhatsApp uses `whatsappHref()`. */
export const socialLinks: FooterSocialItem[] = [
  { key: "facebook", href: "https://www.facebook.com/", label: "Facebook" },
  { key: "linkedin", href: "https://www.linkedin.com/", label: "LinkedIn" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "x", href: "https://x.com/", label: "X" },
];

export const footerCompanyLinks = [
  { href: "/about", label: "Why coreinvision?" },
  { href: "/contact", label: "Careers" },
  { href: "/contact", label: "Hire Us" },
  { href: "/portfolio", label: "Products" },
  { href: "/contact", label: "Blog" },
] as const;

export const footerServiceLinks = [
  { href: "/services#web-development", label: "Web Development" },
  { href: "/contact", label: "Mobile App Development" },
  { href: "/contact", label: "UI/UX Design" },
  { href: "/contact", label: "Desktop App Development" },
  { href: "/services#automation-apis", label: "CRM Solutions" },
  { href: "/contact", label: "Odoo" },
] as const;

export const footerResourceLinks = [
  { href: "/contact", label: ".Net Developer" },
  { href: "/contact", label: "Mobile Developer" },
  { href: "/contact", label: "PHP Developer" },
  { href: "/services#web-development", label: "Front-End Developer" },
  { href: "/contact", label: "Web & Graphics Designer" },
  { href: "/contact", label: "Technical Resource Outsourcing" },
] as const;
