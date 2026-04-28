import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  MessageCircle,
  Brain,
  HandMetal,
  MessageSquare,
  School,
  CheckCircle2,
  HelpCircle,
} from "lucide-react";

export default function Programmes() {
  const programmes = [
    {
      title: "Early Intervention Programme (EIPIC)",
      age: "24 months – 6 years old",
      for: "Children aged 24 months to 6 years old with developmental delays or disabilities.",
      session:
        "Sessions combine one-to-one time with the child's Early Interventionist and small group activities. Goals are set using standardised assessments (AEPS) and captured in an Individualised Education Programme (IEP). Each session targets developmental domains such as communication, cognition, motor skills, and daily living skills. Caregiver involvement is embedded throughout and parents receive strategies to continue learning at home.",
      features: [
        "Individualised Education Programme (IEP)",
        "AEPS Standardised Assessments",
        "Caregiver coaching & take-home strategies",
      ],
      color: "brand-red",
      icon: Brain,
    },
    {
      title: "Occupational Therapy",
      age: "2 – 14 years old",
      for: "Children with sensory processing difficulties, fine motor delays, or challenges with daily living tasks.",
      session:
        "OT sessions help children become as independent as possible in areas such as self-care, play, and school readiness. Sessions may include sensory activities, hand-strengthening tasks, and functional skill practice.",
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
        "Sessions are designed to be engaging and low-stress, using play-based techniques. A customised therapy plan is developed for each child and reviewed regularly.",
      features: [
        "Play-based techniques",
        "Customised therapy plans",
        "Regular progress reviews",
      ],
      color: "brand-yellow",
      icon: MessageSquare,
    },
    {
      title: "Before & After School Care (SPED Students)",
      age: "7 – 12/14 years old",
      for: "Children aged 7–12 (Woodlands) or 7–14 (Tampines) who are currently enrolled in SPED schools.",
      session:
        "Activities cover social skills, communication, cognitive development, fine motor skills, and adaptive daily living, supporting both the child's growth and working parents' schedules.",
      features: [
        "Supports working parents' schedules",
        "Social skills development",
        "Adaptive living support",
      ],
      color: "brand-blue",
      icon: School,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 px-4 bg-brand-green/5">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900">
            Our Programmes
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Specialized programmes designed to meet each child where they are
            and help them reach their next milestone.
          </p>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-16">
          {programmes.map((prog, i) => (
            <div
              key={i}
              className={`clay-card overflow-hidden group hover:shadow-2xl transition-all duration-500 border-${prog.color}/10`}
            >
              <div className="flex flex-col md:row">
                <div
                  className={`md:w-1/3 bg-${prog.color}/5 p-12 flex flex-col items-center justify-center text-center space-y-6`}
                >
                  <div
                    className={`w-24 h-24 rounded-3xl bg-${prog.color} text-white flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform`}
                  >
                    <prog.icon size={48} />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-black text-gray-900 mb-2`}>
                      {prog.title}
                    </h3>
                    <div className="bg-white/80 rounded-full px-4 py-1 inline-block font-bold text-sm text-gray-600 border border-gray-100">
                      Age: {prog.age}
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 p-12 space-y-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-black text-gray-400 uppercase tracking-widest">
                      Who it's for
                    </h4>
                    <p className="text-xl text-gray-800 font-bold leading-relaxed">
                      {prog.for}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-black text-gray-400 uppercase tracking-widest">
                      What a session looks like
                    </h4>
                    <p className="text-lg text-gray-600 font-medium leading-relaxed">
                      {prog.session}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prog.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <CheckCircle2 className={`text-${prog.color}`} size={20} />
                        <span className="font-bold text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more%20about%20your%20programmes."
                      target="_blank"
                      className={`clay-button bg-${prog.color} text-white px-8 py-4 inline-flex items-center gap-3 font-black text-lg`}
                    >
                      <MessageCircle size={24} />
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-black text-gray-900">
              Programmes FAQ
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Common questions about our sessions and approach.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Are sessions individual or group?",
                a: "Both. Early Intervention sessions include individual one-to-one time as well as small group activities, allowing children to practise skills in a supported social setting.",
              },
              {
                q: "How long are sessions?",
                a: "We offer flexible session lengths, with some extending up to 4 hours to ensure meaningful progress and engagement.",
              },
              {
                q: "How is progress measured?",
                a: "We use standardised assessments (AEPS) and capture goals in an Individualised Education Programme (IEP). Progress is reviewed regularly with parents.",
              },
              {
                q: "How do subsidies work?",
                a: "We are an ECDA-approved provider and registered for Baby Bonus. Our team can guide you through the process of accessing available government support.",
              },
            ].map((faq, i) => (
              <div key={i} className="clay-card p-8 bg-white space-y-4">
                <div className="flex gap-4 items-start">
                  <HelpCircle className="text-brand-orange shrink-0" size={24} />
                  <h3 className="text-xl font-black text-gray-900 leading-tight">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-gray-600 font-medium leading-relaxed pl-10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
