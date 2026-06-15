import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description:
    "Cookie Policy for coreinvision.com. Learn how we use cookies, analytics, and similar technologies on our website.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <Section className="py-16">
      <Container className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight">Cookie Policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: March 2026</p>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            We use essential cookies for site functionality and may use analytics cookies to
            understand traffic patterns and improve content. You can control cookies through your
            browser settings.
          </p>
          <h2 className="text-xl font-semibold text-foreground">Types of cookies</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Essential:</strong> required for forms, theme
              preferences, and security.
            </li>
            <li>
              <strong className="text-foreground">Analytics:</strong> optional usage measurement
              (e.g. page views, referrers).
            </li>
            <li>
              <strong className="text-foreground">Marketing:</strong> only with consent if enabled
              in the future.
            </li>
          </ul>
          <p>
            See also our{" "}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </Container>
    </Section>
  );
}
