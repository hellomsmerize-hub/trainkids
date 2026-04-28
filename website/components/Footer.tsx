import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Image
            src="/logo.png"
            alt="TrainKids Logo"
            width={200}
            height={66}
            className="mb-6 h-16 w-auto"
          />
          <p className="text-gray-600 mb-6 leading-relaxed">
            We Teach. We Guide. We Encourage. Supporting every child's journey
            with love and expert care since 2015.
          </p>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/trainkids.specialneeds"
              className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue hover:bg-brand-blue hover:text-white transition-all"
            >
              <MessageCircle size={20} />
            </Link>
            <Link
              href="mailto:admin@trainkids.com.sg"
              className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white transition-all"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-800">Programmes</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/programmes" className="text-gray-600 hover:text-brand-red">
                Early Intervention (EIP)
              </Link>
            </li>
            <li>
              <Link href="/programmes" className="text-gray-600 hover:text-brand-green">
                Occupational Therapy
              </Link>
            </li>
            <li>
              <Link href="/programmes" className="text-gray-600 hover:text-brand-yellow">
                Speech Therapy
              </Link>
            </li>
            <li>
              <Link href="/programmes" className="text-gray-600 hover:text-brand-blue">
                Before & After School Care
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-800">Our Centres</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <MapPin className="text-brand-red shrink-0" size={20} />
              <span className="text-gray-600 text-sm">
                <strong>Woodlands:</strong> 11 Woodlands Close, #01-10, S737853
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="text-brand-green shrink-0" size={20} />
              <span className="text-gray-600 text-sm">
                <strong>Tampines:</strong> Blk 349 Tampines St 33, #01-434, S520349
              </span>
            </li>
            <li className="flex gap-3 pt-2">
              <Phone className="text-brand-orange shrink-0" size={20} />
              <span className="text-gray-600 text-sm">9386 7654 (WhatsApp)</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-gray-800">Quick Links</h4>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-gray-600 hover:text-brand-green">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/tips" className="text-gray-600 hover:text-brand-green">
                Therapy Tips
              </Link>
            </li>
            <li>
              <Link href="/showcase" className="text-gray-600 hover:text-brand-green">
                Student Showcase
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-brand-green">
                Contact & Visit
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-gray-100 flex flex-col md:row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © 2026 Train Kids Early Intervention & Educare Centre. All rights
          reserved.
        </p>
        <div className="flex gap-8 text-sm text-gray-400">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
