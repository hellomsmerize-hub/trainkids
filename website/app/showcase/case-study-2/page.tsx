import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Star, Quote } from "lucide-react";

export default function CaseStudy2() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 px-4 bg-brand-green/5">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link href="/showcase" className="inline-flex items-center gap-2 text-brand-green font-bold hover:underline mb-4">
            <ArrowLeft size={20} />
            Back to Showcase
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            Achieved full <span className="text-brand-green">toilet independence</span>
          </h1>
          <div className="flex items-center gap-4 py-2">
            <div className="px-4 py-1 bg-brand-green text-white rounded-full font-bold text-sm">
              Life Skills
            </div>
            <div className="px-4 py-1 bg-white border border-brand-green/20 text-brand-green rounded-full font-bold text-sm">
              Major Milestone
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          <div className="clay-card p-8 bg-gray-50 border-none">
            <Quote className="text-brand-green/20 mb-4" size={48} />
            <p className="text-2xl text-gray-700 italic font-medium leading-relaxed">
              "The relief and confidence this has brought to our family is indescribable. A huge win for his independence!"
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900">The Challenge</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              [TBC: Detailed description of the difficulties with toilet training and the impact on the child's daily school and home life.]
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900">Our Approach</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our team worked closely with the family to implement a consistent routine, focusing on:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Routine building",
                "Sensory awareness",
                "Communication of needs",
                "Caregiver partnership"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-bold text-gray-700">
                  <Star className="text-brand-green fill-brand-green" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900">The Outcome</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              [TBC: Description of how the milestone was achieved and the newfound independence for the student.]
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-brand-green/5">
        <div className="max-w-4xl mx-auto clay-card bg-white p-12 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Ready to help your child achieve independence?
          </h2>
          <div className="flex justify-center">
            <Link
              href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20saw%20the%20independence%20case%20study%20and%20would%20like%20to%20enquire."
              target="_blank"
              className="clay-button bg-brand-green text-white px-10 py-5 flex items-center gap-3 font-black text-xl"
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
