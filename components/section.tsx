import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
};

export function Section({ className, id, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-16 lg:py-16", className)} {...props} />
  );
}
