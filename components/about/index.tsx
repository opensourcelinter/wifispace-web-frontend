"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "../footer";
import MilestonesStats from "./milestone";

export default function AboutPage() {
  const values = [
    {
      title: "Reliability First",
      desc: "We prioritize consistent speeds even during peak hours and power challenges.",
    },
    {
      title: "Transparency",
      desc: "No hidden fees, no sudden price hikes — clear pricing from day one.",
    },
    {
      title: "Local Support",
      desc: "Real people in Lagos — WhatsApp, calls, fast responses.",
    },
    {
      title: "Affordable for All",
      desc: "Plans designed for Lagos budgets without compromising quality.",
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-light">
        <section className="bg-linear-to-br from-primary/10 to-secondary/5 py-20 md:py-32 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-dark"
          >
            About WifiSpace Internet
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10"
          >
            A Lagos-born ISP committed to fast, stable, and honest internet for
            homes and businesses.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Button asChild size="lg" className="rounded-full px-10">
              <Link href="/coverage">Check If We're in Your Area</Link>
            </Button>
          </motion.div>
        </section>

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
              tired of unreliable connections, endless excuses, and providers
              that disappeared after signup. We set out to build an ISP that
              actually works for Lagosians — fast speeds when you need them,
              transparent pricing, and real local support that understands power
              issues and peak-hour traffic. Today, we're proud to serve
              communities in Ikeja, Lekki, Yaba, Gbagada, and growing.
            </motion.p>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-center mb-12 text-dark"
            >
              Our Mission & Values
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
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

        <section className="py-20 bg-primary/10 text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Join the WifiSpace Family
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-10 max-w-3xl mx-auto"
          >
            Experience internet that actually works for Lagos. We're here for
            you.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="rounded-full px-10">
              <Link href="/coverage">Check Coverage</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-10 border-primary text-primary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
