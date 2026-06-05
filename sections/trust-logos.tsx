import { trustLogos } from "@/lib/data";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/container";

export function TrustLogos() {
  return (
    <section className="border-b border-border/60 bg-muted/20 py-10">
      <Container>
        <FadeIn className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by product-led teams
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 opacity-80 grayscale dark:opacity-70">
            {trustLogos.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold tracking-tight text-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
