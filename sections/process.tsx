import { processSteps } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export function ProcessSection() {
  return (
    <Section>
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How we work</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            A delivery rhythm designed for founders: visible progress every week, no black boxes.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <FadeInItem key={step.step}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="text-xs font-bold tracking-widest text-primary">{step.step}</span>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </Section>
  );
}
