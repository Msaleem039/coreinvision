"use client";

import * as React from "react";
import { CalendarDays, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri"] as const;
const slots = ["9:00", "10:30", "13:00", "15:30", "17:00"] as const;

export function BookingWidget() {
  const [day, setDay] = React.useState<(typeof days)[number]>("Wed");
  const [slot, setSlot] = React.useState<string | null>("10:30");

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-center gap-2 text-sm font-semibold">
        <CalendarDays className="size-4 text-primary" aria-hidden />
        Book a 30-minute intro
      </div>
      <p className="mt-2 text-sm text-muted-foreground">
        Pick a preferred window—we will confirm via email or WhatsApp. For instant scheduling, use
        Calendly.
      </p>

      <div className="mt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Day</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {days.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setDay(d)}
              className={cn(
                "rounded-lg border px-3 py-2 text-xs font-semibold transition-colors",
                d === day
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-muted/40 hover:bg-muted",
              )}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          <Clock className="size-3.5" aria-hidden />
          Time (your local)
        </p>
        <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
          {slots.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSlot(s)}
              className={cn(
                "rounded-lg border py-2 text-xs font-semibold transition-colors",
                slot === s
                  ? "border-cyan-500/60 bg-cyan-500/10 text-foreground"
                  : "border-border bg-muted/30 hover:bg-muted",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <a
          href={siteConfig.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants(), "flex-1 text-center")}
        >
          Open Calendly
        </a>
      </div>
      <p className="mt-3 text-center text-[11px] text-muted-foreground">
        Prefer live booking? Calendly syncs to our real availability. You can also mention a preferred
        slot in your message.
      </p>
    </div>
  );
}
