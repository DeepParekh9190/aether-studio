import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMenuOpen
            ? 'bg-transparent'
            : isScrolled
            ? 'bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10 py-4 shadow-xl'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter text-white z-50 hover:opacity-80 transition-opacity"
          >
            AETHER<span className="text-blue-500">.</span>
          </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-[2px] bg-blue-500 transition-all ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
              <Link to="/contact" className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors inline-block">
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden text-white ${isMenuOpen ? 'z-[70]' : 'z-50'} relative`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

        {/* Mobile Navigation */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`fixed inset-0 z-[60] bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
          onClick={(e) => e.currentTarget === e.target && setIsMenuOpen(false)}
        >
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              aria-current={isActive ? "page" : undefined}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-semibold transition-colors ${
                isActive ? 'text-blue-500' : 'text-white hover:text-blue-500'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="bg-white text-black px-8 py-3 rounded-full font-semibold text-lg mt-4 inline-block">
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Header;
