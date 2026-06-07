import { createMetadata } from "@/lib/seo/metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { homeFaqs } from "@/lib/seo/faq";
import { faqSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqSection } from "@/components/seo/faq-section";
import { Container } from "@/components/container";
import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/hero";
import { TrustLogos } from "@/sections/trust-logos";
import { ServicesBento } from "@/sections/services-bento";
import { FeaturedProjects } from "@/sections/featured-projects";
import { ProcessSection } from "@/sections/process";
import { TechStackShowcase } from "@/sections/tech-stack";
import { CtaSection } from "@/sections/cta-section";
import { NewsletterForm } from "@/components/newsletter-form";

const TestimonialSlider = dynamic(
  () => import("@/sections/testimonial-slider").then((m) => ({ default: m.TestimonialSlider })),
  { loading: () => <div className="min-h-[320px] bg-muted/10" aria-hidden /> },
);

export const metadata = createMetadata({
  title: "Software Development Company — Next.js, SaaS & AI",
  description:
    "coreinvision is a US software development company for startups and SMBs. Next.js apps, AI integrations, SaaS, and cloud. Book a free call.",
  path: "/",
  keywords: [
    pageKeywords.home.primary,
    ...pageKeywords.home.secondary,
    ...pageKeywords.home.longTail,
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <HeroSection />
      <TrustLogos />
      <ServicesBento />
      <FeaturedProjects />
      <ProcessSection />
      <TestimonialSlider />
      <TechStackShowcase />
      <Container className="pb-8">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <NewsletterForm />
        </div>
      </Container>
      <FaqSection faqs={homeFaqs} className="bg-muted/20" />
      <CtaSection />
    </>
  );
}
