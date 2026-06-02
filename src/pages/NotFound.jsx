import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { ArrowLeft, Sparkles, Home, Layers, Mail } from "lucide-react";
import Prism from "../components/Prism";

const quickLinks = [
  { label: "Home", path: "/", icon: Home },
  { label: "Services", path: "/services", icon: Layers },
  { label: "Contact", path: "/contact", icon: Mail },
];

const NotFound = () => {
  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <Seo
        path="/404"
        title="404 — Page Not Found"
        description="The page you are looking for does not exist. Return to Aether Studio homepage."
      />

      {/* Background spotlights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[180px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[200px] rounded-full pointer-events-none"></div>

      {/* Prism background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Prism animationType="3drotate" timeScale={0.2} scale={2} />
      </div>

      <section className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-blue-400 backdrop-blur-md">
          <Sparkles size={11} />
          Error 404 — Page Not Found
        </div>

        {/* Large 404 */}
        <h1 className="text-[8rem] sm:text-[10rem] md:text-[14rem] font-black text-white mb-2 tracking-tight leading-[0.85] select-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
            404
          </span>
        </h1>

        {/* Glitch line */}
        <div className="w-24 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto mb-8 rounded-full"></div>

        {/* Message */}
        <p className="text-xl sm:text-2xl text-gray-300 font-bold mb-3">
          Lost in the digital void
        </p>
        <p className="text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
          The page you're trying to reach doesn't exist, was moved, or is taking a creative break. Let's get you somewhere useful.
        </p>

        {/* Main CTA */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 mb-10"
        >
          <ArrowLeft size={18} />
          Back to Home
        </Link>

        {/* Quick links */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center gap-2 px-5 py-3 bg-white/[0.03] border border-white/5 backdrop-blur-md rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <Icon size={16} className="text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default NotFound;
