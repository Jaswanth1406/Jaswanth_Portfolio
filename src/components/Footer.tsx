import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-12" style={{ backgroundColor: '#080818', borderTop: '1px solid rgba(0, 240, 255, 0.08)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-xl font-heading font-bold neon-text tracking-wider">&lt;JP /&gt;</h2>
            <p className="text-gray-500 mt-1 font-mono text-sm">Student & Developer</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/Jaswanth1406"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#6b6b99' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 240, 255, 0.3)';
                (e.currentTarget as HTMLElement).style.color = '#00f0ff';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.08)';
                (e.currentTarget as HTMLElement).style.color = '#6b6b99';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaswanth-prasanna"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', color: '#6b6b99' }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0, 240, 255, 0.3)';
                (e.currentTarget as HTMLElement).style.color = '#00f0ff';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 10px rgba(0, 240, 255, 0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.08)';
                (e.currentTarget as HTMLElement).style.color = '#6b6b99';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div
          className="mt-8 pt-8 flex flex-col md:flex-row md:justify-between items-center"
          style={{ borderTop: '1px solid rgba(0, 240, 255, 0.05)' }}
        >
          <p className="text-gray-600 text-xs font-mono mb-4 md:mb-0">
            &copy; {year} Jaswanth Prasanna. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-gray-600 text-xs font-mono flex items-center">
              Made with <Heart size={12} className="mx-1 text-neon-pink" /> in Chennai
            </p>
            <div className="flex items-center gap-1.5 text-xs font-mono">
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: '#00ff88', boxShadow: '0 0 6px rgba(0, 255, 136, 0.5)' }}
              />
              <span className="text-neon-green/70">System Active</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;