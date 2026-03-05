import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
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
        Experience internet that actually works for Lagos. We're here for you.
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
  );
}
