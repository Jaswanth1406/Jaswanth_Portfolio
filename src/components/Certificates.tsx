import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight, Trophy, Medal, BookOpen, GraduationCap, Presentation, Wrench } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  pdfUrl: string;
  description: string;
  category: 'winner' | 'runner-up' | 'third' | 'selected' | 'course' | 'diploma' | 'conference' | 'workshop';
}

const categoryConfig: Record<Certificate['category'], { label: string; color: string; icon: React.ReactNode }> = {
  'winner': { label: '🏆 Winner', color: 'bg-gradient-to-r from-yellow-500 to-amber-500', icon: <Trophy size={14} /> },
  'runner-up': { label: '🥈 Runner-Up', color: 'bg-gradient-to-r from-slate-400 to-gray-500', icon: <Medal size={14} /> },
  'third': { label: '🥉 Third Place', color: 'bg-gradient-to-r from-amber-600 to-orange-700', icon: <Medal size={14} /> },
  'selected': { label: '⭐ Selected', color: 'bg-gradient-to-r from-purple-600 to-indigo-600', icon: <Award size={14} /> },
  'course': { label: '📜 Course', color: 'bg-gradient-to-r from-blue-500 to-cyan-500', icon: <BookOpen size={14} /> },
  'diploma': { label: '🎓 Diploma', color: 'bg-gradient-to-r from-emerald-500 to-teal-600', icon: <GraduationCap size={14} /> },
  'conference': { label: '🎤 Conference', color: 'bg-gradient-to-r from-rose-500 to-pink-600', icon: <Presentation size={14} /> },
  'workshop': { label: '🔧 Workshop', color: 'bg-gradient-to-r from-violet-500 to-purple-600', icon: <Wrench size={14} /> },
};

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const certificates: Certificate[] = [
    // --- Hackathons & Competitions ---
    {
      id: 1,
      name: "India Innovates",
      issuer: "India Innovates",
      date: "2025",
      pdfUrl: "/certificates/India Innovates Certificate.pdf",
      description: "Among 30,000+ participants nationwide, our team was selected and got the opportunity to present our project at Bharat Mandapam, New Delhi.",
      category: "selected"
    },
    {
      id: 2,
      name: "Chakravyuha '26 Hackathon",
      issuer: "Chakravyuha",
      date: "2026",
      pdfUrl: "/certificates/Chakravyuha_26 Hackathon.pdf",
      description: "Secured Second Place (Runner-Up) in the Chakravyuha '26 Hackathon.",
      category: "runner-up"
    },
    {
      id: 3,
      name: "Dev-Arena '26",
      issuer: "Dev-Arena",
      date: "2026",
      pdfUrl: "/certificates/Dev-Arena_26.pdf",
      description: "Secured Third Place in the Dev-Arena '26 Hackathon.",
      category: "third"
    },
    {
      id: 4,
      name: "AI Wars",
      issuer: "AI Wars",
      date: "2025",
      pdfUrl: "/certificates/AI Wars.pdf",
      description: "Winner of the AI Wars competition.",
      category: "winner"
    },
    {
      id: 5,
      name: "Origin Hackathon",
      issuer: "Origin",
      date: "2025",
      pdfUrl: "/certificates/Origin Hackathon certificate .pdf",
      description: "Winner of the Origin Hackathon.",
      category: "winner"
    },
    {
      id: 6,
      name: "Tekhora '26 Hackathon",
      issuer: "Tekhora",
      date: "2026",
      pdfUrl: "/certificates/Tekhora_26 Hackathon.pdf",
      description: "Winner of the Tekhora '26 Hackathon.",
      category: "winner"
    },
    {
      id: 7,
      name: "BNY Service Jam",
      issuer: "BNY",
      date: "2025",
      pdfUrl: "/certificates/BNY Service Jam Certificate .pdf",
      description: "Winner of the BNY Service Jam.",
      category: "winner"
    },
    // --- Diploma & Course Certificates ---
    {
      id: 8,
      name: "Diploma in Programming",
      issuer: "Indian Institute of Technology Madras",
      date: "2026",
      pdfUrl: "/certificates/IITM Diploma in Programming.pdf",
      description: "Diploma in Programming from IIT Madras.",
      category: "diploma"
    },
    {
      id: 9,
      name: "Advanced Certificate in Machine Learning and Data Science",
      issuer: "IIT Madras / NPTEL",
      date: "2025",
      pdfUrl: "/certificates/Advanced Certificate in Machine Learning and Data Science.pdf",
      description: "Advanced course certificate covering Machine Learning and Data Science.",
      category: "course"
    },
    {
      id: 10,
      name: "Foundation in Programming and Data Science",
      issuer: "IIT Madras",
      date: "2024",
      pdfUrl: "/certificates/IITM-BS-FOUNDATION-CERTIFICATE.pdf",
      description: "Foundations for Data Science.",
      category: "course"
    },
    {
      id: 11,
      name: "Games We Play",
      issuer: "IIT Madras",
      date: "2024",
      pdfUrl: "/certificates/Games-We-Play.pdf",
      description: "Game theory and strategic decision making.",
      category: "course"
    },
    {
      id: 12,
      name: "Understanding the Google Cloud Platform",
      issuer: "IIT Madras",
      date: "2025",
      pdfUrl: "/certificates/Understanding-Google-Cloud-Platform.pdf",
      description: "Comprehensive understanding of Google Cloud Platform services and architecture.",
      category: "course"
    },
    // --- Conference ---
    {
      id: 13,
      name: "IIPA Southern Regional Conference",
      issuer: "IIPA Pondicherry & Pondicherry University",
      date: "2025",
      pdfUrl: "/certificates/IIPA_SOUTHERN_REGIONAL_CONFERENCE.pdf",
      description: "Our abstract was selected and we presented our paper titled 'AI-Powered Government Scheme Recommender: A Public Administration Digital Transformation Tool' at the IIPA Southern Regional Conference, Pondicherry University.",
      category: "conference"
    },
    // --- Workshops ---
    {
      id: 14,
      name: "8 Things You Wish You Had Known About LLMs",
      issuer: "IIT Madras",
      date: "2025",
      pdfUrl: "/certificates/JASWANTHPRASANNA - 8 Things you wish you had known about LLMs.pdf",
      description: "How to work more effectively and responsibly with LLMs.",
      category: "workshop"
    },
    {
      id: 15,
      name: "Building Trustworthy AI through Data Quality",
      issuer: "IIT Madras & Cargill",
      date: "2025",
      pdfUrl: "/certificates/JASWANTHPRASANNA - Building Trustworthy AI through Data Quality.pdf",
      description: "Deep insights into how high-quality data can enable AI systems that are reliable, ethical, and responsible.",
      category: "workshop"
    },
    {
      id: 16,
      name: "GenAI",
      issuer: "IIT Madras",
      date: "2025",
      pdfUrl: "/certificates/JASWANTHPRASANNA - GenAI.pdf",
      description: "Deep dive into the world of Generative AI — how these models work, their capabilities, and real-world impact across industries.",
      category: "workshop"
    },
    {
      id: 17,
      name: "Deploying ML Apps at Lightning Speed using GCP",
      issuer: "IIT Madras",
      date: "2025",
      pdfUrl: "/certificates/JASWANTHPRASANNA - Deploying ML Apps at Lightning Speed using GCP.pdf",
      description: "Hands-on workshop on deploying Machine Learning applications rapidly using Google Cloud Platform.",
      category: "workshop"
    },
    {
      id: 18,
      name: "Code, Commit, Collaborate: Hands-on with Git & GitHub",
      issuer: "IIT Madras",
      date: "2025",
      pdfUrl: "/certificates/JASWANTHPRASANNA - Code, Commit,Collaborate Hands-on with Git & GitHub.pdf",
      description: "Practical workshop on version control using Git and collaborative development with GitHub.",
      category: "workshop"
    },
    {
      id: 19,
      name: "Data Visualization Using Matplotlib & Seaborn",
      issuer: "Workshop",
      date: "2025",
      pdfUrl: "/certificates/Data Visualization Using Matplotlib & Seaborn Workshop.pdf",
      description: "Workshop on data visualization techniques using Matplotlib and Seaborn libraries.",
      category: "workshop"
    },
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

  // Reset index when filter changes
  const displayedCerts = filteredCertificates.length > 0 ? filteredCertificates : certificates;
  const safeIndex = currentIndex >= displayedCerts.length ? 0 : currentIndex;

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= displayedCerts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? displayedCerts.length - 1 : prevIndex - 1
    );
  };

  const handleFilterChange = (key: string) => {
    setActiveFilter(key);
    setCurrentIndex(0);
  };

  const currentCert = displayedCerts[safeIndex];
  const catConfig = categoryConfig[currentCert.category];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates & Achievements</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
            Professional certifications, hackathon wins, and achievements that validate my expertise.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleFilterChange(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat.key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-[16/9] bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src={currentCert.pdfUrl}
              className="w-full h-full"
              title={currentCert.name}
            />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 sm:-ml-12">
            <button
              onClick={previousCertificate}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 sm:-mr-12">
            <button
              onClick={nextCertificate}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {currentCert.name}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
              {currentCert.issuer}
            </p>
            <div className="inline-flex items-center gap-2 mb-3 flex-wrap justify-center">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold text-white ${catConfig.color}`}>
                {catConfig.icon}
                {catConfig.label}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                <Award size={14} className="mr-1" />
                {currentCert.date}
              </span>
            </div>
            <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              {currentCert.description}
            </p>
          </div>

          <div className="mt-6 flex justify-center items-center gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {safeIndex + 1} / {displayedCerts.length}
            </span>
          </div>
          <div className="mt-3 flex justify-center flex-wrap gap-1.5">
            {displayedCerts.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === safeIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300 dark:bg-gray-600 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;