import React, { useEffect, useState } from 'react';
import { Code, Server, Brain, Database, Wrench } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: { name: string; level: number }[];
  gradient: string;
  glowColor: string;
}

const Skills: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setAnimate(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Code size={22} />,
      gradient: 'linear-gradient(135deg, #00f0ff, #4d7cff)',
      glowColor: 'rgba(0, 240, 255, 0.3)',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js 15', level: 88 },
        { name: 'TypeScript', level: 85 },
        { name: 'JavaScript', level: 92 },
        { name: 'Vue.js', level: 70 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Framer Motion', level: 75 },
        { name: 'Bootstrap', level: 80 },
      ],
    },
    {
      title: 'Backend & Frameworks',
      icon: <Server size={22} />,
      gradient: 'linear-gradient(135deg, #00ff88, #00c9a7)',
      glowColor: 'rgba(0, 255, 136, 0.3)',
      skills: [
        { name: 'Python', level: 92 },
        { name: 'FastAPI', level: 88 },
        { name: 'Flask', level: 82 },
        { name: 'Node.js', level: 78 },
        { name: 'REST APIs', level: 90 },
        { name: 'Vercel AI SDK', level: 80 },
        { name: 'Webhooks', level: 85 },
        { name: 'Celery', level: 72 },
        { name: 'Redis', level: 70 },
        { name: 'Pydantic', level: 85 },
        { name: 'Better Auth', level: 78 },
        { name: 'JWT Auth', level: 82 },
        { name: 'OAuth', level: 75 },
      ],
    },
    {
      title: 'AI / ML / DL',
      icon: <Brain size={22} />,
      gradient: 'linear-gradient(135deg, #bf00ff, #8b5cf6)',
      glowColor: 'rgba(191, 0, 255, 0.3)',
      skills: [
        { name: 'PyTorch', level: 85 },
        { name: 'Scikit-learn', level: 88 },
        { name: 'LightGBM', level: 78 },
        { name: 'XGBoost', level: 80 },
        { name: 'Isolation Forest', level: 75 },
        { name: 'SHAP (XAI)', level: 72 },
        { name: 'SMOTE', level: 70 },
        { name: 'OpenCV', level: 75 },
        { name: 'Groq API', level: 82 },
        { name: 'Google Gemini', level: 85 },
        { name: 'Perplexity AI', level: 78 },
        { name: 'LLaMA 3', level: 80 },
        { name: 'RAG', level: 85 },
        { name: 'NLP', level: 82 },
        { name: 'E2B Sandbox', level: 72 },
      ],
    },
    {
      title: 'Databases',
      icon: <Database size={22} />,
      gradient: 'linear-gradient(135deg, #ff6b35, #ff2d95)',
      glowColor: 'rgba(255, 107, 53, 0.3)',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'Neon DB', level: 80 },
        { name: 'Supabase', level: 82 },
        { name: 'SQLite', level: 78 },
        { name: 'Drizzle ORM', level: 80 },
        { name: 'SQL', level: 88 },
      ],
    },
    {
      title: 'DevOps & Tools',
      icon: <Wrench size={22} />,
      gradient: 'linear-gradient(135deg, #ffd700, #ff6b35)',
      glowColor: 'rgba(255, 215, 0, 0.3)',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Google Cloud Platform', level: 72 },
        { name: 'Vercel', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative" style={{ backgroundColor: '#0c0c22' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-2">// skill tree</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 section-heading">
            My Skills
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-6">
            Technologies and tools I work with — displayed as an RPG skill tree.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.title}
              className="glass-card rounded-xl overflow-hidden holo-card transition-all duration-500"
              style={{
                transitionDelay: `${catIdx * 100}ms`,
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              {/* Category Header */}
              <div className="p-1 rounded-t-xl" style={{ background: category.gradient }} />
              <div className="p-5">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white"
                    style={{ background: category.gradient, boxShadow: `0 0 15px ${category.glowColor}` }}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white">{category.title}</h3>
                    <p className="text-xs font-mono text-gray-500">{category.skills.length} skills</p>
                  </div>
                </div>

                {/* XP Bars - Show top 4 skills with bars */}
                <div className="space-y-3 mb-4">
                  {category.skills.slice(0, 4).map((skill, skillIdx) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-mono text-gray-300">{skill.name}</span>
                        <span className="text-xs font-mono text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="xp-bar-track">
                        <div
                          className="xp-bar-fill"
                          style={{
                            width: animate ? `${skill.level}%` : '0%',
                            background: category.gradient,
                            boxShadow: `0 0 8px ${category.glowColor}`,
                            transitionDelay: `${(catIdx * 4 + skillIdx) * 100 + 500}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Remaining skills as tags */}
                {category.skills.length > 4 && (
                  <div className="flex flex-wrap gap-1.5 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    {category.skills.slice(4).map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2.5 py-1 rounded-full text-xs font-mono transition-all duration-300 cursor-default hover:scale-105"
                        style={{
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#a0a0cc',
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.borderColor = category.glowColor;
                          (e.target as HTMLElement).style.boxShadow = `0 0 8px ${category.glowColor}`;
                          (e.target as HTMLElement).style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                          (e.target as HTMLElement).style.boxShadow = 'none';
                          (e.target as HTMLElement).style.color = '#a0a0cc';
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;