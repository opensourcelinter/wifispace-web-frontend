"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const addOns = [
  {
    name: "Static IP",
    price: "₦5,000 / month",
    description:
      "Dedicated public IP for remote access, servers, CCTV, or business VPN.",
    popular: true,
  },
  {
    name: "Mesh WiFi Extender",
    price: "₦18,000 – ₦35,000 one-time",
    description:
      "Eliminate dead zones in large homes, multi-floor apartments, or offices.",
  },
  {
    name: "Speed Boost (Temporary)",
    price: "₦8,000 – ₦15,000 for 7–30 days",
    description:
      "Instant upgrade during peak months, events, or big downloads.",
  },
  {
    name: "Extra Router / Repeater",
    price: "₦12,000 – ₦25,000 one-time",
    description: "Extend coverage to every corner of your space.",
  },
];

export default function AddOnsSection() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-light">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-6 text-dark"
        >
          Customize with Powerful Add-ons
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto"
        >
          Tailor your connection exactly to your lifestyle or business needs.
          Add any of these at signup or later.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 hover:border-primary/50 transition-all flex flex-col"
            >
              {addon.popular && (
                <Badge className="self-start mb-3 bg-primary text-white">
                  Recommended
                </Badge>
              )}

              <h3 className="text-xl font-bold mb-3">{addon.name}</h3>
              <p className="text-lg font-semibold text-primary mb-4">
                {addon.price}
              </p>
              <p className="text-gray-600 mb-6 grow">{addon.description}</p>

              <Button
                variant="outline"
                className="mt-auto border-primary text-primary hover:bg-primary/10 rounded-full cursor-pointer"
              >
                Add to Plan
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need something custom? We offer VoIP lines, CCTV integration, and
            more.
          </p>
          <Button asChild size="lg" className="rounded-full px-10">
            <a href="https://wa.me/234XXXXXXXXXX?text=Hi%20WifiSpace%2C%20I%27m%20interested%20in%20add-ons%20for%20my%20plan">
              Chat on WhatsApp for Custom Options
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
