"use client";

import CTA from "./cta";
import ServiceFeatures from "./features";
import GetConnected from "./get-connected";
import ServiceHero from "./hero";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-light">
      <ServiceHero />

      <section className="py-16 md:py-24 px-6">
        <ServiceFeatures />
      </section>

      <section className="py-16 md:py-24 bg-white">
        <GetConnected />
      </section>

      <CTA />
    </main>
  );
}
