import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight, Trophy, Medal, BookOpen, GraduationCap, Presentation, Wrench } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  imageUrl: string;
  description: string;
  category: 'winner' | 'runner-up' | 'third' | 'selected' | 'course' | 'diploma' | 'conference' | 'workshop';
}

const categoryConfig: Record<Certificate['category'], { label: string; gradient: string; icon: React.ReactNode; glowColor: string }> = {
  'winner': { label: '🏆 Winner', gradient: 'linear-gradient(135deg, #ffd700, #ff8c00)', icon: <Trophy size={14} />, glowColor: 'rgba(255, 215, 0, 0.4)' },
  'runner-up': { label: '🥈 Runner-Up', gradient: 'linear-gradient(135deg, #c0c0c0, #808080)', icon: <Medal size={14} />, glowColor: 'rgba(192, 192, 192, 0.3)' },
  'third': { label: '🥉 Third Place', gradient: 'linear-gradient(135deg, #cd7f32, #a0522d)', icon: <Medal size={14} />, glowColor: 'rgba(205, 127, 50, 0.3)' },
  'selected': { label: '⭐ Selected', gradient: 'linear-gradient(135deg, #bf00ff, #8b5cf6)', icon: <Award size={14} />, glowColor: 'rgba(191, 0, 255, 0.3)' },
  'course': { label: '📜 Course', gradient: 'linear-gradient(135deg, #00f0ff, #4d7cff)', icon: <BookOpen size={14} />, glowColor: 'rgba(0, 240, 255, 0.3)' },
  'diploma': { label: '🎓 Diploma', gradient: 'linear-gradient(135deg, #00ff88, #00c9a7)', icon: <GraduationCap size={14} />, glowColor: 'rgba(0, 255, 136, 0.3)' },
  'conference': { label: '🎤 Conference', gradient: 'linear-gradient(135deg, #ff2d95, #ff6b35)', icon: <Presentation size={14} />, glowColor: 'rgba(255, 45, 149, 0.3)' },
  'workshop': { label: '🔧 Workshop', gradient: 'linear-gradient(135deg, #8b5cf6, #bf00ff)', icon: <Wrench size={14} />, glowColor: 'rgba(139, 92, 246, 0.3)' },
};

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const certificates: Certificate[] = [
    // --- Hackathons & Competitions ---
    { id: 1, name: "India Innovates", issuer: "India Innovates", date: "2025", imageUrl: "/certificates/images/India Innovates Certificate.jpg", description: "Among 30,000+ participants nationwide, our team was selected and got the opportunity to present our project at Bharat Mandapam, New Delhi.", category: "selected" },
    { id: 2, name: "Chakravyuha '26 Hackathon", issuer: "Chakravyuha", date: "2026", imageUrl: "/certificates/images/Chakravyuha_26 Hackathon.jpg", description: "Secured Second Place (Runner-Up) in the Chakravyuha '26 Hackathon.", category: "runner-up" },
    { id: 3, name: "Dev-Arena '26", issuer: "Dev-Arena", date: "2026", imageUrl: "/certificates/images/Dev-Arena_26.jpg", description: "Secured Third Place in the Dev-Arena '26 Hackathon.", category: "third" },
    { id: 4, name: "AI Wars", issuer: "AI Wars", date: "2025", imageUrl: "/certificates/images/AI Wars.jpg", description: "Winner of the AI Wars competition.", category: "winner" },
    { id: 5, name: "Origin Hackathon", issuer: "Origin", date: "2025", imageUrl: "/certificates/images/Origin Hackathon certificate .jpg", description: "Winner of the Origin Hackathon.", category: "winner" },
    { id: 6, name: "Tekhora '26 Hackathon", issuer: "Tekhora", date: "2026", imageUrl: "/certificates/images/Tekhora_26 Hackathon.jpg", description: "Winner of the Tekhora '26 Hackathon.", category: "winner" },
    { id: 7, name: "BNY Service Jam", issuer: "BNY", date: "2025", imageUrl: "/certificates/images/BNY Service Jam Certificate .jpg", description: "Winner of the BNY Service Jam.", category: "winner" },
    // --- Diploma & Courses ---
    { id: 8, name: "Diploma in Programming", issuer: "Indian Institute of Technology Madras", date: "2026", imageUrl: "/certificates/images/IITM Diploma in Programming.jpg", description: "Diploma in Programming from IIT Madras.", category: "diploma" },
    { id: 9, name: "Advanced Certificate in ML & Data Science", issuer: "IIT Madras / NPTEL", date: "2025", imageUrl: "/certificates/images/Advanced Certificate in Machine Learning and Data Science.jpg", description: "Advanced course certificate covering Machine Learning and Data Science.", category: "course" },
    { id: 10, name: "Foundation in Programming & DS", issuer: "IIT Madras", date: "2024", imageUrl: "/certificates/images/IITM-BS-FOUNDATION-CERTIFICATE.jpg", description: "Foundations for Data Science.", category: "course" },
    { id: 11, name: "Games We Play", issuer: "IIT Madras", date: "2024", imageUrl: "/certificates/images/Games-We-Play.jpg", description: "Game theory and strategic decision making.", category: "course" },
    { id: 12, name: "Understanding the Google Cloud Platform", issuer: "IIT Madras", date: "2025", imageUrl: "/certificates/images/Understanding-Google-Cloud-Platform.jpg", description: "Comprehensive understanding of Google Cloud Platform services and architecture.", category: "course" },
    // --- Conference ---
    { id: 13, name: "IIPA Southern Regional Conference", issuer: "IIPA Pondicherry & Pondicherry University", date: "2025", imageUrl: "/certificates/images/IIPA_SOUTHERN_REGIONAL_CONFERENCE.jpg", description: "Our abstract was selected and we presented our paper titled 'AI-Powered Government Scheme Recommender' at the IIPA Southern Regional Conference.", category: "conference" },
    // --- Workshops ---
    { id: 14, name: "8 Things About LLMs", issuer: "IIT Madras", date: "2025", imageUrl: "/certificates/images/JASWANTHPRASANNA - 8 Things you wish you had known about LLMs.jpg", description: "How to work more effectively and responsibly with LLMs.", category: "workshop" },
    { id: 15, name: "Building Trustworthy AI", issuer: "IIT Madras & Cargill", date: "2025", imageUrl: "/certificates/images/JASWANTHPRASANNA - Building Trustworthy AI through Data Quality.jpg", description: "Deep insights into how high-quality data can enable reliable AI systems.", category: "workshop" },
    { id: 16, name: "GenAI", issuer: "IIT Madras", date: "2025", imageUrl: "/certificates/images/JASWANTHPRASANNA - GenAI.jpg", description: "Deep dive into the world of Generative AI.", category: "workshop" },
    { id: 17, name: "Deploying ML Apps using GCP", issuer: "IIT Madras", date: "2025", imageUrl: "/certificates/images/JASWANTHPRASANNA - Deploying ML Apps at Lightning Speed using GCP.jpg", description: "Hands-on workshop on deploying ML apps rapidly using Google Cloud Platform.", category: "workshop" },
    { id: 18, name: "Git & GitHub Workshop", issuer: "IIT Madras", date: "2025", imageUrl: "/certificates/images/JASWANTHPRASANNA - Code, Commit,Collaborate Hands-on with Git & GitHub.jpg", description: "Practical workshop on version control and collaborative development.", category: "workshop" },
    { id: 19, name: "Data Visualization Workshop", issuer: "Workshop", date: "2025", imageUrl: "/certificates/images/Data Visualization Using Matplotlib & Seaborn Workshop.jpg", description: "Workshop on data visualization techniques using Matplotlib and Seaborn.", category: "workshop" },
  ];

  const filterCategories = [
    { key: 'all', label: 'All' },
    { key: 'winner', label: '🏆 Winners' },
    { key: 'competitions', label: '🏅 Competitions' },
    { key: 'diploma', label: '🎓 Diploma' },
    { key: 'course', label: '📜 Courses' },
    { key: 'conference', label: '🎤 Conference' },
    { key: 'workshop', label: '🔧 Workshops' },
  ];

  const filteredCertificates = certificates.filter((cert) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'competitions') return ['winner', 'runner-up', 'third', 'selected'].includes(cert.category);
    return cert.category === activeFilter;
  });

  const displayedCerts = filteredCertificates.length > 0 ? filteredCertificates : certificates;
  const safeIndex = currentIndex >= displayedCerts.length ? 0 : currentIndex;

  const nextCertificate = () => {
    setCurrentIndex((prev) => (prev >= displayedCerts.length - 1 ? 0 : prev + 1));
  };

  const previousCertificate = () => {
    setCurrentIndex((prev) => (prev === 0 ? displayedCerts.length - 1 : prev - 1));
  };

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
    setCurrentIndex(0);
  };

  const currentCert = displayedCerts[safeIndex];
  const catConfig = categoryConfig[currentCert.category];
  const isWinner = ['winner', 'runner-up', 'third'].includes(currentCert.category);

  return (
    <section id="certificates" className="py-20 relative" style={{ backgroundColor: '#0a0a1a' }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-mono text-xs text-neon-green tracking-widest uppercase mb-2">// achievements.unlock()</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 section-heading">Certificates & Achievements</h2>
          <p className="max-w-2xl mx-auto text-gray-400 mt-6">
            Professional certifications, hackathon wins, and achievements that validate my expertise.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleFilterChange(cat.key)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 ${
                activeFilter === cat.key
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              style={
                activeFilter === cat.key
                  ? {
                      background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(191, 0, 255, 0.2))',
                      border: '1px solid rgba(0, 240, 255, 0.4)',
                      boxShadow: '0 0 12px rgba(0, 240, 255, 0.2)',
                    }
                  : {
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={`relative max-w-4xl mx-auto transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Achievement Banner for winners */}
          {isWinner && (
            <div
              className="text-center mb-6 py-2 px-4 rounded-lg font-heading text-sm tracking-wider"
              style={{
                background: `linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 140, 0, 0.1))`,
                border: '1px solid rgba(255, 215, 0, 0.2)',
                color: '#ffd700',
                textShadow: '0 0 10px rgba(255, 215, 0, 0.3)',
              }}
            >
              🎮 ACHIEVEMENT UNLOCKED
            </div>
          )}

          {/* Certificate Image Viewer */}
          <div
            className="rounded-xl overflow-hidden relative group"
            style={{
              border: `1px solid rgba(0, 240, 255, 0.15)`,
              boxShadow: `0 0 30px ${catConfig.glowColor}`,
            }}
          >
            <div className="aspect-[4/3] sm:aspect-[16/9] w-full bg-[#0f0f2a] flex items-center justify-center overflow-hidden">
              <img
                src={currentCert.imageUrl}
                alt={currentCert.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={previousCertificate}
            className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-0 sm:-ml-12 p-2 rounded-full transition-all duration-300 z-10"
            style={{
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              color: '#00f0ff',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(0, 240, 255, 0.2)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(0, 240, 255, 0.1)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextCertificate}
            className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-0 sm:-mr-12 p-2 rounded-full transition-all duration-300 z-10"
            style={{
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              color: '#00f0ff',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(0, 240, 255, 0.2)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(0, 240, 255, 0.1)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Certificate Info */}
          <div className="mt-8 text-center">
            <h3 className="text-xl font-heading font-bold text-white mb-2">{currentCert.name}</h3>
            <p className="text-neon-cyan text-sm font-medium mb-3">{currentCert.issuer}</p>

            <div className="inline-flex items-center gap-2 mb-3 flex-wrap justify-center">
              <span
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{
                  background: catConfig.gradient,
                  boxShadow: `0 0 10px ${catConfig.glowColor}`,
                }}
              >
                {catConfig.icon}
                {catConfig.label}
              </span>
              <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono"
                style={{
                  background: 'rgba(0, 240, 255, 0.1)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  color: '#00f0ff',
                }}
              >
                <Award size={12} className="mr-1" />
                {currentCert.date}
              </span>
            </div>

            <p className="mt-3 text-gray-400 text-sm max-w-2xl mx-auto">{currentCert.description}</p>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center items-center gap-2">
            <span className="text-xs font-mono text-gray-500">
              {safeIndex + 1} / {displayedCerts.length}
            </span>
          </div>
          <div className="mt-3 flex justify-center flex-wrap gap-1.5">
            {displayedCerts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  background: index === safeIndex ? '#00f0ff' : 'rgba(255, 255, 255, 0.15)',
                  boxShadow: index === safeIndex ? '0 0 8px rgba(0, 240, 255, 0.5)' : 'none',
                  transform: index === safeIndex ? 'scale(1.4)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;