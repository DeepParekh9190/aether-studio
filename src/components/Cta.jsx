import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, MessageSquare } from 'lucide-react';

const Cta = () => {
  return (
    <section className="py-20 md:py-36 relative overflow-hidden bg-black">
      {/* Dynamic Background Spotlight Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[160px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group relative bg-[#050505]/60 border border-white/5 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-24 text-center overflow-hidden shadow-2xl hover:border-blue-500/20 transition-all duration-700">
          
          {/* Inner Light Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[250px] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl pointer-events-none"></div>
          
          {/* Glowing Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles size={11} />
            Let's Collaborate
          </div>

          {/* Premium Gradient Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white mb-6 relative z-10 tracking-tight leading-[1.05] selection:bg-blue-500/30">
            Ready to build the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 filter drop-shadow-[0_2px_8px_rgba(59,130,246,0.2)]">
              extraordinary?
            </span>
          </h2>
          
          {/* Dynamic Copywriting */}
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed selection:bg-blue-500/30">
            Join the forward-thinking brands that partner with Aether Studio to engineer digital design, speed, and immersive visual mastery. Let's launch your vision.
          </p>
          
          {/* Actions & Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10 mb-10">
            <button className="relative group/btn overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center justify-center gap-2">
                Start Your Project <ArrowUpRight size={18} />
              </span>
            </button>
            
            <button className="flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md w-full sm:w-auto">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Schedule a Call
            </button>
          </div>

          {/* Core Response Time Indicator Widget */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm text-xs text-gray-500">
            <MessageSquare size={13} className="text-cyan-400" />
            Average Response Time: <span className="font-bold text-gray-300">Under 2 Hours</span>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
