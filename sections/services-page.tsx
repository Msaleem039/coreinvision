import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import {
  servicesHero,
  servicePillars,
  platformHighlights,
  ongoingSupport,
  servicesTrustStats,
  servicesCta,
} from "@/lib/services-page";
import { siteConfig } from "@/lib/site";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

const SI_VERSION = "11.14.0";
function techIconSrc(slug: string) {
  return `https://cdn.jsdelivr.net/npm/simple-icons@${SI_VERSION}/icons/${slug}.svg`;
}

export function ServicesHero() {
  return (
    <Section className="border-b border-border bg-surface pb-16 pt-8 sm:pb-20 sm:pt-12">
      <Container>
        <FadeIn className="mx-auto max-w-4xl text-center">
          <h1 className="section-title">{servicesHero.title}</h1>
          <div className="mx-auto mt-6 h-px w-16 bg-border" aria-hidden />
          <p className="mt-8 text-balance text-xl font-medium text-foreground sm:text-2xl">
            {servicesHero.headline}
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-pretty text-lg text-muted-foreground">
            {servicesHero.description}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Get a free consultation
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a href="#service-offerings" className="btn-outline">
              Explore our services
            </a>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

function ServicePillarBlock({
  pillar,
  reversed,
}: {
  pillar: (typeof servicePillars)[number];
  reversed: boolean;
}) {
  return (
    <FadeIn>
      <article
        id={pillar.id}
        className="scroll-mt-24 overflow-hidden rounded-lg border border-border bg-card shadow-sm"
      >
        <div
          className={cn(
            "grid lg:grid-cols-2 lg:items-stretch",
            reversed && "lg:[&>*:first-child]:order-2",
          )}
        >
          <div className="relative aspect-[4/3] min-h-[280px] lg:aspect-auto lg:min-h-[420px]">
            <Image
              src={pillar.image}
              alt={pillar.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-background/20" />
          </div>

          <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{pillar.title}</h2>
            <h3 className="mt-4 text-lg font-medium text-foreground">{pillar.headline}</h3>
            <p className="mt-4 leading-relaxed text-muted-foreground">{pillar.description}</p>

            <ul className="mt-8 flex flex-wrap gap-2">
              {pillar.offerings.map((item) => (
                <li key={`${pillar.id}-${item.label}`}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium transition-colors hover:border-primary/30 hover:bg-muted hover:text-primary sm:text-sm"
                  >
                    {item.label}
                    <ChevronRight className="size-3 opacity-50" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>

            {pillar.slug ? (
              <Link
                href={`/services/${pillar.slug}`}
                className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
              >
                Learn more about this service
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            ) : null}
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

export function ServicePillars() {
  return (
    <Section id="service-offerings" className="scroll-mt-20">
      <Container className="space-y-12 lg:space-y-16">
        {servicePillars.map((pillar, index) => (
          <ServicePillarBlock key={pillar.id} pillar={pillar} reversed={index % 2 === 1} />
        ))}
      </Container>
    </Section>
  );
}

export function PlatformsSection() {
  return (
    <Section className="bg-surface border-y border-border">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Built on proven technologies</h2>
          <p className="mt-4 text-muted-foreground">
            {siteConfig.name} engineers with modern, battle-tested stacks chosen for performance,
            maintainability, and long-term scale.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {platformHighlights.map((platform) => {
            const Icon = platform.icon;
            return (
              <FadeInItem key={platform.name}>
                <div className="card-clean flex h-full flex-col p-8 transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-14 items-center justify-center rounded-xl bg-muted ring-1 ring-border">
                      <img
                        src={techIconSrc(platform.slug)}
                        alt=""
                        width={32}
                        height={32}
                        className="size-8 object-contain"
                      />
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden />
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold">{platform.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {platform.description}
                  </p>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>
      </Container>
    </Section>
  );
}

export function OngoingSupportSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {ongoingSupport.title}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">{ongoingSupport.description}</p>
            <Link
              href="/contact"
              className="btn-primary mt-8 inline-flex"
            >
              Let&apos;s talk
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </FadeIn>

          <FadeInStagger className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {ongoingSupport.items.map((item) => {
              const Icon = item.icon;
              return (
                <FadeInItem key={item.label}>
                  <div className="card-clean flex flex-col items-center gap-3 p-5 text-center transition-shadow hover:shadow-md">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-muted text-primary">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="text-xs font-semibold leading-snug sm:text-sm">{item.label}</span>
                  </div>
                </FadeInItem>
              );
            })}
          </FadeInStagger>
        </div>
      </Container>
    </Section>
  );
}

export function ServicesTrustStats() {
  return (
    <Section className="border-y border-border bg-surface py-12">
      <Container>
        <FadeInStagger className="grid gap-8 sm:grid-cols-3">
          {servicesTrustStats.map((stat) => (
            <FadeInItem key={stat.label}>
              <div className="text-center">
                <p className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </Section>
  );
}

export function ServicesBottomCta() {
  return (
    <Section className="pb-24">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-lg bg-navy p-8 text-white sm:p-12 lg:p-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                {servicesCta.title}
              </h2>
              <p className="mt-4 text-slate-300 sm:text-lg">{servicesCta.description}</p>
              <Link href="/contact" className="btn-primary mt-8 inline-flex bg-white text-navy hover:bg-slate-100">
                Start your project
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
