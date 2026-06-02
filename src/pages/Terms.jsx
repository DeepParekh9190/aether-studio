import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";

const Terms = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-black min-h-screen">
      <Seo
        path="/terms"
        title="Terms of Service"
        description="Aether Studio Terms of Service — the terms governing your use of our website and services."
      />

      <section className="max-w-4xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Legal" }, { label: "Terms of Service" }]} />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-blue-400">
          Legal
        </div>

        <h1 className="text-[2.8rem] sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-[1.05]">
          Terms of Service
        </h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Aether Studio website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Services Description</h2>
            <p>
              Aether Studio provides creative digital production services including WebGL development, UI/UX design, and engineering consulting. The specifics of each engagement are outlined in separate project agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Intellectual Property</h2>
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Our Content</h3>
            <p>
              All content on this website — including text, graphics, logos, and code — is the property of Aether Studio and is protected by applicable intellectual property laws.
            </p>
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Deliverables</h3>
            <p>
              Upon full payment, clients receive the rights to deliverables as specified in their project agreement. Aether Studio retains the right to display completed work in its portfolio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. User Obligations</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Use our services for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of our website</li>
              <li>Reproduce, distribute, or modify our content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
            <p>
              Aether Studio shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services. Our total liability is limited to the amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Warranties</h2>
            <p>
              Our services are provided "as is" without warranty of any kind, either express or implied. We do not guarantee that our website will be uninterrupted or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Payment Terms</h2>
            <p>
              Payment terms are specified in individual project agreements. Late payments may result in project delays and suspension of services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Confidentiality</h2>
            <p>
              Both parties agree to maintain the confidentiality of proprietary information shared during the course of a project. This obligation survives the termination of our agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Termination</h2>
            <p>
              Either party may terminate a project agreement in accordance with its terms. Upon termination, you must pay for all services rendered up to the date of termination.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Governing Law</h2>
            <p>
              These terms are governed by the laws of the State of California. Any disputes shall be resolved in the courts of San Francisco County.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">11. Contact</h2>
            <div className="mt-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <p className="text-white font-semibold">Aether Studio</p>
              <p className="mt-1">Email: <span className="text-blue-400">legal@aetherstudio.com</span></p>
              <p>Address: 100 Innovation Drive, San Francisco, CA 94103</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Terms;
