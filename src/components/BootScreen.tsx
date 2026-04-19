import React, { useState, useEffect } from 'react';

const BOOT_LINES = [
  { text: '> INITIALIZING SYSTEM...', delay: 0 },
  { text: '> Loading neural networks... ██████████ OK', delay: 400 },
  { text: '> Mounting AI/ML modules... ██████████ OK', delay: 800 },
  { text: '> Connecting to GitHub... ██████████ OK', delay: 1200 },
  { text: '> Compiling portfolio data... ██████████ OK', delay: 1600 },
  { text: '> Rendering experience... ██████████ OK', delay: 2000 },
  { text: '', delay: 2400 },
  { text: '> SYSTEM READY', delay: 2600 },
  { text: '> Welcome to Jaswanth\'s Terminal', delay: 2800 },
];

interface BootScreenProps {
  onComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onComplete }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Reveal lines one by one
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach((line, index) => {
      const timer = setTimeout(() => {
        setVisibleLines(index + 1);
        setProgress(Math.min(100, ((index + 1) / BOOT_LINES.length) * 100));
      }, line.delay);
      timers.push(timer);
    });

    // Start fade out
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 3400);
    timers.push(fadeTimer);

    // Complete
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);
    timers.push(completeTimer);

    return () => {
      timers.forEach(t => clearTimeout(t));
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-600 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#0a0a1a', transition: 'opacity 0.6s ease' }}
    >
      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.015) 2px, rgba(0, 240, 255, 0.015) 4px)',
      }} />

      {/* Terminal Window */}
      <div className="w-full max-w-2xl px-6">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 px-4 py-2 rounded-t-lg" style={{ background: 'rgba(0, 240, 255, 0.05)' }}>
          <div className="w-3 h-3 rounded-full bg-red-500 opacity-60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
          <div className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
          <span className="ml-2 text-xs font-mono text-gray-500">jaswanth@portfolio ~ </span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 rounded-b-lg font-mono text-sm" style={{
          background: 'rgba(15, 15, 42, 0.8)',
          border: '1px solid rgba(0, 240, 255, 0.1)',
          minHeight: '300px',
        }}>
          {BOOT_LINES.slice(0, visibleLines).map((line, index) => (
            <div
              key={index}
              className="mb-1 animate-fadeIn"
              style={{ 
                color: line.text.includes('SYSTEM READY') || line.text.includes('Welcome')
                  ? '#00f0ff' 
                  : line.text.includes('OK') 
                    ? '#00ff88' 
                    : '#a0a0cc',
                textShadow: line.text.includes('SYSTEM READY') 
                  ? '0 0 10px rgba(0, 240, 255, 0.5)' 
                  : 'none',
                fontWeight: line.text.includes('Welcome') ? 700 : 400,
              }}
            >
              {line.text}
            </div>
          ))}

          {/* Blinking cursor */}
          {!fadeOut && (
            <span className="inline-block w-2 h-4 ml-1 animate-pulse" style={{ backgroundColor: '#00f0ff' }} />
          )}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(0, 240, 255, 0.1)' }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #00f0ff, #bf00ff)',
              boxShadow: '0 0 10px rgba(0, 240, 255, 0.5)',
            }}
          />
        </div>
        <p className="text-center mt-2 text-xs" style={{ color: '#6b6b99' }}>
          {Math.round(progress)}% loaded
        </p>
      </div>
    </div>
  );
};

export default BootScreen;
