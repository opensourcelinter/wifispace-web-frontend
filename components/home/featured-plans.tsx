"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

import plans from "@/app/data/plans.json";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type BillingPeriod = "monthly" | "annual";

interface Props {
  plans: typeof plans;
}

export default function FeaturedPlans({ plans }: Props) {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  return (
    <section className="py-20 md:py-28 bg-linear-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      <div className="mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            Simple, Transparent Internet Plans
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Unlimited data • No speed throttling • Free router & installation on
            most plans • Local Lagos support
          </p>
        </motion.div>

        <div className="flex justify-center mb-12 md:mb-16">
          <ToggleGroup
            type="single"
            value={billing}
            onValueChange={(value) =>
              value && setBilling(value as BillingPeriod)
            }
            className="inline-flex items-center rounded-full border bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm px-1.5 py-1.5 shadow-sm"
          >
            <ToggleGroupItem
              value="monthly"
              aria-label="Switch to monthly billing"
              className="rounded-full cursor-pointer px-7 py-2.5 text-sm font-medium transition-all data-[state=on]:bg-neutral-100 data-[state=on]:shadow-inner data-[state=on]:dark:bg-neutral-800 data-[state=on]:dark:text-white"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="annual"
              aria-label="Switch to annual billing"
              className="rounded-full cursor-pointer px-7 py-2.5 text-sm font-medium transition-all data-[state=on]:bg-neutral-100 data-[state=on]:shadow-inner data-[state=on]:dark:bg-neutral-800 data-[state=on]:dark:text-white flex items-center gap-2"
            >
              Annually
              <Badge
                variant="outline"
                className="text-xs font-normal bg-green-50 text-green-700 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800/60"
              >
                Save 15%
              </Badge>
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="grid md:grid-cols-3 gap-7 lg:gap-9">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            const displayPrice =
              billing === "annual"
                ? Math.round(plan.monthlyPrice * 0.85)
                : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 + 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.35 } }}
                className={isPopular ? "relative z-10" : ""}
              >
                <Card
                  className={`
                    relative h-full overflow-hidden border shadow-xl transition-all duration-300
                    ${
                      isPopular
                        ? "border-primary/30 bg-linear-to-b from-primary/5 via-background to-background dark:from-primary/10 dark:via-neutral-950 dark:to-neutral-950 scale-[1.02] md:scale-[1.04] lg:scale-[1.06]"
                        : "border-border/60 bg-card/95 backdrop-blur-sm dark:bg-neutral-900/95"
                    }
                  `}
                >
                  {isPopular && (
                    <div className="absolute inset-x-0 top-2 flex justify-center pointer-events-none">
                      <Badge className="relative -mt-3.5 bg-primary text-primary-foreground px-5 py-1.5 text-sm font-semibold shadow-lg">
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader
                    className={`text-center ${isPopular ? "pt-12 pb-7" : "pt-10 pb-6"}`}
                  >
                    <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {plan.name}
                    </CardTitle>

                    <div className="mt-5 flex items-baseline justify-center gap-1.5">
                      <span className="text-5xl sm:text-6xl font-extrabold text-primary tracking-tight">
                        ₦{displayPrice.toLocaleString()}
                      </span>
                      <span className="text-xl sm:text-2xl font-medium text-muted-foreground">
                        /mo
                      </span>
                    </div>

                    <div className="mt-2 text-sm text-muted-foreground">
                      {billing === "annual" ? (
                        <>
                          ₦{plan.monthlyPrice.toLocaleString()} billed once per
                          year - save 15%
                        </>
                      ) : (
                        <>
                          ₦{plan.monthlyPrice.toLocaleString()} per month - no
                          long-term lock-in
                        </>
                      )}
                    </div>

                    <CardDescription className="mt-5 text-base font-medium text-neutral-700 dark:text-neutral-300">
                      {plan.speed}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pb-10 px-8">
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start text-muted-foreground"
                        >
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 shrink-0" />
                          <span className="text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="px-8 pb-10 pt-2">
                    <Button
                      variant={isPopular ? "default" : "outline"}
                      size="lg"
                      className={`w-full text-base sm:text-lg py-6 font-semibold shadow-sm ${
                        isPopular ? "hover:shadow-lg" : "hover:shadow"
                      } transition-all`}
                      asChild
                    >
                      <a href="/plans">Choose {plan.name}</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-20"
        >
          <Button
            variant="link"
            size="lg"
            className="text-sm sm:text-xl"
            asChild
          >
            <a href="/plans">View full plan comparison & coverage map →</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
