import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Flame, ArrowRight } from 'lucide-react';

export default function SceneGinghamCover({ onNextScene }) {
  const [candlesLit, setCandlesLit] = useState(true);
  const [teddyHearts, setTeddyHearts] = useState([]);
  const [cakeHearts, setCakeHearts] = useState([]);

  const handleTeddyClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newHeart = {
      id: Date.now(),
      x: Math.random() * 40 - 20,
      y: Math.random() * -30 - 20,
    };
    setTeddyHearts((prev) => [...prev.slice(-5), newHeart]);
  };

  const handleCakeClick = () => {
    setCandlesLit(!candlesLit);
    setCakeHearts((prev) => [
      ...prev,
      { id: Date.now(), x: (Math.random() - 0.5) * 60 }
    ]);
  };

  return (
    <div className="relative min-h-[100dvh] w-full bg-gingham flex flex-col justify-between items-center p-3 sm:p-6 md:p-8 pb-10 sm:pb-16 overflow-x-hidden select-none">
      
      {/* Floating background sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/70 animate-sparkle"
            style={{
              top: `${(i * 17) % 90}%`,
              left: `${(i * 23) % 90}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7" />
          </div>
        ))}
      </div>

      {/* TOP CENTER: Pink Cloud Header Card with "Happy Birthday" */}
      <div className="relative z-10 mt-2 sm:mt-6 flex flex-col items-center gap-3 sm:gap-4 max-w-full px-2">
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <div className="relative bg-gradient-to-b from-pink-300 via-pink-400 to-pink-300 text-pink-950 px-5 sm:px-10 md:px-16 py-3.5 sm:py-6 md:py-8 rounded-[1.75rem] sm:rounded-[3rem] shadow-2xl border-4 border-white/80 animate-float backdrop-blur-md">
            {/* Cloud border effect blobs */}
            <div className="absolute -top-3 left-4 sm:left-6 w-8 sm:w-12 h-8 sm:h-12 bg-pink-300 rounded-full border-t-4 border-white/80"></div>
            <div className="absolute -top-4 sm:-top-5 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-14 sm:h-20 bg-pink-300 rounded-full border-t-4 border-white/80"></div>
            <div className="absolute -top-3 right-4 sm:right-6 w-8 sm:w-12 h-8 sm:h-12 bg-pink-300 rounded-full border-t-4 border-white/80"></div>

            <h1 className="font-handwriting text-3xl sm:text-6xl md:text-8xl tracking-wide font-bold text-center drop-shadow-md text-pink-900 leading-tight">
              Happy Birthday
            </h1>
            
            <div className="flex items-center justify-center gap-1 sm:gap-2 mt-1 text-pink-800 font-soft text-[11px] sm:text-sm md:text-base font-semibold">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pink-700 animate-spin shrink-0" />
              <span>A Special Celebration Just For You</span>
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-pink-700 animate-spin shrink-0" />
            </div>
          </div>
        </motion.div>

        {/* PROMINENT UPSIDE ACTION BUTTON: "Goooo ➔" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={onNextScene}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white px-7 py-3 sm:px-10 sm:py-4 rounded-full font-handwriting text-xl sm:text-3xl font-bold shadow-2xl hover:shadow-pink-500/50 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/80 cursor-pointer"
          >
            <span>Goooo</span>
            <ArrowRight className="w-5 h-5 sm:w-7 sm:h-7 group-hover:translate-x-2 transition-transform" />
            <div className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-pink-950 rounded-full p-1 shadow-md">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
            </div>
          </button>
        </motion.div>
      </div>

      {/* MIDDLE CONTENT GRID: Cake Card (Left) & Teddy Bear (Right) */}
      <div className="relative z-10 w-full max-w-5xl my-3 sm:my-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-end justify-items-center px-2">
        
        {/* BOTTOM LEFT: Beige Parchment Card with Birthday Cake */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -3 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={handleCakeClick}
          className="relative cursor-pointer group bg-[#F5EBE0] p-6 md:p-8 rounded-3xl shadow-2xl border-4 border-[#E6D7C3] transform transition-transform hover:scale-105 hover:rotate-0 max-w-xs sm:max-w-sm w-full"
        >
          {/* Decorative Corner Tape / Red Hearts */}
          <div className="absolute -top-3 -left-3 bg-red-500/80 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
            <Heart className="w-3 h-3 fill-current" /> Tap Cake!
          </div>

          <div className="relative flex flex-col items-center">
            {/* Birthday Cake Image / Graphic */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-[#D4B996]/50 bg-white/40 p-3 shadow-inner w-full flex justify-center">
              <img
                src="/assets/birthday_cake_card.jpg"
                alt="Birthday Cake Card"
                className="w-48 md:w-56 h-48 md:h-56 object-cover rounded-xl shadow-md group-hover:brightness-105 transition-all"
              />
              
              {/* Flame overlay animation */}
              {candlesLit && (
                <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.25, 1], y: [0, -2, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                      className="text-amber-500 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]"
                    >
                      <Flame className="w-6 h-6 fill-amber-400" />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Cake description */}
            <div className="mt-4 text-center">
              <p className="font-handwriting text-2xl md:text-3xl text-amber-950 font-bold">
                {candlesLit ? 'Wish Big & Make a Wish! 🎂' : 'Candles Blown! ✨ Happy Birthday!'}
              </p>
              <p className="text-xs font-soft text-amber-800 mt-1 font-medium">
                {candlesLit ? '(Click to blow out the candles)' : '(Click again to relight)'}
              </p>
            </div>
          </div>

          {/* Floating Cake Hearts FX */}
          {cakeHearts.map((h) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 1, y: 0, scale: 0.8 }}
              animate={{ opacity: 0, y: -60, scale: 1.4 }}
              transition={{ duration: 1 }}
              className="absolute top-4 left-1/2 text-pink-600 pointer-events-none"
              style={{ transform: `translateX(${h.x}px)` }}
            >
              <Heart className="w-6 h-6 fill-current" />
            </motion.div>
          ))}
        </motion.div>

        {/* BOTTOM RIGHT: Cute Brown Teddy Bear with Red Heart */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 3 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onClick={handleTeddyClick}
          className="relative cursor-pointer group flex flex-col items-center justify-end max-w-xs sm:max-w-sm w-full"
        >
          <div className="relative p-4 bg-white/30 backdrop-blur-sm rounded-3xl border-2 border-white/60 shadow-xl group-hover:scale-105 transition-all">
            <img
              src="/assets/teddy_bear_heart.jpg"
              alt="Cute Teddy Bear"
              className="w-52 md:w-64 h-52 md:h-64 object-cover rounded-2xl shadow-lg border-2 border-white"
            />

            {/* Heart Pulsing Sticker */}
            <div className="absolute bottom-6 right-6 bg-red-600 text-white p-3 rounded-full shadow-lg animate-pulse-gentle group-hover:scale-125 transition-transform">
              <Heart className="w-6 h-6 fill-current" />
            </div>
          </div>

          <div className="mt-3 bg-white/90 px-4 py-1.5 rounded-full shadow-md text-pink-900 font-soft font-bold text-xs md:text-sm">
            Sending Big Hugs! 🧸❤️
          </div>

          {/* Floating Teddy Hearts */}
          {teddyHearts.map((h) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 1, y: 0, scale: 0.6 }}
              animate={{ opacity: 0, y: -80, scale: 1.3 }}
              transition={{ duration: 1.2 }}
              className="absolute bottom-20 text-red-500 pointer-events-none"
              style={{ left: `calc(50% + ${h.x}px)` }}
            >
              <Heart className="w-7 h-7 fill-current" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
