import { images } from "../assets/images";

const projects = [
  {
    id: "aero-dynamics",
    title: "Aero Dynamics",
    category: "E-Commerce Platform",
    image: images.bgAbstract,
    color: "from-blue-600 to-cyan-400",
    stats: { label: "Speed Score", value: "100%" },
    description: "A high-performance e-commerce platform engineered for a premium automotive brand, featuring immersive 3D product configurators and sub-second page loads."
  },
  {
    id: "neon-financial",
    title: "Neon Financial",
    category: "Fintech Dashboard",
    image: images.dashboardAnalytics,
    color: "from-purple-600 to-pink-500",
    stats: { label: "Conversion Lift", value: "+240%" },
    description: "A real-time fintech dashboard with live data visualization, WebGL charts, and a seamless multi-account management experience."
  },
  {
    id: "lumina-studio",
    title: "Lumina Studio",
    category: "Creative Portfolio",
    image: images.studioWorkspace,
    color: "from-amber-400 to-orange-500",
    stats: { label: "SEO Authority", value: "99/100" },
    description: "An award-winning creative portfolio site with full-screen WebGL galleries, cinematic page transitions, and perfect Lighthouse scores."
  },
  {
    id: "quantum-interface",
    title: "Quantum Interface",
    category: "SaaS Platform",
    image: images.geoAbstract,
    color: "from-emerald-500 to-teal-400",
    stats: { label: "Uptime SLA", value: "99.99%" },
    description: "A mission-critical SaaS interface for quantum computing research, built with real-time collaboration and advanced visualization tools."
  }
];

export default projects;
