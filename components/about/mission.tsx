import values from "@/app/data/values.json";
import { motion } from "framer-motion";

export default function AboutMissionAndVision() {
  return (
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
  );
}
