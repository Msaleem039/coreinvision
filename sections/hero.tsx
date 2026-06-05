"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/image.webp"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/92 via-background/88 to-background/95 dark:from-background/90 dark:via-background/82 dark:to-background/95"
          aria-hidden
        />
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      </div>
      <div className="pointer-events-none absolute -top-40 left-1/2 z-[1] h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/25 via-violet-500/20 to-cyan-500/25 blur-3xl dark:from-primary/20 dark:via-violet-500/15 dark:to-cyan-500/20" />
      <Container className="relative z-10 py-20 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border glass-panel px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-accent" aria-hidden />
            USA & Pakistan delivery · Next.js · AI · Cloud
          </div> */}
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Software that ships like a{" "}
            <span className="text-gradient">premium product team</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            {siteConfig.name} partners with startups and growing businesses to design, build, and
            scale web apps, AI features, and automation—with the polish your users notice.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "inline-flex gap-2")}
            >
              Start a project
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href={whatsappHref(
                `Hi ${siteConfig.name}, I'd like to discuss a project.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "border-border/80",
              )}
            >
              WhatsApp us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="glass-panel relative overflow-hidden rounded-2xl border border-border/80 p-1 shadow-2xl shadow-primary/10">
            <div className="rounded-xl bg-gradient-to-br from-card via-muted/40 to-card p-6 sm:p-10">
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { label: "Median time to demo", value: "10 days" },
                  { label: "Senior-led squads", value: "100%" },
                  { label: "Cloud-native defaults", value: "AWS" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-border/60 bg-background/50 p-4 text-left"
                  >
                    <p className="text-2xl font-semibold tracking-tight">{item.value}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
