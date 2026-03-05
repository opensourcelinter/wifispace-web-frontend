"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2, Home, Network, Wifi } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Home,
    title: "Residential Internet",
    description:
      "Unlimited high-speed plans designed for Lagos homes. Perfect for streaming, remote work, online learning, and family use.",
    features: [
      "25-100 Mbps+ speeds",
      "Free router on select plans",
      "Installation in 48-72 hours",
      "24/7 local support",
    ],
    cta: "Check Residential Coverage",
  },
  {
    icon: Building2,
    title: "Business / SME Broadband",
    description:
      "Reliable, high-upload connections for offices, shops, clinics, and co-working spaces with priority support.",
    features: [
      "Static IP available",
      "Business-grade reliability",
      "VoIP & CCTV ready",
      "Dedicated account manager",
    ],
    cta: "Request Business Quote",
  },
  {
    icon: Wifi,
    title: "WiFi Installation & Optimization",
    description:
      "Professional setup and troubleshooting for homes and small offices — eliminate dead zones and boost performance.",
    features: [
      "Site survey & custom design",
      "Mesh systems for large spaces",
      "One-time or maintenance packages",
      "Interference & congestion fixes",
    ],
    cta: "Book Site Survey",
  },
  {
    icon: Network,
    title: "Managed WiFi for Estates & Apartments",
    description:
      "Scalable shared connectivity solutions for gated communities, apartment blocks, and small hotels.",
    features: [
      "Centralized management",
      "Guest WiFi portals",
      "Bandwidth monitoring",
      "Billing & user management",
    ],
    cta: "Get Estate Proposal",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-light">
      {/* Hero */}
      <section className="bg-linear-to-br from-primary/10 to-secondary/5 py-20 md:py-32 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-dark"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10"
        >
          From home broadband to enterprise connectivity and custom network
          setups — we deliver reliable solutions tailored for Lagos.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button asChild size="lg" className="rounded-full px-10">
            <Link href="/coverage">Check If We Serve Your Area</Link>
          </Button>
        </motion.div>
      </section>

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="h-full flex flex-col border border-gray-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-xl">
                  <CardHeader className="text-center pt-8">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full">
                      <service.icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col grow">
                    <CardDescription className="text-base text-gray-700 mb-6">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-3 mb-8 grow">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-500 mr-3 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="mt-auto rounded-full border-primary text-primary hover:bg-primary/10"
                    >
                      {service.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center mb-16 text-dark"
          >
            How We Get You Connected
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 hidden md:block" />

            {[
              {
                step: 1,
                title: "Enquiry",
                desc: "Tell us your location and needs",
              },
              {
                step: 2,
                title: "Coverage Check",
                desc: "We verify availability instantly",
              },
              {
                step: 3,
                title: "Site Survey & Quote",
                desc: "Free or low-cost survey if needed",
              },
              {
                step: 4,
                title: "Installation & Activation",
                desc: "Professional setup in 48-72 hours",
              },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative z-10 bg-white p-8 rounded-2xl shadow-md border border-gray-200 text-center"
              >
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Need Internet That Works for You?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl mb-10 max-w-3xl mx-auto"
        >
          Whether it's home, office, or estate-wide — let's discuss the best
          solution for your needs.
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
            <a href="https://wa.me/234XXXXXXXXXX?text=Hi%20Wifibase%2C%20tell%20me%20about%20your%20services">
              Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
