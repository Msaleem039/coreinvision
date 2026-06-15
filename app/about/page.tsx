import Link from "next/link";
import { team } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/seo/metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/json-ld";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export const metadata = createMetadata({
  title: "About Us — US Software Development Agency",
  description:
    "Meet coreinvision: senior software engineers delivering Next.js, SaaS, AI, and cloud projects for US startups and SMBs. Mission, team, E-E-A-T.",
  path: "/about",
  keywords: ["about software development company", "coreinvision team", "remote software agency"],
});

export default function AboutPage() {
  const breadcrumbs = [{ name: "About", path: "/about" }];
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          webPageSchema({
            name: "About Us — US Software Development Agency",
            description:
              "Meet coreinvision: senior software engineers delivering Next.js, SaaS, AI, and cloud projects for US startups and SMBs.",
            path: "/about",
          }),
        ]}
      />
      <Section className="border-b border-border bg-surface pb-16 pt-12 sm:pt-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <h1 className="section-title">Built for founders who care about craft and calendar</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              {siteConfig.name} is a senior-led software agency partnering with startups and
              established SMBs across the United States. We combine product judgment with engineering
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
            <FadeIn className="card-clean p-8">
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
                    Become the default technical partner for US teams who want premium product
                    execution with pragmatic, founder-friendly delivery.
                  </dd>
                </div>
              </dl>
              <Link href="/contact" className="btn-primary mt-8 inline-flex">
                Meet the team on a call
              </Link>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface border-y border-border">
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
                <div className="card-clean flex h-full flex-col p-6 transition-shadow hover:shadow-md">
                  <div className="flex size-12 items-center justify-center rounded-md bg-primary text-lg font-bold text-primary-foreground">
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
