"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { FadeIn } from "@/components/motion";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export function TestimonialSlider() {
  const [index, setIndex] = React.useState(0);
  const t = testimonials[index];
  const len = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);

  React.useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % len), 7000);
    return () => window.clearInterval(id);
  }, [len]);

  return (
    <Section className="bg-muted/20">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What clients say</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Teams across the United States partner with us for velocity without sacrificing quality.
          </p>
        </FadeIn>

        <FadeIn className="relative mx-auto mt-12 max-w-3xl">
          <div className="glass-panel relative overflow-hidden rounded-2xl border border-border/80 p-8 sm:p-10">
            <Quote className="absolute right-6 top-6 size-10 text-primary/15" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <blockquote className="text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span
                    className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-primary-foreground"
                    aria-hidden
                  >
                    {t.flag}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.role} · {t.org}
                    </p>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button type="button" variant="outline" size="icon" onClick={prev} aria-label="Previous testimonial">
                  <ChevronLeft className="size-4" />
                </Button>
                <Button type="button" variant="outline" size="icon" onClick={next} aria-label="Next testimonial">
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
