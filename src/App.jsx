import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SceneGinghamCover from './components/SceneGinghamCover';
import SceneEnvelopeLetter from './components/SceneEnvelopeLetter';
import SceneVintageCamera from './components/SceneVintageCamera';
import SceneBlueWavyGrid from './components/SceneBlueWavyGrid';
import Balloons from './components/Balloons';
import Fireworks from './components/Fireworks';
import CursorTrail from './components/CursorTrail';
import FallingFlowers from './components/FallingFlowers';

const sceneTransition = {
  initial: { opacity: 0, scale: 0.98, y: 20 },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1], // Custom smooth quint easing
    },
  },
  exit: {
    opacity: 0,
    scale: 1.01,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function App() {
  const [currentScene, setCurrentScene] = useState(1);

  // Keyboard Navigation (Arrow Keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentScene((prev) => Math.min(prev + 1, 4));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentScene((prev) => Math.max(prev - 1, 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNextScene = () => {
    setCurrentScene((prev) => Math.min(prev + 1, 4));
  };

  const handleReset = () => {
    setCurrentScene(1);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 font-sans selection:bg-pink-300 selection:text-pink-900">
      {/* Floating Heart & Sparkle Cursor/Touch Trail */}
      <CursorTrail />

      {/* Floating Colorful Balloons emitting from bottom to top on load and section switch */}
      <Balloons triggerKey={currentScene} />

      {/* Flower Shower Raining from top to bottom on load and section switch */}
      <FallingFlowers triggerKey={currentScene} />

      {/* Celebratory Sky Fireworks on load and section switch */}
      <Fireworks triggerKey={currentScene} />

      {/* Scene Transitions Container with Butter-Smooth Easing */}
      <AnimatePresence mode="wait">
        {currentScene === 1 && (
          <motion.div
            key="scene-1"
            variants={sceneTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen transform-gpu"
          >
            <SceneGinghamCover onNextScene={handleNextScene} />
          </motion.div>
        )}

        {currentScene === 2 && (
          <motion.div
            key="scene-2"
            variants={sceneTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen transform-gpu"
          >
            <SceneEnvelopeLetter onNextScene={handleNextScene} />
          </motion.div>
        )}

        {currentScene === 3 && (
          <motion.div
            key="scene-3"
            variants={sceneTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen transform-gpu"
          >
            <SceneVintageCamera onNextScene={handleNextScene} />
          </motion.div>
        )}

        {currentScene === 4 && (
          <motion.div
            key="scene-4"
            variants={sceneTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full min-h-screen transform-gpu"
          >
            <SceneBlueWavyGrid onReset={handleReset} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
