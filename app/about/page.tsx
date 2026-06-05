import type { Metadata } from "next";
import Link from "next/link";
import { team } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}'s mission, how we work across USA and Pakistan, and the team behind the delivery.`,
};

export default function AboutPage() {
  return (
    <>
      <Section className="border-b border-border/60 bg-muted/20 pb-16 pt-12 sm:pt-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-semibold text-primary">About</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Built for founders who care about craft and calendar
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              {siteConfig.name} is a senior-led software agency partnering with startups in the United
              States and established SMBs in Pakistan. We combine product judgment with engineering
              depth—so you ship faster without mortgaging your codebase.
            </p>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 className="text-2xl font-semibold tracking-tight">Our story</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  We started as specialists tired of handoffs: designers who never saw production,
                  backends that ignored frontend constraints, and agencies that optimized for invoices
                  instead of outcomes.
                </p>
                <p>
                  Today we run small, autonomous squads around each engagement. Your Slack or WhatsApp
                  thread goes to the people actually writing code and owning releases.
                </p>
              </div>
            </FadeIn>
            <FadeIn className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-tight">Mission & vision</h2>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-sm font-semibold text-primary">Mission</dt>
                  <dd className="mt-2 text-muted-foreground">
                    Deliver dependable software with startup speed and enterprise-grade reliability.
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-primary">Vision</dt>
                  <dd className="mt-2 text-muted-foreground">
                    Become the default technical partner for cross-border teams who want US-quality
                    product execution with pragmatic emerging-market operations awareness.
                  </dd>
                </div>
              </dl>
              <Link href="/contact" className={cn(buttonVariants(), "mt-8 inline-flex")}>
                Meet the team on a call
              </Link>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="bg-muted/25">
        <Container>
          <FadeIn className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How we are organized</h2>
            <p className="mt-3 text-muted-foreground sm:text-lg">
              You work with a tight core squad and tap specialists when the roadmap demands it—design,
              mobile, data, or compliance.
            </p>
          </FadeIn>

          <FadeInStagger className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <FadeInItem key={member.name}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-lg font-bold text-primary-foreground">
                    {member.initials}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>
    </>
  );
}
