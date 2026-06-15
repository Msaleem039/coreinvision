import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

const TECH_MASTERIES: { name: string; slug: string }[] = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Python", slug: "python" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Docker", slug: "docker" },
  { name: "GraphQL", slug: "graphql" },
];

const SI_VERSION = "11.14.0";
function techIconSrc(slug: string) {
  return `https://cdn.jsdelivr.net/npm/simple-icons@${SI_VERSION}/icons/${slug}.svg`;
}

export function TechStackShowcase() {
  return (
    <Section className="bg-surface border-y border-border">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">Built on proven technologies</h2>
          <p className="mt-4 text-muted-foreground">
            Modern stacks chosen for performance, maintainability, and long-term scale.
          </p>
        </FadeIn>

        <FadeInStagger className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {TECH_MASTERIES.map((tech) => (
            <FadeInItem key={tech.name}>
              <div className="card-clean flex flex-col items-center gap-3 px-4 py-6 text-center">
                <img
                  src={techIconSrc(tech.slug)}
                  alt=""
                  width={36}
                  height={36}
                  className="size-9 object-contain opacity-80"
                />
                <span className="text-xs font-semibold text-navy">{tech.name}</span>
              </div>
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </Section>
  );
}
