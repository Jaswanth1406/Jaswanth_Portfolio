import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const cvUrl = '/JaswanthPrasanna_resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'JaswanthPrasanna_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/Jaswanth_Circle_Photo.jpg" 
              alt="Profile"
              className="w-full h-full object-cover" 
            />
          </div>
          
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 animate-fadeIn">
              <span className="block">Jaswanth Prasanna</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-6 text-blue-200 animate-fadeIn animation-delay-300">
              Student & Developer
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl animate-fadeIn animation-delay-600">
              I build exceptional digital experiences that make a difference. Passionate about creating elegant solutions to complex problems.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 animate-fadeIn animation-delay-900">
              <button 
                onClick={scrollToAbout}
                className="px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-100 transition-colors duration-300 flex items-center gap-2"
              >
                Learn More
              </button>
              <button 
                onClick={handleDownloadCV}
                className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </button>
              <a 
                href="#contact" 
                className="px-6 py-3 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;