import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            At Train Kids Early Intervention & Educare Centre, we are committed
            to protecting the privacy and personal data of our students and
            their families. This Privacy Policy outlines how we collect, use,
            and safeguard your information.
          </p>
          <h2 className="text-2xl font-bold mt-8">Data Collection</h2>
          <p>
            We collect personal information necessary for enrolment and
            providing early intervention services, including names, contact
            details, and developmental history.
          </p>
          <h2 className="text-2xl font-bold mt-8">Use of Information</h2>
          <p>
            Information is used solely for the purpose of individualised
            education planning, progress monitoring, and communication with
            parents.
          </p>
          <h2 className="text-2xl font-bold mt-8">Data Security</h2>
          <p>
            We implement strict security measures to protect your data from
            unauthorized access or disclosure.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
