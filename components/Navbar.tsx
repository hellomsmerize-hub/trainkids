"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Programmes", href: "/programmes" },
    { name: "Therapy Tips", href: "/tips" },
    { name: "Showcase", href: "/showcase" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 ${
        isScrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 transition-all duration-500 ${
          isScrolled ? "clay-card py-2 bg-white/95 shadow-2xl" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative overflow-hidden">
            <Image
              src="/logo.png"
              alt="TrainKids Logo"
              width={180}
              height={60}
              className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-bold text-ink-light hover:text-brand-green transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-brand-green rounded-full transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link
            href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more."
            target="_blank"
            className="clay-button bg-brand-green text-white px-7 py-3 flex items-center gap-2 hover:scale-[1.05] active:scale-95 shadow-lg shadow-brand-green/20"
          >
            <MessageCircle size={20} className="fill-white/20" />
            <span className="font-extrabold">WhatsApp</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-lg text-ink"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 400 }}
            className="md:hidden absolute top-24 left-4 right-4 clay-card p-8 flex flex-col gap-6 z-50 bg-white shadow-2xl border-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <Sparkles size={24} />
              </div>
              <span className="font-black text-ink">Menu</span>
            </div>
            
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-black text-ink py-2 border-b border-surface flex items-center justify-between group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowRight size={20} className="text-brand-green opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            ))}
            <Link
              href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more."
              target="_blank"
              className="clay-button bg-brand-green text-white px-6 py-5 flex items-center justify-center gap-3 mt-6 shadow-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle size={24} />
              <span className="font-extrabold text-xl">Message Us</span>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
