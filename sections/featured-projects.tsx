import Link from "next/link";
import Image from "next/image";
import { portfolioProjects } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  return (
    <Section className="bg-muted/25">
      <Container>
        <FadeIn className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h2>
            <p className="mt-3 text-muted-foreground sm:text-lg">
              Outcomes over aesthetics-only case studies—each build tied to measurable product and
              operations impact.
            </p>
          </div>
          <Link href="/portfolio" className={cn(buttonVariants({ variant: "secondary" }))}>
            View portfolio
          </Link>
        </FadeIn>

        <FadeInStagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {portfolioProjects.map((p) => (
            <FadeInItem key={p.slug}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl dark:hover:shadow-primary/10">
                <Link
                  href={`/portfolio#${p.slug}`}
                  className="group relative block aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br mix-blend-multiply dark:mix-blend-screen",
                      p.accent,
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-medium text-muted-foreground">{p.sector}</p>
                    <h3 className="mt-1 text-lg font-semibold tracking-tight">{p.title}</h3>
                  </div>
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm text-muted-foreground line-clamp-3">{p.problem}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {p.tech.slice(0, 4).map((t) => (
                      <li
                        key={t}
                        className="rounded-md border border-border bg-muted/50 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/portfolio#${p.slug}`}
                    className="mt-auto pt-6 text-sm font-semibold text-primary hover:underline"
                  >
                    Read case study
                  </Link>
                </div>
              </article>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </Section>
  );
}
