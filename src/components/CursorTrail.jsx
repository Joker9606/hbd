import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TRAIL_ICONS = ['💖', '✨', '❤️', '⭐', '🌸', '💕', '✦'];

export default function CursorTrail() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    let lastTime = 0;
    const timeouts = [];

    const addParticle = (x, y) => {
      const now = performance.now();
      // Throttle particle creation every 45ms for buttery 60-120fps performance
      if (now - lastTime < 45) return;
      lastTime = now;

      const id = `${now}-${Math.random()}`;
      const icon = TRAIL_ICONS[Math.floor(Math.random() * TRAIL_ICONS.length)];
      const size = Math.random() * 10 + 16; // 16px to 26px
      const offsetX = (Math.random() - 0.5) * 16;
      const offsetY = (Math.random() - 0.5) * 16;
      const rotation = Math.random() * 60 - 30;

      setParticles((prev) => [
        ...prev.slice(-16), // keep max 16 active particles
        { id, x: x + offsetX, y: y + offsetY, icon, size, rotation },
      ]);

      const t = setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 850);
      timeouts.push(t);
    };

    const handleMouseMove = (e) => {
      addParticle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        addParticle(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      timeouts.forEach((t) => clearTimeout(t));
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden transform-gpu">
      <AnimatePresence mode="popLayout">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              opacity: 1,
              scale: 1,
              x: p.x - 12,
              y: p.y - 12,
              rotate: p.rotation,
            }}
            animate={{
              opacity: 0,
              scale: 0.35,
              y: p.y - 42,
              x: p.x + (Math.random() * 24 - 12),
              rotate: p.rotation + 45,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              fontSize: `${p.size}px`,
              lineHeight: 1,
              filter: 'drop-shadow(0 2px 4px rgba(244, 114, 182, 0.6))',
              willChange: 'transform, opacity',
            }}
          >
            {p.icon}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
