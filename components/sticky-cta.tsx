"use client";

import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function StickyCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-lg md:hidden"
      role="region"
      aria-label="Quick contact actions"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          href="/contact"
          className={cn(buttonVariants({ size: "sm" }), "flex-1 gap-1.5")}
        >
          <PhoneCall className="size-4" aria-hidden />
          Book call
        </Link>
        <Link
          href={whatsappHref(`Hi ${siteConfig.name}, I'd like to discuss a project.`)}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ variant: "accent", size: "sm" }), "flex-1 gap-1.5")}
        >
          <MessageCircle className="size-4" aria-hidden />
          WhatsApp
        </Link>
      </div>
    </div>
  );
}
