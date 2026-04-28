import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Heart, Users, Shield, Award, MessageCircle } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-brand-red/5">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900">
            How Train Kids Started
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Founded with a simple but powerful belief: children with
            developmental needs deserve more time to learn, not less.
          </p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
            <p>
              Train Kids was founded by two Early Interventionists who began
              their careers working in a Voluntary Welfare Organisation (VWO)
              early intervention centre. Through their years on the ground, they
              saw firsthand how much families needed and how much more could
              be done with the right structure in place.
            </p>
            <p className="border-l-4 border-brand-red pl-6 py-2 italic text-2xl font-bold text-gray-900 bg-brand-red/5 rounded-r-xl">
              "What drove us to set up Train Kids was a simple but powerful
              belief: children with developmental needs deserve more time to
              learn, not less."
            </p>
            <p>
              Many existing programmes offered limited session hours, leaving
              little room for meaningful progress or for parents to catch their
              breath. Train Kids was built to change that.
            </p>
            <p>
              From the start, the centre offered longer sessions of up to four
              hours, giving each child the time and space to truly engage with
              learning, and giving parents the much-needed respite to attend to
              their own wellbeing. Because when parents are supported, children
              thrive too.
            </p>
            <p>
              Today, that founding philosophy remains at the heart of everything
              Train Kids does: unhurried, individualised intervention that meets
              each child where they are and walks with them, every step of the
              way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 bg-brand-blue/5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="clay-card p-12 bg-white space-y-8">
            <h2 className="text-3xl font-black text-brand-blue uppercase tracking-widest">
              Our Mission
            </h2>
            <p className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
              "To provide every child with a solid foundation in learning and
              independent skills because every child deserves the right to
              education and early intervention."
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Our Multidisciplinary Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              A dedicated group of professionals working together for your
              child's success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div key={i} className="clay-card p-10 text-center space-y-6">
                <div
                  className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-${member.color}/10 text-${member.color} shadow-lg`}
                >
                  <member.icon size={40} />
                </div>
                <h3 className="text-2xl font-black text-gray-800">
                  {member.role}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {member.desc}
                </p>
                <p className="text-sm font-bold text-gray-400">
                  All staff trained in AEPS & Evidence-based approaches
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900">
                Credentials & Recognition
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center text-white shrink-0">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      ECDA-Approved Provider
                    </h4>
                    <p className="text-gray-600 font-medium">
                      Train Kids is an approved Early Intervention Programme
                      provider under ECDA.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center text-white shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      Baby Bonus Eligibility
                    </h4>
                    <p className="text-gray-600 font-medium">
                      Registered with SG Baby Bonus for most programmes, making
                      quality care more accessible.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      Government Subsidies
                    </h4>
                    <p className="text-gray-600 font-medium">
                      We support families in accessing available government
                      subsidies for early intervention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clay-card p-12 bg-white text-center space-y-6">
              <div className="w-24 h-24 bg-brand-yellow/20 rounded-full flex items-center justify-center mx-auto">
                <Heart size={48} className="text-brand-orange" />
              </div>
              <h3 className="text-2xl font-black text-gray-900">
                Individualised, Evidence-based, Family-centred
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed">
                Our approach is rooted in standard assessment tools (AEPS) and
                continuous progress monitoring, ensuring your child receives the
                most effective support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
