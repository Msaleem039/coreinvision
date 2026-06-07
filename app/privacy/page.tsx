import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for coreinvision software development services. How we collect, use, and protect your personal data.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section className="py-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy" }]} className="mb-8" />
        <h1 className="text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>
        <div className="prose prose-neutral dark:prose-invert mt-8 max-w-none space-y-6 text-muted-foreground">
          <p>
            {siteConfig.name} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy
            explains how we handle information when you visit {siteConfig.url}, submit contact
            forms, subscribe to our newsletter, or communicate via email or WhatsApp.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
          <p>
            We may collect your name, email address, phone number, company name, project details,
            and technical usage data (cookies, analytics) when you interact with our website or
            services.
          </p>
          <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
          <p>
            We use your information to respond to inquiries, deliver services, improve our website,
            send optional marketing communications (with consent), and comply with legal obligations.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Third-party services</h2>
          <p>
            We use form delivery providers (e.g. Web3Forms), analytics, and scheduling tools. These
            providers process data according to their own privacy policies.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Your rights</h2>
          <p>
            You may request access, correction, or deletion of your personal data by emailing{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            {siteConfig.name}, {siteConfig.location}.{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact page
            </Link>
          </p>
        </div>
      </Container>
    </Section>
  );
}
