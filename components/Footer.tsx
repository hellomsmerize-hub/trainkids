import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, Phone, ArrowRight, Heart } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-white pt-24 pb-12 px-4 md:px-8 border-t border-surface">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
        <div className="lg:col-span-4 space-y-8">
          <Image
            src="/logo.png"
            alt="TrainKids Logo"
            width={200}
            height={66}
            className="h-16 w-auto"
          />
          <p className="text-ink-light text-lg leading-relaxed font-medium max-w-sm">
            We Teach • We Guide • We Encourage. Supporting every child's journey
            with love and expert care since 2015.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/trainkids.specialneeds"
              target="_blank"
              className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all shadow-inner group"
              aria-label="Facebook"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-6 h-6"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </Link>
            <Link
              href="mailto:admin@trainkids.com.sg"
              className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all shadow-inner"
            >
              <Mail size={24} />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <h4 className="text-xl font-black text-ink">Programmes</h4>
          <ul className="space-y-4">
            {[
              { name: "Early Intervention", color: "brand-red" },
              { name: "Occupational Therapy", color: "brand-green" },
              { name: "Speech Therapy", color: "brand-blue" },
              { name: "Student Care", color: "brand-orange" },
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  href="/programmes" 
                  className={`text-ink-light hover:text-${item.color} font-bold transition-all flex items-center gap-2 group`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full bg-${item.color} opacity-0 group-hover:opacity-100 transition-all`} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-8">
          <h4 className="text-xl font-black text-ink">Our Centres</h4>
          <ul className="space-y-6">
            <li className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0 group-hover:rotate-12 transition-transform">
                <MapPin size={20} />
              </div>
              <div className="text-ink-light text-sm font-medium">
                <strong className="text-ink block mb-1">Woodlands</strong>
                11 Woodlands Close, #01-10, S737853
              </div>
            </li>
            <li className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 group-hover:rotate-12 transition-transform">
                <MapPin size={20} />
              </div>
              <div className="text-ink-light text-sm font-medium">
                <strong className="text-ink block mb-1">Tampines</strong>
                Blk 349 Tampines St 33, #01-434, S520349
              </div>
            </li>
            <li className="flex gap-4 group">
              <Link 
                href={getWhatsAppLink("GENERAL_CONTACT")}
                target="_blank"
                className="flex gap-4 w-full"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 group-hover:rotate-12 transition-transform">
                  <MessageCircle size={20} />
                </div>
                <div className="text-ink-light text-sm font-medium">
                  <strong className="text-ink block mb-1">WhatsApp</strong>
                  9386 7654 (Mon—Fri, 9am—6pm)
                </div>
              </Link>
            </li>
            <li className="flex gap-4 group">
              <Link 
                href="tel:69088966"
                className="flex gap-4 w-full"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 group-hover:rotate-12 transition-transform">
                  <Phone size={20} />
                </div>
                <div className="text-ink-light text-sm font-medium">
                  <strong className="text-ink block mb-1">Office Line</strong>
                  6908 8966 (Mon—Fri, 9am—6pm)
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-8">
          <h4 className="text-xl font-black text-ink">Quick Links</h4>
          <div className="grid grid-cols-1 gap-4">
            {[
              { name: "About Us", href: "/about" },
              { name: "Therapy Tips", href: "/tips" },
              { name: "Student Showcase", href: "/showcase" },
              { name: "Contact & Visit", href: "/contact" },
            ].map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="clay-button bg-surface text-ink px-6 py-3 flex items-center justify-between group hover:bg-brand-green hover:text-white"
              >
                <span className="font-bold">{link.name}</span>
                <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-12 border-t border-surface flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2 text-ink-light font-bold">
          <Heart size={16} className="text-brand-red animate-pulse" />
          <p className="text-sm">
            © 2026 Train Kids Early Intervention & Educare Centre.
          </p>
        </div>
        <div className="flex gap-10 text-sm font-bold text-ink-light">
          <Link href="/privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-brand-green transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
