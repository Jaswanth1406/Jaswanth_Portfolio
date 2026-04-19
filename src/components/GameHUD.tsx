import React, { useEffect, useState, useRef } from 'react';
import { useGame, ACHIEVEMENTS, MAX_XP } from '../context/GameContext';
import { Terminal, Trophy, X, Star } from 'lucide-react';

// ========== COMPLETION CELEBRATION ==========
const CompletionCelebration: React.FC<{ onDismiss: () => void }> = ({ onDismiss }) => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; color: string; delay: number; size: number }>>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Generate celebration particles
    const colors = ['#00f0ff', '#bf00ff', '#00ff88', '#ffd700', '#ff2d95', '#4d7cff'];
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 2,
      size: Math.random() * 8 + 4,
    }));
    setParticles(newParticles);
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onDismiss}
      style={{
        opacity: show ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.85)', backdropFilter: 'blur(8px)' }} />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animation: `celebrationFloat ${3 + p.delay}s ease-in-out infinite alternate`,
            animationDelay: `${p.delay}s`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Main Content */}
      <div
        className="relative text-center max-w-lg mx-auto"
        onClick={(e) => e.stopPropagation()}
        style={{
          animation: show ? 'celebrationScale 0.8s ease-out forwards' : 'none',
        }}
      >
        {/* Trophy */}
        <div
          className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #ffd700, #ff8c00)',
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.4), 0 0 80px rgba(255, 215, 0, 0.2)',
            animation: 'celebrationPulse 2s ease-in-out infinite',
          }}
        >
          <span className="text-5xl">🏆</span>
        </div>

        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-heading font-black mb-2 tracking-wider"
          style={{
            background: 'linear-gradient(135deg, #ffd700, #00f0ff, #bf00ff, #00ff88)',
            backgroundSize: '300% 300%',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'holographic 3s ease infinite',
            textShadow: 'none',
          }}
        >
          PORTFOLIO MASTERED
        </h2>

        <p className="text-lg text-gray-300 mb-2 font-heading">Level 5 — MAX RANK</p>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
          }}
        >
          <Star className="text-neon-yellow" size={16} />
          <span className="font-mono text-sm text-neon-yellow">{MAX_XP} / {MAX_XP} XP — 100% Complete</span>
          <Star className="text-neon-yellow" size={16} />
        </div>

        <p className="text-gray-400 mb-8 max-w-sm mx-auto leading-relaxed">
          You've explored every corner of Jaswanth's portfolio and unlocked all {ACHIEVEMENTS.length} achievements.  
          <span className="text-neon-cyan"> Thanks for taking the time to explore!</span>
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: 'Level', value: 'MAX', color: '#ffd700' },
            { label: 'Total XP', value: String(MAX_XP), color: '#00f0ff' },
            { label: 'Achievements', value: `${ACHIEVEMENTS.length}/${ACHIEVEMENTS.length}`, color: '#00ff88' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg p-3"
              style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
            >
              <p className="font-heading font-bold text-lg" style={{ color: stat.color }}>{stat.value}</p>
              <p className="font-mono text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#contact"
            className="cyber-btn cyber-btn-filled rounded-lg px-6 py-3 no-underline text-center"
            onClick={onDismiss}
          >
            🤝 Let's Connect
          </a>
          <button
            onClick={onDismiss}
            className="cyber-btn rounded-lg px-6 py-3"
          >
            Continue Exploring
          </button>
        </div>
      </div>

      <style>{`
        @keyframes celebrationFloat {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes celebrationScale {
          0% { opacity: 0; transform: scale(0.5); }
          60% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes celebrationPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 40px rgba(255, 215, 0, 0.4), 0 0 80px rgba(255, 215, 0, 0.2); }
          50% { transform: scale(1.1); box-shadow: 0 0 60px rgba(255, 215, 0, 0.5), 0 0 120px rgba(255, 215, 0, 0.3); }
        }
      `}</style>
    </div>
  );
};

