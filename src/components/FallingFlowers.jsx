import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FLOWER_TYPES = ['🌸', '🌷', '🌺', '🌼', '🌹', '🌻', '💐', '🌸', '🌷'];

export default function FallingFlowers({ triggerKey }) {
  const [flowers, setFlowers] = useState([]);

  // Create a shower batch of falling flowers from top to bottom
  const createFlowerShower = (count = 24) => {
    const newFlowers = Array.from({ length: count }).map((_, index) => {
      const id = `${triggerKey}-flower-${Date.now()}-${index}-${Math.random()}`;
      const icon = FLOWER_TYPES[Math.floor(Math.random() * FLOWER_TYPES.length)];
      const left = Math.random() * 94 + 3; // 3% to 97%
      const size = Math.random() * 20 + 24; // 24px to 44px
      const duration = Math.random() * 4.5 + 5; // 5s to 9.5s fall time
      const delay = Math.random() * 2.2; // 0s to 2.2s delay
      const sway = Math.random() * 40 - 20; // -20px to 20px wind sway
      const rotation = Math.random() * 360;

      return { id, icon, left, size, duration, delay, sway, rotation };
    });

    setFlowers(newFlowers);
  };

  useEffect(() => {
    createFlowerShower(24);
  }, [triggerKey]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <AnimatePresence>
        {flowers.map((f) => (
          <motion.div
            key={f.id}
            initial={{
              y: '-10vh',
              x: 0,
              opacity: 0,
              rotate: f.rotation,
              scale: 0.8,
            }}
            animate={{
              y: '115vh',
              x: [0, f.sway, -f.sway, f.sway / 1.5, 0],
              opacity: [0, 0.95, 0.95, 0.9, 0],
              rotate: f.rotation + 360,
              scale: [0.8, 1, 1, 0.9],
            }}
            transition={{
              duration: f.duration,
              delay: f.delay,
              ease: [0.37, 0, 0.63, 1],
            }}
            style={{
              position: 'absolute',
              left: `${f.left}%`,
              fontSize: `${f.size}px`,
              lineHeight: 1,
              filter: 'drop-shadow(0 4px 6px rgba(244, 114, 182, 0.4))',
              willChange: 'transform, opacity',
            }}
            className="transform-gpu"
          >
            {f.icon}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
