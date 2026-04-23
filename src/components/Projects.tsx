import React, { useState, useRef } from 'react';
import { Github, Code, Trophy } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useGame } from '../context/GameContext';

type CategoryType = 'web' | 'ml' | 'ai' | 'all';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  category: CategoryType[];
  gradient: string;
  hackathonWinner?: boolean;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<CategoryType>('all');
  const { ref, isInView } = useInView({ threshold: 0.05 });

  const projects: Project[] = [
    {
      id: 1,
      title: 'QueryMate 🤖',
      description: 'Modern multi-AI chat application with real-time streaming, voice input, file support, and live code execution — all in one platform.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'Tailwind CSS', 'Radix UI', 'Shadcn UI', 'Vercel AI SDK', 'Google Gemini', 'Perplexity AI', 'Groq', 'E2B Sandbox'],
      github: 'https://github.com/Jaswanth1406/QueryMate',
      category: ['web', 'ai'],
      gradient: 'linear-gradient(135deg, #00f0ff, #4d7cff)',
    },
    {
      id: 2,
      title: 'Synapse-AI ☎️',
      description: 'AI-powered tele-calling agent that autonomously makes calls, holds natural conversations, and updates CRM with structured insights.',
      image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js', 'React', 'FastAPI', 'Python', 'Neon DB', 'Docker', 'Better Auth', 'Dagrah Cloud', 'RAG', 'Groq AI', 'EspoCRM', 'Webhooks'],
      github: 'https://github.com/Jaswanth1406/Synapse-AI',
      category: ['web', 'ai'],
      gradient: 'linear-gradient(135deg, #bf00ff, #ff2d95)',
      hackathonWinner: true,
    },
    {
      id: 3,
      title: 'AEGIS AI 🛡️',
      description: 'Autonomous cyber-immune security platform that detects, classifies, and neutralizes threats in real-time using AI.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js 15', 'TypeScript', 'FastAPI', 'Python', 'Neon PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Arcjet', 'Better Auth', 'Isolation Forest', 'XGBoost', 'SHAP', 'Scikit-Learn', 'WebSockets', 'Slack API'],
      github: 'https://github.com/Jaswanth1406/AEGIS',
      category: ['web', 'ai', 'ml'],
      gradient: 'linear-gradient(135deg, #00ff88, #00c9a7)',
    },
    {
      id: 4,
      title: 'AdaptLearn 🚀',
      description: 'AI-powered adaptive onboarding platform that generates personalized learning roadmaps based on resumes or skill assessments.',
      image: 'https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js 15', 'TypeScript', 'FastAPI', 'Python', 'Neon PostgreSQL', 'Tailwind CSS', 'React Flow', 'Better Auth', 'Groq API', 'LLaMA 3', 'RAG', 'PyMuPDF'],
      github: 'https://github.com/Jaswanth1406/AdaptLearn',
      category: ['web', 'ai'],
      gradient: 'linear-gradient(135deg, #ffd700, #ff6b35)',
    },
    {
      id: 5,
      title: 'STREAM 🔍',
      description: 'AI-powered procurement intelligence platform for detecting fraud, bid-rigging, and suspicious vendor networks in public contracting data.',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'Neon PostgreSQL', 'Tailwind CSS', 'Zustand', 'Isolation Forest', 'Gradient Boosting', 'SMOTE', 'D3.js', 'Recharts'],
      github: 'https://github.com/Jaswanth1406/STREAM---Suspicious-Transaction---Risk-Engine-for-Anomaly-Monitoring',
      category: ['web', 'ai', 'ml'],
      gradient: 'linear-gradient(135deg, #00f0ff, #bf00ff)',
      hackathonWinner: true,
    },
    {
      id: 6,
      title: 'NeuroScreen 🧠',
      description: 'AI-powered autism screening platform combining ML predictions, therapy tools, and clinical support for early intervention.',
      image: 'https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'Python', 'Neon PostgreSQL', 'Tailwind CSS', 'LightGBM', 'Groq API', 'LLaMA 3', 'AQ-10 Model'],
      github: 'https://github.com/Jaswanth1406/Neuroscreen',
      category: ['web', 'ai', 'ml'],
      gradient: 'linear-gradient(135deg, #8b5cf6, #bf00ff)',
      hackathonWinner: true,
    },
    {
      id: 7,
      title: 'SentinelPII 🛡️',
      description: 'AI-powered privacy firewall engine that detects, classifies, and optionally redacts sensitive information across multimedia content.',
      image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['FastAPI', 'Python', 'Presidio', 'OpenAI APIs', 'PyMuPDF', 'OpenCV', 'Whisper', 'pydub', 'OCR', 'PII Detection Engine'],
      github: 'https://github.com/Jaswanth1406/SentinelPII',
      category: ['ai', 'ml'],
      gradient: 'linear-gradient(135deg, #ff2d95, #ff6b35)',
    },
    {
      id: 8,
      title: 'Evidence Verification AI-Agent',
      description: 'AI-powered browser extension and backend system that verifies claims from web pages using NLP, web scraping, and deep learning for fact-checking.',
      image: "/Homepage.png",
      technologies: ['JavaScript', 'FastAPI', 'HTML', 'CSS', 'Web Scraping', 'Chrome Extension', 'PyTorch', 'NLP'],
      github: 'https://github.com/Jaswanth1406/Evidence-Verification-AI-Agent',
      category: ['ml', 'web', 'ai'],
      gradient: 'linear-gradient(135deg, #4d7cff, #00f0ff)',
    },
    {
      id: 9,
      title: 'Bone Fracture Localization',
      description: 'Deep learning system using Computer Vision to detect and localize bone fractures from medical scans with high accuracy.',
      image: "/Bone fracture localization.jpeg",
      technologies: ['PyTorch', 'Torchvision', 'OpenCV', 'Pandas', 'NumPy', 'Scikit-learn'],
      github: 'https://github.com/Jaswanth1406/Bone-Fracture-Localization',
      category: ['ml'],
      gradient: 'linear-gradient(135deg, #00c9a7, #00ff88)',
    },
    {
      id: 10,
      title: 'Household Services App V2',
      description: 'Enhanced multi-user web application for home services with job scheduling, notifications, caching, and export features.',
      image: 'https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Flask', 'VueJS', 'Bootstrap', 'SQLite', 'Redis', 'Celery', 'Flask-Mail', 'Flask-Restful', 'Flask-Security'],
      github: 'https://github.com/Jaswanth1406/HouseHoldServiceApp-V2',
      category: ['web'],
      gradient: 'linear-gradient(135deg, #ff6b35, #ffd700)',
    },
    {
      id: 11,
      title: 'Household Services App V1',
      description: 'Comprehensive home servicing and solutions platform with user and service provider management.',
      image: 'https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      technologies: ['Flask', 'Jinja2', 'Bootstrap', 'SQLite', 'HTML & CSS'],
      github: 'https://github.com/Jaswanth1406/HouseHoldServiceApp-V1',
      category: ['web'],
      gradient: 'linear-gradient(135deg, #c0c0c0, #808080)',
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
    : projects.filter((project) => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 relative" style={{ backgroundColor: '#0c0c22' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-2">// projects.map()</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 section-heading">My Projects</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-6 mb-8">
            Here are some of the projects I've worked on. Feel free to check out the code on GitHub.
          </p>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setFilter(cat.key as CategoryType)}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300`}
                style={
                  filter === cat.key
                    ? {
                        background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(191, 0, 255, 0.2))',
                        border: '1px solid rgba(0, 240, 255, 0.4)',
                        boxShadow: '0 0 12px rgba(0, 240, 255, 0.2)',
                        color: '#ffffff',
                      }
                    : {
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#a0a0cc',
                      }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate component for 3D tilt effect
const ProjectCard: React.FC<{ project: Project; index: number; isInView: boolean }> = ({ project, index, isInView }) => {
  const { unlockAchievement } = useGame();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="glass-card rounded-xl overflow-hidden transition-all duration-300"
      style={{
        transitionDelay: `${index * 80}ms`,
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${isHovered ? 1.02 : 1})`
          : 'translateY(40px) scale(0.95)',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700"
          style={{ transform: isHovered ? 'scale(1.1)' : 'scale(1)' }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: isHovered
              ? 'linear-gradient(to top, rgba(10, 10, 26, 0.9) 0%, transparent 60%)'
              : 'linear-gradient(to top, rgba(10, 10, 26, 0.7) 0%, transparent 50%)',
          }}
        />
        {/* Shimmer effect */}
        {isHovered && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, transparent 30%, rgba(0, 240, 255, 0.07) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'holographic 2s ease infinite',
            }}
          />
        )}
        {/* GitHub link overlay */}
        <div
          className="absolute bottom-3 right-3 transition-all duration-300"
          style={{ opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(8px)' }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full inline-flex transition-colors"
            style={{
              background: 'rgba(0, 240, 255, 0.15)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              color: '#00f0ff',
            }}
          >
            <Github size={18} />
          </a>
        </div>
        
        {/* Hackathon Winner Badge */}
        {project.hackathonWinner && (
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-transform duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
              boxShadow: '0 4px 15px rgba(255, 215, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
              backdropFilter: 'blur(4px)',
            }}
          >
            <Trophy size={14} className="text-black" strokeWidth={2.5} />
            <span className="text-xs font-bold text-black uppercase tracking-wider">Winner</span>
          </div>
        )}

        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: project.gradient }} />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-heading font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">{project.description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 5).map((tech, techIdx) => (
            <span
              key={techIdx}
              className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono"
              style={{
                background: 'rgba(0, 240, 255, 0.06)',
                border: '1px solid rgba(0, 240, 255, 0.15)',
                color: '#00f0ff',
              }}
            >
              <Code size={8} className="mr-1" />
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span
              className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono"
              style={{
                background: 'rgba(191, 0, 255, 0.06)',
                border: '1px solid rgba(191, 0, 255, 0.15)',
                color: '#bf00ff',
              }}
            >
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

        {/* GitHub link */}
        <div className="pt-3" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-mono flex items-center transition-colors duration-300"
            style={{ color: '#00f0ff' }}
            onClick={() => unlockAchievement('github_clicked')}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00ff88'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#00f0ff'; }}
          >
            <Github size={14} className="mr-1.5" />
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;