import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

type CategoryType = 'web' | 'ml' | 'ai' | 'all';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  category: CategoryType[];
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<CategoryType>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'QueryMate 🤖',
      description: 'Modern multi-AI chat application with real-time streaming, voice input, file support, and live code execution — all in one platform.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Tailwind CSS', 'Radix UI', 'Shadcn UI', 'Vercel AI SDK', 'Google Gemini', 'Perplexity AI', 'Groq', 'E2B Sandbox'],
      github: 'https://github.com/Jaswanth1406/QueryMate',
      category: ['web', 'ai']
    },
    {
      id: 2,
      title: 'Synapse-AI ☎️',
      description: 'AI-powered tele-calling agent that autonomously makes calls, holds natural conversations, and updates CRM with structured insights.',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js', 'React', 'FastAPI', 'Python', 'Neon DB', 'Docker', 'Better Auth', 'Dagrah Cloud', 'RAG', 'Groq AI', 'EspoCRM', 'Webhooks'],
      github: 'https://github.com/Jaswanth1406/Synapse-AI',
      category: ['web', 'ai']
    },
    {
      id: 3,
      title: 'AEGIS AI 🛡️',
      description: 'Autonomous cyber-immune security platform that detects, classifies, and neutralizes threats in real-time using AI.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js 15', 'TypeScript', 'FastAPI', 'Python', 'Neon PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Arcjet', 'Better Auth', 'Isolation Forest', 'XGBoost', 'SHAP', 'Scikit-Learn', 'WebSockets', 'Slack API'],
      github: 'https://github.com/Jaswanth1406/AEGIS',
      category: ['web', 'ai', 'ml']
    },
    {
      id: 4,
      title: 'AdaptLearn 🚀',
      description: 'AI-powered adaptive onboarding platform that generates personalized learning roadmaps based on resumes or skill assessments.',
      image: 'https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js 15', 'TypeScript', 'FastAPI', 'Python', 'Neon PostgreSQL', 'Tailwind CSS', 'React Flow', 'Better Auth', 'Groq API', 'LLaMA 3', 'RAG', 'PyMuPDF'],
      github: 'https://github.com/Jaswanth1406/AdaptLearn',
      category: ['web', 'ai']
    },
    {
      id: 5,
      title: 'STREAM 🔍',
      description: 'AI-powered procurement intelligence platform for detecting fraud, bid-rigging, and suspicious vendor networks in public contracting data.',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'Neon PostgreSQL', 'Tailwind CSS', 'Zustand', 'Isolation Forest', 'Gradient Boosting', 'SMOTE', 'D3.js', 'Recharts'],
      github: 'https://github.com/Jaswanth1406/STREAM---Suspicious-Transaction---Risk-Engine-for-Anomaly-Monitoring',
      category: ['web', 'ai', 'ml']
    },
    {
      id: 6,
      title: 'NeuroScreen 🧠',
      description: 'AI-powered autism screening platform combining ML predictions, therapy tools, and clinical support for early intervention.',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'Neon PostgreSQL', 'Tailwind CSS', 'LightGBM', 'Groq API', 'LLaMA 3', 'AQ-10 Model'],
      github: 'https://github.com/Jaswanth1406/Neuroscreen',
      category: ['web', 'ai', 'ml']
    },
    {
      id: 7,
      title: 'SentinelPII 🛡️',
      description: 'AI-powered privacy firewall engine that detects, classifies, and optionally redacts sensitive information across multimedia content.',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['FastAPI', 'Python', 'Presidio', 'OpenAI APIs', 'PyMuPDF', 'OpenCV', 'Whisper', 'pydub', 'OCR', 'PII Detection Engine'],
      github: 'https://github.com/Jaswanth1406/SentinelPII',
      category: ['ai', 'ml']
    },
    {
      id: 8,
      title: 'Evidence Verification AI-Agent',
      description: 'AI-powered browser extension and backend system that verifies claims and evidence from web pages using NLP, web scraping, and deep learning for fact-checking and misinformation detection.',
      image: "/Homepage.png",
      technologies: ['JavaScript', 'FastAPI', 'HTML', 'CSS', 'Web Scraping', 'Chrome Extension', 'PyTorch', 'NLP'],
      github: 'https://github.com/Jaswanth1406/Evidence-Verification-AI-Agent',
      category: ['ml', 'web', 'ai']
    },
    {
      id: 9,
      title: 'Bone Fracture Localization',
      description: 'Deep learning system using Computer Vision to detect and localize bone fractures from medical scans with high accuracy.',
      image: "/Bone fracture localization.jpeg",
      technologies: ['PyTorch', 'Torchvision', 'OpenCV', 'Pandas', 'NumPy', 'Scikit-learn'],
      github: 'https://github.com/Jaswanth1406/Bone-Fracture-Localization',
      category: ['ml']
    },
    {
      id: 10,
      title: 'Household Services Application - V2',
      description: 'Enhanced multi-user web application for home services with job scheduling, notifications, caching, and export features.',
      image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Flask', 'VueJS', 'Bootstrap', 'SQLite', 'Redis', 'Celery', 'Flask-Mail', 'Flask-Restful', 'Flask-Security'],
      github: 'https://github.com/Jaswanth1406/HouseHoldServiceApp-V2',
      category: ['web']
    },
    {
      id: 11,
      title: 'Household Services Application - V1',
      description: 'Comprehensive home servicing and solutions platform with user and service provider management.',
      image: 'https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Flask', 'Jinja2', 'Bootstrap', 'SQLite', 'HTML & CSS'],
      github: 'https://github.com/Jaswanth1406/HouseHoldServiceApp-V1',
      category: ['web']
    },
  ];

  const filterCategories: { key: CategoryType | 'all'; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'ai', label: '🤖 AI / GenAI' },
    { key: 'ml', label: '🧠 ML / DL' },
    { key: 'web', label: '🌐 Web Apps' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
            Here are some of the projects I've worked on. Feel free to check out the code on GitHub.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key as CategoryType)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat.key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-end space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/40 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 6).map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      <Code size={10} className="mr-1" />
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors flex items-center"
                  >
                    <Github size={16} className="mr-1" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;