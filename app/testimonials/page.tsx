import { createMetadata } from "@/lib/seo/metadata";
import { testimonials } from "@/lib/data";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export const metadata = createMetadata({
  title: "Client Testimonials & Reviews",
  description:
    "Read testimonials from US clients who partnered with coreinvision for Next.js, SaaS, AI, and automation projects.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <Section className="py-16">
      <Container>
        <h1 className="text-4xl font-semibold tracking-tight">Client testimonials</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Feedback from product leaders and operators we have supported across the United States.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 border-t border-border pt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  {t.role} · {t.org}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
