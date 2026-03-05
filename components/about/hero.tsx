import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/button";

export default function AboutHero() {
  return (
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
  );
}
