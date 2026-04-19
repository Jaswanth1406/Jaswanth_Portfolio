import React, { useEffect, useRef } from 'react';

interface TrailDot {
  x: number;
  y: number;
  alpha: number;
  size: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<TrailDot[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const TRAIL_LENGTH = 20;
    const DOT_SIZE = 4;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      dotsRef.current.unshift({
        x: e.clientX,
        y: e.clientY,
        alpha: 0.6,
        size: DOT_SIZE,
      });
      if (dotsRef.current.length > TRAIL_LENGTH) {
        dotsRef.current.pop();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      dotsRef.current.forEach((dot, i) => {
        const progress = i / TRAIL_LENGTH;
        dot.alpha = 0.5 * (1 - progress);
        dot.size = DOT_SIZE * (1 - progress * 0.7);

        // Glow
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.size * 3);
        gradient.addColorStop(0, `rgba(0, 240, 255, ${dot.alpha * 0.4})`);
        gradient.addColorStop(0.5, `rgba(191, 0, 255, ${dot.alpha * 0.15})`);
        gradient.addColorStop(1, 'rgba(0, 240, 255, 0)');
        
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${dot.alpha})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[45]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;
