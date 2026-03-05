"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-linear-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <motion.div
          className="absolute -top-20 -left-20 w-125 h-125 bg-primary/10 rounded-full blur-3xl dark:bg-primary/15"
          animate={{ scale: [1, 1.12, 1], x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-125 h-125 bg-secondary/10 rounded-full blur-3xl dark:bg-secondary/15"
          animate={{ scale: [1, 1.15, 1], x: [0, -70, 0], y: [0, 50, 0] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-5 md:space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
            Ready for Internet That Actually Works?
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Fast, reliable broadband built for Lagos homes and businesses.
            <br className="hidden sm:block" />
            Free installation on select plans • Connected in as little as 48
            hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-5 sm:gap-6 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="
              h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-xl font-semibold
              shadow-lg hover:shadow-xl transition-all duration-300
              hover:scale-[1.04] active:scale-[0.98]
            "
          >
            <Link href="/coverage">
              Check Coverage & Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="
              h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-xl font-semibold
              border-2 shadow-sm hover:shadow-md transition-all duration-300
              hover:scale-[1.04] active:scale-[0.98]
            "
          >
            <Link href="/plans">View All Plans</Link>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-14 text-base sm:text-lg text-muted-foreground"
        >
          Join <span className="font-semibold text-primary">hundreds</span> of
          happy Lagos customers already enjoying stable, fast internet.
        </motion.p>
      </div>
    </section>
  );
}
