import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  gradient: string;
  glowColor: string;
}

const Education: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const educationList: EducationItem[] = [
    {
      degree: 'B.E in Computer Science and Engineering (AI & ML)',
      institution: 'Rajalakshmi Institute of Technology',
      location: 'Chennai',
      period: '2023 - 2027',
      description: 'Currently pursuing B.E in Computer Science with specialization in Artificial Intelligence and Machine Learning. CGPA: 8.46',
      gradient: 'linear-gradient(135deg, #00f0ff, #4d7cff)',
      glowColor: 'rgba(0, 240, 255, 0.3)',
    },
    {
      degree: 'B.S in Data Science and Applications',
      institution: 'Indian Institute of Technology Madras',
      location: 'Chennai',
      period: '2023 - 2027',
      description: 'Pursuing B.S in Data Science and Applications. CGPA: 7.87',
      gradient: 'linear-gradient(135deg, #bf00ff, #8b5cf6)',
      glowColor: 'rgba(191, 0, 255, 0.3)',
    },
    {
      degree: 'Diploma in Programming',
      institution: 'Indian Institute of Technology Madras',
      location: 'Chennai',
      period: '2023 - 2026',
      description: 'Completed Diploma in Programming with CGPA: 8.37',
      gradient: 'linear-gradient(135deg, #00ff88, #00c9a7)',
      glowColor: 'rgba(0, 255, 136, 0.3)',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Velammal Matriculation Hr sec School',
      location: 'Mogappair West',
      period: '2022 - 2023',
      description: 'Completed Higher Secondary Education with 96.5%',
      gradient: 'linear-gradient(135deg, #ffd700, #ff6b35)',
      glowColor: 'rgba(255, 215, 0, 0.3)',
    },
  ];

  return (
    <section id="education" className="py-20 relative" style={{ backgroundColor: '#0c0c22' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-2">// education.log</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 section-heading">Education</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-6">
            My academic background and educational qualifications.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden holo-card transition-all duration-500"
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
              }}
            >
              {/* Top gradient bar */}
              <div className="h-[3px]" style={{ background: edu.gradient }} />

              <div className="p-6">
                {/* Icon & Degree */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: edu.gradient,
                      boxShadow: `0 0 15px ${edu.glowColor}`,
                    }}
                  >
                    <GraduationCap className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white leading-tight">{edu.degree}</h3>
                    <p className="text-sm text-neon-cyan mt-1">{edu.institution}</p>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400 font-mono">
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-neon-magenta" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} className="text-neon-green" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.description.split(/CGPA: (\d+\.\d+)|(\d+\.\d+%)/).map((part, i) => {
                    if (part && (/^\d+\.\d+$/.test(part) || /^\d+\.\d+%$/.test(part))) {
                      return (
                        <span key={i} className="font-bold text-neon-yellow font-mono">
                          {part.includes('%') ? part : `CGPA: ${part}`}
                        </span>
                      );
                    }
                    return part;
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;