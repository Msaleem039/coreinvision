import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/seo/schema";
import { cn } from "@/lib/utils";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const trail = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {trail.map((item, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {index > 0 ? (
                <ChevronRight className="size-3.5 shrink-0 opacity-50" aria-hidden />
              ) : null}
              {isLast ? (
                <span className="font-medium text-foreground" aria-current="page">
                  {index === 0 ? (
                    <span className="inline-flex items-center gap-1">
                      <Home className="size-3.5" aria-hidden />
                      <span className="sr-only">Home</span>
                      {item.name !== "Home" ? item.name : null}
                    </span>
                  ) : (
                    item.name
                  )}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="inline-flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  {index === 0 ? (
                    <>
                      <Home className="size-3.5" aria-hidden />
                      <span className="sr-only">Home</span>
                    </>
                  ) : (
                    item.name
                  )}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
