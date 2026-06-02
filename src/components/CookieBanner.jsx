import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    return !localStorage.getItem("cookie-consent");
  });

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[90] p-4 md:p-6">
      <div className="max-w-5xl mx-auto bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-400 flex-1 leading-relaxed">
          We use cookies to enhance your experience. By continuing, you agree to our{" "}
          <Link to="/cookies" className="text-cyan-400 hover:underline">Cookie Policy</Link>.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-xs font-semibold text-gray-400 hover:text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:shadow-[0_4px_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
          >
            Accept All
          </button>
        </div>
        <button onClick={reject} aria-label="Close" className="text-gray-500 hover:text-white transition-colors cursor-pointer">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
