import { createMetadata } from "@/lib/seo/metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { homeFaqs } from "@/lib/seo/faq";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqSection } from "@/components/seo/faq-section";
import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/hero";
import { ProblemsSection } from "@/sections/problems";
import { BenefitsSection } from "@/sections/benefits";
import { ProcessSection } from "@/sections/process";
import { CtaSection } from "@/sections/cta-section";

const TestimonialSlider = dynamic(
  () => import("@/sections/testimonial-slider").then((m) => ({ default: m.TestimonialSlider })),
  { loading: () => <div className="min-h-[320px] bg-surface" aria-hidden /> },
);

export const metadata = createMetadata({
  title: "Local SEO & High-Converting Websites — USA",
  description:
    "We build fast, modern, and conversion-focused websites for startups, local businesses, and growing companies. Our services include web development, UI/UX design, and SEO optimization. Get found on Google and turn visitors into customers.",
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
      <JsonLd
        data={[
          webPageSchema({
            name: "Local SEO & High-Converting Websites — USA",
            description:
              "We build fast, modern, and conversion-focused websites for startups, local businesses, and growing companies. Our services include web development, UI/UX design, and SEO optimization.",
            path: "/",
            image: "/home1.jpg",
          }),
          faqSchema(homeFaqs),
        ]}
      />
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <TestimonialSlider />
      <ProcessSection />
      <FaqSection faqs={homeFaqs} className="bg-background" />
      <CtaSection />
    </>
  );
}
