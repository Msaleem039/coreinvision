import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for using coreinvision website and software development services. Service scope, IP, and liability.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <Section className="py-16">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Terms &amp; Conditions</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            By accessing {siteConfig.url} or engaging {siteConfig.name} for services, you agree to
            these terms. Project-specific statements of work supersede general website content where
            they conflict.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Services</h2>
          <p>
            We provide custom software development, consulting, and related professional services.
            Timelines, deliverables, and fees are defined in signed agreements or written proposals.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
          <p>
            Unless otherwise agreed, clients receive ownership of custom deliverables upon full
            payment. Pre-existing tools, libraries, and frameworks remain under their respective
            licenses.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, our liability is limited to fees paid for the
            specific engagement giving rise to the claim.
          </p>
          <p>
            Questions:{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">
              {siteConfig.email}
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
