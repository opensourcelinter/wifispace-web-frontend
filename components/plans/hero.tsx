import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function PlanHero() {
  return (
    <section className="bg-linear-to-br from-primary/10 to-secondary/5 py-20 md:py-28 text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-dark"
      >
        Choose Your Perfect Unlimited Plan
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10"
      >
        Truly unlimited broadband for Lagos • No surprise throttling • Starting
        from ₦14,999/mo • Free router & installation on select plans
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/coverage">
          <Badge
            variant="secondary"
            className="text-lg px-6 py-3 cursor-pointer hover:bg-primary/20"
          >
            First, check if we cover your area →
          </Badge>
        </Link>
      </motion.div>
    </section>
  );
}
