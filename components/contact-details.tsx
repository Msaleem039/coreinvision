import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ContactDetails() {
  const hours = siteConfig.openingHours[0];

  return (
    <div className="space-y-6 rounded-2xl border border-border bg-muted/30 p-6">
      <div>
        <h3 className="text-sm font-semibold">Contact details</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Email for formal briefs. WhatsApp for quick US client leads.
        </p>
      </div>

      <ul className="space-y-4 text-sm">
        <li className="flex gap-3">
          <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          <address className="not-italic text-muted-foreground">
            {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.region}{" "}
            {siteConfig.address.postalCode}
          </address>
        </li>
        <li className="flex gap-3">
          <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
          <a className="font-medium hover:text-primary" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </li>
        {siteConfig.phone ? (
          <li className="flex gap-3">
            <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            <a
              className="font-medium hover:text-primary"
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
            >
              {siteConfig.phone}
            </a>
          </li>
        ) : null}
        {hours ? (
          <li className="flex gap-3">
            <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
            <span className="text-muted-foreground">
              Mon–Fri {hours.opens}–{hours.closes} (EST)
            </span>
          </li>
        ) : null}
      </ul>

      <Link
        href={whatsappHref(`Hi ${siteConfig.name}, I'd like to discuss a project.`)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(buttonVariants({ variant: "accent", size: "lg" }), "w-full gap-2")}
      >
        <MessageCircle className="size-5" aria-hidden />
        WhatsApp lead channel
      </Link>

      <div className="overflow-hidden rounded-xl border border-border">
        <iframe
          title={`${siteConfig.name} office location map`}
          src={siteConfig.mapsEmbedUrl}
          className="aspect-[4/3] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
