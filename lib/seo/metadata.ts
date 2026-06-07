import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

const TITLE_MAX = 60;
const DESC_MAX = 160;

export type PageSeoInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
};

function trimTitle(title: string): string {
  const withBrand = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  if (withBrand.length <= TITLE_MAX) return withBrand;
  return `${withBrand.slice(0, TITLE_MAX - 1).trim()}…`;
}

function trimDescription(description: string): string {
  if (description.length <= DESC_MAX) return description;
  return `${description.slice(0, DESC_MAX - 1).trim()}…`;
}

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "/" ? "" : normalized}`;
}

export function createMetadata(input: PageSeoInput): Metadata {
  const title = trimTitle(input.title);
  const description = trimDescription(input.description);
  const url = absoluteUrl(input.path);
  const ogImage = input.ogImage ?? absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    keywords: input.keywords,
    alternates: {
      canonical: url,
      languages: {
        "en-US": url,
        "x-default": url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      alternateLocale: ["en_US"],
      type: input.type ?? "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(input.type === "article" && input.publishedTime
        ? { publishedTime: input.publishedTime }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: siteConfig.social.x,
    },
    robots: input.noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    ...(input.authors?.length ? { authors: input.authors.map((name) => ({ name })) } : {}),
  };
}

export const defaultMetadata: Metadata = createMetadata({
  title: `${siteConfig.name} — Custom Software & SaaS Development`,
  description:
    "Hire a senior US software agency for Next.js, AI integrations, SaaS, and cloud. Nationwide delivery. Book a free discovery call today.",
  path: "/",
  keywords: [
    "software development company",
    "Next.js agency",
    "SaaS development",
    "AI integration services",
  ],
});
