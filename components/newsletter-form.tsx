"use client";

import * as React from "react";
import { Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function getAccessKey() {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";
}

export function NewsletterForm({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const accessKey = getAccessKey();
    if (!accessKey || accessKey === "your_access_key_here") {
      setStatus("error");
      return;
    }

    setStatus("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.set("subject", "Newsletter subscription");
    formData.set("message", "New newsletter subscriber");

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = (await res.json()) as { success?: boolean };
      setStatus(data.success ? "success" : "error");
      if (data.success) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className={className} aria-label="Newsletter subscription">
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <p className="text-sm font-semibold">Engineering insights newsletter</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Next.js, SaaS, and AI delivery notes—no spam.
      </p>
      <div className="mt-3 flex gap-2">
        <Input
          type="email"
          name="email"
          required
          placeholder="you@company.com"
          aria-label="Email for newsletter"
          disabled={status === "loading" || status === "success"}
          className="h-10"
        />
        <Button type="submit" size="sm" disabled={status === "loading" || status === "success"}>
          {status === "loading" ? (
            <Loader2 className="size-4 animate-spin" aria-hidden />
          ) : (
            <Mail className="size-4" aria-hidden />
          )}
          <span className="sr-only">Subscribe</span>
        </Button>
      </div>
      {status === "success" ? (
        <p className="mt-2 text-xs text-emerald-600 dark:text-emerald-400" role="status">
          Subscribed. Check your inbox soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-2 text-xs text-red-500" role="alert">
          Could not subscribe. Try again or contact us directly.
        </p>
      ) : null}
    </form>
  );
}
