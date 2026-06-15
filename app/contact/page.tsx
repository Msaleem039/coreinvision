import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site";
import { createMetadata } from "@/lib/seo/metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { ContactDetails } from "@/components/contact-details";
import { ContactForm } from "@/components/contact-form";

export const metadata = createMetadata({
  title: "Contact — Hire Software Developers",
  description:
    "Contact coreinvision for Next.js, AI, SaaS & cloud projects. Form, WhatsApp, phone, map & Calendly booking. USA.",
  path: "/contact",
  keywords: [pageKeywords.contact.primary, ...pageKeywords.contact.longTail],
});

export default function ContactPage() {
  const breadcrumbs = [{ name: "Contact", path: "/contact" }];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            name: "Contact — Hire Software Developers",
            description:
              "Contact coreinvision for Next.js, AI, SaaS and cloud projects. Form, WhatsApp, phone, and map.",
            path: "/contact",
          }),
        ]}
      />
      <Section className="border-b border-border bg-surface pb-12 pt-12 sm:pb-16 sm:pt-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <h1 className="section-title">Tell us what you are building</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              We respond within one business day. WhatsApp is available for quick project inquiries
              and scheduling.
            </p>
            <Link
              href={whatsappHref(`Hi ${siteConfig.name}, I'd like to discuss a project.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex"
            >
              <MessageCircle className="size-5" aria-hidden />
              Chat on WhatsApp
            </Link>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <FadeIn className="lg:col-span-3">
              <ContactForm />
            </FadeIn>
            <FadeIn className="space-y-6 lg:col-span-2">
              <ContactDetails />
              {/* <div>
                <h2 className="text-xl font-semibold">Or grab time</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Calendly-style picker below links to our live calendar. No account required.
                </p>
                <div className="mt-6">
                  <BookingWidget />
                </div>
              </div> */}
            </FadeIn>
          </div>
        </Container>
      </Section>
    </>
  );
}
