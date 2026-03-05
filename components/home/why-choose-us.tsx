"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";

import whyChooseUs from "@/app/data/why-choose-us.json";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12 + 0.4,
      duration: 0.65,
      ease: "easeOut",
    },
  }),
};

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Why Lagos Chooses WifiSpace
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We get the Lagos reality — power outages, peak-hour congestion,
            providers that vanish after payment. Here's why thousands of
            Lagosians trust us instead.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {whyChooseUs.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              custom={index}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <Card className="h-full border-border/60 shadow-md hover:shadow-xl transition-all duration-300 bg-card/95 dark:bg-neutral-900/95 backdrop-blur-sm">
                <CardHeader className="text-center pb-6 pt-8 md:pt-10">
                  <div className="text-5xl sm:text-6xl mb-5 text-primary/90">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pb-8 px-6 sm:px-8 text-center">
                  <CardDescription className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
