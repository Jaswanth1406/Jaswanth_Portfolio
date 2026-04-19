import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useGame, ACHIEVEMENTS } from '../context/GameContext';

interface CommandOutput {
  text: string;
  type: 'input' | 'output' | 'error' | 'success' | 'ascii';
}

const ASCII_ART = `
     ██╗██████╗ 
     ██║██╔══██╗
     ██║██████╔╝
██   ██║██╔═══╝ 
╚█████╔╝██║     
 ╚════╝ ╚═╝  v1.0
`;

const HELP_TEXT = `
Available commands:

  about       - View about section
  skills      - View skills section
  experience  - View experience section
  education   - View education section
  certificates - View certificates
  projects    - View projects section
  contact     - Open contact section
  
  whoami      - Who am I?
  stats       - View your exploration stats
  achievements - List achievements
  download cv - Download resume
  
  clear       - Clear terminal
  help        - Show this help message
  exit        - Close terminal

  Tip: Use ↑/↓ to navigate command history
`;

const CommandTerminal: React.FC = () => {
  const { terminalOpen, setTerminalOpen, xp, level, unlockedAchievements, sectionsVisited, totalAchievements, unlockAchievement } = useGame();
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    { text: ASCII_ART, type: 'ascii' },
    { text: "Welcome to Jaswanth's Terminal v1.0", type: 'success' },
    { text: 'Type "help" for available commands.', type: 'output' },
    { text: '', type: 'output' },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut to toggle terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && !e.ctrlKey && !e.altKey) {
        e.preventDefault();
        setTerminalOpen(!terminalOpen);
      }
      if (e.key === 'Escape' && terminalOpen) {
        setTerminalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalOpen, setTerminalOpen]);

  // Auto-focus input when terminal opens
  useEffect(() => {
    if (terminalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [terminalOpen]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const navigateToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setTerminalOpen(false), 500);
      return true;
    }
    return false;
  }, [setTerminalOpen]);

  const executeCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory: CommandOutput[] = [
      ...history,
      { text: `jaswanth@portfolio:~$ ${cmd}`, type: 'input' },
    ];

    if (!trimmed) {
      setHistory(newHistory);
      return;
    }

    // Add to command history
    setCommandHistory((prev) => [cmd, ...prev.slice(0, 49)]);
    setHistoryIndex(-1);

    // Command handling
    const sectionCommands: Record<string, string> = {
      about: 'about',
      skills: 'skills',
      experience: 'experience',
      education: 'education',
      certificates: 'certificates',
      projects: 'projects',
      contact: 'contact',
      home: 'home',
    };

    // Also accept goto variants
    const gotoMatch = trimmed.match(/^(?:goto|cd|go|nav(?:igate)?)\s+(.+)$/);
    const targetSection = gotoMatch ? gotoMatch[1] : null;
    const resolvedSection = targetSection ? sectionCommands[targetSection] : sectionCommands[trimmed];

    if (resolvedSection) {
      newHistory.push({ text: `Navigating to ${resolvedSection}...`, type: 'success' });
      setHistory(newHistory);
      navigateToSection(resolvedSection);
      return;
    }

    switch (trimmed) {
      case 'help':
      case 'man':
      case '?':
        newHistory.push({ text: HELP_TEXT, type: 'output' });
        break;

      case 'whoami':
        newHistory.push({ text: 'Jaswanth Prasanna — Full Stack AI Developer, 4x Hackathon Winner', type: 'success' });
        newHistory.push({ text: 'B.E CSE (AI & ML) | IIT Madras BS in Data Science', type: 'output' });
        break;

      case 'stats':
      case 'status':
        newHistory.push({
          text: `
╔══════════════════════════════╗
║   EXPLORATION STATS          ║
╠══════════════════════════════╣
║  Level:         ${String(level).padStart(10)}  ║
║  Total XP:      ${String(xp).padStart(10)}  ║
║  Sections:      ${String(sectionsVisited.length + '/7').padStart(10)}  ║
║  Achievements:  ${String(unlockedAchievements.length + '/' + totalAchievements).padStart(10)}  ║
╚══════════════════════════════╝`,
          type: 'success',
        });
        break;

      case 'achievements':
      case 'trophies': {
        const achievedList = unlockedAchievements.length > 0
          ? unlockedAchievements.map((id) => {
              const ach = ACHIEVEMENTS.find((a) => a.id === id);
              return ach ? `  ${ach.icon} ${ach.title}` : `  ✓ ${id}`;
            }).join('\n')
          : '  (none yet — keep exploring!)';
        newHistory.push({
          text: `Unlocked Achievements:\n${achievedList}`,
          type: 'output',
        });
        break;
      }

      case 'download cv':
      case 'download resume':
      case 'get cv':
        newHistory.push({ text: 'Downloading CV...', type: 'success' });
        setHistory(newHistory);
        unlockAchievement('cv_downloaded');
        const link = document.createElement('a');
        link.href = '/JaswanthPrasanna_resume.pdf';
        link.download = 'JaswanthPrasanna_resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return;

      case 'clear':
      case 'cls':
        setHistory([]);
        return;

      case 'exit':
      case 'quit':
      case 'close':
        setTerminalOpen(false);
        return;

      case 'ls':
      case 'dir':
        newHistory.push({
          text: `drwxr-xr-x  about/
drwxr-xr-x  skills/
drwxr-xr-x  experience/
drwxr-xr-x  education/
drwxr-xr-x  certificates/
drwxr-xr-x  projects/
drwxr-xr-x  contact/
-rw-r--r--  resume.pdf`,
          type: 'output',
        });
        break;

      case 'pwd':
        newHistory.push({ text: '/home/jaswanth/portfolio', type: 'output' });
        break;

      case 'date':
        newHistory.push({ text: new Date().toString(), type: 'output' });
        break;

      case 'echo hello':
      case 'hello':
      case 'hi':
        newHistory.push({ text: 'Hello! 👋 Thanks for visiting my portfolio!', type: 'success' });
        break;

      case 'sudo':
      case 'sudo su':
      case 'sudo rm -rf /':
        newHistory.push({ text: "Nice try! 😄 But this terminal is sandboxed.", type: 'error' });
        break;

      case 'history':
        if (commandHistory.length === 0) {
          newHistory.push({ text: '(no command history)', type: 'output' });
        } else {
          newHistory.push({
            text: commandHistory.slice(0, 10).map((c, i) => `  ${i + 1}. ${c}`).join('\n'),
            type: 'output',
          });
        }
        break;

      case 'neofetch':
        newHistory.push({
          text: `
      ████████      jaswanth@portfolio
    ██        ██    ──────────────────
  ██    ████    ██  OS: Portfolio OS v1.0
  ██  ██    ██  ██  Host: Web Browser
  ██    ████    ██  Kernel: React 18 + TypeScript
    ██        ██    Shell: Custom Terminal v1.0
      ████████      Theme: Cyberpunk Neon
                    Projects: 11
                    Skills: 50+
                    Hackathon Wins: 4`,
          type: 'success',
        });
        break;

      default:
        newHistory.push({ text: `command not found: ${cmd}. Type "help" for available commands.`, type: 'error' });
    }

    setHistory(newHistory);
  }, [history, level, xp, sectionsVisited, unlockedAchievements, totalAchievements, commandHistory, navigateToSection, setTerminalOpen, unlockAchievement]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  if (!terminalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4" onClick={() => setTerminalOpen(false)}>
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)' }} />

      {/* Terminal Window */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-xl overflow-hidden"
        style={{
          background: 'rgba(10, 10, 26, 0.97)',
          border: '1px solid rgba(0, 240, 255, 0.2)',
          boxShadow: '0 0 40px rgba(0, 240, 255, 0.15), 0 0 80px rgba(0, 240, 255, 0.05)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'rgba(0, 240, 255, 0.05)', borderBottom: '1px solid rgba(0, 240, 255, 0.1)' }}>
          <button onClick={() => setTerminalOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-60" />
          <div className="w-3 h-3 rounded-full bg-green-500 opacity-60" />
          <span className="ml-3 text-xs font-mono text-gray-500">jaswanth@portfolio — bash</span>
          <span className="ml-auto text-[10px] font-mono text-gray-600">Press ` or ESC to close</span>
        </div>

        {/* Terminal body */}
        <div
          ref={scrollRef}
          className="p-3 sm:p-4 h-[60vh] sm:h-[400px] overflow-y-auto font-mono text-xs sm:text-sm"
          onClick={() => inputRef.current?.focus()}
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 240, 255, 0.008) 2px, rgba(0, 240, 255, 0.008) 4px)',
          }}
        >
          {history.map((line, idx) => (
            <div
              key={idx}
              className="whitespace-pre-wrap leading-relaxed break-all sm:break-normal"
              style={{
                color:
                  line.type === 'input' ? '#00ff88' :
                  line.type === 'error' ? '#ff2d95' :
                  line.type === 'success' ? '#00f0ff' :
                  line.type === 'ascii' ? '#bf00ff' :
                  '#a0a0cc',
                textShadow: line.type === 'ascii' ? '0 0 10px rgba(191, 0, 255, 0.3)' : undefined,
              }}
            >
              {line.text}
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleSubmit} className="flex items-center mt-1">
            <span className="text-neon-green mr-2 text-xs whitespace-nowrap">jaswanth@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none border-none text-white font-mono text-sm caret-neon-cyan"
              autoFocus
              autoComplete="off"
              spellCheck={false}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommandTerminal;
