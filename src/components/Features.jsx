import { motion } from "framer-motion";
import { Code, Zap, Layers, Smartphone, Sparkles } from 'lucide-react';

const features = [
  {
    name: 'Interactive WebGL',
    description: 'We build stunning 3D experiences that run flawlessly in the browser, captivating your audience from the first second.',
    icon: Layers,
    glowColor: 'group-hover:shadow-[0_15px_40px_-10px_rgba(168,85,247,0.35)] group-hover:border-purple-500/30',
    iconColor: 'text-purple-400 group-hover:text-purple-300',
    iconBg: 'bg-purple-950/10 border-purple-500/10'
  },
  {
    name: 'Lightning Performance',
    description: 'Optimized architectures and modern frameworks ensure your site loads instantly and runs smoothly on all devices.',
    icon: Zap,
    glowColor: 'group-hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.35)] group-hover:border-cyan-500/30',
    iconColor: 'text-cyan-400 group-hover:text-cyan-300',
    iconBg: 'bg-cyan-950/10 border-cyan-500/10'
  },
  {
    name: 'Pixel-Perfect Design',
    description: 'Every interface is crafted with obsessive attention to detail, ensuring a premium feel across your entire digital footprint.',
    icon: Smartphone,
    glowColor: 'group-hover:shadow-[0_15px_40px_-10px_rgba(236,72,153,0.35)] group-hover:border-pink-500/30',
    iconColor: 'text-pink-400 group-hover:text-pink-300',
    iconBg: 'bg-pink-950/10 border-pink-500/10'
  },
  {
    name: 'Scalable Architecture',
    description: 'Built on rock-solid foundations, our codebases are designed to grow with your business without accumulating tech debt.',
    icon: Code,
    glowColor: 'group-hover:shadow-[0_15px_40px_-10px_rgba(59,130,246,0.35)] group-hover:border-blue-500/30',
    iconColor: 'text-blue-400 group-hover:text-blue-300',
    iconBg: 'bg-blue-950/10 border-blue-500/10'
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-[#020202] relative overflow-hidden">
      {/* Dynamic Background Spotlights */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Modern Centered Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Sparkles size={11} />
            Our Expertise
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1] selection:bg-blue-500/30">
            Supercharged capabilities <br className="hidden sm:block" />
            to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">elevate your vision.</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed selection:bg-blue-500/30">
            We don't just build websites. We engineer high-performance, immersive digital experiences that capture attention and drive real scale.
          </p>
        </div>

        {/* Responsive Premium Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className={`group relative bg-white/[0.02] border border-white/5 backdrop-blur-xl p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2.5 ${feature.glowColor}`}
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Animated Icon Ring */}
                <div className={`w-14 h-14 rounded-xl border flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${feature.iconBg}`}>
                  <Icon className={`w-6 h-6 transition-colors duration-500 ${feature.iconColor}`} />
                </div>
                
                {/* Headline & Body */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {feature.name}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
