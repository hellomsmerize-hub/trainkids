import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HelpCircle, ArrowRight, Lightbulb, BookOpen } from "lucide-react";
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
      a: "Every child develops at their own pace, but if you notice significant delays compared to developmental milestones, it's always best to seek a professional evaluation. Early intervention can make a significant difference in communication outcomes.",
    },
    {
      q: "What's the difference between Speech Therapy and Early Intervention, does my child need both?",
      a: "Early Intervention (EIP) is a holistic programme covering multiple developmental domains (cognition, social, motor), while Speech Therapy specifically targets communication. Many children benefit from a combination of both to address different needs.",
    },
    {
      q: "How do I know if my child is making progress, and how quickly should I expect to see results?",
      a: "Progress is measured through regular assessments and achievement of Individualised Education Programme (IEP) goals. While every child's journey is unique, consistency is key to seeing meaningful long-term progress.",
    },
    {
      q: "Are there things I can do at home to support my child between sessions?",
      a: "Absolutely! We provide caregiver coaching and take-home strategies to help you integrate learning into daily routines like mealtimes and play.",
    },
    {
      q: "How does government subsidy work, and will I be able to afford this?",
      a: "As an ECDA-approved provider, our programmes are eligible for various subsidies and Baby Bonus. We work closely with families to ensure our services are accessible.",
    },
  ];

  const topics = [
    {
      title: "Supporting children with additional needs",
      desc: "Practical strategies for progress at home.",
      color: "bg-brand-red",
    },
    {
      title: "Sensory play and regulation",
      desc: "Creating environments that support learning.",
      color: "bg-brand-green",
    },
    {
      title: "Building communication skills",
      desc: "Language development through daily routines.",
      color: "bg-brand-blue",
    },
    {
      title: "Toilet training guidance",
      desc: "Structured, compassionate support for a daunting milestone.",
      color: "bg-brand-orange",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 px-4 bg-brand-yellow/5">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900">
            Therapy Tips for Parents
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Expert guidance and practical resources to support your child's
            progress at every step.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center">
              <HelpCircle size={28} />
            </div>
            <h2 className="text-3xl font-black text-gray-900">
              Common Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="clay-card border-none px-6">
                <AccordionTrigger className="text-xl font-black text-gray-900 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-600 font-medium leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Topics */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-gray-900">
              Expert Guidance
            </h2>
            <p className="text-lg text-gray-600 font-medium max-w-xl mx-auto">
              We aim to be a trusted resource for families on these key topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {topics.map((topic, i) => (
              <Link
                key={i}
                href="/contact"
                className="clay-card p-8 bg-white flex flex-col justify-between group block transition-all hover:shadow-xl"
              >
                <div className="space-y-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${topic.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <Lightbulb size={28} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 leading-tight">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
                <div className="pt-8 flex items-center gap-2 text-brand-blue font-bold uppercase tracking-wider text-xs">
                  <span>Enquire for Info</span>
                  <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto clay-card bg-brand-blue/5 p-12 text-center space-y-8">
          <h2 className="text-4xl font-black text-gray-900 leading-tight">
            Still have questions?
          </h2>
          <p className="text-xl text-gray-600 font-medium max-w-lg mx-auto">
            We're here to help. Reach out to our team for personalised guidance.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="clay-button bg-brand-blue text-white px-10 py-5 flex items-center gap-3 font-black text-xl"
            >
              Contact Us
              <ArrowRight size={24} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
