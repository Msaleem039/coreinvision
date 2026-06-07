import Image from "next/image";
import Link from "next/link";
import { portfolioProjects } from "@/lib/data";
import { createMetadata } from "@/lib/seo/metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Case Studies & Portfolio — Software Projects",
  description:
    "Software development case studies: SaaS billing, logistics automation, AI support copilots. Next.js, AWS, measurable results.",
  path: "/portfolio",
  keywords: [pageKeywords.portfolio.primary, ...pageKeywords.portfolio.secondary],
});

export default function PortfolioPage() {
  const breadcrumbs = [{ name: "Case Studies", path: "/portfolio" }];
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Section className="border-b border-border/60 bg-muted/20 pb-16 pt-12 sm:pt-16">
        <Container>
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-semibold text-primary">Portfolio</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Case studies</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Problem, solution, stack, and results—documented the way technical buyers and operating
              leaders evaluate partners.
            </p>
            <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex")}>
              Start a similar engagement
            </Link>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-16">
          <FadeInStagger className="space-y-16">
            {portfolioProjects.map((p) => (
              <FadeInItem key={p.slug}>
                <article
                  id={p.slug}
                  className="scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
                >
                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className="relative aspect-[4/3] min-h-[240px] lg:aspect-auto lg:min-h-[360px]">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-tr opacity-70 mix-blend-multiply dark:mix-blend-screen",
                          p.accent,
                        )}
                      />
                    </div>
                    <div className="flex flex-col justify-center p-8 sm:p-10">
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        {p.sector}
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{p.title}</h2>

                      <div className="mt-8 space-y-6 text-sm leading-relaxed">
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                            Problem
                          </h3>
                          <p className="mt-2 text-muted-foreground">{p.problem}</p>
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                            Solution
                          </h3>
                          <p className="mt-2 text-muted-foreground">{p.solution}</p>
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                            Tech used
                          </h3>
                          <ul className="mt-2 flex flex-wrap gap-2">
                            {p.tech.map((t) => (
                              <li
                                key={t}
                                className="rounded-lg border border-border bg-muted/50 px-2.5 py-1 text-xs font-medium"
                              >
                                {t}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wide text-primary">
                            Results
                          </h3>
                          <ul className="mt-2 space-y-1 text-muted-foreground">
                            {p.results.map((r) => (
                              <li key={r}>— {r}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>
    </>
  );
}
