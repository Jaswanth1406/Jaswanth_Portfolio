import React from 'react';
import { User, Code, GraduationCap, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const About: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const infoItems = [
    { icon: <User size={18} />, label: 'Name', value: 'Jaswanth Prasanna' },
    { icon: <Mail size={18} />, label: 'Email', value: 'jaswanthprasanna68@gmail.com' },
    { icon: <Code size={18} />, label: 'Focus', value: 'AI & ML' },
    { icon: <GraduationCap size={18} />, label: 'Education', value: 'B.E CSE (AI & ML)' },
  ];

  return (
    <section id="about" className="py-20 relative" style={{ backgroundColor: '#0a0a1a' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-2">// about me</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 section-heading">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`order-2 md:order-1 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="text-2xl font-heading font-bold text-white mb-2">
              Hi, I'm <span className="neon-text">Jaswanth Prasanna</span>
            </h3>
            <div className="font-mono text-xs text-neon-green/60 mb-4">&gt; cat about.txt</div>

            <div className="glass-card rounded-xl p-6 mb-6">
              <p className="text-gray-300 leading-relaxed">
                I am an inquisitive mind that has a huge love for learning and building. A <span className="text-neon-yellow font-semibold">4x Hackathon Winner</span>, I thrive on turning bold ideas into real-world solutions under pressure. Whether it's diving deep into <span className="text-neon-cyan">Large Language Models (LLMs)</span>, mining hidden patterns in <span className="text-neon-magenta">Data Analytics</span>, or making systems run smoothly with <span className="text-neon-green">Software Project Management</span> — I love exploring the intersection of intelligence, insight, and innovation.
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-3">
              {infoItems.map((item, index) => (
                <div
                  key={item.label}
                  className={`glass-card rounded-lg p-3 flex items-center gap-3 transition-all duration-500`}
                  style={{ transitionDelay: `${300 + index * 100}ms`, opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)' }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-neon-cyan" style={{ background: 'rgba(0, 240, 255, 0.1)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-mono text-gray-500">{item.label}</p>
                    <p className="text-sm text-gray-200">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className={`order-1 md:order-2 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative group">
              {/* Cyberpunk frame corners */}
              <div className="absolute -inset-2 rounded-xl" style={{
                background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), transparent 30%, transparent 70%, rgba(191, 0, 255, 0.2))',
              }} />

              {/* Corner accents */}
              <div className="absolute -top-1 -left-1 w-6 h-6 border-t-2 border-l-2 border-neon-cyan rounded-tl-lg" />
              <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-neon-magenta rounded-tr-lg" />
              <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-2 border-l-2 border-neon-magenta rounded-bl-lg" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-2 border-r-2 border-neon-cyan rounded-br-lg" />

              <img
                src="/Jaswanth_Portfolio_Photo.jpg"
                alt="About Me"
                className="relative rounded-xl w-full h-auto object-cover"
                style={{
                  boxShadow: '0 0 30px rgba(0, 240, 255, 0.1)',
                }}
              />
              {/* Scanline overlay */}
              <div className="absolute inset-0 rounded-xl pointer-events-none" style={{
                background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0, 240, 255, 0.015) 3px, rgba(0, 240, 255, 0.015) 6px)',
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;