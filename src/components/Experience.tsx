import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface ExperienceItem {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  description: string[];
}

const Experience: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.15 });

  const experiences: ExperienceItem[] = [
    {
      title: 'Full Stack AI Developer Intern',
      company: 'Devspace',
      companyUrl: 'http://devspace.uno/',
      period: 'Nov 2025 - Apr 2026 · Hybrid',
      description: [
        'Integrated Supabase for backend services including authentication, database, and real-time features',
        'Performed extensive code refactoring to improve maintainability, readability, and performance',
        'Built and optimized full-stack features using modern frameworks and AI-powered tooling',
        'Collaborated with the team on product development and deployment workflows',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative" style={{ backgroundColor: '#0a0a1a' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-2">// experience log</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 section-heading">Experience</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-6">
            My professional journey and work experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Glowing timeline line */}
          <div
            className="hidden md:block absolute left-8 top-0 bottom-0 w-[2px]"
            style={{
              background: 'linear-gradient(180deg, transparent, #00f0ff, #bf00ff, transparent)',
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
            }}
          />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative md:pl-20 mb-12 transition-all duration-700"
              style={{
                transitionDelay: `${index * 200}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateX(0)' : 'translateX(-30px)',
              }}
            >
              {/* Timeline node */}
              <div className="hidden md:flex absolute left-4 top-8 w-8 h-8 rounded-full items-center justify-center z-10"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff, #bf00ff)',
                  boxShadow: '0 0 15px rgba(0, 240, 255, 0.4)',
                }}
              >
                <Briefcase className="text-white" size={16} />
              </div>

              {/* Card */}
              <div className="glass-card rounded-xl p-6 relative overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px]"
                  style={{ background: 'linear-gradient(90deg, #00f0ff, #bf00ff)' }}
                />

                {/* Mobile icon */}
                <div className="md:hidden flex items-center mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-4"
                    style={{
                      background: 'linear-gradient(135deg, #00f0ff, #bf00ff)',
                      boxShadow: '0 0 12px rgba(0, 240, 255, 0.3)',
                    }}
                  >
                    <Briefcase className="text-white" size={18} />
                  </div>
                  <p className="text-sm font-mono text-gray-400">{exp.period}</p>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-1">{exp.title}</h3>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-cyan font-medium mb-2 inline-flex items-center gap-1 hover:text-neon-green transition-colors text-sm"
                  >
                    {exp.company} <ExternalLink size={14} />
                  </a>
                ) : (
                  <p className="text-neon-cyan font-medium mb-2 text-sm">{exp.company}</p>
                )}
                <p className="hidden md:block text-sm font-mono text-gray-500 mb-4">{exp.period}</p>

                <ul className="space-y-2">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-start">
                      <span className="text-neon-green mr-2 mt-0.5 font-mono text-xs">&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;