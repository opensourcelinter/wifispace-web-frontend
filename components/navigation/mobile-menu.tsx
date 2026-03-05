"use client";

import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface MobileMenuProps {
  links: { href: string; label: string }[];
  pathname: string;
  onClose?: () => void;
}

export default function MobileMenu({
  links,
  pathname,
  onClose,
}: MobileMenuProps) {
  return (
    <div className="flex flex-col h-dvh overflow-hidden bg-linear-to-b from-white to-slate-50/80 dark:from-gray-950 dark:to-gray-900">
      <div className="flex-1 overflow-y-auto overscroll-y-contain px-5 py-10">
        <nav className="flex flex-col gap-5">
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <SheetClose asChild key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "group relative flex items-center py-4 px-6 text-xl font-medium rounded-xl transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/70",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-primary rounded-r-full" />
                  )}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </div>

      <div className="shrink-0 px-5 pb-10 pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="space-y-4">
          <SheetClose asChild>
            <Button
              asChild
              size="lg"
              className="w-full h-14 text-base rounded-xl shadow-md"
            >
              <Link href="/coverage">Check Coverage</Link>
            </Button>
          </SheetClose>

          <SheetClose asChild>
            <Button
              variant="outline"
              size="lg"
              className="w-full h-14 text-base rounded-xl border-2 border-primary/30 hover:border-primary/50"
              asChild
            >
              <a
                href="https://wa.me/234XXXXXXXXXX?text=Hi%20WifiSpace"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </Button>
          </SheetClose>
        </div>
      </div>
    </div>
  );
}
