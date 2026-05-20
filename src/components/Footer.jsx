import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white inline-block mb-4">
            AETHER<span className="text-blue-500">.</span>
          </a>
          <p className="max-w-md mt-4 text-sm leading-relaxed text-gray-400">
            Pushing the boundaries of modern web experiences. We blend interactive 3D elements, sleek typography, and cutting-edge performance to create digital spaces that truly stand out.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-gray-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-gray-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-gray-300">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-gray-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Services</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Portfolio</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Legal</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} Aether Studio. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with precision & passion.</p>
      </div>
    </footer>
  );
};

export default Footer;
