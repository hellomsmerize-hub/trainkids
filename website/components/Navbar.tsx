"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        isScrolled ? "pt-2" : "pt-6"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 py-3 transition-all duration-300 ${
          isScrolled ? "clay-card py-2" : "bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="TrainKids Logo"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-semibold text-gray-700 hover:text-brand-green transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more."
            target="_blank"
            className="clay-button bg-brand-green text-white px-6 py-2.5 flex items-center gap-2 hover:brightness-110 active:scale-95"
          >
            <MessageCircle size={20} />
            <span className="font-bold">WhatsApp</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 clay-card p-6 flex flex-col gap-4 z-50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xl font-bold text-gray-700 py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more."
            target="_blank"
            className="clay-button bg-brand-green text-white px-6 py-4 flex items-center justify-center gap-2 mt-4"
          >
            <MessageCircle size={24} />
            <span className="font-bold text-lg">Message Us</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
