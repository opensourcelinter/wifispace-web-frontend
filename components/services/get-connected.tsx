import steps from "@/app/data/services.json";
import { motion } from "framer-motion";

export default function GetConnected() {
  return (
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

        {steps.map((step, index) => (
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
  );
}
