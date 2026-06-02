import { motion } from "framer-motion";
import { Sparkles, Quote } from "lucide-react";
import testimonials from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-[#020202] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles size={11} />
            Client Stories
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tight">
            Trusted by <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">industry leaders</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Don't take our word for it. Here's what our partners have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-white/[0.01] border border-white/5 backdrop-blur-xl rounded-[2rem] p-8 hover:border-cyan-500/20 hover:shadow-[0_20px_50px_rgba(6,182,212,0.05)] transition-all duration-500"
            >
              <Quote size={24} className="text-cyan-400/30 mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.author} className="w-10 h-10 rounded-full object-cover grayscale" />
                <div>
                  <p className="text-white font-bold text-sm">{t.author}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
