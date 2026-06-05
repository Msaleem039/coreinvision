import Link from "next/link";
import { services } from "@/lib/data";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const top = services.slice(0, 3);
const bottom = services.slice(3);

export function ServicesBento() {
  return (
    <Section id="services" className="scroll-mt-20">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Full-stack capability, boutique attention
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            From customer-facing apps to internal automation, we assemble the right stack for your
            stage—without over-engineering.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-14 grid gap-4 lg:grid-cols-3">
          {top.map((s, i) => {
            const Icon = s.icon;
            const large = i === 0;
            return (
              <FadeInItem key={s.title}>
                <div
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-primary/5",
                    large && "lg:col-span-2 lg:row-span-1",
                  )}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-gradient-to-br from-primary/15 to-cyan-500/10 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-primary ring-1 ring-border">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {s.highlights.map((h) => (
                          <li
                            key={h}
                            className="rounded-lg bg-muted/80 px-2.5 py-1 text-xs font-medium text-foreground/80"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>

        <FadeInStagger className="mt-4 grid gap-4 lg:grid-cols-2">
          {bottom.map((s) => {
            const Icon = s.icon;
            return (
              <FadeInItem key={s.title}>
                <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:hover:shadow-primary/5">
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-violet-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-muted text-primary ring-1 ring-border">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
                    </div>
                  </div>
                </div>
              </FadeInItem>
            );
          })}
        </FadeInStagger>

        <FadeIn className="mt-10 flex justify-center">
          <Link href="/services" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Explore all services
          </Link>
        </FadeIn>
      </Container>
    </Section>
  );
}
