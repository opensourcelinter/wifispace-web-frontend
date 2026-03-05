"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import stats from "@/app/data/stats.json";
import milestones from "@/app/data/milestones.json";

export default function MilestonesStats() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-slate-50/70 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white tracking-tight"
        >
          Our Milestones & Impact
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border border-slate-200 dark:border-slate-800 hover:border-primary/50 hover:shadow-md transition-all duration-300 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
                <CardContent className="pt-8 pb-10 px-6 text-center flex flex-col items-center">
                  <div className="text-5xl md:text-6xl font-extrabold text-primary mb-4 tracking-tight">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 hidden md:block -translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={cn(
                    "flex flex-col md:flex-row items-center md:items-start gap-6 relative",
                    isEven
                      ? "md:justify-end md:pr-8 lg:pr-12"
                      : "md:justify-start md:pl-8 lg:pl-12",
                  )}
                >
                  <div
                    className={cn(
                      "w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-white flex items-center justify-center text-2xl md:text-3xl font-bold shrink-0 z-10 shadow-lg ring-8 ring-white dark:ring-gray-950",
                      "md:absolute md:top-1/2 md:-translate-y-1/2",
                      isEven ? "md:right-1/2 md:mr-3" : "md:left-1/2 md:ml-3",
                    )}
                  >
                    {milestone.year}
                  </div>

                  <Card
                    className={cn(
                      "w-full md:w-5/12 lg:w-4/12 shadow-sm border-slate-200 dark:border-slate-800",
                      isEven
                        ? "md:mr-auto md:text-right"
                        : "md:ml-auto md:text-left",
                    )}
                  >
                    <CardContent className="p-6 md:p-7">
                      <p className="text-base md:text-lg font-medium leading-relaxed text-gray-800 dark:text-gray-200">
                        {milestone.event}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
