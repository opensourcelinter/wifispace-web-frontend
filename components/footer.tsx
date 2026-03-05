"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 py-16 md:py-20 border-t border-neutral-800">
      <div className="container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="space-y-5">
            <Link
              href="/"
              className="text-2xl md:text-3xl font-bold text-secondary inline-block tracking-tight"
            >
              WifiSpace
            </Link>

            <p className="text-neutral-400 leading-relaxed">
              Fast, reliable broadband built for Lagos homes and businesses — no
              throttling, no excuses.
            </p>

            <p className="text-sm text-neutral-500">
              Proudly Lagos-based • NCC-licensed
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white tracking-tight">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-3 text-neutral-400">
              {[
                { href: "/", label: "Home" },
                { href: "/coverage", label: "Coverage Checker" },
                { href: "/plans", label: "Plans & Pricing" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white tracking-tight">
              Support
            </h4>
            <div className="flex flex-col space-y-4 text-neutral-400">
              <a
                href="https://wa.me/234XXXXXXXXXX"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5 text-green-500" />
                WhatsApp Support
              </a>

              <a
                href="tel:+234XXXXXXXXXX"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
                +234 XXX XXX XXXX
              </a>

              <a
                href="mailto:support@wifispace.com"
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <Mail className="h-5 w-5" />
                support@wifispace.com
              </a>

              <Link
                href="/support"
                className="hover:text-primary transition-colors duration-200"
              >
                Help Center / FAQ
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white tracking-tight">
              Connect & Legal
            </h4>

            <div className="flex items-center gap-5">
              <a
                href="https://twitter.com/WifiSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>

              <a
                href="https://instagram.com/WifiSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>

              <a
                href="https://facebook.com/WifiSpaceinternet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>

            <nav className="flex flex-col space-y-2 text-sm text-neutral-500">
              <Link
                href="/privacy"
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
            <p>© {currentYear} WifiSpace Internet. All rights reserved.</p>

            <p className="text-center md:text-right">
              Reliable connectivity for Lagos — because every connection
              matters.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
