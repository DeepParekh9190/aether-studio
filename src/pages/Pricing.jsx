import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import { Sparkles, Check, ArrowUpRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$15K",
    description: "For startups and early-stage brands looking to establish a premium web presence.",
    features: ["Custom Web Design", "Up to 5 Pages", "Responsive Development", "Basic SEO Setup", "1 Revision Round", "2 Weeks Delivery"],
    color: "from-blue-400 to-cyan-400",
    popular: false
  },
  {
    name: "Growth",
    price: "$35K",
    description: "For scaling companies that need a fully engineered digital experience with WebGL.",
    features: ["Everything in Starter", "Up to 12 Pages", "WebGL 3D Components", "Headless CMS Integration", "Performance Optimization", "4-6 Weeks Delivery", "Priority Support"],
    color: "from-cyan-400 to-purple-500",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations requiring a complete digital ecosystem with ongoing engineering.",
    features: ["Everything in Growth", "Unlimited Pages", "Full WebGL Experiences", "Custom API Development", "Dedicated Project Manager", "Ongoing Maintenance", "SLA Guarantee"],
    color: "from-purple-500 to-pink-500",
    popular: false
  }
];

const Pricing = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-black min-h-screen">
      <Seo
        path="/pricing"
        title="Pricing — Packages & Engagement Models"
        description="Flexible pricing for WebGL development, premium design, and engineering from Aether Studio."
      />

      <section className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Pricing" }]} />

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Sparkles size={11} />
            Investment
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 tracking-tight">
            Transparent <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">pricing</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Every project is unique. These packages are starting points — we'll tailor the scope to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative bg-white/[0.01] border rounded-[2rem] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? "border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.1)]"
                  : "border-white/5 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                  Most Popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className={`text-4xl font-black mb-2 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                {plan.price}
              </p>
              <p className="text-gray-500 text-sm mb-8 leading-relaxed">{plan.description}</p>

              <ul className="space-y-3 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <Check size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-[0_4px_30px_rgba(6,182,212,0.4)]"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                Get Started <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
