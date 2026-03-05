"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DesktopMenu from "./desktop-menu";
import MobileMenu from "./mobile-menu";
import WhatsAppFab from "./whatsapp-fab";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/coverage", label: "Coverage" },
  { href: "/plans", label: "Plans" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
              W
            </div>
            <span className="text-2xl font-bold text-primary hidden sm:block">
              Wifibase
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <DesktopMenu links={navLinks} pathname={pathname} />
            <Button asChild size="lg" className="rounded-full px-8">
              <Link href="/coverage">Check Coverage</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12 w-12">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80%] sm:w-100">
                <SheetHeader>
                  <SheetTitle>WifiSpace</SheetTitle>
                </SheetHeader>
                <MobileMenu links={navLinks} pathname={pathname} />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>

      <WhatsAppFab />
    </>
  );
}
