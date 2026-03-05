"use client";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import testimonials from "@/app/data/testimonials.json";
import { WHATSAPP_HOTLINE } from "@/constants";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      dragFree: false,
      slidesToScroll: 1,
      duration: 40,
      breakpoints: {
        "(min-width: 640px)": { slidesToScroll: 1 },
        "(min-width: 768px)": { slidesToScroll: 2 },
        "(min-width: 1024px)": { slidesToScroll: 3 },
      },
    },
    [
      Autoplay({
        delay: 5000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ],
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
              >
                <Card className="h-full border-border/40 shadow-lg hover:shadow-2xl transition-all duration-300 bg-card/95 dark:bg-neutral-900/95 backdrop-blur-sm">
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <div className="flex mb-6">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-neutral-300 dark:text-neutral-700"
                            }`}
                          />
                        ))}
                    </div>

                    <blockquote className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8 grow italic">
                      “{testimonial.quote}”
                    </blockquote>

                    <div className="flex items-center gap-4 mt-auto">
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
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary scale-125"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Join <span className="font-semibold text-primary">hundreds</span> of
            happy WifiSpace users across Lagos
          </p>

          <a
            href={`${WHATSAPP_HOTLINE}?text=Hi%20WifiSpace%2C%20I'd%20like%20to%20share%20my%20experience`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-lg transition-colors hover:underline underline-offset-4"
          >
            Share your experience →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
