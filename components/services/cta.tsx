import { WHATSAPP_HOTLINE } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

export default function CTA() {
  return (
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
          <a
            href={`${WHATSAPP_HOTLINE}?text=Hi%20WifiSpace%2C%20tell%20me%20about%20your%20services`}
          >
            Chat on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
