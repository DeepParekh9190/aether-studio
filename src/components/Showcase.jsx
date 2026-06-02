import { ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Aero Dynamics',
    category: 'E-Commerce Platform',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-600 to-cyan-400',
    stats: { label: 'Speed Score', value: '100%' },
    delay: '0ms'
  },
  {
    title: 'Neon Financial',
    category: 'Fintech Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-600 to-pink-500',
    stats: { label: 'Conversion Lift', value: '+240%' },
    delay: '100ms'
  },
  {
    title: 'Lumina Studio',
    category: 'Creative Portfolio',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
    color: 'from-amber-400 to-orange-500',
    stats: { label: 'SEO Authority', value: '99/100' },
    delay: '200ms'
  }
];

const Showcase = () => {
  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4/5 h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Aesthetic Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Sparkles size={11} />
              Case Studies
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1] selection:bg-blue-500/30">
              Selected Works
            </h2>
            
            <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed selection:bg-blue-500/30">
              A glimpse into digital spaces we've engineered for forward-thinking brands pushing the boundaries of web experiences.
            </p>
          </div>
          
          <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 font-semibold transition-all group pb-2 border-b border-white/10 hover:border-cyan-500/50 cursor-pointer">
            View All Projects
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Premium Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative rounded-3xl overflow-hidden cursor-pointer aspect-[4/5] bg-gray-950 border border-white/5 hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-700"
            >
              {/* Background Portfolio Image */}
              <div className="absolute inset-0">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-40 group-hover:scale-[1.04] transition-all duration-[1000ms] ease-out"
                />
              </div>
              
              {/* Vibrant Hover Overlay Gradient */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-50 bg-gradient-to-tr ${project.color} mix-blend-overlay transition-opacity duration-700`}></div>
              
              {/* Backing Dark Shadows */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"></div>

              {/* FLOATING GLASS STATS WIDGET (Top Right - Reveals on hover) */}
              <div className="absolute top-6 right-6 p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">{project.stats.label}</p>
                <p className={`text-sm font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                  {project.stats.value}
                </p>
              </div>

              {/* Lower Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-1.5 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <p className="text-gray-300 font-medium text-xs tracking-wide uppercase">
                    {project.category}
                  </p>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
