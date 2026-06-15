import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/container";

export const metadata = createMetadata({
  title: "Page Not Found — 404",
  description:
    "The page you requested could not be found. Explore our software development services, portfolio, or contact our team.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <h1 className="section-title">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        This URL may have moved or no longer exists. Try our services overview, case studies, or
        contact page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/services" className="btn-outline">
          View services
        </Link>
        <Link href="/contact" className="btn-outline">
          Contact us
        </Link>
      </div>
    </Container>
  );
}
