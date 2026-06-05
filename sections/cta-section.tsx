import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CtaSection() {
  return (
    <Section className="pb-24">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/90 via-violet-600/90 to-cyan-600/85 p-[1px] shadow-2xl shadow-primary/25">
            <div className="relative rounded-[calc(1.5rem-1px)] bg-background/95 px-8 py-12 sm:px-12 sm:py-14 dark:bg-background/90">
              <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-gradient-to-br from-primary/30 to-cyan-500/20 blur-3xl" />
              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready for a calmer shipping cadence?
                </h2>
                <p className="mt-4 text-muted-foreground sm:text-lg">
                  Tell us about your roadmap. We will reply within one business day with honest fit
                  feedback—whether we are the right team or not.
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ size: "lg" }), "gap-2 shadow-lg shadow-primary/30")}
                  >
                    Schedule intro call
                    <ArrowRight className="size-4" />
                  </Link>
                  <Link
                    href={whatsappHref(`Hi ${siteConfig.name}, I'd like to chat about a project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}
                  >
                    Message on WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
