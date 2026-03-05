"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";

import testimonials from "@/app/data/testimonials.json";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.4,
      duration: 0.65,
      ease: "easeOut",
    },
  }),
};

export default function Testimonials() {
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
            What Lagos Customers Are Saying
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from real people enjoying fast, stable internet — even
            during Lagos peak hours and power challenges.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <Card className="h-full border-border/50 shadow-md hover:shadow-xl transition-all duration-300 bg-card/90 dark:bg-neutral-900/90 backdrop-blur-sm">
                <CardContent className="p-6 sm:p-7 flex flex-col h-full">
                  <div className="flex mb-5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {Array.from({ length: 5 - testimonial.rating }).map(
                      (_, i) => (
                        <Star
                          key={`empty-${i}`}
                          className="h-5 w-5 text-neutral-300 dark:text-neutral-600"
                        />
                      ),
                    )}
                  </div>

                  <blockquote className="text-base sm:text-lg leading-relaxed text-muted-foreground mb-6 grow italic">
                    “{testimonial.quote}”
                  </blockquote>

                  <div className="flex items-center gap-3 mt-auto">
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Join <span className="font-semibold text-primary">hundreds</span> of
            happy WifiSpace users across Lagos
          </p>

          {/* Modify this code for WhatsApp functionality */}
          <a
            href="https://wa.me/234XXXXXXXXXX?text=Hi%20WifiSpace%2C%20I'd%20like%20to%20share%20my%20experience"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg transition-colors"
          >
            Share your experience →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
