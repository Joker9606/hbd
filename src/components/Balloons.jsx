import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BALLOON_COLORS = [
  '#FF4D6D', // Rose Pink
  '#FFB703', // Warm Yellow
  '#3A86FF', // Ocean Blue
  '#8338EC', // Violet Purple
  '#06D6A0', // Emerald Mint
  '#FF006E', // Neon Pink
  '#FB5607', // Bright Orange
  '#70E000', // Lime Green
  '#FF758F', // Pastel Pink
  '#FFD166', // Soft Gold
];

export default function Balloons({ triggerKey }) {
  const [balloons, setBalloons] = useState([]);

  // Function to create a batch of floating balloons
  const createBalloonBatch = (count = 20) => {
    const newBalloons = Array.from({ length: count }).map((_, index) => {
      const id = `${triggerKey}-${Date.now()}-${index}-${Math.random()}`;
      const color = BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)];
      const left = Math.random() * 92 + 4; // 4% to 96%
      const size = Math.random() * 24 + 36; // 36px to 60px
      const duration = Math.random() * 4 + 5; // 5s to 9s float time
      const delay = Math.random() * 2.5; // 0s to 2.5s delay stagger
      const sway = Math.random() * 30 - 15; // -15px to 15px sway

      return { id, color, left, size, duration, delay, sway };
    });

    setBalloons(newBalloons);
  };

  // Trigger balloon batch on initial page load and whenever section/scene changes
  useEffect(() => {
    createBalloonBatch(22);
  }, [triggerKey]);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      <AnimatePresence>
        {balloons.map((b) => (
          <motion.div
            key={b.id}
            initial={{
              y: '115vh',
              x: 0,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              y: '-135vh',
              x: [0, b.sway, -b.sway, b.sway / 2, 0],
              opacity: [0, 0.95, 0.95, 0.9, 0],
              scale: [0.8, 1, 1, 0.95],
            }}
            transition={{
              duration: b.duration,
              delay: b.delay,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            style={{
              position: 'absolute',
              left: `${b.left}%`,
              width: `${b.size}px`,
              willChange: 'transform, opacity',
            }}
            className="flex flex-col items-center transform-gpu"
          >
            {/* Balloon SVG */}
            <svg
              viewBox="0 0 100 135"
              className="w-full h-auto drop-shadow-md"
              style={{ filter: `drop-shadow(0px 8px 12px ${b.color}55)` }}
            >
              {/* Balloon Main Oval Body */}
              <ellipse
                cx="50"
                cy="50"
                rx="42"
                ry="48"
                fill={b.color}
              />
              
              {/* Glossy Sheen Highlight */}
              <ellipse
                cx="35"
                cy="32"
                rx="14"
                ry="8"
                fill="#FFFFFF"
                opacity="0.38"
                transform="rotate(-25 35 32)"
              />

              {/* Secondary Soft Reflection */}
              <circle
                cx="66"
                cy="62"
                r="5"
                fill="#FFFFFF"
                opacity="0.2"
              />

              {/* Balloon Knot */}
              <polygon
                points="45,97 55,97 50,103"
                fill={b.color}
              />

              {/* Wavy Ribbon String */}
              <path
                d="M50,103 C46,112 54,120 50,128 C46,134 52,135 50,135"
                stroke="#FFFFFF"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                opacity="0.75"
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
