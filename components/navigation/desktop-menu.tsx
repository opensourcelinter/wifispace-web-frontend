"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface DesktopMenuProps {
  links: { href: string; title: string }[];
  pathname: string;
}

export default function DesktopMenu({ links, pathname }: DesktopMenuProps) {
  return (
    <nav className="flex items-center gap-1 md:gap-2 lg:gap-6">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors rounded-md",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
              isActive
                ? "text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground",
              "group",
            )}
          >
            <span
              className={cn(
                "absolute inset-x-4 bottom-0 h-0.5 rounded-full transition-all duration-300",
                isActive
                  ? "bg-primary scale-x-100"
                  : "bg-primary/40 scale-x-0 group-hover:scale-x-100",
              )}
            />

            {link.title}
          </Link>
        );
      })}
    </nav>
  );
}
