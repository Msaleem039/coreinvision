import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development with Next.js and MERN, AI integrations, SaaS builds, n8n automation, and AWS cloud deployments for international teams.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="border-b border-border/60 bg-muted/20 pb-16 pt-12 sm:pt-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-semibold text-primary">Services</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Engineering partners for serious software
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Whether you are validating an MVP in the USA or modernizing operations in Pakistan, we
              bring the same senior-led execution: clear scope, weekly demos, and production hygiene.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }))}>
                Discuss your stack
              </Link>
              <Link href="/portfolio" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
                See outcomes
              </Link>
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container className="space-y-20">
          <FadeInStagger className="grid gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <FadeInItem key={s.title}>
                  <article
                    id={s.slug}
                    className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm lg:grid-cols-[1fr_1.1fr] lg:p-10"
                  >
                    <div>
                      <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-muted text-primary ring-1 ring-border">
                        <Icon className="size-7" aria-hidden />
                      </div>
                      <h2 className="mt-6 text-2xl font-semibold tracking-tight">{s.title}</h2>
                      <p className="mt-3 text-muted-foreground">{s.description}</p>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          Benefits
                        </h3>
                        <ul className="mt-3 space-y-2">
                          {s.highlights.map((h) => (
                            <li key={h} className="flex gap-2 text-sm">
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                          Typical use cases
                        </h3>
                        <ul className="mt-3 flex flex-wrap gap-2">
                          {s.useCases.map((u) => (
                            <li
                              key={u}
                              className="rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium"
                            >
                              {u}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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
