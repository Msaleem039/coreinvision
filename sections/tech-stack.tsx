import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";
import { Container } from "@/components/container";

/** Simple Icons slug → `https://cdn.jsdelivr.net/npm/simple-icons@v11.14.0/icons/{slug}.svg` */
const TECH_MASTERIES: { name: string; slug: string }[] = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Vue.js", slug: "vuedotjs" },
  { name: "Angular", slug: "angular" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Python", slug: "python" },
  { name: "Django", slug: "django" },
  { name: "Express", slug: "express" },
  { name: "NestJS", slug: "nestjs" },
  { name: "GraphQL", slug: "graphql" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "MySQL", slug: "mysql" },
  { name: "Redis", slug: "redis" },
  { name: "React Native", slug: "react" },
  { name: "Flutter", slug: "flutter" },
  { name: "Swift", slug: "swift" },
  { name: "Kotlin", slug: "kotlin" },
  { name: "iOS", slug: "apple" },
  { name: "Android", slug: "android" },
  { name: "AWS", slug: "amazonaws" },
  { name: "GCP", slug: "googlecloud" },
  { name: "Azure", slug: "microsoftazure" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "GitHub", slug: "github" },
];

const SI_VERSION = "11.14.0";
function techIconSrc(slug: string) {
  return `https://cdn.jsdelivr.net/npm/simple-icons@${SI_VERSION}/icons/${slug}.svg`;
}

function TechCard({ name, slug }: { name: string; slug: string }) {
  return (
    <div className="group relative">
      {/* Hover ring — cyan / indigo */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-sky-400/0 via-sky-400/0 to-violet-500/0 opacity-0 blur-[1px] transition-all duration-500 group-hover:from-sky-400/25 group-hover:via-cyan-400/15 group-hover:to-violet-500/20 group-hover:opacity-100"
        aria-hidden
      />
      <div
        className="relative flex flex-col items-center justify-center gap-3.5 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.09] to-white/[0.02] px-3 py-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:border-sky-400/20 group-hover:from-white/[0.14] group-hover:to-white/[0.04] group-hover:shadow-[0_12px_40px_-16px_rgba(14,165,233,0.35),inset_0_1px_0_0_rgba(255,255,255,0.1)]"
      >
        <div className="relative flex size-11 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/[0.06] transition-all duration-300 group-hover:bg-white/[0.08] group-hover:ring-sky-400/25">
          <img
            src={techIconSrc(slug)}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="size-9 object-contain opacity-[0.92] transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>
        <span className="text-center text-[11px] font-medium leading-snug tracking-wide text-slate-400 transition-colors duration-300 group-hover:text-slate-200 sm:text-xs">
          {name}
        </span>
      </div>
    </div>
  );
}

export function TechStackShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#020617] py-20 text-white sm:py-24 lg:py-28">
      {/* Base wash */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_140%_100%_at_50%_100%,#0f172a_0%,#020617_45%,#020617_100%)]"
        aria-hidden
      />
      {/* Top spotlight — cyan */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(34,211,238,0.18),transparent_55%)]"
        aria-hidden
      />
      {/* Side accents — indigo + teal */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_55%_at_100%_20%,rgba(99,102,241,0.14),transparent_60%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_0%_80%,rgba(45,212,191,0.08),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-grid-tech opacity-[0.28]" aria-hidden />

      <Container className="relative z-10 max-w-7xl">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span
              className="h-px w-10 shrink-0 rounded-full bg-gradient-to-r from-transparent via-sky-400 to-sky-400/80"
              aria-hidden
            />
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-300 sm:text-xs">
              Our tech stack
            </p>
            <span
              className="h-px w-10 shrink-0 rounded-full bg-gradient-to-l from-transparent via-sky-400 to-sky-400/80"
              aria-hidden
            />
          </div>
          <h2 className="mt-6 text-balance bg-gradient-to-b from-white to-white/80 bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl md:text-5xl md:leading-tight">
            Technologies We Master
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-sm text-slate-400 sm:text-base sm:leading-relaxed">
            Cutting-edge tools and frameworks to bring your vision to life
          </p>
        </FadeIn>

        <FadeInStagger className="mx-auto mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3.5 md:grid-cols-5 lg:grid-cols-7 lg:gap-4 xl:grid-cols-10">
          {TECH_MASTERIES.map((tech) => (
            <FadeInItem key={tech.name}>
              <TechCard name={tech.name} slug={tech.slug} />
            </FadeInItem>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
}
