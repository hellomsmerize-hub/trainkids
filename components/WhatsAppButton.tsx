"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", damping: 15 }}
      className="fixed bottom-8 left-8 z-50"
    >
      <Link
        href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more."
        target="_blank"
        className="clay-button bg-brand-green text-white w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all rounded-2xl group animate-float"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
        <span className="absolute -top-3 -right-3 bg-brand-orange text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-lg border-2 border-white rotate-12">
          HELP
        </span>
      </Link>
    </motion.div>
  );
}
