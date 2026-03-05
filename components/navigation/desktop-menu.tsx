import Link from "next/link";
import { cn } from "@/lib/utils";

interface DesktopMenuProps {
  links: { href: string; label: string }[];
  pathname: string;
}

export default function DesktopMenu({ links, pathname }: DesktopMenuProps) {
  return (
    <nav className="flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-lg font-medium transition-colors hover:text-primary",
            pathname === link.href
              ? "text-primary font-semibold"
              : "text-gray-700"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}