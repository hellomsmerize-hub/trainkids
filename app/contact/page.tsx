"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { useEffect, useRef } from "react";

// Types for Leaflet
declare global {
  interface Window {
    L: any;
  }
}

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-orange/5 skew-y-6 -z-10 origin-top-left" />
        <div className="max-w-7xl mx-auto text-center space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full font-bold text-sm border border-brand-orange/20"
          >
            <Send size={16} />
            <span>Connect With Us</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-ink leading-[0.95] text-balance text-center">
            Contact & <br />
            <span className="text-brand-orange">Visit Us</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ink-light max-w-2xl mx-auto font-medium leading-relaxed text-balance text-center">
            We're here to answer your questions and welcome you to our nurturing centres across Singapore.
          </p>
        </div>
      </section>

      {/* Contact Grid - Asymmetric Rhythm */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-black text-ink leading-tight">
                Get in <span className="text-brand-green">Touch</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    href: "https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more.",
                    label: "WhatsApp (Primary)",
                    val: "9386 7654",
                    color: "brand-green",
                    icon: MessageCircle,
                  },
                  {
                    href: "tel:69088966",
                    label: "Office Line",
                    val: "6908 8966",
                    color: "brand-blue",
                    icon: Phone,
                  },
                  {
                    href: "mailto:admin@trainkids.com.sg",
                    label: "Email Support",
                    val: "admin@trainkids.com.sg",
                    color: "brand-orange",
                    icon: Mail,
                  }
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    target="_blank"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 p-8 clay-card bg-surface border-transparent hover:border-surface-dark transition-all group"
                  >
                    <div className={`w-16 h-16 rounded-2xl ${
                      item.color === 'brand-green' ? 'bg-brand-green' : 
                      item.color === 'brand-blue' ? 'bg-brand-blue' : 'bg-brand-orange'
                    } text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                      <item.icon size={32} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-ink/30 uppercase tracking-[0.2em] mb-1">
                        {item.label}
                      </h4>
                      <p className={`text-2xl font-black ${
                        item.color === 'brand-green' ? 'text-brand-green' : 
                        item.color === 'brand-blue' ? 'text-brand-blue' : 'text-brand-orange'
                      }`}>
                        {item.val}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 pt-8"
            >
              <h2 className="text-3xl font-black text-ink">Operating Hours</h2>
              <div className="clay-card p-10 bg-surface space-y-6">
                <div className="flex justify-between items-center pb-6 border-b border-surface-dark">
                  <span className="font-bold text-ink-light text-lg">Monday – Friday</span>
                  <span className="font-black text-ink text-lg">
                    7:30 AM – 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center text-ink/20 italic">
                  <span className="font-bold">Saturday & Sunday</span>
                  <span className="font-black uppercase">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Centres */}
          <div className="lg:col-span-7 space-y-12">
            <h2 className="text-4xl md:text-5xl font-black text-ink leading-tight">Our <span className="text-brand-red">Centres</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  name: "Woodlands Centre",
                  addr: "11 Woodlands Close, #01-10, Singapore 737853",
                  color: "brand-red",
                },
                {
                  name: "Tampines Centre",
                  addr: "Blk 349 Tampines Street 33, #01-434, Singapore 520349",
                  color: "brand-green",
                }
              ].map((centre, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="clay-card p-10 space-y-8 bg-white border-surface hover:shadow-2xl transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl ${centre.color === 'brand-red' ? 'bg-brand-red' : 'bg-brand-green'} flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform`}>
                      <MapPin size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-ink leading-tight text-left">
                      {centre.name}
                    </h3>
                  </div>
                  <p className="text-xl text-ink-light font-medium leading-relaxed h-24 text-center">
                    {centre.addr}
                  </p>
                  <div className="flex items-center gap-4 pt-4">
                    <div className="px-4 py-2 bg-surface rounded-full text-xs font-black text-ink/40 flex items-center gap-2 uppercase tracking-widest">
                      <Clock size={14} />
                      Full Day Sessions
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="clay-card bg-brand-yellow/5 p-12 border-brand-yellow/20 space-y-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl" />
              <h4 className="text-2xl font-black text-ink flex items-center gap-3">
                <Sparkles className="text-brand-orange" />
                What to expect next
              </h4>
              <ul className="space-y-6">
                {[
                  "No-pressure WhatsApp discovery chat",
                  "Personalised understanding of your child's needs",
                  "Guided centre visit with our team",
                  "Detailed enrolment & subsidy assistance",
                ].map((step, i) => (
                  <li key={i} className="flex gap-5 items-start group">
                    <div className="w-8 h-8 rounded-xl bg-brand-yellow flex items-center justify-center text-ink font-black text-sm shrink-0 mt-0.5 shadow-md group-hover:rotate-12 transition-transform">
                      {i + 1}
                    </div>
                    <p className="text-lg font-bold text-ink-light">{step}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section - High Performance UI */}
      <section className="py-32 px-4 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-7xl font-black text-ink leading-tight">Visit Our <span className="text-brand-blue">Centres</span></h2>
            <p className="text-xl text-ink-light font-medium max-w-xl mx-auto text-center">Find the location nearest to you and start your journey.</p>
          </div>

          <div className="relative h-[600px] w-full clay-card bg-white overflow-hidden border-none group shadow-2xl">
            {/* Google My Maps Integration */}
            <iframe
              src="https://www.google.com/maps/d/embed?mid=14Nhe6yI3uk1b3CaIA8Kx5DcMllEDpuA&ehbc=2E312F"
              width="100%"
              height="100%"
              style={{ border: 0, marginTop: '-60px' }}
              className="grayscale-[20%] contrast-[1.1] opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
            
            <div className="absolute bottom-10 left-10 right-10 text-center pointer-events-none">
              <div className="clay-card bg-white/80 backdrop-blur-md inline-block px-8 py-3 shadow-xl border-white border">
                <p className="text-ink-light font-black uppercase tracking-[0.3em] text-xs">
                  Premium Educational Hub • Singapore
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
