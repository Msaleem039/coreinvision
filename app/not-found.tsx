import Link from "next/link";
import { createMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/container";
import { buttonVariants } from "@/components/ui/button";

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
      <p className="text-sm font-semibold text-primary">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        This URL may have moved or no longer exists. Try our services overview, case studies, or
        contact page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className={buttonVariants({ size: "lg" })}>
          Back to home
        </Link>
        <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg" })}>
          View services
        </Link>
        <Link href="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>
          Contact us
        </Link>
      </div>
    </Container>
  );
}
