import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";

const Privacy = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-black min-h-screen">
      <Seo
        path="/privacy"
        title="Privacy Policy"
        description="Aether Studio Privacy Policy — how we collect, use, and protect your personal data."
      />

      <section className="max-w-4xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Legal" }, { label: "Privacy Policy" }]} />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-blue-400">
          Legal
        </div>

        <h1 className="text-[2.8rem] sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-[1.05]">
          Privacy Policy
        </h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              Aether Studio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p className="mt-4">
              By accessing our website, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Personal Data</h3>
            <p>
              We may collect personally identifiable information such as your name, email address, and phone number when you fill out a contact form or communicate with us.
            </p>
            <h3 className="text-lg font-semibold text-white mt-4 mb-2">Usage Data</h3>
            <p>
              We automatically collect information about how you interact with our website, including IP address, browser type, pages visited, time spent, and referring URLs.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p>We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To improve our website and user experience</li>
              <li>To send occasional marketing communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share data with trusted third-party service providers who assist us in operating our website and business, subject to confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Access, update, or delete your personal data</li>
              <li>Withdraw consent at any time</li>
              <li>Object to processing of your data</li>
              <li>Request data portability</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, contact us at <span className="text-blue-400">privacy@aetherstudio.com</span>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies. Please refer to our <a href="/cookies" className="text-blue-400 hover:underline">Cookie Policy</a> for detailed information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not responsible for the privacy practices of these external services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <div className="mt-3 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <p className="text-white font-semibold">Aether Studio</p>
              <p className="mt-1">Email: <span className="text-blue-400">privacy@aetherstudio.com</span></p>
              <p>Address: 100 Innovation Drive, San Francisco, CA 94103</p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
