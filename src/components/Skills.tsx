import React from 'react';
import { Code, Server, Brain, Database, Wrench } from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  gradient: string;
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Frontend',
      icon: <Code size={24} />,
      gradient: 'from-blue-500 to-cyan-500',
      skills: [
        'React', 'Next.js 15', 'TypeScript', 'JavaScript', 'Vue.js',
        'Tailwind CSS', 'HTML/CSS', 'Framer Motion', 'Bootstrap'
      ]
    },
    {
      title: 'Backend & Frameworks',
      icon: <Server size={24} />,
      gradient: 'from-green-500 to-emerald-600',
      skills: [
        'Python', 'FastAPI', 'Flask', 'Node.js', 'REST APIs',
        'Vercel AI SDK', 'Webhooks', 'Celery', 'Redis', 'Pydantic',
        'Better Auth', 'JWT Auth', 'OAuth'
      ]
    },
    {
      title: 'AI / ML / DL',
      icon: <Brain size={24} />,
      gradient: 'from-purple-500 to-indigo-600',
      skills: [
        'PyTorch', 'Scikit-learn', 'LightGBM', 'XGBoost',
        'Isolation Forest', 'SHAP (XAI)', 'SMOTE', 'OpenCV',
        'Groq API', 'Google Gemini', 'Perplexity AI', 'LLaMA 3',
        'RAG', 'NLP', 'E2B Sandbox'
      ]
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      gradient: 'from-orange-500 to-red-500',
      skills: [
        'PostgreSQL', 'Neon DB', 'Supabase', 'SQLite',
        'Drizzle ORM', 'SQL'
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: <Wrench size={24} />,
      gradient: 'from-rose-500 to-pink-600',
      skills: [
        'Git & GitHub', 'Google Cloud Platform', 'Vercel'
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Technologies and tools I work with across the full stack, AI/ML, and beyond.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className={`p-1 bg-gradient-to-r ${category.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;