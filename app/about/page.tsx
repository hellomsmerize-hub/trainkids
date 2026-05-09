"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Users, Shield, Award, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-red/5 -skew-y-6 -z-10 origin-top-left" />
        <div className="max-w-7xl mx-auto text-center space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 text-brand-red rounded-full font-bold text-sm border border-brand-red/20"
          >
            <Heart size={16} className="animate-pulse" />
            <span>Our Origin Story</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-ink leading-[0.95] text-balance text-center">
            How Train Kids <br />
            <span className="text-brand-red">Started</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ink-light max-w-2xl mx-auto font-medium leading-relaxed text-balance text-center">
            Founded with a simple but powerful belief: children with
            developmental needs deserve more time to learn, not less.
          </p>
        </div>
      </section>

      {/* Founding Story - Asymmetric Layout */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            <div className="space-y-8 text-xl text-ink-light leading-relaxed font-medium">
              <p className="text-left">
                Train Kids was founded by two Early Interventionists who began
                their careers working in a Voluntary Welfare Organisation (VWO)
                early intervention centre. Through their years on the ground, they
                saw firsthand how much families needed and how much more could
                be done with the right structure in place.
              </p>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="clay-card p-10 bg-brand-red/5 border-brand-red/20 relative"
              >
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center text-white shadow-xl rotate-[-12deg]">
                  <Sparkles size={24} />
                </div>
                <p className="italic text-2xl md:text-3xl font-black text-ink leading-tight">
                  "What drove us to set up Train Kids was a simple but powerful
                  belief: children with developmental needs deserve more time to
                  learn, not less."
                </p>
              </motion.div>
              
              <p className="text-justify">
                Many existing programmes offered limited session hours, leaving
                little room for meaningful progress or for parents to catch their
                breath. Train Kids was built to change that.
              </p>
              <p className="text-justify">
                From the start, the centre offered longer sessions of up to four
                hours, giving each child the time and space to truly engage with
                learning, and giving parents the much-needed respite to attend to
                their own wellbeing.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="clay-card aspect-[4/5] bg-surface overflow-hidden relative group">
              <Image 
                src="/about-founder.png"
                alt="Our Founders"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 clay-card bg-white/90 p-6">
                <p className="font-black text-ink">Commitment to Care</p>
                <p className="text-sm font-bold text-ink-light">Established since 2015 in Singapore</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission - Drenched Strategy */}
      <section className="py-32 px-4 bg-brand-blue/5">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-card p-12 md:p-20 bg-white space-y-10 text-center relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue/5 rounded-full blur-3xl" />
            
            <h2 className="text-2xl font-black text-brand-blue uppercase tracking-[0.2em] relative z-10">
              Our Mission
            </h2>
            <p className="text-3xl md:text-5xl font-black text-ink leading-[1.1] relative z-10 text-balance">
              "To provide every child with a solid foundation in learning and
              independent skills because every child deserves the right to
              education and early intervention."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team - Rhythmic Cards */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-ink leading-tight">
              Our Multidisciplinary <span className="text-brand-green">Team</span>
            </h2>
            <p className="text-xl text-ink-light max-w-2xl mx-auto font-medium leading-relaxed text-center">
              A dedicated group of professionals working together, sharing expertise to ensure your child's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                role: "Early Interventionists",
                icon: Heart,
                color: "brand-red",
                desc: "Experienced specialists focused on developmental domains including communication, cognition, and motor skills.",
              },
              {
                role: "Occupational Therapists",
                icon: Users,
                color: "brand-green",
                desc: "Experts in sensory processing, fine motor skills, and independent daily living tasks.",
              },
              {
                role: "Speech Therapists",
                icon: MessageCircle,
                color: "brand-blue",
                desc: "Specialists in speech delays, language difficulties, and communication challenges using play-based techniques.",
              },
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="clay-card p-12 text-center space-y-8 group hover:-translate-y-4 transition-all duration-500 hover:shadow-2xl"
              >
                <div
                  className={`w-24 h-24 rounded-3xl mx-auto flex items-center justify-center shadow-lg group-hover:rotate-[15deg] transition-transform duration-500 ${
                    member.color === 'brand-red' ? 'bg-brand-red/10 text-brand-red shadow-brand-red/5' :
                    member.color === 'brand-green' ? 'bg-brand-green/10 text-brand-green shadow-brand-green/5' :
                    'bg-brand-blue/10 text-brand-blue shadow-brand-blue/5'
                  }`}
                >
                  <member.icon size={48} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-ink">
                    {member.role}
                  </h3>
                  <p className="text-ink-light text-lg font-medium leading-relaxed text-center">
                    {member.desc}
                  </p>
                </div>
                <div className="pt-6 border-t border-surface">
                  <p className="text-sm font-black text-ink/40 uppercase tracking-widest">
                    AHPC Certified
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials - Asymmetric Feature List */}
      <section className="py-32 px-4 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-ink leading-tight text-balance">
                Credentials <br />
                <span className="text-brand-orange">& Recognition</span>
              </h2>
              
              <div className="space-y-10">
                {[
                  {
                    title: "ECDA EIPIC-P Centre",
                    desc: "Train Kids has been an ECDA appointed EIPIC-P centre for the past 7 years, delivering trusted care.",
                    icon: Shield,
                    color: "brand-red",
                  },
                  {
                    title: "ECDA-Approved Provider",
                    desc: "Train Kids is an approved Early Intervention Programme provider under ECDA, ensuring standard of care.",
                    icon: Shield,
                    color: "brand-green",
                  },
                  {
                    title: "Baby Bonus Eligibility",
                    desc: "Registered with SG Baby Bonus for most programmes, making quality care more accessible to families.",
                    icon: Award,
                    color: "brand-orange",
                  },
                  {
                    title: "Government Subsidies",
                    desc: "We support families in accessing available government subsidies for early intervention sessions.",
                    icon: Users,
                    color: "brand-blue",
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className={`w-14 h-14 rounded-2xl ${
                      item.color === 'brand-green' ? 'bg-brand-green' : 
                      item.color === 'brand-orange' ? 'bg-brand-orange' : 
                      item.color === 'brand-blue' ? 'bg-brand-blue' : 'bg-brand-red'
                    } flex items-center justify-center text-white shrink-0 shadow-xl group-hover:scale-110 transition-transform`}>
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-ink mb-2 group-hover:text-brand-green transition-colors text-left">
                        {item.title}
                      </h4>
                      <p className="text-ink-light text-lg font-medium leading-relaxed max-w-md text-left">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 clay-card p-12 md:p-20 bg-white text-center space-y-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-full blur-2xl" />
              <div className="w-28 h-28 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto shadow-inner animate-float">
                <Heart size={56} className="text-brand-orange" />
              </div>
              <h3 className="text-3xl font-black text-ink leading-tight text-balance">
                Individualised, Evidence-based, Family-centred
              </h3>
              <p className="text-xl text-ink-light font-medium leading-relaxed text-justify">
                Our approach is rooted in standard assessment tools (AEPS) and
                continuous progress monitoring, ensuring your child receives the
                most effective support tailored to their unique needs.
              </p>
              <div className="pt-6">
                <Link href="/contact" className="clay-button bg-brand-green text-white px-10 py-5 flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl">
                  <span className="font-extrabold text-xl">Visit Our Centres</span>
                  <ArrowRight size={24} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
