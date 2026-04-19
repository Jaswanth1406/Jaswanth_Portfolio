import React, { useState, useEffect } from 'react';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import { useGame } from '../context/GameContext';

const TITLES = ['Full Stack AI Developer', 'Machine Learning Engineer', '4x Hackathon Winner', 'AI Enthusiast'];

const Hero: React.FC = () => {
  const { unlockAchievement } = useGame();
  const [displayText, setDisplayText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        if (displayText.length === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % TITLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, titleIndex, isDeleting]);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    unlockAchievement('cv_downloaded');
    const link = document.createElement('a');
    link.href = '/JaswanthPrasanna_resume.pdf';
    link.download = 'JaswanthPrasanna_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0a1a 0%, #0f0f2a 30%, #1a0a2e 60%, #0a0a1a 100%)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.06) 0%, rgba(191, 0, 255, 0.03) 40%, transparent 70%)',
        }}
      />

      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Profile Photo */}
          <div className="relative group">
            {/* Glow ring */}
            <div
              className="absolute -inset-1 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
              style={{
                background: 'linear-gradient(135deg, #00f0ff, #bf00ff, #00ff88)',
                filter: 'blur(8px)',
              }}
            />
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-neon-cyan/30">
              <img
                src="/Jaswanth_Circle_Photo.jpg"
                alt="Jaswanth Prasanna"
                className="w-full h-full object-cover"
              />
              {/* Scanline overlay on photo */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 240, 255, 0.02) 3px, rgba(0, 240, 255, 0.02) 6px)',
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="max-w-xl text-center md:text-left">
            {/* Terminal prefix */}
            <p className="font-mono text-xs text-neon-green mb-2 tracking-wider">
              // initializing portfolio...
            </p>

            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-3 text-white">
              Jaswanth{' '}
              <span className="gradient-text">Prasanna</span>
            </h1>

            {/* Typewriter title */}
            <div className="h-8 md:h-10 mb-6 flex items-center justify-center md:justify-start">
              <span className="text-lg md:text-2xl font-mono text-neon-cyan">
                {displayText}
              </span>
              <span className="w-0.5 h-5 md:h-7 ml-1 bg-neon-cyan animate-pulse" />
            </div>

            <p className="text-base md:text-lg mb-8 text-gray-300 leading-relaxed max-w-lg">
              I build exceptional digital experiences powered by AI.
              Passionate about turning bold ideas into real-world solutions.
            </p>

            {/* Stats Ribbon */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              {[
                { label: 'Projects', value: '11+' },
                { label: 'Hackathon Wins', value: '4x' },
                { label: 'Experience', value: 'AI Dev' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="px-4 py-2 rounded-lg glass-card text-center"
                >
                  <p className="text-lg font-heading font-bold neon-text">{stat.value}</p>
                  <p className="text-xs text-gray-400 font-mono">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <button
                onClick={scrollToAbout}
                className="cyber-btn cyber-btn-filled rounded-lg flex items-center gap-2"
              >
                <ChevronRight size={16} />
                Explore
              </button>
              <button
                onClick={handleDownloadCV}
                className="cyber-btn rounded-lg flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </button>
              <a
                href="#contact"
                className="cyber-btn rounded-lg flex items-center gap-2 no-underline"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neon-cyan/50 hover:text-neon-cyan transition-colors animate-bounce"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
};

export default Hero;