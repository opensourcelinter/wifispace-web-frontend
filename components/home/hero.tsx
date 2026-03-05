"use client";

import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

const badgeVariants: Variants = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.55, type: "spring", stiffness: 130, damping: 14 },
  },
};

export default function Hero() {
  return (
    <section
      className="
        relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden
        bg-linear-to-br from-neutral-50 via-neutral-100/70 to-neutral-50
        dark:from-neutral-950 dark:via-neutral-900/70 dark:to-neutral-950
        px-5 sm:px-6 lg:px-8 py-16 md:py-0
      "
    >
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <motion.div
          className="absolute top-16 sm:top-20 left-6 sm:left-10 w-56 sm:w-64 h-56 sm:h-64 bg-primary/5 rounded-full blur-3xl dark:bg-primary/10"
          animate={{ scale: [1, 1.18, 1], x: [0, 35, 0], y: [0, -25, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-12 sm:bottom-10 right-6 sm:right-10 w-80 sm:w-96 h-80 sm:h-96 bg-secondary/5 rounded-full blur-3xl dark:bg-secondary/10"
          animate={{ scale: [1, 1.25, 1], x: [0, -45, 0], y: [0, 35, 0] }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-6xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
            leading-tight md:leading-snug tracking-tight
            text-neutral-900 dark:text-neutral-50
            mb-6 md:mb-8
          "
        >
          Fast, Reliable Internet
          <br className="hidden md:block" />
          That Actually Works in Lagos
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="
            text-lg sm:text-xl md:text-2xl 
            text-neutral-700 dark:text-neutral-300 
            mb-10 md:mb-12 
            max-w-3xl mx-auto leading-relaxed
          "
        >
          Unlimited plans starting from{" "}
          <span className="font-semibold text-primary whitespace-nowrap">
            ₦14,999/month
          </span>{" "}
          • No throttling • Free installation on select plans • 24/7 local
          support
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-10 md:mb-14"
        >
          {[
            "Up to 100Mbps+",
            "Truly Unlimited",
            "99.9% Uptime",
            "Free Router & Setup",
            "Lagos-Based Support",
          ].map((text, i) => (
            <motion.div
              key={text}
              variants={badgeVariants}
              className="
                bg-white/90 dark:bg-neutral-800/90
                backdrop-blur-md px-4 sm:px-5 py-2 
                rounded-full text-sm sm:text-base font-medium
                border border-neutral-200/70 dark:border-neutral-700/60
                shadow-sm text-neutral-800 dark:text-neutral-200
                transition-all duration-300 hover:shadow-md
              "
            >
              {text}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          <Button
            asChild
            size="lg"
            className="
              h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-semibold
              shadow-lg hover:shadow-xl transition-all duration-300
              hover:scale-[1.03] active:scale-[0.98]
            "
          >
            <Link href="/coverage">Check Coverage Now</Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="
              h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg font-semibold
              border-2 shadow-sm hover:shadow-md transition-all duration-300
              hover:scale-[1.03] active:scale-[0.98]
            "
          >
            <Link href="/plans">View All Plans</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
