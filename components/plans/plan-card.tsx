"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

type Plan = {
  name: string;
  monthlyPrice: number;
  speed: string;
  bestFor: string;
  features: string[];
  popular?: boolean;
  installation?: string;
};

interface PlanCardProps {
  plan: Plan;
  billingPeriod: "monthly" | "quarterly" | "annual";
}

const discounts = {
  monthly: 1,
  quarterly: 0.9,
  annual: 0.8,
};

export default function PlanCard({ plan, billingPeriod }: PlanCardProps) {
  const price = Math.round(plan.monthlyPrice * discounts[billingPeriod]);
  const savings =
    billingPeriod === "annual"
      ? Math.round(plan.monthlyPrice * 12 * 0.2)
      : billingPeriod === "quarterly"
        ? Math.round(plan.monthlyPrice * 3 * 0.1)
        : 0;

  return (
    <motion.div
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className={`relative rounded-2xl overflow-hidden shadow-xl border p-8 flex flex-col ${
        plan.popular
          ? "border-primary scale-105 bg-linear-to-b from-primary/5 to-transparent"
          : "border-gray-200 bg-white"
      }`}
    >
      {plan.popular && (
        <Badge className="absolute top-4 right-4 bg-primary text-white">
          Most Popular
        </Badge>
      )}

      <h3 className="text-2xl md:text-3xl font-bold mb-4">{plan.name}</h3>

      <div className="mb-6">
        <p className="text-5xl md:text-6xl font-bold text-primary">
          ₦{price.toLocaleString()}
          <span className="text-2xl font-normal text-gray-600">/mo</span>
        </p>
        {savings > 0 && (
          <p className="text-sm text-green-600 mt-1">
            Save ₦{savings.toLocaleString()} on{" "}
            {billingPeriod === "annual" ? "annual" : "quarterly"} billing
          </p>
        )}
      </div>

      <p className="text-xl font-medium mb-6">{plan.speed}</p>
      <p className="text-gray-600 mb-8 italic">{plan.bestFor}</p>

      <ul className="space-y-4 mb-10 grow">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className="text-green-500 mr-3 text-xl">✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button asChild size="lg" className="mt-auto rounded-full text-lg">
        <Link href="/coverage">Get This Plan</Link>
      </Button>
    </motion.div>
  );
}
