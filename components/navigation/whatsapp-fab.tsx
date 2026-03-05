"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/234XXXXXXXXXX?text=Hi%20WifiSpace%2C%20I%20need%20help..."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-6 z-50 w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-700 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-white" />
    </motion.a>
  );
}