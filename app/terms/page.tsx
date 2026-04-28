import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-black mb-8">Terms of Service</h1>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Welcome to Train Kids Early Intervention & Educare Centre. By
            accessing our website and services, you agree to comply with and be
            bound by the following terms and conditions.
          </p>
          <h2 className="text-2xl font-bold mt-8">Enrolment & Services</h2>
          <p>
            All services are provided based on the individualised needs of the
            child as assessed by our multidisciplinary team.
          </p>
          <h2 className="text-2xl font-bold mt-8">Parent Responsibilities</h2>
          <p>
            Parents are expected to be involved in the Individualised Education
            Programme (IEP) and follow through with take-home strategies for
            best results.
          </p>
          <h2 className="text-2xl font-bold mt-8">Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Any changes
            will be updated on this page.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
