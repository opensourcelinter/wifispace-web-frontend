import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="bg-linear-to-br from-primary/10 to-secondary/5 py-20 md:py-32 text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold mb-6 text-dark"
      >
        Get in Touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10"
      >
        We're a Lagos team — reach us fast on WhatsApp, call, or fill the form
        below. We're here to help.
      </motion.p>
    </section>
  );
}
