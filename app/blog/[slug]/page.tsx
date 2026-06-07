import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo/metadata";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/schema";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog/posts";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { ShareButtons } from "@/components/seo/share-buttons";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    keywords: post.tags,
    type: "article",
    publishedTime: post.publishedAt,
    authors: [post.author.name],
  });
}

function renderContent(content: string) {
  return content.split("\n\n").map((block) => {
    if (block.startsWith("## ")) {
      const text = block.replace("## ", "");
      return (
        <h2 key={text} className="mt-10 text-2xl font-semibold tracking-tight first:mt-0">
          {text}
        </h2>
      );
    }
    return (
      <p key={block.slice(0, 24)} className="mt-4 leading-relaxed text-muted-foreground">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const breadcrumbs = [
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${slug}` },
  ];
  const related = getRelatedPosts(slug);
  const toc = post.content
    .split("\n\n")
    .filter((b) => b.startsWith("## "))
    .map((b) => b.replace("## ", ""));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbs),
          articleSchema({
            title: post.title,
            description: post.description,
            slug,
            publishedAt: post.publishedAt,
            updatedAt: post.updatedAt,
            author: post.author.name,
            tags: post.tags,
          }),
        ]}
      />

      <Section className="border-b border-border/60 bg-muted/20 pb-12 pt-12">
        <Container className="max-w-3xl">
          <Breadcrumbs items={breadcrumbs} className="mb-6" />
          <p className="text-sm font-semibold text-primary">{post.category}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-muted-foreground">{post.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>
              By{" "}
              {post.author.linkedin ? (
                <a href={post.author.linkedin} className="font-medium text-foreground hover:underline">
                  {post.author.name}
                </a>
              ) : (
                <span className="font-medium text-foreground">{post.author.name}</span>
              )}
              · {post.author.role}
            </span>
            <span>{post.readingTimeMinutes} min read</span>
            <span>{post.publishedAt}</span>
          </div>
          <ShareButtons path={`/blog/${slug}`} title={post.title} className="mt-6" />
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          {toc.length ? (
            <nav
              aria-label="Table of contents"
              className="mb-10 rounded-xl border border-border bg-muted/30 p-5"
            >
              <p className="text-sm font-semibold">Table of contents</p>
              <ol className="mt-3 list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
                {toc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </nav>
          ) : null}

          <article>{renderContent(post.content)}</article>

          {related.length ? (
            <aside className="mt-16 border-t border-border pt-10">
              <h2 className="text-xl font-semibold">Related posts</h2>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="font-medium hover:text-primary">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}

          <Link href="/contact" className={`${buttonVariants({ size: "lg" })} mt-12 inline-flex`}>
            Talk to our engineering team
          </Link>
        </Container>
      </Section>
    </>
  );
}
