import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { Sparkles } from "lucide-react";

const links = [
  { section: "Main", items: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
    { label: "Pricing", path: "/pricing" },
  ]},
  { section: "Legal", items: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Cookie Policy", path: "/cookies" },
  ]},
];

const Sitemap = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-black min-h-screen">
      <Seo
        path="/sitemap"
        title="Sitemap"
        description="Browse all pages on Aether Studio."
      />

      <section className="max-w-4xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Sitemap" }]} />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-blue-400">
          <Sparkles size={11} />
          Pages
        </div>

        <h1 className="text-4xl sm:text-5xl font-black text-white mb-12 tracking-tight">
          Sitemap
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {links.map((group) => (
            <div key={group.section}>
              <h2 className="text-lg font-bold text-white mb-6 pb-2 border-b border-white/5">{group.section}</h2>
              <ul className="space-y-4">
                {group.items.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                      {link.label}
                    </Link>
                    <p className="text-gray-600 text-xs mt-0.5">https://aetherstudio.com{link.path}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Sitemap;
