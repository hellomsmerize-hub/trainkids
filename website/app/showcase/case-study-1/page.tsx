import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Star, Quote } from "lucide-react";

export default function CaseStudy1() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 px-4 bg-brand-red/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link href="/showcase" className="inline-flex items-center gap-2 text-brand-red font-bold hover:underline mb-4">
            <ArrowLeft size={20} />
            Back to Showcase
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            From non-verbal to <span className="text-brand-red">confident communicator</span>
          </h1>
          <div className="flex items-center gap-4 py-2">
            <div className="px-4 py-1 bg-brand-red text-white rounded-full font-bold text-sm">
              EIP Programme
            </div>
            <div className="px-4 py-1 bg-white border border-brand-red/20 text-brand-red rounded-full font-bold text-sm">
              Milestone Reached
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="clay-card p-8 bg-gray-50 border-none">
            <Quote className="text-brand-red/20 mb-4" size={48} />
            <p className="text-2xl text-gray-700 italic font-medium leading-relaxed">
              "Watching our child start to express their needs and share their world with us has been a dream come true."
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900">The Challenge</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              [TBC: Detailed description of the child's starting point, challenges faced, and initial goals.]
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900">Our Approach</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Using a multidisciplinary approach involving both Speech Therapy and Early Interventionists, we focused on:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Functional communication",
                "Social engagement",
                "Language comprehension",
                "Confidence building"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                  <Star className="text-brand-red fill-brand-red" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900">The Outcome</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              [TBC: Detailed description of the progress made, specific breakthroughs, and the impact on the child's life and family.]
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-brand-red/5">
        <div className="max-w-4xl mx-auto clay-card bg-white p-12 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Want to see similar progress for your child?
          </h2>
          <div className="flex justify-center">
            <Link
              href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20saw%20the%20communication%20case%20study%20and%20would%20like%20to%20enquire."
              target="_blank"
              className="clay-button bg-brand-red text-white px-10 py-5 flex items-center gap-3 font-black text-xl"
            >
              <MessageCircle size={28} />
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
