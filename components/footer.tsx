import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  siteConfig,
  socialLinks,
  whatsappHref,
  footerCompanyLinks,
  footerServiceLinks,
  footerResourceLinks,
} from "@/lib/site";
import { Container } from "@/components/container";

function socialHref(item: (typeof socialLinks)[number]) {
  if (item.key === "whatsapp") return whatsappHref();
  return item.href;
}

function SocialGlyph({ item }: { item: (typeof socialLinks)[number] }) {
  const className = "size-4";
  switch (item.key) {
    case "facebook":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-4h2v-1.5C10 7.57 11.57 6 13.5 6H16v4h-2c-.55 0-1 .45-1 1V15h3l-.5 4H13v5.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "whatsapp":
      return <MessageCircle className={className} aria-hidden />;
    case "x":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand + contact (company name → home; location from siteConfig) */}
          <div className="space-y-5">
            <Link href="/" className="inline-block rounded-lg outline-none ring-offset-background transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-ring">
              <div className="flex items-start gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-lg font-bold text-primary-foreground">
                  V
                </span>
                <div className="leading-tight">
                  <p className="text-xs font-medium text-muted-foreground">{siteConfig.footerTagline}</p>
                  <p className="text-lg font-semibold tracking-tight text-foreground">{siteConfig.name}</p>
                </div>
              </div>
            </Link>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((item) => {
                const href = socialHref(item);
                return (
                  <a
                    key={item.key}
                    href={href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <SocialGlyph item={item} />
                  </a>
                );
              })}
            </div>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <span>{siteConfig.location}</span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                <a className="hover:text-foreground" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phone ? (
                <li className="flex gap-2.5">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                  <a className="hover:text-foreground" href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
                    {siteConfig.phone}
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {footerCompanyLinks.map((l) => (
                <li key={l.label}>
                  <Link className="transition-colors hover:text-foreground" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {footerServiceLinks.map((l) => (
                <li key={l.label}>
                  <Link className="transition-colors hover:text-foreground" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Dedicated Resources</p>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {footerResourceLinks.map((l) => (
                <li key={l.label}>
                  <Link className="transition-colors hover:text-foreground" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="max-w-md text-pretty sm:text-right">
            Built for teams in the United States and Pakistan—clear communication across time zones.
          </p>
        </div>
      </Container>
    </footer>
  );
}
