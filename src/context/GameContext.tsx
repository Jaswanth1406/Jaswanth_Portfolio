import React, { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

// ========== TYPES ==========
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
}

interface GameState {
  xp: number;
  level: number;
  maxXp: number;
  currentLevelXp: number;
  isMaxLevel: boolean;
  isCompleted: boolean;
  sectionsVisited: string[];
  unlockedAchievements: string[];
  latestAchievement: Achievement | null;
  terminalOpen: boolean;
  showCompletion: boolean;
}

interface GameContextType extends GameState {
  addXp: (amount: number) => void;
  visitSection: (sectionId: string) => void;
  unlockAchievement: (id: string) => void;
  toggleTerminal: () => void;
  setTerminalOpen: (open: boolean) => void;
  dismissAchievement: () => void;
  dismissCompletion: () => void;
  totalAchievements: number;
}

// ========== ACHIEVEMENTS ==========
export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first_visit', title: 'Hello World!', description: 'Visited the portfolio for the first time', icon: '👋', xpReward: 25 },
  { id: 'about_visited', title: 'Getting Personal', description: 'Discovered the About section', icon: '🔍', xpReward: 20 },
  { id: 'skills_visited', title: 'Skill Tree Unlocked', description: 'Explored the Skills section', icon: '🌟', xpReward: 20 },
  { id: 'experience_visited', title: 'Battle Log', description: 'Viewed the Experience timeline', icon: '⚔️', xpReward: 20 },
  { id: 'education_visited', title: 'Knowledge Seeker', description: 'Checked out the Education section', icon: '📚', xpReward: 20 },
  { id: 'certificates_visited', title: 'Trophy Hunter', description: 'Found the Achievements vault', icon: '🏆', xpReward: 25 },
  { id: 'projects_visited', title: 'Project Explorer', description: 'Browsed through the Projects', icon: '💎', xpReward: 25 },
  { id: 'contact_visited', title: 'Open Channel', description: 'Reached the Contact section', icon: '📡', xpReward: 20 },
  { id: 'cv_downloaded', title: 'Intel Acquired', description: 'Downloaded the CV', icon: '📄', xpReward: 30 },
  { id: 'terminal_opened', title: 'Hacker Mode', description: 'Opened the command terminal', icon: '💻', xpReward: 25 },
  { id: 'all_sections', title: 'Completionist', description: 'Visited every section of the portfolio', icon: '🎖️', xpReward: 50 },
  { id: 'github_clicked', title: 'Source Diver', description: 'Clicked on a GitHub link', icon: '🐙', xpReward: 15 },
  { id: 'speed_reader', title: 'Speed Runner', description: 'Scrolled to the bottom in under 30 seconds', icon: '⚡', xpReward: 30 },
];

// Total possible XP = 325
export const MAX_XP = ACHIEVEMENTS.reduce((sum, a) => sum + a.xpReward, 0);

const ALL_SECTIONS = ['about', 'skills', 'experience', 'education', 'certificates', 'projects', 'contact'];

// ========== LEVEL CONFIG ==========
// 5 levels, calibrated so total XP = Level 5 MAX
const LEVEL_THRESHOLDS = [
  { level: 1, xpNeeded: 35 },    // 0-34: first_visit + about
  { level: 2, xpNeeded: 55 },    // 35-89: a few sections
  { level: 3, xpNeeded: 70 },    // 90-159: most sections
  { level: 4, xpNeeded: 80 },    // 160-239: all sections + extras
  { level: 5, xpNeeded: 70 },    // 240-309: completionist
];

function getLevelInfo(xp: number): { level: number; maxXp: number; currentXp: number; isMaxLevel: boolean } {
  let totalXpUsed = 0;

  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    const threshold = LEVEL_THRESHOLDS[i];
    if (xp < totalXpUsed + threshold.xpNeeded) {
      return {
        level: threshold.level,
        maxXp: threshold.xpNeeded,
        currentXp: xp - totalXpUsed,
        isMaxLevel: false,
      };
    }
    totalXpUsed += threshold.xpNeeded;
  }

  // MAX level reached
  return {
    level: 5,
    maxXp: LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1].xpNeeded,
    currentXp: LEVEL_THRESHOLDS[LEVEL_THRESHOLDS.length - 1].xpNeeded,
    isMaxLevel: true,
  };
}

