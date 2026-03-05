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
import { Check, X } from "lucide-react";

interface ComparisonTableProps {
  plans: typeof plans;
  billingPeriod: "monthly" | "quarterly" | "annual";
}

const discounts = {
  monthly: 1,
  quarterly: 0.9,
  annual: 0.8,
};

export default function ComparisonTable({
  plans,
  billingPeriod,
}: ComparisonTableProps) {
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
              <TableHead className="sticky left-0 z-20 bg-gray-50/80 dark:bg-gray-900/60 backdrop-blur-sm w-56 font-semibold text-gray-900 dark:text-gray-100 border-r">
                Feature
              </TableHead>

              {plans.map((plan) => (
                <TableHead
                  key={plan.name}
                  className={`text-center font-bold text-base sm:text-lg transition-colors ${
                    plan.popular
                      ? "bg-indigo-50/70 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300"
                      : "text-gray-700 dark:text-gray-300"
                  }`}
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
                className={`
                  border-b last:border-none
                  hover:bg-gray-50/70 dark:hover:bg-gray-800/40
                  transition-colors
                  ${rowIndex % 2 === 0 ? "bg-white dark:bg-gray-950" : "bg-gray-50/40 dark:bg-gray-900/40"}
                `}
              >
                <TableCell className="sticky left-0 z-10 bg-inherit font-medium text-gray-900 dark:text-gray-100 border-r whitespace-nowrap">
                  {row.label}
                </TableCell>

                {plans.map((plan) => (
                  <TableCell
                    key={plan.name}
                    className={`text-center py-4 ${
                      plan.popular
                        ? "bg-indigo-50/30 dark:bg-indigo-950/20"
                        : ""
                    }`}
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
