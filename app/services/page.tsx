import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getAllServiceSlugs, getServiceSeoPage } from "@/lib/seo/service-pages";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { services } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Software Development Services — Web, AI, SaaS, Cloud",
  description:
    "Full-stack software development services: Next.js web apps, AI integrations, SaaS engineering, automation, and AWS DevOps. Explore services and pricing.",
  path: "/services",
  keywords: [pageKeywords.services.primary, ...pageKeywords.services.secondary],
});

export default function ServicesPage() {
  const breadcrumbs = [{ name: "Services", path: "/services" }];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Section className="border-b border-border/60 bg-muted/20 pb-16 pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <FadeIn className="max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Software development services
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Senior-led engineering for web applications, AI features, SaaS platforms, workflow
              automation, and cloud infrastructure—optimized for search, performance, and scale.
            </p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex")}>
              Discuss your stack
            </Link>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-8">
          <FadeInStagger className="grid gap-6 md:grid-cols-2">
            {getAllServiceSlugs().map((slug) => {
              const seo = getServiceSeoPage(slug);
              const legacy = services.find((s) => s.slug === slug);
              if (!seo) return null;
              const Icon = legacy?.icon;
              return (
                <FadeInItem key={slug}>
                  <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
                    {Icon ? (
                      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-muted text-primary ring-1 ring-border">
                        <Icon className="size-6" aria-hidden />
                      </span>
                    ) : null}
                    <h2 className="mt-4 text-xl font-semibold">
                      <Link href={`/services/${slug}`} className="hover:text-primary">
                        {seo.title}
                      </Link>
                    </h2>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{seo.heroSubtitle}</p>
                    <Link
                      href={`/services/${slug}`}
                      className="mt-6 text-sm font-semibold text-primary hover:underline"
                    >
                      Read full service guide →
                    </Link>
                  </article>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </Container>
      </Section>
    </>
  );
}
