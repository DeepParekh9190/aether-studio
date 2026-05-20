import { MonitorPlay, Palette, Rocket, Search, Sparkles } from 'lucide-react';
import Cta from '../components/Cta';

const services = [
  {
    icon: MonitorPlay,
    title: 'WebGL & 3D Experiences',
    description: 'We bring the web to life. Using three.js, react-three-fiber, and custom shaders, we build interactive 3D worlds that run seamlessly in the browser.',
    features: ['Custom Shaders', 'Interactive 3D Models', 'Performance Optimized', 'Creative Coding'],
    glowColor: 'hover:shadow-[0_20px_50px_rgba(168,85,247,0.2)] hover:border-purple-500/20',
    iconColor: 'text-purple-400 group-hover:text-purple-300',
    iconBg: 'bg-purple-950/10 border-purple-500/10',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Palette,
    title: 'Premium Web Design',
    description: 'Aesthetics matter. Our design team crafts bespoke, high-conversion interfaces tailored specifically to your brand identity and audience.',
    features: ['UI/UX Design', 'Design Systems', 'Interactive Prototypes', 'Brand Identity'],
    glowColor: 'hover:shadow-[0_20px_50px_rgba(236,72,153,0.2)] hover:border-pink-500/20',
    iconColor: 'text-pink-400 group-hover:text-pink-300',
    iconBg: 'bg-pink-950/10 border-pink-500/10',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Rocket,
    title: 'High-Performance Engineering',
    description: 'We build incredibly fast web applications using modern frameworks like React, Next.js, and Vite. Speed is a feature, and we max it out.',
    features: ['React & Next.js', 'Headless CMS Integration', 'API Development', 'State Management'],
    glowColor: 'hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)] hover:border-cyan-500/20',
    iconColor: 'text-cyan-400 group-hover:text-cyan-300',
    iconBg: 'bg-cyan-950/10 border-cyan-500/10',
    image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: Search,
    title: 'Technical SEO & Analytics',
    description: 'A beautiful site needs to be seen. We ensure your application is perfectly structured for search engines and set up with deep analytics tracking.',
    features: ['Core Web Vitals', 'Semantic HTML', 'Meta & OpenGraph', 'Custom Event Tracking'],
    glowColor: 'hover:shadow-[0_20px_50px_rgba(59,130,246,0.2)] hover:border-blue-500/20',
    iconColor: 'text-blue-400 group-hover:text-blue-300',
    iconBg: 'bg-blue-950/10 border-blue-500/10',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into your brand, goals, and audience to create a strategic roadmap.'
  },
  {
    step: '02',
    title: 'Design & Prototype',
    description: 'We craft high-fidelity designs and interactive prototypes to visualize the final product.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'Our engineers bring the designs to life with clean, scalable, and performant code.'
  },
  {
    step: '04',
    title: 'Launch & Scale',
    description: 'Rigorous testing, flawless deployment, and ongoing support to keep you growing.'
  }
];

const Services = () => {
  return (
    <div className="w-full pt-32 pb-0 bg-black min-h-screen">
      
      {/* Services Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-32 text-center relative overflow-hidden">
        {/* Spotlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>
        
        {/* Glowing Capsule Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-blue-400 relative z-10">
          <Sparkles size={11} />
          Capabilities
        </div>

        {/* Gradient Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 relative z-10 tracking-tight leading-[1.05] selection:bg-blue-500/30">
          Capabilities that <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 filter drop-shadow-[0_2px_8px_rgba(59,130,246,0.25)]">
            drive results.
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto relative z-10 selection:bg-blue-500/30 leading-relaxed">
          From award-winning visual design to complex real-time WebGL frontend engineering, we fuse artistic mastery with hardcore computing.
        </p>
      </section>

      {/* Detailed Services */}
      <section className="max-w-7xl mx-auto px-6 mb-36">
        <div className="space-y-16">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`group relative bg-white/[0.01] border border-white/5 rounded-[2.5rem] p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-all duration-700 backdrop-blur-2xl ${service.glowColor}`}
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none"></div>

                {/* Left/Top Content Column - lg:col-span-7 */}
                <div className={`lg:col-span-7 flex flex-col sm:flex-row gap-8 items-start relative z-10 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  {/* Circle Icon */}
                  <div className={`w-16 h-16 shrink-0 rounded-2xl border flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${service.iconBg}`}>
                    <Icon className={`w-8 h-8 transition-colors duration-500 ${service.iconColor}`} />
                  </div>
                  
                  {/* Text & Features */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-black text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300 tracking-tight">
                      {service.title}
                    </h2>
                    
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-3xl group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Grid Tags */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-gray-300 bg-white/5 border border-white/5 px-4 py-2 rounded-xl backdrop-blur-md hover:border-cyan-500/20 hover:text-white transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right/Image Column - lg:col-span-5 */}
                <div className={`lg:col-span-5 relative z-10 w-full h-full min-h-[300px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl group-hover:border-white/20 transition-all duration-500 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  {/* Subtle Neon Glow behind image */}
                  <div className="absolute -inset-10 opacity-30 group-hover:opacity-50 blur-[50px] transition-all duration-700 pointer-events-none rounded-full"></div>
                  {/* Image itself with scale hover */}
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                  {/* Inner overlay for nice shading */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="border-t border-white/5 bg-[#030303]/60 backdrop-blur-md py-36 relative overflow-hidden">
        <div className="absolute inset-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Header */}
          <div className="mb-24 text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Sparkles size={11} />
              Our Flow
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
              Our Proven Process
            </h2>
            
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              A highly structured roadmap built to deliver clean engineering, absolute transparency, and rapid scale.
            </p>
          </div>
          
          {/* Roadmap Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0"></div>
            
            {process.map((step, idx) => (
              <div key={idx} className="relative z-10 group text-center md:text-left">
                {/* Glowing step index bubble */}
                <div className="w-16 h-16 rounded-full bg-black border border-cyan-500/30 flex items-center justify-center text-lg font-black text-cyan-400 mb-6 shadow-[0_0_20px_rgba(6,182,212,0.15)] mx-auto md:mx-0 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all duration-300">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 group-hover:text-gray-300 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <Cta />

    </div>
  );
};

export default Services;
