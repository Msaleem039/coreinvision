import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { pageKeywords } from "@/lib/seo/keywords";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { blogPosts, blogCategories } from "@/lib/blog/posts";
import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { FadeIn, FadeInStagger, FadeInItem } from "@/components/motion";

export const metadata = createMetadata({
  title: "Software Development Blog — Next.js, SaaS & AI",
  description:
    "Engineering insights on Next.js SEO, SaaS MVPs, AI/RAG in production, and cloud delivery. Guides for founders and technical leaders.",
  path: "/blog",
  keywords: [pageKeywords.blog.primary, ...pageKeywords.blog.secondary],
});

export default function BlogIndexPage() {
  const breadcrumbs = [{ name: "Blog", path: "/blog" }];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <Section className="border-b border-border bg-surface pb-12 pt-12 sm:pt-16">
        <Container>
          <FadeIn className="max-w-3xl">
            <h1 className="section-title">Software engineering blog</h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Practical guides on Next.js, SaaS delivery, AI integration, and technical SEO for
              product teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium"
                >
                  {cat}
                </span>
              ))}
            </div>
          </FadeIn>
        </Container>
      </Section>

      <Section>
        <Container>
          <FadeInStagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <FadeInItem key={post.slug}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {post.category}
                  </p>
                  <h2 className="mt-2 text-lg font-semibold leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {post.readingTimeMinutes} min read · {post.publishedAt}
                  </p>
                </article>
              </FadeInItem>
            ))}
          </FadeInStagger>
        </Container>
      </Section>
    </>
  );
}
