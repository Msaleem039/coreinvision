import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { buttonVariants } from "@/components/ui/button";

export const metadata = createMetadata({
  title: "Careers — Join Our Software Team",
  description:
    "Careers at coreinvision: senior engineers, designers, and cloud specialists. Remote-friendly roles across US time zones.",
  path: "/careers",
});

const roles = [
  "Senior Next.js Engineer",
  "Full-Stack MERN Developer",
  "AI / LLM Integration Engineer",
  "DevOps / AWS Engineer",
  "UI/UX Designer",
];

export default function CareersPage() {
  return (
    <Section className="py-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "Careers", path: "/careers" }]} className="mb-8" />
        <h1 className="text-4xl font-semibold tracking-tight">Careers</h1>
        <p className="mt-5 text-lg text-muted-foreground">
          We hire senior practitioners who care about craft, clarity, and client outcomes. Remote
          collaboration across US hours is core to how we work.
        </p>
        <h2 className="mt-10 text-2xl font-semibold">Open roles</h2>
        <ul className="mt-4 space-y-3">
          {roles.map((role) => (
            <li
              key={role}
              className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm"
            >
              <span className="font-medium">{role}</span>
              <span className="text-muted-foreground">Remote</span>
            </li>
          ))}
        </ul>
        <Link href="/contact" className={`${buttonVariants({ size: "lg" })} mt-10 inline-flex`}>
          Apply via contact form
        </Link>
      </Container>
    </Section>
  );
}
