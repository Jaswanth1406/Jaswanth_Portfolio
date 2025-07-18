import React from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Jaswanth Prasanna</h2>
            <p className="text-gray-400 mt-2">Student & Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/Jaswanth1406" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/jaswanth-prasanna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {year} Jaswanth Prasanna. All rights reserved.
          </p>
          
          <div>
            <p className="text-gray-400 text-sm flex items-center justify-center">
              Made with <Heart size={16} className="mx-1 text-red-500" /> in Chennai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;