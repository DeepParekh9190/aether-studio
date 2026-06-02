import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";

const Cookies = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-black min-h-screen">
      <Seo
        path="/cookies"
        title="Cookie Policy"
        description="Aether Studio Cookie Policy — how we use cookies and similar tracking technologies."
      />

      <section className="max-w-4xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Legal" }, { label: "Cookie Policy" }]} />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-blue-400">
          Legal
        </div>

        <h1 className="text-[2.8rem] sm:text-5xl md:text-6xl font-black text-white mb-4 tracking-tight leading-[1.05]">
          Cookie Policy
        </h1>
        <p className="text-gray-500 text-sm mb-12">Last updated: June 1, 2026</p>

        <div className="prose prose-invert prose-gray max-w-none space-y-8 text-gray-300 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device by your web browser. They help websites function properly, improve user experience, and provide analytics information to site owners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function correctly</li>
              <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
              <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white font-semibold py-3 pr-4">Cookie Type</th>
                    <th className="text-left text-white font-semibold py-3 pr-4">Purpose</th>
                    <th className="text-left text-white font-semibold py-3">Duration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr>
                    <td className="py-3 pr-4 text-gray-300">session</td>
                    <td className="py-3 pr-4 text-gray-300">Maintains your session state</td>
                    <td className="py-3 text-gray-300">Session</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-300">_ga</td>
                    <td className="py-3 pr-4 text-gray-300">Google Analytics — distinguishes users</td>
                    <td className="py-3 text-gray-300">2 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-300">_gid</td>
                    <td className="py-3 pr-4 text-gray-300">Google Analytics — distinguishes users</td>
                    <td className="py-3 text-gray-300">24 hours</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-gray-300">preferences</td>
                    <td className="py-3 pr-4 text-gray-300">Stores your cookie consent preferences</td>
                    <td className="py-3 text-gray-300">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">4. Third-Party Cookies</h2>
            <p>
              We may use third-party services (such as Google Analytics) that place their own cookies on your device. These services have their own privacy policies governing data use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">5. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Block all cookies</li>
              <li>Delete existing cookies</li>
              <li>Set preferences for specific websites</li>
            </ul>
            <p className="mt-3">
              Please note that disabling certain cookies may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">6. Your Consent</h2>
            <p>
              By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">7. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically. Any changes will be posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-4">8. Contact</h2>
            <p>
              If you have questions about our use of cookies, contact us at <span className="text-blue-400">privacy@aetherstudio.com</span>.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Cookies;
