"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import * as React from "react";
import { siteConfig, navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <Container className="flex h-[4.5rem] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          {/* <span className="flex size-10 items-center justify-center rounded-md bg-primary text-lg font-bold text-white">
            C
          </span> */}
          <Image src="/logo3.png" alt="Logo" width={100} height={100} className="w-32 h-32" />
          {/* <div className="leading-tight">
            <span className="block text-base font-semibold text-navy">{siteConfig.name}</span>
            <span className="hidden text-[11px] text-muted-foreground sm:block">
              {siteConfig.footerTagline}
            </span>
          </div> */}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
                  active && "text-primary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="btn-primary hidden !py-2.5 !text-sm sm:inline-flex">
            Start your project
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-navy hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mt-2 text-center">
              Start your project
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
