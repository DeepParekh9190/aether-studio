import Seo from "../components/Seo";
import { Users, Target, Zap, Heart, Sparkles } from 'lucide-react';

const stats = [
  { label: 'Projects Delivered', value: '150+', color: 'from-blue-400 to-cyan-400' },
  { label: 'Global Clients', value: '45+', color: 'from-cyan-400 to-teal-400' },
  { label: 'Team Members', value: '24', color: 'from-purple-400 to-pink-500' },
  { label: 'Years Experience', value: '8+', color: 'from-blue-400 to-indigo-500' },
];

const values = [
  {
    icon: Target,
    title: 'Precision First',
    description: 'We measure twice and cut once. Every pixel, every line of code is intentional, optimized, and built to stand the test of time.',
    glowColor: 'group-hover:shadow-[0_15px_40px_-10px_rgba(245,158,11,0.3)] group-hover:border-amber-500/30',
    iconBg: 'bg-amber-950/10 border-amber-500/10 text-amber-400'
  },
  {
    icon: Zap,
    title: 'Relentless Innovation',
    description: 'We constantly explore the bleeding edge of web technologies like WebGL, WebGPU, and advanced real-time physics simulators.',
    glowColor: 'group-hover:shadow-[0_15px_40px_-10px_rgba(6,182,212,0.3)] group-hover:border-cyan-500/30',
    iconBg: 'bg-cyan-950/10 border-cyan-500/10 text-cyan-400'
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'We act as a direct extension of your brand, fostering transparent, real-time communication and building mutual long-term growth.',
    glowColor: 'group-hover:shadow-[0_15px_40px_-10px_rgba(59,130,246,0.3)] group-hover:border-blue-500/30',
    iconBg: 'bg-blue-950/10 border-blue-500/10 text-blue-400'
  },
  {
    icon: Heart,
    title: 'Passion Driven',
    description: 'We build digital products because we love the craft. Creating immersive, breathtaking web landscapes is hardwired into our DNA.',
    glowColor: 'group-hover:shadow-[0_15px_40px_-10px_rgba(236,72,153,0.3)] group-hover:border-pink-500/30',
    iconBg: 'bg-pink-950/10 border-pink-500/10 text-pink-400'
  }
];

const team = [
  {
    name: 'Alex Rivera',
    role: 'Founder & Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Sarah Chen',
    role: 'Lead WebGL Engineer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Product Design',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  }
];

const About = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-black min-h-screen">
      <Seo
        path="/about"
        title="About — WebGL Engineering & Design Team"
        description="Meet Aether Studio — a creative digital production collective pushing the limits of modern browser capability with WebGL, premium design, and scalable engineering."
      />
      
      {/* About Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-32 relative overflow-hidden">
        {/* Dynamic Backglow spotlights */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Glowing Capsule Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <Sparkles size={11} />
              Our Story
            </div>

            {/* Premium Gradient Headline */}
            <h1 className="text-[2.8rem] sm:text-5xl md:text-7xl lg:text-[4.5rem] font-black text-white mb-8 tracking-tight leading-[1.05] selection:bg-blue-500/30">
              We build the <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 filter drop-shadow-[0_2px_8px_rgba(59,130,246,0.25)]">
                impossible.
              </span>
            </h1>

            {/* Body */}
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl selection:bg-blue-500/30">
              Aether Studio is a creative digital production collective pushing the limits of modern browser capability. We combine extreme backend performance and pixel engineering with absolute artistic excellence.
            </p>
          </div>

          {/* Right Column: Layered Collage */}
          <div className="lg:col-span-5 relative w-full h-[300px] sm:h-[400px] flex items-center justify-center pointer-events-none select-none">
            {/* Collage Container */}
            <div className="relative w-full h-full max-w-[400px]">
              {/* Back Card: Studio Workspace */}
              <div className="absolute left-0 top-4 sm:top-6 w-[88%] sm:w-[85%] aspect-[1.1] rounded-3xl overflow-hidden border border-white/5 bg-gray-950/40 shadow-2xl hover:border-cyan-500/20 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80" 
                  alt="Aether Studio creative workspace — modern design studio environment" 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
              </div>

              {/* Front Overlapping Card: High-Tech Analytics Grid */}
              <div className="absolute right-0 bottom-4 sm:bottom-6 w-[65%] sm:w-[60%] aspect-[1] rounded-2xl overflow-hidden border border-white/10 bg-black/80 p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="Aether Studio — real-time system analytics and performance dashboard" 
                  loading="lazy"
                  className="w-full h-full object-cover opacity-35 rounded-lg mb-3"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/20 to-transparent pointer-events-none"></div>
                
                <div className="flex items-center justify-between text-[11px] font-bold text-cyan-400">
                  <span>ENGINEERING INDEX</span>
                  <span>99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section (Styled as custom dashboard cell blocks) */}
      <section className="py-16 md:py-20 mb-20 md:mb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#030303]/60 border-y border-white/5 backdrop-blur-md"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/[0.01] border border-white/5 p-8 rounded-2xl text-center backdrop-blur-xl shadow-lg hover:border-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h4 className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </h4>
              <p className="text-gray-500 font-semibold tracking-wide text-xs sm:text-sm uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto px-6 mb-20 md:mb-36">
        <div className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles size={11} />
            Our Beliefs
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight selection:bg-blue-500/30">
            Built on Rock-Solid Principles
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed selection:bg-blue-500/30">
            The foundational blueprints that guide our codebases, our aesthetic iterations, and our active business relationships.
          </p>
        </div>

        {/* Grid matching the features system */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {values.map((value, idx) => {
            const Icon = value.icon;
            return (
              <div 
                key={idx} 
                className={`group relative bg-white/[0.01] border border-white/5 backdrop-blur-xl p-8 rounded-[2rem] flex flex-col sm:flex-row gap-6 transition-all duration-500 hover:-translate-y-1.5 ${value.glowColor}`}
              >
                {/* Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
                
                {/* Icon Circle */}
                <div className={`w-14 h-14 shrink-0 rounded-2xl border flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${value.iconBg}`}>
                  <Icon className="w-6 h-6" />
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="mb-14 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-5 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-purple-400">
            <Sparkles size={11} />
            Creative Minds
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight leading-tight">
            The Visionaries Behind Aether
          </h2>
          
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl leading-relaxed">
            A distributed collection of dedicated visual artists, technical performance engineers, and products architects.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
          {team.map((member, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Profile Image Wrap */}
              <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-6 bg-gray-950 border border-white/5 group-hover:border-cyan-500/30 group-hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-1000 ease-out"
                />
                
                {/* Visual Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/0 to-transparent group-hover:from-blue-500/20 group-hover:to-cyan-400/5 transition-colors duration-500 mix-blend-overlay"></div>
                
                {/* Floating Glass Role Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">Aether Lead</p>
                  <p className="text-sm font-bold text-white">{member.role}</p>
                </div>
              </div>

              {/* Card Footer Text */}
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                {member.name}
              </h3>
              
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 text-sm font-semibold uppercase tracking-wider">
                {member.role.split(' & ')[0]}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;
