import { motion } from "framer-motion";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import projects from "../data/projects";
import { ArrowUpRight, Sparkles } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-black min-h-screen">
      <Seo
        path="/portfolio"
        title="Portfolio — Selected Works by Aether Studio"
        description="Explore our portfolio of WebGL experiences, high-performance web applications, and premium digital designs crafted for visionary brands."
      />

      <section className="max-w-7xl mx-auto px-6">
        <Breadcrumbs items={[{ label: "Portfolio" }]} />

        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Sparkles size={11} />
            Case Studies
          </div>

          <h1 className="text-[2.8rem] sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05]">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">Selected Works</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A showcase of digital experiences we've engineered for forward-thinking brands pushing the boundaries of web technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={project.id}
              className="group relative bg-white/[0.01] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-700 hover:border-cyan-500/30 hover:shadow-[0_20px_50px_rgba(6,182,212,0.1)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-40 group-hover:scale-[1.04] transition-all duration-[1000ms] ease-out"
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-40 bg-gradient-to-tr ${project.color} mix-blend-overlay transition-opacity duration-700`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                <div className="absolute top-6 right-6 p-3 rounded-xl bg-black/60 border border-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">{project.stats.label}</p>
                  <p className={`text-sm font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                    {project.stats.value}
                  </p>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <p className="text-gray-400 font-medium text-xs tracking-wide uppercase">{project.category}</p>
                </div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/btn cursor-pointer">
                  View Case Study
                  <ArrowUpRight size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
