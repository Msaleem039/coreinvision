import Link from "next/link";
import { homeVision } from "@/lib/home-page";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";

export function CtaSection() {
  return (
    <Section className="bg-navy text-white">
      <Container className="py-4">
        <FadeIn className="mx-auto max-w-3xl py-12 text-center sm:py-16">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            {homeVision.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">{homeVision.paragraph1}</p>
          <p className="mt-4 text-lg font-medium leading-relaxed text-white">
            {homeVision.paragraph2}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-semibold text-navy transition-colors hover:bg-slate-100"
          >
            Start your project
          </Link>
        </FadeIn>
      </Container>
    </Section>
  );
}
