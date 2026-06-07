import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";

export const metadata = createMetadata({
  title: "Press & News",
  description:
    "Press releases and company news from coreinvision — software development, partnerships, and product launches.",
  path: "/press",
});

const news = [
  {
    date: "2026-02-01",
    title: "coreinvision expands AI integration practice for SaaS clients",
    summary: "New RAG and copilot delivery patterns for B2B support and operations teams.",
  },
  {
    date: "2025-11-15",
    title: "Partnership focus: US startups and SMB digital operations",
    summary: "US-focused delivery model with WhatsApp-friendly client communication.",
  },
];

export default function PressPage() {
  return (
    <Section className="py-16">
      <Container className="max-w-3xl">
        <Breadcrumbs items={[{ name: "Press & News", path: "/press" }]} className="mb-8" />
        <h1 className="text-4xl font-semibold tracking-tight">Press &amp; news</h1>
        <p className="mt-4 text-muted-foreground">
          Media inquiries:{" "}
          <a href="mailto:info@coreinvision.com" className="text-primary hover:underline">
            info@coreinvision.com
          </a>
        </p>
        <ul className="mt-10 space-y-6">
          {news.map((item) => (
            <li key={item.title} className="rounded-xl border border-border bg-card p-6">
              <time className="text-xs font-medium text-muted-foreground">{item.date}</time>
              <h2 className="mt-2 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="mt-8 inline-block text-sm font-semibold text-primary hover:underline">
          Read the engineering blog →
        </Link>
      </Container>
    </Section>
  );
}
