import dynamic from "next/dynamic";
import { HeroSection } from "@/sections/hero";
import { TrustLogos } from "@/sections/trust-logos";
import { ServicesBento } from "@/sections/services-bento";
import { FeaturedProjects } from "@/sections/featured-projects";
import { ProcessSection } from "@/sections/process";
import { TechStackShowcase } from "@/sections/tech-stack";
import { CtaSection } from "@/sections/cta-section";

const TestimonialSlider = dynamic(
  () => import("@/sections/testimonial-slider").then((m) => ({ default: m.TestimonialSlider })),
  { loading: () => <div className="min-h-[320px] bg-muted/10" aria-hidden /> },
);

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustLogos />
      <ServicesBento />
      <FeaturedProjects />
      <ProcessSection />
      <TestimonialSlider />
      <TechStackShowcase />
      <CtaSection />
    </>
  );
}
