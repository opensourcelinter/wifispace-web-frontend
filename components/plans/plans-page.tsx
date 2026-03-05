"use client";

import plans from "@/app/data/plans.json";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import AddOnsSection from "./addon";
import CTAButton from "./cta";
import FrequentRequests from "./frequent-requests";
import PlanHero from "./hero";
import PlanCard from "./plan-card";
import PricingTable from "./pricing-table";

type Billing = "monthly" | "quarterly" | "annual";

export default function PlansPage() {
  const [billingPeriod, setBillingPeriod] = useState<Billing>("monthly");

  return (
    <main className="min-h-screen bg-light">
      <PlanHero />

      <section className="py-10 bg-white sticky top-15 z-10 shadow-sm">
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
                className="cursor-pointer"
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

      <PricingTable plans={plans} billingPeriod={billingPeriod} />

      <AddOnsSection />

      <FrequentRequests />

      <CTAButton />
    </main>
  );
}
