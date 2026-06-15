import Image from "next/image";
import Link from "next/link";
import { homeBenefits } from "@/lib/home-page";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { cn } from "@/lib/utils";

export function BenefitsSection() {
  return (
    <Section className="bg-surface border-y border-border">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">{homeBenefits.title}</h2>
        </FadeIn>

        <div className="mt-14 space-y-16">
          {homeBenefits.items.map((item, index) => (
            <FadeIn key={item.label}>
              <article
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                  index % 2 === 1 && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border shadow-md">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-navy sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 text-center">
          <Link href="/contact" className="btn-primary">
            Start your project
          </Link>
        </FadeIn>
      </Container>
    </Section>
  );
}
