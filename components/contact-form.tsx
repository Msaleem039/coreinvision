"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  CONTACT_INTERESTS,
  WEB3FORMS_ENDPOINT,
  contactFormSubject,
  type ContactInterestId,
} from "@/lib/contact";

function getWeb3FormsAccessKey() {
  return process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim() ?? "";
}
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

export type ContactFormProps = {
  className?: string;
  onSuccess?: () => void;
};

export function ContactForm({ className, onSuccess }: ContactFormProps) {
  const [status, setStatus] = React.useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [interest, setInterest] = React.useState<ContactInterestId>("web-development");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const accessKey = getWeb3FormsAccessKey();
    if (!accessKey || accessKey === "your_access_key_here") {
      setStatus("error");
      setErrorMessage(
        "Form is not configured yet. Add your real Web3Forms access key to .env.local as NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, then restart the dev server.",
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);

    const interestLabel =
      CONTACT_INTERESTS.find((item) => item.id === interest)?.label ?? interest;
    formData.set("service_interest", interestLabel);
    formData.set("subject", contactFormSubject(interestLabel));
    formData.set("from_name", siteConfig.name);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (data.success) {
        setStatus("success");
        form.reset();
        setInterest("web-development");
        onSuccess?.();
      } else {
        setStatus("error");
        setErrorMessage(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          "flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center backdrop-blur-xl",
          className,
        )}
      >
        <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/15">
          <CheckCircle2 className="size-8 text-emerald-500 dark:text-emerald-400" />
        </div>
        <h3 className="mt-5 text-lg font-semibold">Message sent successfully</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. We&apos;ll respond to your email within one business day. For
          faster replies in Pakistan, you can also message us on WhatsApp.
        </p>
        <Button type="button" variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.form
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onSubmit={onSubmit}
        className={cn(
          "rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-xl sm:p-8",
          status === "error" && "ring-1 ring-red-500/40",
          className,
        )}
      >
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="mb-6 border-b border-border pb-6">
          <h3 className="text-lg font-semibold">Send us your query</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in the form and we&apos;ll respond via email. Prefer WhatsApp? Use the button above.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Full name" required icon={User} className="sm:col-span-2">
            <Input
              name="name"
              required
              placeholder="Alex Khan"
              disabled={status === "loading"}
              className="pl-10"
            />
          </Field>

          <Field label="Email address" required icon={Mail}>
            <Input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              disabled={status === "loading"}
              className="pl-10"
            />
          </Field>

          <Field label="Contact number" required icon={Phone}>
            <Input
              type="tel"
              name="phone"
              required
              placeholder="+1 929 634 0281"
              disabled={status === "loading"}
              className="pl-10"
            />
          </Field>

          <Field label="Interested in" required className="sm:col-span-2">
            <select
              name="service_interest_select"
              required
              value={interest}
              disabled={status === "loading"}
              onChange={(e) => setInterest(e.target.value as ContactInterestId)}
              className="flex h-11 w-full rounded-xl border border-border bg-background px-4 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
            >
              {CONTACT_INTERESTS.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </Field>

          <Field
            label="Your message"
            required
            icon={MessageSquare}
            iconAlign="top"
            className="sm:col-span-2"
          >
            <Textarea
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project, timeline, budget range, and links to briefs or Figma…"
              disabled={status === "loading"}
              className="min-h-[140px] resize-y pl-10"
            />
          </Field>
        </div>

        {status === "error" && (
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-red-500 dark:text-red-400" />
            <p className="text-sm text-red-600 dark:text-red-300">{errorMessage}</p>
          </div>
        )}

        <Button
          type="submit"
          size="lg"
          disabled={status === "loading"}
          className="mt-6 w-full gap-2 sm:w-auto sm:min-w-[200px]"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <Send className="size-4" />
              Submit inquiry
            </>
          )}
        </Button>
      </motion.form>
    </AnimatePresence>
  );
}

function Field({
  label,
  required,
  icon: Icon,
  iconAlign = "center",
  children,
  className,
}: {
  label: string;
  required?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  iconAlign?: "center" | "top";
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 flex items-center gap-1 text-xs font-medium text-muted-foreground">
        {label}
        {required ? <span className="text-red-500">*</span> : null}
      </span>
      <div className="relative">
        {Icon ? (
          <Icon
            className={cn(
              "pointer-events-none absolute left-3 size-4 text-muted-foreground/70",
              iconAlign === "top" ? "top-3" : "top-1/2 -translate-y-1/2",
            )}
          />
        ) : null}
        {children}
      </div>
    </label>
  );
}
