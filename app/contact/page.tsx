import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 px-4 bg-brand-orange/5">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900">
            Contact & Visit Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
            We're here to answer your questions and welcome you to our centres.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Info */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-gray-900">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <a
                  href="https://wa.me/6593867654?text=Hi%20Train%20Kids!%20I%20would%20like%20to%20know%20more."
                  target="_blank"
                  className="flex items-center gap-6 p-6 clay-card bg-brand-green/5 border-brand-green/10 hover:bg-brand-green/10 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-green text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900">
                      WhatsApp (Primary)
                    </h4>
                    <p className="text-2xl font-black text-brand-green">
                      9386 7654
                    </p>
                  </div>
                </a>

                <a
                  href="tel:69088966"
                  className="flex items-center gap-6 p-6 clay-card bg-brand-blue/5 border-brand-blue/10 hover:bg-brand-blue/10 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-blue text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900">
                      Office Line
                    </h4>
                    <p className="text-2xl font-black text-brand-blue">
                      6908 8966
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:admin@trainkids.com.sg"
                  className="flex items-center gap-6 p-6 clay-card bg-brand-orange/5 border-brand-orange/10 hover:bg-brand-orange/10 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-gray-900">Email</h4>
                    <p className="text-xl font-black text-gray-700">
                      admin@trainkids.com.sg
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-8 pt-8">
              <h2 className="text-3xl font-black text-gray-900">
                Operating Hours
              </h2>
              <div className="clay-card p-8 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                  <span className="font-bold text-gray-600">Monday – Friday</span>
                  <span className="font-black text-gray-900">
                    7:30 AM – 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center text-gray-400">
                  <span className="font-bold">Saturday & Sunday</span>
                  <span className="font-black uppercase">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Centres */}
          <div className="space-y-12">
            <h2 className="text-4xl font-black text-gray-900">Our Centres</h2>

            <div className="space-y-8">
              <div className="clay-card p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-red flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">
                    Woodlands Centre
                  </h3>
                </div>
                <p className="text-xl text-gray-700 font-medium">
                  11 Woodlands Close, #01-10, <br />
                  Singapore 737853
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-600 flex items-center gap-2">
                    <Clock size={16} />
                    7:30 AM – 6:00 PM
                  </div>
                </div>
              </div>

              <div className="clay-card p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center text-white">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">
                    Tampines Centre
                  </h3>
                </div>
                <p className="text-xl text-gray-700 font-medium">
                  Blk 349 Tampines Street 33, #01-434, <br />
                  Singapore 520349
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-gray-100 rounded-full text-sm font-bold text-gray-600 flex items-center gap-2">
                    <Clock size={16} />
                    7:30 AM – 6:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="clay-card bg-brand-yellow/5 p-8 border-brand-yellow/10 space-y-6">
              <h4 className="text-xl font-black text-gray-900">
                What to expect when you contact us:
              </h4>
              <ul className="space-y-4">
                {[
                  "Send us a WhatsApp or call, no pressure",
                  "We'll understand your child's needs",
                  "Arrange a free centre visit",
                  "Discuss enrolment & support options",
                ].map((step, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center text-gray-900 font-black text-xs shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <p className="font-bold text-gray-700">{step}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-24 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-black text-gray-900">Visit Our Centres</h2>
            <p className="text-xl text-gray-600 font-medium">Find the location nearest to you.</p>
          </div>

          <div className="relative h-[500px] w-full clay-card bg-brand-blue/5 overflow-hidden border-none group">
            {/* Stylized Map Background (using a pattern or simple shapes) */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
            
            {/* Pins Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Woodlands Pin (North-Westish) */}
              <div className="absolute top-[20%] left-[25%] group/pin">
                <div className="relative">
                  <div className="w-12 h-12 bg-brand-red rounded-2xl flex items-center justify-center text-white shadow-xl animate-bounce cursor-pointer group-hover/pin:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 clay-card bg-white p-3 whitespace-nowrap shadow-lg">
                    <p className="font-black text-gray-900 text-sm">Woodlands Centre</p>
                    <Link href="https://maps.google.com/?q=11+Woodlands+Close+Singapore+737853" target="_blank" className="text-xs text-brand-blue font-bold hover:underline">Open in Maps</Link>
                  </div>
                </div>
              </div>

              {/* Tampines Pin (Eastish) */}
              <div className="absolute bottom-[30%] right-[20%] group/pin">
                <div className="relative">
                  <div className="w-12 h-12 bg-brand-green rounded-2xl flex items-center justify-center text-white shadow-xl animate-bounce-slow cursor-pointer group-hover/pin:scale-110 transition-transform">
                    <MapPin size={24} />
                  </div>
                  <div className="absolute top-14 left-1/2 -translate-x-1/2 clay-card bg-white p-3 whitespace-nowrap shadow-lg">
                    <p className="font-black text-gray-900 text-sm">Tampines Centre</p>
                    <Link href="https://maps.google.com/?q=Blk+349+Tampines+Street+33+Singapore+520349" target="_blank" className="text-xs text-brand-blue font-bold hover:underline">Open in Maps</Link>
                  </div>
                </div>
              </div>

              {/* Connecting Line (Stylized) */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" preserveAspectRatio="none">
                <path d="M 25% 20% Q 50% 50% 80% 70%" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="8 8" className="text-brand-blue" />
              </svg>
            </div>

            <div className="absolute bottom-8 left-8 right-8 text-center pointer-events-none">
              <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                Stylized location map • Click pins for directions
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
