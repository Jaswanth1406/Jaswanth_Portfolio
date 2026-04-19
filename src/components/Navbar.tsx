import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Determine active section
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'certificates', 'projects', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-30 transition-all duration-500 ${
        scrolled
          ? 'glass py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
      style={scrolled ? {
        boxShadow: '0 4px 30px rgba(0, 240, 255, 0.05)',
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
            <h1 className="text-xl font-heading font-bold tracking-wider neon-text">
              &lt;JP /&gt;
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-xs font-mono tracking-wide uppercase transition-all duration-300 rounded ${
                  activeSection === item.id
                    ? 'text-neon-cyan'
                    : 'text-gray-400 hover:text-neon-cyan'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] rounded-full"
                    style={{
                      background: 'linear-gradient(90deg, transparent, #00f0ff, transparent)',
                      boxShadow: '0 0 8px rgba(0, 240, 255, 0.5)',
                    }}
                  />
                )}
              </button>
            ))}

            {/* Divider + Social */}
            <div className="flex items-center pl-4 ml-4 space-x-3" style={{ borderLeft: '1px solid rgba(0, 240, 255, 0.15)' }}>
              <a
                href="https://github.com/Jaswanth1406"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/jaswanth-prasanna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:jaswanthprasanna68@gmail.com"
                className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.5)]"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-300 hover:text-neon-cyan transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden mt-2 mx-4 rounded-lg overflow-hidden glass"
          style={{ border: '1px solid rgba(0, 240, 255, 0.1)' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-md font-mono text-sm transition-all duration-200 ${
                  activeSection === item.id
                    ? 'text-neon-cyan bg-neon-cyan/5'
                    : 'text-gray-400 hover:text-neon-cyan hover:bg-white/5'
                }`}
              >
                <span className="text-neon-green mr-2">&gt;</span>
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex justify-center space-x-6 py-4" style={{ borderTop: '1px solid rgba(0, 240, 255, 0.1)' }}>
            <a href="https://github.com/Jaswanth1406" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jaswanth-prasanna" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jaswanthprasanna68@gmail.com" className="text-gray-400 hover:text-neon-cyan transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;