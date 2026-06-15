import { createMetadata } from "@/lib/seo/metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { breadcrumbSchema, serviceSchema, webPageSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { servicePillars } from "@/lib/services-page";
import {
  ServicesHero,
  ServicePillars,
  PlatformsSection,
  OngoingSupportSection,
  ServicesTrustStats,
  ServicesBottomCta,
} from "@/sections/services-page";

export const metadata = createMetadata({
  title: "Custom Web & Software Development Services",
  description:
    "Custom application development, UI/UX design, strategy, data integration, and ongoing support. USA-based team. Next.js, AI, SaaS & cloud. Free consultation.",
  path: "/services",
  keywords: [pageKeywords.services.primary, ...pageKeywords.services.secondary],
});

export default function ServicesPage() {
  const breadcrumbs = [{ name: "Services", path: "/services" }];

  const serviceSchemas = servicePillars
    .filter((p) => p.slug)
    .map((p) =>
      serviceSchema({
        name: p.title,
        description: p.description,
        slug: p.slug!,
        offers: p.offerings.map((o) => o.label),
      }),
    );

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            name: "Custom Web & Software Development Services",
            description:
              "Custom application development, UI/UX design, strategy, data integration, and ongoing support for US businesses.",
            path: "/services",
          }),
          ...serviceSchemas,
        ]}
      />
      <ServicesHero />
      <ServicePillars />
      <PlatformsSection />
      <OngoingSupportSection />
      <ServicesTrustStats />
      <ServicesBottomCta />
    </>
  );
}
