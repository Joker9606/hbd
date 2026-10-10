import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Flashlight, ChevronLeft, ChevronRight, Sparkles, Heart, ArrowRight } from 'lucide-react';

export default function SceneVintageCamera({ onNextScene }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isFlashActive, setIsFlashActive] = useState(false);
  const [photos] = useState([
    {
      id: 1,
      url: '/assets/memory_1.jpg',
      caption: 'Precious Moments & Sweet Smiles ✨',
      date: '2026.07.26',
    },
    {
      id: 2,
      url: '/assets/memory_2.jpg',
      caption: 'Unforgettable Adventures Together 🌸',
      date: '2026.07.26',
    },
    {
      id: 3,
      url: '/assets/memory_3.jpg',
      caption: 'Pure Happiness & Laughter 💖',
      date: '2026.07.26',
    },
    {
      id: 4,
      url: '/assets/memory_4.jpg',
      caption: 'Best Birthday Memories Ever! 🎂✨',
      date: '2026.07.26',
    },
    {
      id: 5,
      url: '/assets/memory_5.jpg',
      caption: 'Celebrating You Today & Always! ❤️',
      date: '2026.07.26',
    },
    {
      id: 6,
      url: '/assets/memory_6.jpg',
      caption: 'Campus Vibes & Cute Moments 📱✨',
      date: '2026.08.09',
    },
    {
      id: 7,
      url: '/assets/memory_7.jpg',
      caption: 'Together Forever & Best Friends 🖤✨',
      date: '2026.08.09',
    },
    {
      id: 8,
      url: '/assets/memory_8.jpg',
      caption: 'Coding Grind & Shared Dreams 💻💖',
      date: '2026.08.09',
    },
    {
      id: 9,
      url: '/assets/memory_9.jpg',
      caption: 'Chilling & Making Precious Memories 🌷✨',
      date: '2026.08.09',
    },
  ]);

  const triggerCameraFlash = () => {
    setIsFlashActive(true);
    setTimeout(() => setIsFlashActive(false), 300);
  };

  const handleNextPhoto = () => {
    triggerCameraFlash();
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const handlePrevPhoto = () => {
    triggerCameraFlash();
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentPhoto = photos[currentPhotoIndex] || photos[0];

  return (
    <div className="relative min-h-screen w-full bg-[#800020] text-cream flex flex-col justify-between items-center p-3 sm:p-6 md:p-8 pb-24 overflow-hidden select-none">
      
      {/* Background Sprinkled Cream Hearts Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-200"
            style={{
              top: `${(i * 11) % 94}%`,
              left: `${(i * 17) % 94}%`,
              transform: `scale(${0.6 + (i % 3) * 0.3}) rotate(${i * 25}deg)`,
            }}
          >
            <Heart className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
          </div>
        ))}
      </div>

      {/* Screen Flash Overlay when Shutter / Next is clicked */}
      {isFlashActive && (
        <div className="fixed inset-0 z-50 bg-white opacity-95 animate-flash pointer-events-none"></div>
      )}

      {/* HEADER TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center mt-3 sm:mt-6"
      >
        <div className="inline-flex items-center gap-2 bg-red-950/70 border border-pink-300/40 text-pink-100 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full shadow-lg backdrop-blur-md">
          <Camera className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300 animate-pulse" />
          <h2 className="font-handwriting text-2xl sm:text-4xl md:text-5xl font-bold tracking-wide text-pink-100">
            Digital Camera Memories
          </h2>
        </div>
        <p className="text-[11px] sm:text-xs md:text-sm font-soft text-pink-200/80 mt-1.5 font-medium px-2">
          Click buttons on the camera to flip through birthday photos & memories! 📸
        </p>
      </motion.div>

      {/* VINTAGE SILVER DIGITAL CAMERA CONTAINER */}
      <div className="relative z-10 w-full max-w-2xl my-4 sm:my-6 flex flex-col items-center">
        
        {/* Silver Camera Outer Body */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="relative w-full bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 p-4 sm:p-6 md:p-10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border-4 border-slate-100/80 flex flex-col md:flex-row items-center gap-4 sm:gap-6"
        >
          {/* Top Shutter Button (Top edge of camera) */}
          <button
            onClick={triggerCameraFlash}
            className="absolute -top-4 right-10 sm:right-16 bg-gradient-to-b from-slate-100 to-slate-400 px-4 sm:px-6 py-1.5 sm:py-2 rounded-t-xl border-t-2 border-x-2 border-white shadow-md active:translate-y-1 transition-all group"
            title="Snap Camera Shutter!"
          >
            <div className="w-6 sm:w-8 h-2 bg-red-500 rounded-full group-hover:bg-red-600"></div>
          </button>

          {/* Flash Light Element Top Left */}
          <div className="absolute top-3 left-4 sm:left-6 flex items-center gap-1.5 sm:gap-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-amber-200 to-amber-400 border border-white shadow-inner flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-amber-800" />
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] text-slate-600 font-bold uppercase tracking-wider">Canon PowerShot</span>
          </div>

          {/* LEFT: Camera Screen (LCD Viewfinder) */}
          <div className="relative w-full md:w-3/5 bg-slate-900 p-2 sm:p-3 rounded-2xl border-2 sm:border-4 border-slate-400/80 shadow-inner flex flex-col items-center mt-3 md:mt-0">
            
            {/* LCD Screen Display Header Bar */}
            <div className="w-full flex justify-between items-center text-[10px] font-mono text-emerald-400 px-2 pb-1 border-b border-slate-800">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>REC</span>
              </div>
              <div>
                <span>{currentPhotoIndex + 1}/{photos.length}</span>
              </div>
            </div>

            {/* Photo Preview inside LCD Screen */}
            <div className="relative w-full h-44 sm:h-64 md:h-72 my-1.5 sm:my-2 overflow-hidden rounded-xl border border-slate-700 bg-black flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentPhoto.id}
                  src={currentPhoto.url}
                  alt={currentPhoto.caption}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Photo Date Stamp Overlay */}
              <div className="absolute bottom-2 right-2 bg-black/60 text-amber-400 px-2 py-0.5 rounded font-mono text-[10px] font-bold">
                {currentPhoto.date}
              </div>
            </div>

            {/* Photo Caption */}
            <div className="w-full bg-slate-800/90 text-slate-100 p-1.5 sm:p-2 rounded-lg text-center font-handwriting text-lg sm:text-xl text-pink-200">
              {currentPhoto.caption}
            </div>
          </div>

          {/* RIGHT: Camera Control Buttons Pad */}
          <div className="w-full md:w-2/5 flex flex-col items-center justify-center gap-3 sm:gap-4">
            
            {/* Navigation Wheel / Directional Pad */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-b from-slate-200 to-slate-400 border-2 border-white shadow-lg flex items-center justify-center p-2">
              
              {/* UP / Flash button */}
              <button
                onClick={triggerCameraFlash}
                className="absolute top-1 bg-slate-100 hover:bg-white p-1.5 sm:p-2 rounded-t-full text-slate-700 shadow-sm active:scale-95 transition-all"
                title="Camera Flash"
              >
                <Flashlight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
              </button>

              {/* LEFT / Previous button */}
              <button
                onClick={handlePrevPhoto}
                className="absolute left-1 bg-slate-100 hover:bg-white p-1.5 sm:p-2 rounded-l-full text-slate-700 shadow-sm active:scale-95 transition-all"
                title="Previous Photo"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* RIGHT / Next button */}
              <button
                onClick={handleNextPhoto}
                className="absolute right-1 bg-slate-100 hover:bg-white p-1.5 sm:p-2 rounded-r-full text-slate-700 shadow-sm active:scale-95 transition-all"
                title="Next Photo"
              >
                <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>

              {/* CENTER / FUNC SET button */}
              <button
                onClick={triggerCameraFlash}
                className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-slate-300 to-slate-100 border border-slate-400 font-soft font-bold text-[9px] sm:text-[10px] text-slate-800 shadow-inner flex flex-col items-center justify-center active:scale-90 transition-transform"
              >
                <span>FUNC</span>
                <span className="text-[8px] sm:text-[9px] text-pink-600 font-extrabold">SET</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER ACTION BUTTON to Scene 4 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mb-2 sm:mb-4"
      >
        <button
          onClick={() => {
            onNextScene();
          }}
          className="group inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-handwriting text-xl sm:text-2xl font-bold shadow-2xl hover:shadow-sky-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80"
        >
          <span>Grand Celebration Finale 🎉</span>
          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </motion.div>
    </div>
  );
}
