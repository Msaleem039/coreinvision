import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { createMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/seo/schema";
import { getServiceSeoPage, getAllServiceSlugs } from "@/lib/seo/service-pages";
import { serviceFaqsBySlug } from "@/lib/seo/faq";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqSection } from "@/components/seo/faq-section";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/motion";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getServiceSeoPage(slug);
  if (!page) return {};
  return createMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: `/services/${slug}`,
    keywords: page.keywords,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const page = getServiceSeoPage(slug);
  if (!page) notFound();

  const faqs = [...page.faqs, ...(serviceFaqsBySlug[slug] ?? [])];
  const breadcrumbs = [
    { name: "Services", path: "/services" },
    { name: page.title, path: `/services/${slug}` },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          serviceSchema({
            name: page.title,
            description: page.heroSubtitle,
            slug,
            offers: page.features,
          }),
          ...(faqs.length ? [faqSchema(faqs)] : []),
        ]}
      />

      <Section className="border-b border-border bg-surface pb-12 pt-12 sm:pt-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <h1 className="section-title">{page.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{page.heroSubtitle}</p>
            <Link href="/contact" className="btn-primary mt-8 inline-flex">
              Get a free consultation
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <article className="prose prose-neutral dark:prose-invert mx-auto max-w-3xl">
            {page.sections.map((section) => (
              <div key={section.heading} className="mb-12 not-prose">
                <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                  {section.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </article>

          <div className="mx-auto mt-8 grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="card-clean p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Key benefits</h2>
              <ul className="mt-4 space-y-3">
                {page.benefits.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-clean p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Features & capabilities</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {page.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {faqs.length ? (
        <Container>
          <FaqSection faqs={faqs} />
        </Container>
      ) : null}

      <Section className="bg-surface border-y border-border">
        <Container>
          <h2 className="text-2xl font-semibold">Related services</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {page.relatedSlugs.map((related) => {
              const relatedPage = getServiceSeoPage(related);
              if (!relatedPage) return null;
              return (
                <li key={related}>
                  <Link
                    href={`/services/${related}`}
                    className="card-clean block p-5 transition-shadow hover:shadow-md"
                  >
                    <span className="font-semibold">{relatedPage.title}</span>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {relatedPage.heroSubtitle}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </>
  );
}
