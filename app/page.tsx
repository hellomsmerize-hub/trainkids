"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle2,
  Heart,
  Users,
  Clock,
  Bus,
  ArrowRight,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 -skew-x-12 -z-10 translate-x-20" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full font-bold text-sm">
              <Star size={16} className="fill-brand-orange" />
              <span>We Teach. We Guide. We Encourage.</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1]">
              Giving Your Child the <br />
              <span className="text-brand-green">Solid Foundation</span> <br />
              They Deserve
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Individualised early intervention & therapy for children aged 2–14
              with developmental needs, right here in Singapore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more%20about%20your%20programmes."
                target="_blank"
                className="clay-button bg-brand-green text-white px-8 py-5 flex items-center justify-center gap-3 hover:brightness-110"
              >
                <MessageCircle size={24} />
                <span className="font-black text-xl">Ask About Enrolment</span>
              </Link>
              <Link
                href="/programmes"
                className="clay-button bg-white text-brand-blue border-2 border-brand-blue/10 px-8 py-5 flex items-center justify-center gap-2 hover:bg-brand-blue/5"
              >
                <span className="font-bold text-xl">Browse Programmes</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="clay-card p-4 rotate-3 scale-105 bg-brand-yellow/20 border-brand-yellow/30 absolute inset-0 -z-10" />
            <div className="clay-card p-3 relative overflow-hidden group">
              <Image
                src="/hero.png"
                alt="Therapist interacting with child"
                width={600}
                height={600}
                className="rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-8 left-8 right-8 clay-card bg-white/90 p-4 flex items-center gap-4">
                <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center text-white font-black text-2xl shadow-lg ring-8 ring-white/50 animate-pulse-slow">
                  300+
                </div>
                <div className="font-bold text-gray-800">
                  Children supported since 2015
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Trust Badges */}
            {[
              {
                text: "ECDA-Approved Provider",
                color: "bg-brand-red",
                icon: CheckCircle2,
              },
              {
                text: "Baby Bonus Available",
                color: "bg-brand-green",
                icon: Star,
              },
              {
                text: "Government Subsidies",
                color: "bg-brand-blue",
                icon: Users,
              },
              {
                text: "Experienced Therapists",
                color: "bg-brand-orange",
                icon: Heart,
              },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="clay-card p-6 flex flex-col items-center text-center gap-3 group hover:-translate-y-2 transition-transform"
              >
                <div
                  className={`${badge.color} w-16 h-16 rounded-full flex items-center justify-center text-white mb-2 shadow-lg group-hover:rotate-12 transition-transform`}
                >
                  <badge.icon size={32} />
                </div>
                <span className="font-black text-gray-800 leading-tight">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Why Parents Choose Train Kids
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              We provide a warm, nurturing environment where every child is
              treated as an individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Individualised IEPs",
                desc: "Every child receives a custom Individualised Education Programme based on their specific needs and developmental goals.",
                icon: Users,
                color: "brand-red",
              },
              {
                title: "Extended Session Hours",
                desc: "Sessions up to 4 hours to give children the time they need to truly engage and learn, and giving parents much-needed respite.",
                icon: Clock,
                color: "brand-green",
              },
              {
                title: "Multidisciplinary Team",
                desc: "Access to Early Interventionists, Occupational Therapists, and Speech Therapists all in one place.",
                icon: Heart,
                color: "brand-blue",
              },
              {
                title: "Free Transport",
                desc: "Available for nearby areas including Woodlands, Marsiling, Sembawang, and Yishun (for selected sessions).",
                icon: Bus,
                color: "brand-orange",
              },
              {
                title: "ECDA Approved",
                desc: "Approved Early Intervention Programme provider under ECDA, ensuring high standards of care and subsidy eligibility.",
                icon: CheckCircle2,
                color: "brand-red",
              },
              {
                title: "Family Centred",
                desc: "We keep you closely involved with regular updates, caregiver coaching, and strategies for home support.",
                icon: Star,
                color: "brand-yellow",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="clay-card p-8 group hover:bg-white transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-${card.color}/10 text-${card.color} flex items-center justify-center mb-6 shadow-inner`}
                >
                  <card.icon size={28} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Milestones Section */}
      <section className="py-24 px-4 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:row items-end justify-between gap-8 mb-16">
            <div className="space-y-4 text-left">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Real Progress. <br />
                <span className="text-brand-orange text-5xl md:text-6xl">
                  Real Families.
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-xl font-medium">
                Small victories that make every morning a little brighter.
              </p>
            </div>
            <Link
              href="/showcase"
              className="clay-button bg-brand-blue text-white px-8 py-4 flex items-center gap-2"
            >
              <span className="font-bold">See All Milestones</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="clay-card p-8 bg-brand-red/5 border-brand-red/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-red flex items-center justify-center text-white mb-6 font-black text-xl">
                  1
                </div>
                <h3 className="text-3xl font-black mb-4 text-gray-900">
                  "From non-verbal to confident communicator"
                </h3>
                <p className="text-lg text-gray-700 italic mb-8">
                  "Watching our child start to express their needs and share
                  their world with us has been a dream come true."
                </p>
              </div>
              <Link href="/showcase/case-study-1" className="flex items-center gap-2 text-brand-red font-bold uppercase tracking-wider text-sm hover:underline">
                <span>View Case Study</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="clay-card p-8 bg-brand-green/5 border-brand-green/10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-brand-green flex items-center justify-center text-white mb-6 font-black text-xl">
                  2
                </div>
                <h3 className="text-3xl font-black mb-4 text-gray-900">
                  "Achieved full toilet independence"
                </h3>
                <p className="text-lg text-gray-700 italic mb-8">
                  "The relief and confidence this has brought to our family is
                  indescribable. A huge win for his independence!"
                </p>
              </div>
              <Link href="/showcase/case-study-2" className="flex items-center gap-2 text-brand-green font-bold uppercase tracking-wider text-sm hover:underline">
                <span>View Case Study</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-brand-green">
        <div className="max-w-4xl mx-auto clay-card bg-white p-12 text-center space-y-10 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-brand-yellow rounded-full flex items-center justify-center shadow-xl rotate-12">
            <MessageCircle size={40} className="text-gray-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Ready to take the <br />
            <span className="text-brand-green">first step?</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-lg mx-auto">
            Message us on WhatsApp to discuss your child's needs or schedule a
            free centre visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more%20about%20your%20programmes."
              target="_blank"
              className="clay-button bg-brand-green text-white px-10 py-5 flex items-center justify-center gap-3 hover:scale-105 transition-all"
            >
              <MessageCircle size={28} />
              <span className="font-black text-2xl">WhatsApp Us</span>
            </Link>
          </div>
          <p className="text-gray-400 font-bold">
            Average response time: &lt; 24 hours
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
