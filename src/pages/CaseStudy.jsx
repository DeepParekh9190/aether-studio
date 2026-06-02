import { useParams, Link } from "react-router-dom";
import Seo from "../components/Seo";
import Breadcrumbs from "../components/Breadcrumbs";
import projects from "../data/projects";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";

const CaseStudy = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="w-full pt-32 pb-24 bg-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Project not found</p>
          <Link to="/portfolio" className="text-cyan-400 hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pt-32 pb-24 bg-black min-h-screen">
      <Seo
        path={`/portfolio/${project.id}`}
        title={`${project.title} — Case Study`}
        description={project.description}
      />

      <section className="max-w-6xl mx-auto px-6">
        <Breadcrumbs items={[
          { label: "Portfolio", path: "/portfolio" },
          { label: project.title }
        ]} />

        <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors mb-8">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-full border border-white/5 bg-white/5 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <Sparkles size={11} />
              {project.category}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 tracking-tight leading-[1.05]">
              {project.title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              {project.description}
            </p>

            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-sm`}>
              <span className="text-gray-500">{project.stats.label}:</span>
              <span className={`font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                {project.stats.value}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/5 aspect-[4/3]">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            <button className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-[0_4px_30px_rgba(6,182,212,0.4)] transition-all duration-300 cursor-pointer">
              Visit Live Site <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
