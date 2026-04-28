"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more."
      target="_blank"
      className="fixed bottom-8 left-8 z-50 clay-button bg-brand-green text-white w-16 h-16 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all rounded-2xl"
      aria-label="WhatsApp Us"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-black px-2 py-1 rounded-full shadow-lg">
        NEW
      </span>
    </Link>
  );
}
