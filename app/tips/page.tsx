"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, Lightbulb, BookOpen, Sparkles, MessageCircle, Heart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import Link from "next/link";

export default function TherapyTips() {
  const faqs = [
    {
      q: "My child isn't talking yet, should I be worried, and when should I seek help?",
      a: "Every child develops at their own pace, but if you notice significant delays compared to developmental milestones (such as not using single words by 18 months or not following simple instructions), it's best to seek a professional evaluation. Early intervention is most effective when started as soon as concerns arise.",
    },
    {
      q: "What's the difference between Speech Therapy and Early Intervention?",
      a: "Early Intervention (EIP) is a holistic programme covering multiple developmental domains including cognition, social, and motor skills. Speech Therapy specifically targets communication and language. Many children benefit from a combination of both to address their overall development.",
    },
    {
      q: "How do I know if my child is making progress?",
      a: "Progress is measured through regular AEPS assessments and achievement of Individualised Education Programme (IEP) goals. We provide regular reports and parent-teacher meetings to celebrate every milestone, no matter how small.",
    },
    {
      q: "Are there things I can do at home to support my child?",
      a: "Absolutely! We believe parents are a child's first and most important teachers. We provide specific take-home strategies and caregiver coaching to help you integrate learning into daily routines like mealtimes, bath time, and play.",
    },
    {
      q: "How does government subsidy work?",
      a: "As an ECDA-approved provider, our programmes are eligible for various subsidies and Baby Bonus (CDA). Our team provides full administrative support to help families navigate and access available government funding.",
    },
  ];

  const topics = [
    {
      title: "Supporting Additional Needs",
      desc: "Practical strategies for progress at home.",
      color: "brand-red",
      icon: Heart,
    },
    {
      title: "Sensory Play & Regulation",
      desc: "Creating environments that support learning.",
      color: "brand-green",
      icon: Sparkles,
    },
    {
      title: "Building Communication",
      desc: "Language development through daily routines.",
      color: "brand-blue",
      icon: MessageCircle,
    },
    {
      title: "Toilet Training Guidance",
      desc: "Compassionate support for a daunting milestone.",
      color: "brand-orange",
      icon: Lightbulb,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-orange/5 -skew-y-6 -z-10 origin-top-left" />
        <div className="max-w-7xl mx-auto text-center space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full font-bold text-sm border border-brand-orange/20"
          >
            <BookOpen size={16} />
            <span>Expert Knowledge Base</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-ink leading-[0.95] text-balance">
            Therapy <span className="text-brand-orange">Tips</span> <br />
            for Parents
          </h1>
          
          <p className="text-xl md:text-2xl text-ink-light max-w-2xl mx-auto font-medium leading-relaxed text-balance">
            Expert guidance and practical resources to support your child's
            progress at every step of their development.
          </p>
        </div>
      </section>

      {/* FAQs - Premium Accordion */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shadow-inner">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-4xl font-black text-ink">Common Questions</h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Topics - Grid */}
      <section className="py-32 px-4 bg-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-24 space-y-6">
            <h2 className="text-4xl md:text-7xl font-black text-ink leading-tight">
              Expert <span className="text-brand-blue">Guidance</span>
            </h2>
            <p className="text-xl text-ink-light font-medium max-w-xl mx-auto">
              We aim to be a trusted resource for families on these key developmental topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topics.map((topic, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href="/contact"
                  className="clay-card p-10 bg-white flex flex-col justify-between group h-full transition-all hover:-translate-y-4 hover:shadow-2xl"
                >
                  <div className="space-y-8">
                    <div
                      className={`w-16 h-16 rounded-2xl ${
                        topic.color === 'brand-red' ? 'bg-brand-red' : 
                        topic.color === 'brand-green' ? 'bg-brand-green' : 
                        topic.color === 'brand-blue' ? 'bg-brand-blue' : 'bg-brand-orange'
                      } text-white flex items-center justify-center shadow-xl group-hover:rotate-12 transition-all duration-500`}
                    >
                      <Lightbulb size={32} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-black text-ink leading-tight">
                        {topic.title}
                      </h3>
                      <p className="text-ink-light font-medium leading-relaxed">
                        {topic.desc}
                      </p>
                    </div>
                  </div>
                  <div className="pt-10 flex items-center gap-2 text-brand-blue font-black uppercase tracking-widest text-xs">
                    <span>Enquire for Info</span>
                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Drenched Strategy */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="clay-card bg-brand-blue/5 p-12 md:p-20 text-center space-y-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-blue opacity-20" />
            <h2 className="text-4xl md:text-6xl font-black text-ink leading-tight">
              Still have <br />
              <span className="text-brand-blue">questions?</span>
            </h2>
            <p className="text-xl md:text-2xl text-ink-light font-medium max-w-lg mx-auto">
              We're here to help. Reach out to our team for personalised guidance and support.
            </p>
            <div className="flex justify-center pt-6">
              <Link
                href="/contact"
                className="clay-button bg-brand-blue text-white px-12 py-6 flex items-center gap-3 font-black text-2xl hover:scale-105 transition-all shadow-2xl shadow-brand-blue/20"
              >
                <span>Contact Us</span>
                <ArrowRight size={28} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
