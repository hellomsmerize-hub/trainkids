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
  Sparkles,
  Shield,
} from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 px-4 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[60%] h-full bg-brand-green/5 -skew-x-12 -z-10 translate-x-20 rounded-bl-[100px]" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="flex justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full font-bold text-sm border border-brand-orange/20">
                <Sparkles size={16} className="animate-pulse" />
                <span>We Teach • We Guide • We Encourage</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-ink leading-[0.95] text-balance text-left">
              Giving Your Child the <br />
              <span className="text-brand-green">Solid Foundation</span> <br />
              They Deserve
            </h1>
            
            <p className="text-xl md:text-2xl text-ink-light leading-relaxed max-w-xl font-medium text-left">
              Individualised early intervention and therapy for children aged 2 to 14
              with developmental needs, right here in Singapore.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 pt-4 justify-start">
              <Link
                href={getWhatsAppLink("ENROL_START")}
                target="_blank"
                className="clay-button bg-brand-green text-white px-10 py-6 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <MessageCircle size={28} />
                <span className="font-extrabold text-2xl">Ask About Enrolment</span>
              </Link>
              <Link
                href="/programmes"
                className="clay-button bg-white text-brand-blue border border-brand-blue/10 px-10 py-6 flex items-center justify-center gap-2 hover:bg-surface transition-all"
              >
                <span className="font-bold text-xl">Browse Programmes</span>
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Logo above picture */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="w-full max-w-[320px] md:max-w-[450px] mx-auto animate-float"
            >
              <Image
                src="/logo.png"
                alt="TrainKids Logo"
                width={600}
                height={200}
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>

            <div className="relative">
              <div className="clay-card p-4 rotate-3 scale-105 bg-brand-yellow/20 border-brand-yellow/30 absolute inset-0 -z-10 animate-float" />
              <div className="clay-card p-4 relative overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src="/hero.png"
                    alt="Therapist interacting with child"
                    fill
                    className="rounded-[1.5rem] object-cover transition-transform duration-1000 group-hover:scale-105"
                    priority
                  />
                </div>
                
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-8 left-8 right-8 clay-card bg-white/95 p-6 flex items-center gap-5 border-white shadow-2xl"
                >
                  <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center text-white font-black text-2xl shadow-xl ring-8 ring-brand-red/10 animate-pulse">
                    300+
                  </div>
                  <div className="font-extrabold text-ink text-lg leading-tight">
                    Children supported <br /> since 2015
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges - Asymmetric Flow */}
      <section className="py-20 bg-surface px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                text: "ECDA-Approved Provider",
                color: "bg-brand-red",
                icon: CheckCircle2,
                delay: 0.1,
              },
              {
                text: "Baby Bonus Available",
                color: "bg-brand-green",
                icon: Star,
                delay: 0.2,
              },
              {
                text: "Government Subsidies",
                color: "bg-brand-blue",
                icon: Users,
                delay: 0.3,
              },
              {
                text: "Experienced Therapists",
                color: "bg-brand-orange",
                icon: Heart,
                delay: 0.4,
              },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: badge.delay, duration: 0.6 }}
                className="clay-card p-8 flex flex-col items-center text-center gap-4 group hover:-translate-y-3 transition-all duration-500 min-w-[240px] flex-1"
              >
                <div
                  className={`${badge.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-2 shadow-lg group-hover:rotate-[15deg] transition-transform duration-500`}
                >
                  <badge.icon size={40} />
                </div>
                <span className="font-extrabold text-ink text-lg leading-snug text-balance">
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - Rhythmic Grid */}
      <section className="py-32 px-4 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-surface to-transparent" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-24">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-ink leading-tight text-balance">
                Why Parents Choose <br />
                <span className="text-brand-orange">Train Kids</span>
              </h2>
              <p className="text-xl text-ink-light font-medium leading-relaxed text-left">
                We provide a warm, nurturing environment where every child is
                treated as an individual. We don't believe in one-size-fits-all solutions.
              </p>
              <div className="pt-6">
                <Link href="/about" className="group inline-flex items-center gap-3 text-brand-green font-black text-xl hover:translate-x-2 transition-transform">
                  <span>Learn more about our philosophy</span>
                  <ArrowRight size={24} />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Individualised IEPs",
                  desc: "Every child receives a custom Individualised Education Programme based on their specific needs and developmental goals.",
                  icon: Users,
                  color: "brand-red",
                },
                {
                  title: "Session Hours",
                  desc: "Sessions up to 4 hours to give children the time they need to truly engage and learn.",
                  icon: Clock,
                  color: "brand-green",
                },
                {
                  title: "Expert Team",
                  desc: "Access to Early Interventionists, Occupational Therapists, and Speech Therapists all in one place.",
                  icon: Heart,
                  color: "brand-blue",
                },
                {
                  title: "Transport Provided",
                  desc: "Available for areas in Woodlands to support your child's daily commute to our centre.",
                  icon: Bus,
                  color: "brand-orange",
                },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="clay-card p-10 group hover:bg-white transition-all duration-500 border-transparent hover:border-brand-green/10"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform mx-auto ${
                      card.color === 'brand-red' ? 'bg-brand-red/10 text-brand-red' :
                      card.color === 'brand-green' ? 'bg-brand-green/10 text-brand-green' :
                      card.color === 'brand-blue' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-orange/10 text-brand-orange'
                    }`}
                  >
                    <card.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-ink text-center">
                    {card.title}
                  </h3>
                  <p className="text-ink-light leading-relaxed font-medium text-center">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Segment: Programmes Preview */}
      <section className="py-24 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="clay-card bg-brand-blue/5 p-12 md:p-20 relative overflow-hidden border-brand-blue/10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-black text-ink leading-tight">
                  Tailored Programmes for <br />
                  <span className="text-brand-blue">Every Stage</span>
                </h2>
                <p className="text-xl text-ink-light font-medium leading-relaxed">
                  From early intervention to specialized therapy and student care, 
                  we offer comprehensive support designed to help your child thrive.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Early Intervention (EIP)", "Speech Therapy", "Occupational Therapy", "Student Care"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm font-bold text-brand-blue border border-brand-blue/10 shadow-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  <Link
                    href="/programmes"
                    className="clay-button bg-brand-blue text-white px-10 py-5 flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand-blue/20"
                  >
                    <span className="font-extrabold text-xl">View All Programmes</span>
                    <ArrowRight size={24} />
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: "Nurturing Care", icon: Heart, color: "text-brand-red" },
                  { label: "Expert Guidance", icon: Sparkles, color: "text-brand-orange" },
                  { label: "Safe Space", icon: Shield, color: "text-brand-green" },
                  { label: "Proven Results", icon: Star, color: "text-brand-blue" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="clay-card bg-white p-8 flex flex-col items-center text-center gap-4"
                  >
                    <item.icon size={32} className={item.color} />
                    <span className="font-black text-ink text-sm uppercase tracking-widest">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Milestones - Drenched Design */}
      <section className="py-32 px-4 bg-brand-blue/5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-20">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-ink leading-tight text-balance">
                Real Progress. <br />
                <span className="text-brand-orange">Real Families.</span>
              </h2>
              <p className="text-xl text-ink-light font-medium text-left">
                Small victories that make every morning a little brighter. Witness the impact of personalised care.
              </p>
            </div>
            <Link
              href="/showcase"
              className="clay-button bg-brand-blue text-white px-10 py-5 flex items-center gap-3 self-start lg:self-end hover:scale-105 transition-all"
            >
              <span className="font-extrabold text-xl">See All Milestones</span>
              <ArrowRight size={24} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "From Desperate to Thriving: Damien's Story",
                quote: "With the support from TrainKids Damien's behavior and social skill has improved tremendously! He can now communicate with other children, control his emotions, try new food and even toilet trained.",
                step: 1,
                color: "brand-red",
                href: "/showcase",
              },
              {
                title: "Night and Day Progress: Houd's Journey",
                quote: "Words cannot describe the progress he's made. It is night and day with no exaggeration. He is now toilet trained thanks TrainKids! Houd is able to talk albeit short and simple sentences, making observations about things around him and READ (level 1 books)!",
                step: 2,
                color: "brand-green",
                href: "/showcase",
              }
            ].map((study, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`clay-card p-10 flex flex-col justify-between group hover:bg-white transition-all duration-700 ${
                  study.color === 'brand-red' ? 'bg-brand-red/5 border-brand-red/10' : 'bg-brand-green/5 border-brand-green/10'
                }`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-full ${study.color === 'brand-red' ? 'bg-brand-red' : 'bg-brand-green'} flex items-center justify-center text-white mb-8 font-black text-2xl shadow-lg mx-auto`}>
                    {study.step}
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-ink leading-tight group-hover:text-ink transition-colors text-left">
                    {study.title}
                  </h3>
                  <p className="text-xl text-ink-light italic mb-10 leading-relaxed text-center">
                    "{study.quote}"
                  </p>
                </div>
                <Link href={study.href} className={`flex items-center gap-2 ${study.color === 'brand-red' ? 'text-brand-red' : 'text-brand-green'} font-black uppercase tracking-wider text-sm hover:translate-x-2 transition-transform`}>
                  <span>View Success Story</span>
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Drenched (Growth Green) */}
      <section className="py-40 px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto clay-card bg-brand-green p-12 md:p-20 text-center space-y-12 relative overflow-hidden"
        >
          {/* Decorative Circles */}
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-50px] left-[-50px] w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 space-y-10 flex flex-col items-center w-full">
            <div className="w-24 h-24 bg-brand-yellow rounded-3xl flex items-center justify-center shadow-2xl rotate-12 mx-auto animate-float">
              <MessageCircle size={48} className="text-ink" />
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight text-balance">
              Ready to take the <br />
              <span className="text-brand-yellow">first step?</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
              Message us on WhatsApp to discuss your child's needs or schedule a
              free centre visit. We are here to listen and help.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Link
                href={getWhatsAppLink("ENROL_START")}
                target="_blank"
                className="clay-button bg-white text-brand-green px-12 py-7 flex items-center justify-center gap-4 hover:scale-110 transition-all shadow-2xl"
              >
                <MessageCircle size={32} />
                <span className="font-black text-3xl">WhatsApp Us</span>
              </Link>
            </div>
            
            <p className="text-white/70 font-black tracking-[0.2em] uppercase text-xs w-full text-center">
              Response time: &lt;24h
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
