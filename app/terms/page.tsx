import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <section className="pt-40 pb-24 px-4 max-w-4xl mx-auto relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-orange/20" />
        <h1 className="text-5xl md:text-7xl font-black text-ink mb-12 leading-[0.95]">
          Terms of <span className="text-brand-orange">Service</span>
        </h1>
        
        <div className="clay-card p-10 md:p-16 bg-white space-y-10">
          <div className="space-y-4">
            <p className="text-xl text-ink-light font-medium leading-relaxed">
              Welcome to Train Kids Early Intervention & Educare Centre. By
              accessing our website and using our services, you agree to comply with and be
              bound by the following terms and conditions.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-ink">1. Enrolment & Services</h2>
            <p className="text-lg text-ink-light font-medium leading-relaxed">
              All services, including Early Intervention and specialized therapies, 
              are provided based on the individualized needs of the child as assessed 
              by our multidisciplinary team. Enrolment is subject to availability 
              and completion of the necessary administrative procedures.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-ink">2. Parent Responsibilities</h2>
            <p className="text-lg text-ink-light font-medium leading-relaxed">
              We believe in a partnership approach. Parents are expected to be 
              actively involved in the Individualised Education Programme (IEP) 
              meetings and follow through with recommended take-home strategies 
              to ensure the best possible outcomes for their child.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-ink">3. Fees & Subsidies</h2>
            <p className="text-lg text-ink-light font-medium leading-relaxed">
              Programme fees must be paid in accordance with the agreed schedule. 
              While we provide administrative support for government subsidies 
              (ECDA/CDA), the final responsibility for fee settlement rests with 
              the parents or guardians.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-ink">4. Modifications</h2>
            <p className="text-lg text-ink-light font-medium leading-relaxed">
              Train Kids reserves the right to modify these terms, our curriculum, 
              or centre policies at any time. Any significant changes will be 
              communicated to parents via our official channels.
            </p>
          </div>

          <div className="pt-10 border-t border-surface">
            <p className="text-sm font-black text-ink/20 uppercase tracking-widest">
              Last Updated: October 2023
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
