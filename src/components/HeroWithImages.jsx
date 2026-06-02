import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Sparkles, Zap, ShieldCheck, Award } from "lucide-react";

const HeroWithImages = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Normalize coordinates between -1 and 1
    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
    const y = (e.clientY - rect.top) / rect.height * 2 - 1;
    
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const stats = [
    { value: "150+", label: "Brands Scaled", icon: Zap, color: "from-blue-500 to-cyan-400" },
    { value: "99.8%", label: "Satisfaction", icon: ShieldCheck, color: "from-cyan-400 to-teal-400" },
    { value: "25+", label: "Design Awards", icon: Award, color: "from-purple-500 to-pink-500" }
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-black"
    >
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[200px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* Left Column: Typography, CTAs & Stats */}
        <div className="flex flex-col items-start text-left lg:col-span-6">
          
          {/* Glowing Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-gray-200 shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:border-blue-500/30 transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="flex items-center gap-1.5 text-xs tracking-wide uppercase text-cyan-400">
              <Sparkles size={12} />
              Aether Studio v2.0
            </span>
          </div>
          
          {/* Premium Headline */}
          <h1 className="text-[2.5rem] sm:text-6xl lg:text-[5.2rem] font-black tracking-tight text-white mb-6 leading-[1.05] selection:bg-blue-500/30">
            We shape the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 filter drop-shadow-[0_2px_10px_rgba(59,130,246,0.2)]">
              digital future
            </span> <br />
            of visionary brands.
          </h1>
          
          {/* Body Description */}
          <p className="text-base sm:text-lg text-gray-400 mb-10 max-w-xl leading-relaxed selection:bg-blue-500/30">
            A creative studio blending immersive visual artistry with robust engineering. We build next-generation websites, digital products, and brands that dominate their spaces.
          </p>
          
          {/* Action CTAs */}
          <div className="flex flex-wrap gap-5 mb-14">
            <button className="relative group overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.3)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:-translate-y-0.5">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2">
                Launch Project <ArrowUpRight size={18} />
              </span>
            </button>
            
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md">
              Explore Works
            </button>
          </div>

          {/* Grid Statistics */}
          <div className="grid grid-cols-3 gap-6 w-full border-t border-white/5 pt-10">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="group/stat flex flex-col">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="p-1 rounded-md bg-white/5 text-gray-400 group-hover/stat:text-white transition-colors duration-300">
                      <Icon size={14} />
                    </div>
                    <span className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-500 tracking-wide font-medium">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

        {/* Right Column: 3D Asymmetric Parallax Collage */}
        <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] lg:h-[650px] flex items-center justify-center pointer-events-none select-none">
          
          {/* Glow Behind Collage */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

          {/* Collage Container */}
          <div className="relative w-full h-full max-w-[500px] flex items-center justify-center">
            
            {/* CARD 1: Base Layer (Vibrant Abstract Art Background) */}
            <div 
              style={{
                transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0px) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg)`,
                transition: isHovered ? "none" : "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
              }}
              className="absolute left-0 top-8 sm:top-12 w-[90%] sm:w-[85%] aspect-[1.1] rounded-3xl overflow-hidden border border-white/5 bg-gray-950/40 shadow-2xl shadow-black/80"
            >
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80" 
                alt="Aether Studio — vibrant digital fluid abstract art background" 
                fetchpriority="high"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              {/* Overlay Mockup UI Elements */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 p-3 sm:p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Aether Labs</p>
                  <p className="text-sm font-bold text-white">Fluidic Engine v3</p>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                </div>
              </div>
            </div>

            {/* CARD 2: Mid Layer (Vibrant 3D Abstract Geometry - Top Right Overlay) */}
            <div 
              style={{
                transform: `translate3d(${mousePos.x * -22}px, ${mousePos.y * -22}px, 0px) rotateX(${mousePos.y * 6}deg) rotateY(${mousePos.x * -6}deg)`,
                transition: isHovered ? "none" : "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
              }}
              className="absolute right-0 top-1/4 sm:top-1/5 w-[60%] sm:w-[55%] aspect-[0.95] rounded-3xl overflow-hidden border border-white/10 bg-gray-900/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-sm"
            >
              <img 
                src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80" 
                alt="Aether Studio — 3D metallic abstract geometry render" 
                loading="lazy"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-transparent mix-blend-color-add"></div>
              
              {/* Glass Tag */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2 sm:px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                <span className="text-[9px] font-bold text-purple-400 uppercase tracking-widest">3D Render</span>
              </div>
            </div>

            {/* CARD 3: Top Layer (High-Tech Dashboard Widget - Bottom Left Overlay) */}
            <div 
              style={{
                transform: `translate3d(${mousePos.x * 32}px, ${mousePos.y * 32}px, 0px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8}deg)`,
                transition: isHovered ? "none" : "transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)"
              }}
              className="absolute left-4 sm:left-6 bottom-12 sm:bottom-16 w-[52%] sm:w-[48%] rounded-2xl border border-white/15 bg-black/80 p-4 sm:p-5 shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">System Hub</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono font-bold">100% Core</span>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                {/* Metric 1 */}
                <div>
                  <div className="flex justify-between text-[11px] font-medium text-gray-300 mb-1">
                    <span>Performance</span>
                    <span className="text-cyan-400">99.2%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[99%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                  </div>
                </div>
                {/* Metric 2 */}
                <div>
                  <div className="flex justify-between text-[11px] font-medium text-gray-300 mb-1">
                    <span>Fidelity Level</span>
                    <span className="text-purple-400">100%</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroWithImages;
