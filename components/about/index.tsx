"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import CTA from "./cta";
import AboutHero from "./hero";
import MilestonesStats from "./milestone";
import AboutMissionAndVision from "./mission";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-light">
      <AboutHero />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-10 text-dark"
          >
            Our Story
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto text-center mb-12"
          >
            WifiSpace Internet was born right here in Lagos because we were
            tired of unreliable connections, endless excuses, and providers that
            disappeared after signup. We set out to build an ISP that actually
            works for Lagosians — fast speeds when you need them, transparent
            pricing, and real local support that understands power issues and
            peak-hour traffic. Today, we're proud to serve communities in Ikeja,
            Yaba, Ogba, Magbon, Alakuko and growing.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <AboutMissionAndVision />
      </section>

      <MilestonesStats />

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-10 text-dark"
          >
            What Sets Us Apart
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Truly Reliable in Lagos</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Built for peak hours and power realities — consistent
                  performance when it matters most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
