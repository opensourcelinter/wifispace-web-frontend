"use client";

import coveredAreas from "@/app/data/areas/covered-areas.json";
import { Button } from "@/components/ui/button";
import { WHATSAPP_HOTLINE } from "@/constants";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import CoverageFAQS from "./faqs";
import CoverageHero from "./hero";

export type Status = "available" | "pending" | "unavailable";

export default function CoveragePage() {
  return (
    <main className="min-h-screen bg-light">
      <CoverageHero />
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Our Current Coverage in Lagos
          </h2>

          <div className="aspect-4/3 bg-gray-50 rounded-xl overflow-hidden border shadow-inner">
            {/* Map functionality & preview here... */}
          </div>

          <p className="text-center mt-6 text-gray-600">
            Hover or tap areas to see coverage status (green = currently
            available).
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-light">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Currently Covered Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coveredAreas.map((area) => (
              <div
                key={area}
                className="bg-white p-6 rounded-xl shadow-sm border border-green-200"
              >
                <CheckCircle2 className="mx-auto mb-3 text-green-500 h-10 w-10" />
                <p className="font-semibold text-lg">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CoverageFAQS />

      <section className="py-20 bg-primary/10 text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Connected?</h2>
        <p className="text-xl mb-10">
          If available in your area, let's get you online fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button size="lg" asChild className="rounded-full px-10">
            <Link href="/plans">See Plans</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-10 border-primary text-primary"
          >
            <a
              href={`${WHATSAPP_HOTLINE}?text=Hi%20WifiSpace%2C%20coverage%20question`}
            >
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
