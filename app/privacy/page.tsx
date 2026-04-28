import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-surface">
      <Navbar />
      <section className="pt-40 pb-24 px-4 max-w-4xl mx-auto relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-brand-green/20" />
        <h1 className="text-5xl md:text-7xl font-black text-ink mb-12 leading-[0.95]">
          Privacy <span className="text-brand-green">Policy</span>
        </h1>
        
        <div className="clay-card p-10 md:p-16 bg-white space-y-10">
          <div className="space-y-4">
            <p className="text-xl text-ink-light font-medium leading-relaxed">
              At Train Kids Early Intervention & Educare Centre, we are committed
              to protecting the privacy and personal data of our students and
              their families. This Privacy Policy outlines how we collect, use,
              and safeguard your information.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-ink">1. Data Collection</h2>
            <p className="text-lg text-ink-light font-medium leading-relaxed">
              We collect personal information necessary for enrolment and
              providing early intervention services, including names, contact
              details, and developmental history. This information is collected 
              directly from parents or guardians during the enrolment process.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-ink">2. Use of Information</h2>
            <p className="text-lg text-ink-light font-medium leading-relaxed">
              Information is used solely for the purpose of individualised
              education planning, progress monitoring, and essential communication with
              parents. We do not share your personal data with third parties for 
              marketing purposes.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-ink">3. Data Security</h2>
            <p className="text-lg text-ink-light font-medium leading-relaxed">
              We implement strict physical and digital security measures to protect 
              your data from unauthorized access, disclosure, or alteration. Access 
              to sensitive developmental records is restricted to authorized 
              therapeutic and educational staff.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-black text-ink">4. Your Rights</h2>
            <p className="text-lg text-ink-light font-medium leading-relaxed">
              Parents have the right to access, correct, or request the deletion 
              of their child's personal data. For any inquiries regarding data 
              privacy, please contact our administrative office directly.
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
