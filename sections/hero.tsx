"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { homeHero } from "@/lib/home-page";
import { Container } from "@/components/container";

export function HeroSection() {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-semibold leading-[1.15] text-navy sm:text-5xl lg:text-[3.25rem]">
            {homeHero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {homeHero.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/contact" className="btn-primary">
              {homeHero.primaryCta}
            </Link>
            <Link href="/contact" className="btn-outline">
              {homeHero.secondaryCta}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border shadow-lg lg:aspect-square"
        >
          <Image
            src="/home1.jpg"
            alt="Custom software development for US businesses — coreinvision"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </Container>
    </section>
  );
}
