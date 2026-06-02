import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-12 md:py-16 border-t border-white/5 relative z-10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 md:gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white inline-block mb-4">
            AETHER<span className="text-blue-500">.</span>
          </Link>
          <p className="max-w-md mt-4 text-sm leading-relaxed text-gray-400">
            Pushing the boundaries of modern web experiences. We blend interactive 3D elements, sleek typography, and cutting-edge performance to create digital spaces that truly stand out.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://twitter.com/aetherstudio" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-gray-300">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com/aetherstudio" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-gray-300">
              <Instagram size={18} />
            </a>
            <a href="https://github.com/aetherstudio" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-gray-300">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/company/aetherstudio" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all text-gray-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-6">Legal</h3>
          <ul className="space-y-4 text-sm">
            <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            <li><Link to="/cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-semibold text-sm">Stay in the loop</h3>
            <p className="text-gray-500 text-xs mt-1">Get the latest on WebGL, design, and engineering.</p>
          </div>
          <form className="flex gap-3 w-full sm:w-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-64 bg-black/60 border border-white/5 rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10 transition-all"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-bold rounded-xl hover:shadow-[0_4px_20px_rgba(6,182,212,0.3)] transition-all cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-10 md:mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-sm">
        <p>© {new Date().getFullYear()} Aether Studio. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with precision & passion.</p>
      </div>
    </footer>
  );
};

export default Footer;