// ========== GAME HUD ==========
const GameHUD: React.FC = () => {
  const {
    xp, level, maxXp, currentLevelXp, isMaxLevel, isCompleted,
    unlockedAchievements, totalAchievements, latestAchievement,
    toggleTerminal, dismissAchievement, sectionsVisited,
    showCompletion, dismissCompletion,
  } = useGame();
  const [showAchievementPanel, setShowAchievementPanel] = useState(false);
  const [levelUpFlash, setLevelUpFlash] = useState(false);
  const [prevLevel, setPrevLevel] = useState(level);

  // Level up flash effect
  useEffect(() => {
    if (level > prevLevel) {
      setLevelUpFlash(true);
      setTimeout(() => setLevelUpFlash(false), 1500);
    }
    setPrevLevel(level);
  }, [level, prevLevel]);

  const barPercent = isMaxLevel ? 100 : (maxXp > 0 ? (currentLevelXp / maxXp) * 100 : 0);
  const isGolden = isMaxLevel || isCompleted;

  return (
    <>
      {/* Full-screen completion celebration */}
      {showCompletion && <CompletionCelebration onDismiss={dismissCompletion} />}

      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none" style={{ height: '3px' }}>
        <div className="h-full w-full" style={{ background: 'rgba(0, 240, 255, 0.08)' }}>
          <div
            className="h-full transition-all duration-1000 ease-out"
            style={{
              width: `${(sectionsVisited.length / 7) * 100}%`,
              background: isGolden
                ? 'linear-gradient(90deg, #ffd700, #ff8c00, #ffd700)'
                : 'linear-gradient(90deg, #00f0ff, #bf00ff, #00ff88)',
              boxShadow: isGolden
                ? '0 0 15px rgba(255, 215, 0, 0.6)'
                : '0 0 10px rgba(0, 240, 255, 0.5)',
            }}
          />
        </div>
      </div>

      {/* HUD Panel - Bottom Right */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2 pointer-events-auto">
        <div
          className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-300 ${
            levelUpFlash ? 'scale-110' : 'scale-100'
          }`}
          style={{
            background: 'rgba(10, 10, 26, 0.9)',
            backdropFilter: 'blur(12px)',
            border: isGolden
              ? '1px solid rgba(255, 215, 0, 0.4)'
              : levelUpFlash
                ? '1px solid rgba(255, 215, 0, 0.6)'
                : '1px solid rgba(0, 240, 255, 0.15)',
            boxShadow: isGolden
              ? '0 0 20px rgba(255, 215, 0, 0.2)'
              : levelUpFlash
                ? '0 0 25px rgba(255, 215, 0, 0.3)'
                : '0 0 15px rgba(0, 240, 255, 0.1)',
          }}
        >
          {/* Level badge */}
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center font-heading font-bold text-xs"
            style={{
              background: isGolden
                ? 'linear-gradient(135deg, #ffd700, #ff8c00)'
                : levelUpFlash
                  ? 'linear-gradient(135deg, #ffd700, #ff8c00)'
                  : 'linear-gradient(135deg, #00f0ff, #bf00ff)',
              boxShadow: isGolden
                ? '0 0 12px rgba(255, 215, 0, 0.5)'
                : '0 0 8px rgba(0, 240, 255, 0.3)',
              color: '#fff',
            }}
          >
            {isMaxLevel ? '★' : level}
          </div>

          {/* XP bar */}
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] font-mono" style={{ color: isGolden ? '#ffd700' : '#6b6b99' }}>
                {isMaxLevel ? 'MAX LEVEL' : `LVL ${level}`}
              </span>
              <span className="text-[10px] font-mono" style={{ color: isGolden ? '#ffd700' : '#00f0ff' }}>
                {isMaxLevel ? `${MAX_XP} XP` : `${currentLevelXp}/${maxXp} XP`}
              </span>
            </div>
            <div className="w-24 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(0, 240, 255, 0.1)' }}>
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${barPercent}%`,
                  background: isGolden
                    ? 'linear-gradient(90deg, #ffd700, #ff8c00)'
                    : levelUpFlash
                      ? 'linear-gradient(90deg, #ffd700, #ff8c00)'
                      : 'linear-gradient(90deg, #00f0ff, #bf00ff)',
                  boxShadow: isGolden
                    ? '0 0 8px rgba(255, 215, 0, 0.5)'
                    : '0 0 6px rgba(0, 240, 255, 0.4)',
                }}
              />
            </div>
          </div>

          {/* Achievement counter button */}
          <button
            onClick={() => setShowAchievementPanel(!showAchievementPanel)}
            className="flex items-center gap-1 px-2 py-1 rounded-lg transition-all duration-300 hover:scale-105"
            style={{
              background: isCompleted ? 'rgba(255, 215, 0, 0.15)' : 'rgba(255, 215, 0, 0.08)',
              border: `1px solid rgba(255, 215, 0, ${isCompleted ? '0.4' : '0.2'})`,
            }}
          >
            <Trophy size={12} className="text-neon-yellow" />
            <span className="text-[10px] font-mono text-neon-yellow">
              {unlockedAchievements.length}/{totalAchievements}
            </span>
          </button>

          {/* Terminal toggle */}
          <button
            onClick={toggleTerminal}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
            style={{
              background: 'rgba(0, 255, 136, 0.08)',
              border: '1px solid rgba(0, 255, 136, 0.2)',
              color: '#00ff88',
            }}
            title="Toggle Terminal (` key)"
          >
            <Terminal size={14} />
          </button>
        </div>
      </div>

      {/* Achievement Panel Overlay */}
      {showAchievementPanel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setShowAchievementPanel(false)}>
          <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(4px)' }} />
          <div
            className="relative w-full max-w-lg max-h-[70vh] overflow-y-auto rounded-xl p-6"
            style={{
              background: 'rgba(15, 15, 42, 0.95)',
              border: `1px solid ${isCompleted ? 'rgba(255, 215, 0, 0.2)' : 'rgba(0, 240, 255, 0.15)'}`,
              boxShadow: isCompleted
                ? '0 0 40px rgba(255, 215, 0, 0.1)'
                : '0 0 40px rgba(0, 240, 255, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading font-bold text-white text-lg flex items-center gap-2">
                <Trophy className="text-neon-yellow" size={20} />
                Achievements
                {isCompleted && <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 font-mono">100%</span>}
              </h3>
              <button onClick={() => setShowAchievementPanel(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {isCompleted && (
              <div
                className="mb-4 p-3 rounded-lg text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 140, 0, 0.08))',
                  border: '1px solid rgba(255, 215, 0, 0.15)',
                }}
              >
                <p className="font-heading text-sm text-yellow-400">🎉 All Achievements Unlocked! Portfolio Mastered!</p>
              </div>
            )}

            <div className="space-y-2">
              {ACHIEVEMENTS.map((ach) => {
                const unlocked = unlockedAchievements.includes(ach.id);
                return (
                  <div
                    key={ach.id}
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300"
                    style={{
                      background: unlocked ? 'rgba(0, 240, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
                      border: `1px solid ${unlocked ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)'}`,
                      opacity: unlocked ? 1 : 0.4,
                    }}
                  >
                    <span className="text-2xl" style={{ filter: unlocked ? 'none' : 'grayscale(1)' }}>
                      {ach.icon}
                    </span>
                    <div className="flex-1">
                      <p className={`text-sm font-heading ${unlocked ? 'text-white' : 'text-gray-500'}`}>
                        {ach.title}
                      </p>
                      <p className="text-xs text-gray-500 font-mono">{ach.description}</p>
                    </div>
                    <span className="text-xs font-mono" style={{ color: unlocked ? '#00f0ff' : '#4a4a6a' }}>
                      +{ach.xpReward}xp
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-4 text-center" style={{ borderTop: '1px solid rgba(0, 240, 255, 0.08)' }}>
              <span className="font-mono text-xs text-gray-500">
                Total XP: <span style={{ color: isGolden ? '#ffd700' : '#00f0ff' }}>{xp}/{MAX_XP}</span> | Level: <span style={{ color: isGolden ? '#ffd700' : '#bf00ff' }}>
                  {isMaxLevel ? 'MAX' : level}
                </span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Achievement Toast Popup */}
      {latestAchievement && (
        <div className="fixed top-6 left-1/2 z-50" style={{ animation: 'slideDownIn 0.5s ease-out forwards' }}>
          <div
            className="flex items-center gap-4 px-6 py-4 rounded-xl cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, rgba(10, 10, 26, 0.95), rgba(21, 21, 56, 0.95))',
              border: '1px solid rgba(255, 215, 0, 0.4)',
              boxShadow: '0 0 30px rgba(255, 215, 0, 0.2), 0 0 60px rgba(0, 240, 255, 0.1)',
              backdropFilter: 'blur(12px)',
            }}
            onClick={dismissAchievement}
          >
            <span className="text-3xl">{latestAchievement.icon}</span>
            <div>
              <p className="text-[10px] font-heading tracking-[0.2em] uppercase" style={{ color: '#ffd700', textShadow: '0 0 8px rgba(255, 215, 0, 0.4)' }}>
                🎮 Achievement Unlocked!
              </p>
              <p className="text-sm font-heading text-white mt-0.5">{latestAchievement.title}</p>
              <p className="text-xs font-mono text-gray-400">{latestAchievement.description}</p>
            </div>
            <div className="ml-4 px-2 py-1 rounded-md" style={{ background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
              <span className="text-xs font-mono text-neon-cyan">+{latestAchievement.xpReward}xp</span>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideDownIn {
          0% { opacity: 0; transform: translate(-50%, -30px); }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </>
  );
};

export default GameHUD;
