"use client";

import plans from "@/app/data/plans.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { WHATSAPP_HOTLINE } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import AddOnsSection from "./addon";
import ComparisonTable from "./comparison-table";
import PlanCard from "./plan-card";

export default function PlansPage() {
  const [billingPeriod, setBillingPeriod] = useState<
    "monthly" | "quarterly" | "annual"
  >("monthly");

  return (
    <main className="min-h-screen bg-light">
      <section className="bg-linear-to-br from-primary/10 to-secondary/5 py-20 md:py-28 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-dark"
        >
          Choose Your Perfect Unlimited Plan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10"
        >
          Truly unlimited broadband for Lagos • No surprise throttling •
          Starting from ₦14,999/mo • Free router & installation on select plans
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/coverage">
            <Badge
              variant="secondary"
              className="text-lg px-6 py-3 cursor-pointer hover:bg-primary/20"
            >
              First, check if we cover your area →
            </Badge>
          </Link>
        </motion.div>
      </section>

      <section className="py-10 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6">
          <Label htmlFor="billing-toggle" className="text-lg font-medium">
            Billing Period
          </Label>

          <div className="flex items-center space-x-6">
            <span
              className={
                billingPeriod === "monthly" ? "font-bold text-primary" : ""
              }
            >
              Monthly
            </span>

            <div className="flex items-center space-x-2">
              <Switch
                id="billing-toggle"
                checked={billingPeriod !== "monthly"}
                onCheckedChange={(checked) =>
                  setBillingPeriod(
                    checked
                      ? billingPeriod === "quarterly"
                        ? "annual"
                        : "quarterly"
                      : "monthly",
                  )
                }
              />
              <Label htmlFor="billing-toggle" className="sr-only">
                Toggle billing
              </Label>
            </div>

            <span
              className={
                billingPeriod === "quarterly" ? "font-bold text-primary" : ""
              }
            >
              Quarterly (save 10%)
            </span>
            <span
              className={
                billingPeriod === "annual" ? "font-bold text-primary" : ""
              }
            >
              Annual (save 20%)
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                billingPeriod={billingPeriod}
              />
            ))}
          </div>
        </div>
      </section>

      <ComparisonTable plans={plans} billingPeriod={billingPeriod} />

      <AddOnsSection />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-dark">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="unlimited">
              <AccordionTrigger>
                Are the plans truly unlimited?
              </AccordionTrigger>
              <AccordionContent>
                Yes — no hard data caps or throttling on normal usage. We apply
                a fair usage policy only for extreme/abusive consumption to keep
                the network fair for everyone.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="installation">
              <AccordionTrigger>
                What is the installation process and cost?
              </AccordionTrigger>
              <AccordionContent>
                Survey + setup in 48-72 hours for covered areas. Free on
                Standard/Pro plans; ₦20,000 on Starter (waived on annual
                billing).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="switch">
              <AccordionTrigger>
                Can I switch plans or billing anytime?
              </AccordionTrigger>
              <AccordionContent>
                Yes — upgrades are immediate; downgrades at next cycle. No
                lock-in contracts.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-primary/10 to-secondary/5 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Get Connected?
        </h2>
        <p className="text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Coverage check is quick — most customers are online within days.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" asChild className="text-lg rounded-full px-10">
            <Link href="/coverage">Check Coverage Now</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg rounded-full px-10 border-primary text-primary"
          >
            <a
              href={`${WHATSAPP_HOTLINE}?text=Hi%20WifiSpace%2C%20help%20me%20choose%20a%20plan`}
            >
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
