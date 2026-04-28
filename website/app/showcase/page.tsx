import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Star, MessageCircle, ArrowRight, Quote } from "lucide-react";

export default function StudentShowcase() {
  const milestones = [
    {
      title: "From Non-Verbal to Confident Communicator",
      story:
        "Some of our children joined us as non-verbal toddlers. With consistent, individualised support, they have grown into confident communicators, engaging in back-and-forth conversation with the people they love.",
      impact: "Communication & Social Interaction",
      color: "brand-red",
    },
    {
      title: "Reading & Writing Success",
      story:
        "Others have gone from recognising single letters to reading independently and from tracing shapes to writing sentences of three to five words.",
      impact: "Literacy & Cognitive Skills",
      color: "brand-green",
    },
    {
      title: "Full Toilet Independence",
      story:
        "We have supported children in achieving full toilet independence, something that brings enormous relief and confidence to both child and family. Made possible through close partnership with parents who carried the work into their home routines.",
      impact: "Life Skills & Family Relief",
      color: "brand-blue",
    },
    {
      title: "Independent Mealtimes & Dressing",
      story:
        "And we have watched children who once needed full assistance at mealtimes and with dressing learn to do these things on their own quiet victories that make every school morning a little brighter.",
      impact: "Independence & Daily Autonomy",
      color: "brand-orange",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 px-4 bg-brand-red/5">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900">
            Real Progress. Real Families.
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Every child who walks through our doors has their own starting
            point. Here are some milestones we're proud of.
          </p>
        </div>
      </section>

      {/* Milestones Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {milestones.map((milestone, i) => (
            <div
              key={i}
              className={`clay-card p-12 flex flex-col justify-between space-y-8 bg-${milestone.color}/5 border-${milestone.color}/10`}
            >
              <div className="space-y-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-${milestone.color} text-white flex items-center justify-center shadow-lg`}
                >
                  <Star size={32} />
                </div>
                <h3 className="text-3xl font-black text-gray-900 leading-tight">
                  {milestone.title}
                </h3>
                <p className="text-xl text-gray-700 font-medium leading-relaxed">
                  {milestone.story}
                </p>
              </div>
              <Link
                href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more%20about%20your%20milestones."
                target="_blank"
                className={`py-3 px-6 rounded-xl bg-white border border-${milestone.color}/20 text-${milestone.color} font-black text-sm uppercase tracking-wider inline-block self-start hover:bg-${milestone.color}/5 transition-colors`}
              >
                {milestone.impact}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-gray-900">
              What Parents Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="clay-card p-8 bg-white relative">
                <Quote
                  className="absolute top-6 right-8 text-gray-100"
                  size={64}
                />
                <div className="flex gap-1 text-brand-yellow mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} className="fill-brand-yellow" />
                  ))}
                </div>
                <p className="text-lg text-gray-700 font-medium italic leading-relaxed mb-8 relative z-10">
                  "Train Kids has been a second home for our son. The progress
                  he's made in his speech and social skills in just a few months
                  is more than we saw in a whole year elsewhere."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue font-bold">
                    P
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900">Parent of Student</h4>
                    <p className="text-sm text-gray-500 font-bold">
                      EIP Programme
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 bg-brand-blue">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Children Served", val: "300+" },
            { label: "Years of Care", val: "9+" },
            { label: "Specialised Staff", val: "15+" },
            { label: "Centres", val: "2" },
          ].map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="text-5xl md:text-6xl font-black text-white">
                {stat.val}
              </div>
              <div className="text-brand-blue-100 font-bold text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto clay-card bg-brand-green/5 p-12 text-center space-y-8">
          <h2 className="text-4xl font-black text-gray-900 leading-tight">
            Ready to see what's possible for your child?
          </h2>
          <div className="flex justify-center">
            <Link
              href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more."
              target="_blank"
              className="clay-button bg-brand-green text-white px-10 py-5 flex items-center gap-3 font-black text-xl"
            >
              <MessageCircle size={28} />
              WhatsApp Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
