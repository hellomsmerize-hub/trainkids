"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MessageCircle, ArrowRight, Quote, Sparkles, TrendingUp, Heart } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function StudentShowcase() {
  const milestones = [
    {
      title: "Non-Verbal to Confident Speaker",
      story:
        "Children who joined as non-verbal toddlers have grown into confident communicators, engaging in meaningful back-and-forth conversation with their families through our unhurried, play-based support.",
      impact: "Communication & Social",
      color: "brand-red",
    },
    {
      title: "Academic & Literacy Success",
      story:
        "Watching children transition from simple letter recognition to independent reading and writing sentences. These quiet victories build the cognitive foundation for lifelong learning.",
      impact: "Literacy & Cognition",
      color: "brand-green",
    },
    {
      title: "Achieving Toilet Independence",
      story:
        "Full toilet independence is a massive milestone for family relief and child confidence. This is achieved through close partnership with parents who extend our structured routines into the home.",
      impact: "Daily Life Skills",
      color: "brand-blue",
    },
    {
      title: "Independent Mealtimes",
      story:
        "From requiring full assistance to eating independently—these are the essential skills that make every morning brighter and empower children with personal autonomy.",
      impact: "Self-Care Autonomy",
      color: "brand-orange",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-red/5 -skew-y-6 -z-10 origin-top-left" />
        <div className="max-w-7xl mx-auto text-center space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-red/10 text-brand-red rounded-full font-bold text-sm border border-brand-red/20"
          >
            <Sparkles size={16} />
            <span>Success Stories</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-ink leading-[0.95] text-balance text-center">
            Real Progress. <br />
            <span className="text-brand-red">Real Families.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ink-light max-w-2xl mx-auto font-medium leading-relaxed text-balance text-center">
            Every child who walks through our doors has their own starting
            point. Here are some of the milestones we've celebrated together.
          </p>
        </div>
      </section>

      {/* Milestones Grid - Asymmetric Layout */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`clay-card p-12 flex flex-col justify-between space-y-10 group hover:-translate-y-4 transition-all duration-700 bg-white border-surface`}
            >
              <div className="space-y-8">
                <div
                  className={`w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-all duration-500 ${
                    milestone.color === 'brand-red' ? 'bg-brand-red' : 
                    milestone.color === 'brand-green' ? 'bg-brand-green' : 
                    milestone.color === 'brand-blue' ? 'bg-brand-blue' : 'bg-brand-orange'
                  }`}
                >
                  <Star size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-black text-ink leading-tight text-center">
                    {milestone.title}
                  </h3>
                  <p className="text-xl text-ink-light font-medium leading-relaxed text-center">
                    {milestone.story}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-surface">
                <span className={`font-black text-sm uppercase tracking-widest ${
                  milestone.color === 'brand-red' ? 'text-brand-red' : 
                  milestone.color === 'brand-green' ? 'text-brand-green' : 
                  milestone.color === 'brand-blue' ? 'text-brand-blue' : 'text-brand-orange'
                }`}>
                  {milestone.impact}
                </span>
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-ink/20 group-hover:text-brand-green transition-colors">
                  <TrendingUp size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials - Scrolling/Grid */}
      <section className="py-32 px-4 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-4xl md:text-7xl font-black text-ink leading-tight">
              What <span className="text-brand-blue">Parents</span> Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: "Parent of Student", programme: "EIP Programme" },
              { name: "Grateful Family", programme: "Speech Therapy" },
              { name: "Mother of Two", programme: "Student Care" },
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="clay-card p-10 bg-white relative group"
              >
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Quote size={24} />
                </div>
                
                <div className="flex gap-1 text-brand-yellow mb-8">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} className="fill-brand-yellow" />
                  ))}
                </div>
                
                <p className="text-xl text-ink-light font-medium italic leading-relaxed mb-10 relative z-10 text-center">
                  "Train Kids has been a second home for our son. The progress
                  he's made in his speech and social skills in just a few months
                  is more than we saw in a whole year elsewhere."
                </p>
                
                <div className="flex items-center gap-4 pt-8 border-t border-surface">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue font-black text-xl">
                    {item.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black text-ink text-lg">{item.name}</h4>
                    <p className="text-sm text-ink-light font-bold">
                      {item.programme}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Drenched High Impact */}
      <section className="py-32 px-4 bg-brand-blue relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {[
            { label: "Children Served", val: "300+" },
            { label: "Years of Care", val: "9+" },
            { label: "Specialised Staff", val: "15+" },
            { label: "Centres", val: "2" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-4"
            >
              <div className="text-6xl md:text-8xl font-black text-white leading-none">
                {stat.val}
              </div>
              <div className="text-white/60 font-black text-xl uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA - Clay Card Strategy */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-card bg-brand-green/5 p-12 md:p-20 text-center space-y-10 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl" />
            <h2 className="text-4xl md:text-7xl font-black text-ink leading-[0.95] text-balance">
              Ready to see what's <br />
              <span className="text-brand-green">possible?</span>
            </h2>
            <p className="text-xl md:text-2xl text-ink-light font-medium max-w-xl mx-auto leading-relaxed text-center">
              Every child's journey is unique. Let's start building your child's success story today.
            </p>
            <div className="flex justify-center pt-6">
              <Link
                href={getWhatsAppLink("SUCCESS_STORIES")}
                target="_blank"
                className="clay-button bg-brand-green text-white px-12 py-6 flex items-center gap-4 font-black text-2xl hover:scale-105 transition-all shadow-2xl shadow-brand-green/20"
              >
                <MessageCircle size={32} />
                <span>WhatsApp Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
