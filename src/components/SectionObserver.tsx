import { useEffect } from 'react';
import { useGame } from '../context/GameContext';

const SECTION_IDS = ['about', 'skills', 'experience', 'education', 'certificates', 'projects', 'contact'];

const SectionObserver: React.FC = () => {
  const { visitSection } = useGame();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visitSection(id);
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [visitSection]);

  return null;
};

export default SectionObserver;
