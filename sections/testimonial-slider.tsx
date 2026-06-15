"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { homeTrust } from "@/lib/home-page";
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
    const id = window.setInterval(() => setIndex((i) => (i + 1) % len), 8000);
    return () => window.clearInterval(id);
  }, [len]);

  return (
    <Section className="bg-surface border-y border-border">
      <Container>
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">{homeTrust.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{homeTrust.description}</p>
        </FadeIn>

        <FadeIn className="relative mx-auto mt-12 max-w-3xl">
          <div className="card-clean relative p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="text-center text-lg leading-relaxed text-navy sm:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 text-center">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {t.role}, {t.org}
                  </p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Button type="button" variant="outline" size="icon" onClick={prev} aria-label="Previous">
                <ChevronLeft className="size-4" />
              </Button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-2 rounded-full transition-all ${
                      i === index ? "w-8 bg-primary" : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <Button type="button" variant="outline" size="icon" onClick={next} aria-label="Next">
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
