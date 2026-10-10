import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function Fireworks({ triggerKey }) {
  useEffect(() => {
    // Launch fireworks burst on section switch / page load
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 35 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 35 * (timeLeft / duration);

      // Left sky fireworks burst
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.35), y: randomInRange(0.15, 0.45) },
        colors: ['#ff4d6d', '#ffb703', '#3a86ff', '#8338ec', '#06d6a0', '#ffffff'],
      });

      // Right sky fireworks burst
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.65, 0.9), y: randomInRange(0.15, 0.45) },
        colors: ['#ff006e', '#fb5607', '#70e000', '#ff758f', '#ffd166', '#ffffff'],
      });
    }, 300);

    return () => clearInterval(interval);
  }, [triggerKey]);

  return null;
}
