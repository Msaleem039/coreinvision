import Image from "next/image";
import Link from "next/link";
import { homeIntro, homeProblems } from "@/lib/home-page";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export function ProblemsSection() {
  return (
    <Section className="bg-background">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">{homeIntro.title}</h2>
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-8 md:grid-cols-3">
          {homeProblems.map((item) => (
            <FadeInItem key={item.title}>
              <article className="card-clean overflow-hidden">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </article>
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
