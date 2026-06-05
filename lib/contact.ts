import { siteConfig } from "@/lib/site";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const CONTACT_INTERESTS = [
  { id: "web-development", label: "Web development" },
  { id: "ai-integrations", label: "AI integrations" },
  { id: "saas-development", label: "SaaS development" },
  { id: "automation-apis", label: "Automation & APIs" },
  { id: "cloud-devops", label: "Cloud & DevOps" },
  { id: "mobile", label: "Mobile app development" },
  { id: "other", label: "Other / not sure yet" },
] as const;

export type ContactInterestId = (typeof CONTACT_INTERESTS)[number]["id"];

export function contactFormSubject(interestLabel: string) {
  return `New inquiry — ${siteConfig.name} (${interestLabel})`;
}
