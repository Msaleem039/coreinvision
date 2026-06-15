export const siteConfig = {
  name: "coreinvision",
  tagline: "We build fast, modern, and conversion-focused websites for startups, local businesses, and growing companies. Our services include web development, UI/UX design, and SEO optimization.",
  footerTagline: "SEO & high-converting websites",
  description:
    "We build fast, modern, and conversion-focused websites for startups, local businesses, and growing companies. Our services include web development, UI/UX design, and SEO optimization. USA-based team building fast, search-optimized sites that turn visitors into customers.",
  location: "Long Branch, New Jersey, United States (Remote)",
  address: {
    street: "80 Broad Street, 5th Floor",
    city: "Long Branch",
    region: "NJ",
    postalCode: "07740",
    country: "United States",
    countryCode: "US",
  },
  geo: {
    latitude: 40.3043,
    longitude: -73.9924,
  },
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
  ],
  phone: "+1 (732) 822-5692",
  url: "https://coreinvision.com",
  email: "info@coreinvision.com",
  whatsappE164: "+17328225692",
  calendlyUrl: "https://calendly.com/coreinvision/intro",
  social: {
    linkedin: "https://www.linkedin.com/company/coreinvision",
    facebook: "https://www.facebook.com/coreinvision",
    x: "https://x.com/coreinvision",
    instagram: "https://www.instagram.com/coreinvision",
    github: "https://github.com/coreinvision",
  },
  /** Google Maps embed URL for contact / local SEO */
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.0!2d-73.9924!3d40.3043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLong+Branch%2C+NJ!5e0!3m2!1sen!2sus!4v1",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappHref(message?: string) {
  const digits = siteConfig.whatsappE164.replace(/\D/g, "");
  const base = `https://wa.me/${digits}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export type FooterSocialKey = "facebook" | "linkedin" | "whatsapp" | "x" | "instagram" | "github";

export type FooterSocialItem =
  | { key: Exclude<FooterSocialKey, "whatsapp">; href: string; label: string }
  | { key: "whatsapp"; label: string };

export const socialLinks: FooterSocialItem[] = [
  { key: "facebook", href: siteConfig.social.facebook, label: "Facebook" },
  { key: "linkedin", href: siteConfig.social.linkedin, label: "LinkedIn" },
  { key: "instagram", href: siteConfig.social.instagram, label: "Instagram" },
  { key: "github", href: siteConfig.social.github, label: "GitHub" },
  { key: "whatsapp", label: "WhatsApp" },
  { key: "x", href: siteConfig.social.x, label: "X" },
];

export const footerCompanyLinks = [
  { href: "/about", label: "Why coreinvision?" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Hire Us" },
  { href: "/portfolio", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/press", label: "Press & News" },
] as const;

export const footerLegalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/cookies", label: "Cookie Policy" },
] as const;

export const footerServiceLinks = [
  { href: "/services/web-development", label: "Web Development" },
  { href: "/contact", label: "Mobile App Development" },
  { href: "/contact", label: "UI/UX Design" },
  { href: "/services/saas-development", label: "SaaS Development" },
  { href: "/services/automation-apis", label: "CRM & Automation" },
  { href: "/services/cloud-devops", label: "Cloud & DevOps" },
] as const;

export const footerResourceLinks = [
  { href: "/contact", label: ".Net Developer" },
  { href: "/contact", label: "Mobile Developer" },
  { href: "/contact", label: "PHP Developer" },
  { href: "/services/web-development", label: "Front-End Developer" },
  { href: "/contact", label: "Web & Graphics Designer" },
  { href: "/contact", label: "Technical Resource Outsourcing" },
] as const;
