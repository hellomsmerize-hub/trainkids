"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Brain,
  HandMetal,
  MessageSquare,
  School,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import { getWhatsAppLink, WhatsAppContext } from "@/lib/whatsapp";

export default function Programmes() {
  const programmes = [
    {
      title: "Early Intervention (EIPIC)",
      age: "24 months – 6 years old",
      for: "Children aged 24 months to 6 years old with developmental delays or disabilities.",
      session:
        "Sessions combine one-to-one time with the child's Early Interventionist and small group activities. Goals are set using standardised assessments (AEPS) and captured in an Individualised Education Programme (IEP). Each session targets developmental domains such as communication, cognition, motor skills, and daily living skills.",
      features: [
        "Individualised Education Programme (IEP)",
        "AEPS Standardised Assessments",
        "Caregiver coaching & strategies",
      ],
      color: "brand-red",
      icon: Brain,
    },
    {
      title: "Occupational Therapy",
      age: "2 – 14 years old",
      for: "Children with sensory processing difficulties, fine motor delays, or challenges with daily living tasks.",
      session:
        "OT sessions help children become as independent as possible in areas such as self-care, play, and school readiness. Sessions include sensory activities, hand-strengthening tasks, and functional skill practice tailored to their unique needs.",
      features: [
        "Sensory integration activities",
        "Functional skill practice",
        "Independence building",
      ],
      color: "brand-green",
      icon: HandMetal,
    },
    {
      title: "Speech Therapy",
      age: "2 – 14 years old",
      for: "Children with speech delays, language difficulties, or communication challenges.",
      session:
        "Sessions are designed to be engaging and low-stress, using play-based techniques. A customised therapy plan is developed for each child and reviewed regularly to ensure continuous growth and confidence.",
      features: [
        "Play-based techniques",
        "Customised therapy plans",
        "Regular progress reviews",
      ],
      color: "brand-blue",
      icon: MessageSquare,
    },
    {
      title: "Student Care (SPED)",
      age: "7 – 14 years old",
      for: "Children currently enrolled in SPED schools who require a supportive after-school environment.",
      session:
        "Activities cover social skills, communication, cognitive development, fine motor skills, and adaptive daily living, supporting both the child's growth and working parents' schedules in a nurturing space.",
      features: [
        "Supports working parents",
        "Social skills development",
        "Adaptive living support",
      ],
      color: "brand-orange",
      icon: School,
      whatsappContext: "PROG_SPED" as WhatsAppContext,
    },
  ];

  const programmeContexts: Record<string, WhatsAppContext> = {
    "Early Intervention (EIPIC)": "PROG_EIPIC",
    "Occupational Therapy": "PROG_OT",
    "Speech Therapy": "PROG_ST",
    "Student Care (SPED)": "PROG_SPED",
  };

  const faqs = [
    {
      q: "Are sessions individual or group?",
      a: "Both. Early Intervention sessions include individual one-to-one time as well as small group activities, allowing children to practise skills in a supported social setting while receiving focused attention.",
    },
    {
      q: "How long are sessions?",
      a: "We offer flexible session lengths, with some extending up to 4 hours to ensure meaningful progress and engagement without rushing the child's natural learning pace.",
    },
    {
      q: "How is progress measured?",
      a: "We use standardised assessments (AEPS) and capture goals in an Individualised Education Programme (IEP). Progress is reviewed regularly with parents to ensure alignment and celebrate milestones.",
    },
    {
      q: "How do subsidies work?",
      a: "We are an ECDA-approved provider and registered for Baby Bonus. Our team can guide you through the process of accessing available government support and subsidies.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-brand-green/5 skew-y-6 -z-10 origin-top-right" />
        <div className="max-w-7xl mx-auto text-center space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/10 text-brand-green rounded-full font-bold text-sm border border-brand-green/20"
          >
            <Sparkles size={16} />
            <span>Milestone-based Approach</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-ink leading-[0.95] text-balance text-center">
            Our <span className="text-brand-green">Programmes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-ink-light max-w-2xl mx-auto font-medium leading-relaxed text-balance text-center">
            Specialized programmes designed to meet each child where they are
            and help them reach their next milestone with confidence.
          </p>
        </div>
      </section>

      {/* Programme Cards - Alternating Layout */}
      <section className="py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {programmes.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="clay-card overflow-hidden group hover:shadow-2xl transition-all duration-700"
            >
              <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                <div
                  className={`lg:w-2/5 bg-surface p-12 md:p-20 flex flex-col items-center justify-center text-center space-y-8 border-surface`}
                >
                  <div
                    className={`w-24 h-24 rounded-3xl mx-auto flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-8 ${
                      prog.color === 'brand-red' ? 'bg-brand-red text-white' : 
                      prog.color === 'brand-green' ? 'bg-brand-green text-white' : 
                      prog.color === 'brand-blue' ? 'bg-brand-blue text-white' : 'bg-brand-orange text-white'
                    }`}
                  >
                    <prog.icon size={56} />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-4xl font-black text-ink leading-tight text-center">
                      {prog.title}
                    </h3>
                    <div className="flex justify-center">
                      <div className="clay-card bg-white px-6 py-2 inline-block font-black text-ink-light border-surface">
                        {prog.age}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-3/5 p-12 md:p-16 space-y-10">
                  <div className="space-y-4 text-center">
                    <h4 className="text-sm font-black text-ink/30 uppercase tracking-[0.2em]">
                      Who it's for
                    </h4>
                    <p className="text-2xl text-ink font-black leading-snug text-center">
                      {prog.for}
                    </p>
                  </div>

                  <div className="space-y-4 text-center">
                    <h4 className="text-sm font-black text-ink/30 uppercase tracking-[0.2em]">
                      What a session looks like
                    </h4>
                    <p className="text-lg text-ink-light font-medium leading-relaxed text-center">
                      {prog.session}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {prog.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3 group/feat">
                        <div className={`w-8 h-8 rounded-full ${
                          prog.color === 'brand-red' ? 'bg-brand-red/10 text-brand-red' : 
                          prog.color === 'brand-green' ? 'bg-brand-green/10 text-brand-green' : 
                          prog.color === 'brand-blue' ? 'bg-brand-blue/10 text-brand-blue' : 'bg-brand-orange/10 text-brand-orange'
                        } flex items-center justify-center shrink-0`}>
                          <CheckCircle2 size={18} />
                        </div>
                        <span className="font-bold text-ink-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-10 flex justify-center">
                    <Link
                      href={getWhatsAppLink(programmeContexts[prog.title])}
                      target="_blank"
                      className={`clay-button ${
                        prog.color === 'brand-red' ? 'bg-brand-red' : 
                        prog.color === 'brand-green' ? 'bg-brand-green' : 
                        prog.color === 'brand-blue' ? 'bg-brand-blue' : 'bg-brand-orange'
                      } text-white px-8 py-4 flex items-center gap-3 hover:scale-105 transition-all shadow-xl`}
                    >
                      <MessageCircle size={20} />
                      <span className="font-extrabold">Enquire Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs - Premium Accordion */}
      <section className="py-32 px-4 bg-surface relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-7xl font-black text-ink leading-tight">
              Programmes <span className="text-brand-orange">FAQ</span>
            </h2>
            <p className="text-xl text-ink-light font-medium max-w-xl mx-auto text-justify">
              Everything you need to know about our approach and how we support your child's journey.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-20 text-center">
            <div className="clay-card p-10 bg-white inline-flex flex-col md:flex-row items-center gap-8 shadow-xl">
              <Link 
                href={getWhatsAppLink("PRICING_ENROL")}
                target="_blank"
                className="clay-button bg-brand-orange text-white px-8 py-4 flex items-center gap-3 hover:rotate-2 transition-all shadow-lg"
              >
                <MessageCircle size={20} />
                <span className="font-black">Ask About Pricing & Enrolment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
