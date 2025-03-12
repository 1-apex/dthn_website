'use client';
import { useEffect, useState } from 'react';

export default function GhostTrail() {
  const [ghosts, setGhosts] = useState<{ id: number; x: number; y: number }[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const initialize = () => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setGhosts(Array.from({ length: 5 }, (_, i) => ({ id: i, x: centerX, y: centerY })));
      setMousePosition({ x: centerX, y: centerY });
    };

    initialize();
    window.addEventListener('resize', initialize);
    return () => window.removeEventListener('resize', initialize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updateGhosts = () => {
      setGhosts(prev => {
        const updated = prev.map((ghost, index) => {
          if (index === 0) {
            return {
              ...ghost,
              x: ghost.x + (mousePosition.x - ghost.x) * 0.8,
              y: ghost.y + (mousePosition.y - ghost.y) * 0.8
            };
          }
          return {
            ...ghost,
            x: ghost.x + (prev[index - 1].x - ghost.x) * 0.6,
            y: ghost.y + (prev[index - 1].y - ghost.y) * 0.6
          };
        });
        return updated;
      });
      animationFrameId = requestAnimationFrame(updateGhosts);
    };

    animationFrameId = requestAnimationFrame(updateGhosts);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePosition]);

  return (
    <div className="ghost-container">
      {ghosts.map((ghost) => (
        <div
          key={ghost.id}
          className="ghost"
          style={{
            left: `${ghost.x}px`,
            top: `${ghost.y}px`,
          }}
        />
      ))}
    </div>
  );
}
