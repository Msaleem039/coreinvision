import Link from "next/link";
import { homeProcess } from "@/lib/home-page";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export function ProcessSection() {
  return (
    <Section className="bg-background">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">{homeProcess.title}</h2>
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-8 md:grid-cols-3">
          {homeProcess.steps.map((step) => (
            <FadeInItem key={step.step}>
              <div className="card-clean h-full p-8 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  {step.step}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>

        <FadeIn className="mt-12 text-center">
          <Link href="/contact" className="btn-primary">
            Start your project
          </Link>
        </FadeIn>
      </Container>
    </Section>
  );
}
