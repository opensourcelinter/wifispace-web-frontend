"use client";

import plans from "@/app/data/plans.json";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Check, Laptop, Smartphone, Tv, X } from "lucide-react";

interface Props {
  plans: typeof plans;
  billingPeriod: "monthly" | "quarterly" | "annual";
}

const discounts = {
  monthly: 1,
  quarterly: 0.9,
  annual: 0.8,
};

export default function PricingTable(props: Props) {
  const { plans, billingPeriod } = props;

  const getPrice = (monthly: number) =>
    Math.round(monthly * discounts[billingPeriod]);

  const tableRows = [
    { label: "Download Speed", key: "downloadSpeed" },
    { label: "Upload Speed", key: "uploadSpeed" },
    { label: "Data Policy", key: "dataPolicy" },
    {
      label: `Price per Month (${billingPeriod.charAt(0).toUpperCase() + billingPeriod.slice(1)})`,
      render: (plan: any) => (
        <span className="text-lg font-bold">
          ₦{getPrice(plan.monthlyPrice).toLocaleString()}
        </span>
      ),
    },
    { label: "Router Included", key: "router" },
    { label: "Installation Cost", key: "installation" },
    { label: "Support Level", key: "support" },
    {
      label: "Recommended Devices",
      render: (plan: any) => (
        <div className="flex items-center justify-center gap-1.5">
          {plan.name === "Pro" ? (
            <>
              <Smartphone size={18} /> <Laptop size={18} /> <Tv size={18} />{" "}
              <span className="font-medium">9+</span>
            </>
          ) : plan.name === "Standard" ? (
            <>
              <Smartphone size={18} /> <Laptop size={18} />{" "}
              <span className="font-medium">4-8</span>
            </>
          ) : (
            <span className="font-medium">1-3</span>
          )}
        </div>
      ),
    },
    {
      label: "Static IP Option",
      render: (plan: any) =>
        plan.staticIP?.toLowerCase().includes("no") ? (
          <X className="mx-auto h-5 w-5 text-red-500" strokeWidth={3} />
        ) : (
          <Check className="mx-auto h-5 w-5 text-green-600" strokeWidth={3} />
        ),
    },
    { label: "Add-ons Access", key: "addOns" },
    { label: "Best For", key: "bestFor" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-12 text-gray-900 dark:text-white">
        Compare Our Internet Plans
      </h2>

      <div className="overflow-x-auto rounded-xl border bg-white dark:bg-gray-950 shadow-sm">
        <Table className="relative min-w-225 table-fixed">
          <TableHeader className="bg-gray-50/80 dark:bg-gray-900/60 backdrop-blur-sm sticky top-0 z-10">
            <TableRow className="border-b hover:bg-transparent">
              <TableHead
                className={cn(
                  "sticky left-0 z-30 min-w-55 max-w-65 bg-background/95 backdrop-blur-md",
                  "font-semibold text-foreground border-r shadow-[2px_0_8px_-4px_rgba(0,0,0,0.08)] dark:shadow-[2px_0_8px_-4px_rgba(0,0,0,0.4)]",
                )}
              >
                Feature
              </TableHead>

              {plans.map((plan) => (
                <TableHead
                  key={plan.name}
                  className={cn(
                    "text-center font-semibold text-base md:text-lg transition-all",
                    plan.popular
                      ? "bg-linear-to-b from-indigo-50/80 to-indigo-50/40 dark:from-indigo-950/40 dark:to-indigo-950/20 text-indigo-700 dark:text-indigo-300 relative"
                      : "text-muted-foreground",
                  )}
                >
                  <div className="flex flex-col items-center gap-1">
                    {plan.name}
                    {plan.popular && (
                      <Badge
                        variant="outline"
                        className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 border-indigo-300 dark:border-indigo-700 text-xs px-2.5 py-0.5"
                      >
                        Most Popular
                      </Badge>
                    )}
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {tableRows.map((row, rowIndex) => (
              <TableRow
                key={row.label}
                className={cn(
                  "border-b last:border-none transition-colors",
                  rowIndex % 2 === 0
                    ? "bg-background"
                    : "bg-muted/30 dark:bg-muted/20",
                  "hover:bg-muted/60 dark:hover:bg-muted/40",
                )}
              >
                <TableCell
                  className={cn(
                    "sticky left-0 z-10 min-w-55 max-w-65 bg-inherit font-medium text-foreground",
                    "border-r shadow-[2px_0_6px_-3px_rgba(0,0,0,0.06)] dark:shadow-[2px_0_6px_-3px_rgba(255,255,255,0.05)]",
                    "whitespace-nowrap",
                  )}
                >
                  {row.label}
                </TableCell>

                {plans.map((plan) => (
                  <TableCell
                    key={plan.name}
                    className={cn(
                      "text-center py-5 text-base",
                      plan.popular && "bg-indigo-50/20 dark:bg-indigo-950/15",
                    )}
                  >
                    {row.render
                      ? row.render(plan)
                      : row.key
                        ? (plan[row.key as keyof typeof plan] ?? "—")
                        : "—"}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
        Prices are shown for the selected billing period • All plans include
        24/7 Lagos-based support • No surprise throttling on normal usage
      </p>
    </div>
  );
}
