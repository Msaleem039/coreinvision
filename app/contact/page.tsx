import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site";
import { createMetadata } from "@/lib/seo/metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { ContactDetails } from "@/components/contact-details";
import { BookingWidget } from "@/components/booking-widget";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Section className="border-b border-border/60 bg-muted/20 pb-12 pt-12 sm:pb-16 sm:pt-16">
        <Container>
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-semibold text-primary">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Tell us what you are building
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              We respond within one business day. WhatsApp is available for quick project inquiries
              and scheduling.
            </p>
            <Link
              href={whatsappHref(`Hi ${siteConfig.name}, I'd like to discuss a project.`)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "accent" }),
                "mt-8 inline-flex gap-2",
              )}
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