// ========== CONTEXT ==========
const GameContext = createContext<GameContextType | null>(null);

export const useGame = (): GameContextType => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
};

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [xp, setXp] = useState(0);
  const [sectionsVisited, setSectionsVisited] = useState<string[]>([]);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [latestAchievement, setLatestAchievement] = useState<Achievement | null>(null);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const startTimeRef = useRef(Date.now());
  const achievementQueueRef = useRef<Achievement[]>([]);
  const showingRef = useRef(false);
  const completionTriggeredRef = useRef(false);

  const levelInfo = getLevelInfo(xp);
  const isCompleted = unlockedAchievements.length === ACHIEVEMENTS.length;

  // Check for 100% completion
  useEffect(() => {
    if (isCompleted && !completionTriggeredRef.current) {
      completionTriggeredRef.current = true;
      // Delay a bit so the last achievement toast finishes
      setTimeout(() => {
        setShowCompletion(true);
      }, 4000);
    }
  }, [isCompleted]);

  // Achievement queue processor — staggered to avoid spammy feel
  const processQueue = useCallback(() => {
    if (showingRef.current || achievementQueueRef.current.length === 0) return;
    showingRef.current = true;
    const next = achievementQueueRef.current.shift()!;
    setLatestAchievement(next);
    setTimeout(() => {
      showingRef.current = false;
      setLatestAchievement(null);
      // 500ms gap between consecutive toasts so it doesn't feel spammy
      setTimeout(() => processQueue(), 500);
    }, 3000);
  }, []);

  const addXp = useCallback((amount: number) => {
    setXp((prev) => Math.min(prev + amount, MAX_XP));
  }, []);

  const unlockAchievement = useCallback(
    (id: string) => {
      setUnlockedAchievements((prev) => {
        if (prev.includes(id)) return prev;
        const achievement = ACHIEVEMENTS.find((a) => a.id === id);
        if (!achievement) return prev;

        achievementQueueRef.current.push(achievement);
        setTimeout(() => processQueue(), 100);
        addXp(achievement.xpReward);

        return [...prev, id];
      });
    },
    [addXp, processQueue]
  );

  const visitSection = useCallback(
    (sectionId: string) => {
      setSectionsVisited((prev) => {
        if (prev.includes(sectionId)) return prev;
        const newVisited = [...prev, sectionId];

        const achievementMap: Record<string, string> = {
          about: 'about_visited',
          skills: 'skills_visited',
          experience: 'experience_visited',
          education: 'education_visited',
          certificates: 'certificates_visited',
          projects: 'projects_visited',
          contact: 'contact_visited',
        };

        if (achievementMap[sectionId]) {
          unlockAchievement(achievementMap[sectionId]);
        }

        if (ALL_SECTIONS.every((s) => newVisited.includes(s))) {
          unlockAchievement('all_sections');
        }

        if (sectionId === 'contact' && Date.now() - startTimeRef.current < 30000) {
          unlockAchievement('speed_reader');
        }

        return newVisited;
      });
    },
    [unlockAchievement]
  );

  const toggleTerminal = useCallback(() => {
    setTerminalOpen((prev) => {
      if (!prev) {
        unlockAchievement('terminal_opened');
      }
      return !prev;
    });
  }, [unlockAchievement]);

  const dismissAchievement = useCallback(() => {
    setLatestAchievement(null);
    showingRef.current = false;
  }, []);

  const dismissCompletion = useCallback(() => {
    setShowCompletion(false);
  }, []);

  // Unlock first visit on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      unlockAchievement('first_visit');
    }, 1500);
    return () => clearTimeout(timer);
  }, [unlockAchievement]);

  return (
    <GameContext.Provider
      value={{
        xp,
        level: levelInfo.level,
        maxXp: levelInfo.maxXp,
        currentLevelXp: levelInfo.currentXp,
        isMaxLevel: levelInfo.isMaxLevel,
        isCompleted,
        sectionsVisited,
        unlockedAchievements,
        latestAchievement,
        terminalOpen,
        showCompletion,
        addXp,
        visitSection,
        unlockAchievement,
        toggleTerminal,
        setTerminalOpen,
        dismissAchievement,
        dismissCompletion,
        totalAchievements: ACHIEVEMENTS.length,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
