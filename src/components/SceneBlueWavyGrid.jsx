import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Flame, Gift, RefreshCw, Share2, Award, Smile } from 'lucide-react';

export default function SceneBlueWavyGrid({ onReset }) {
  const [recipientName, setRecipientName] = useState('VAISHUU');
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [wishesList, setWishesList] = useState([
    'May all your dreams come true this year! 🌟',
    'Stay happiest, healthy, and forever glowing! ✨',
    'Here is to another amazing year of unforgettable memories! 🎉',
  ]);
  const [newWish, setNewWish] = useState('');

  // Fire confetti burst automatically when entering scene
  useEffect(() => {
    fireConfetti();
  }, []);

  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0284c7', '#38bdf8', '#f472b6', '#fbbf24', '#a855f7'],
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    fireConfetti();
  };

  const handleAddWish = (e) => {
    e.preventDefault();
    if (newWish.trim()) {
      setWishesList((prev) => [...prev, newWish.trim()]);
      setNewWish('');
      fireConfetti();
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-wavy-grid text-slate-800 flex flex-col justify-between items-center p-3 sm:p-6 md:p-8 pb-24 overflow-hidden select-none">
      
      {/* Hand-Drawn Y2K Floating Doodles (Stars, Swirls, Cat Face, Mini Cake) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        {/* Cat doodle top left */}
        <div className="absolute top-10 left-10 text-sky-800 font-handwriting text-3xl font-bold opacity-70 transform -rotate-12">
          (=^•^=) 🐾
        </div>
        {/* Stars doodle top right */}
        <div className="absolute top-12 right-12 text-sky-700 font-handwriting text-4xl font-bold opacity-70 transform rotate-12">
          ★ ✨ ✦
        </div>
        {/* Swirls doodle bottom left */}
        <div className="absolute bottom-20 left-12 text-sky-700 font-handwriting text-5xl opacity-60">
          🌀 🌸
        </div>
        {/* Mini cake doodle bottom right */}
        <div className="absolute bottom-20 right-14 text-sky-800 font-handwriting text-4xl opacity-70">
          🎂 🍰
        </div>
      </div>

      {/* HERO TITLE: "HAPPIEST BIRTHDAYYY!!!" */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 12 }}
        className="relative z-10 text-center mt-3 sm:mt-6 md:mt-10 max-w-full"
      >
        <div className="bg-white/80 backdrop-blur-md px-4 sm:px-8 md:px-14 py-4 sm:py-6 md:py-8 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-sky-400 shadow-2xl animate-float">
          <h1 className="font-fun text-3xl sm:text-7xl md:text-8xl tracking-wider text-sky-900 drop-shadow-[0_4px_12px_rgba(2,132,199,0.3)]">
            HAPPIEST BIRTHDAYYY!!!
          </h1>
          
          <div className="mt-2 sm:mt-3 flex items-center justify-center gap-2">
            <input
              type="text"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              placeholder="Enter name..."
              className="bg-sky-100/90 text-sky-950 font-handwriting text-2xl sm:text-3xl font-bold text-center px-3 sm:px-4 py-1 rounded-full border-2 border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-600 max-w-xs shadow-inner"
            />
          </div>
        </div>
      </motion.div>

      {/* CELEBRATION MAIN CARD */}
      <div className="relative z-10 w-full max-w-4xl my-4 sm:my-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 items-center">
        
        {/* LEFT: Interactive Cake & Candle Blowing Station */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/90 p-6 md:p-8 rounded-3xl border-4 border-sky-300 shadow-xl flex flex-col items-center text-center"
        >
          <div className="relative">
            <img
              src="/assets/birthday_cake_card.jpg"
              alt="Celebration Cake"
              className="w-52 h-52 md:w-60 md:h-60 object-cover rounded-2xl border-2 border-sky-200 shadow-md"
            />

            {/* Lit Candles Flames overlay */}
            {!candlesBlown && (
              <div className="absolute top-12 left-1/2 -translate-x-1/2 flex gap-3 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ scale: [1, 1.3, 1], y: [0, -3, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
                    className="text-amber-500"
                  >
                    <Flame className="w-7 h-7 fill-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,1)]" />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 w-full">
            <button
              onClick={handleBlowCandles}
              className={`w-full py-3.5 px-6 rounded-2xl font-soft font-bold text-base shadow-lg transition-all flex items-center justify-center gap-2 ${
                candlesBlown
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                  : 'bg-sky-600 hover:bg-sky-700 text-white hover:scale-105 animate-pulse-gentle'
              }`}
            >
              {candlesBlown ? (
                <>
                  <Sparkles className="w-5 h-5" />
                  <span>Candles Blown! Confetti Time! 🎉</span>
                </>
              ) : (
                <>
                  <Flame className="w-5 h-5 text-amber-300" />
                  <span>Click to Blow Candles & Wish! 🌬️</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* RIGHT: Birthday Wishes Board */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/90 p-6 md:p-8 rounded-3xl border-4 border-sky-300 shadow-xl flex flex-col justify-between min-h-[340px]"
        >
          <div>
            <div className="flex items-center gap-2 border-b-2 border-sky-200 pb-3 mb-4">
              <Gift className="w-6 h-6 text-sky-600" />
              <h3 className="font-handwriting text-3xl font-bold text-sky-950">
                Birthday Wishes Wall 💌
              </h3>
            </div>

            {/* List of Wishes */}
            <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
              {wishesList.map((w, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-sky-50 p-3 rounded-xl border border-sky-200 font-soft text-sm text-sky-900 font-medium flex items-start gap-2 shadow-xs"
                >
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500 shrink-0 mt-0.5" />
                  <span>{w}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Add New Wish Form */}
          <form onSubmit={handleAddWish} className="mt-4 flex gap-2">
            <input
              type="text"
              value={newWish}
              onChange={(e) => setNewWish(e.target.value)}
              placeholder="Write a sweet wish..."
              className="flex-1 bg-sky-50 text-sky-900 px-4 py-2 rounded-xl border border-sky-300 font-soft text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-xl font-soft font-bold text-sm shadow-md transition-transform hover:scale-105"
            >
              Add ✨
            </button>
          </form>
        </motion.div>
      </div>

      {/* BOTTOM CONTROL BUTTONS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mb-4 flex flex-wrap items-center justify-center gap-4"
      >
        <button
          onClick={fireConfetti}
          className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full font-soft font-bold text-sm shadow-lg flex items-center gap-2 transition-all hover:scale-105"
        >
          <Sparkles className="w-4 h-4" />
          <span>More Confetti! 🎉</span>
        </button>

        <button
          onClick={() => {
            onReset();
          }}
          className="bg-white/90 hover:bg-white text-sky-900 px-6 py-3 rounded-full font-soft font-bold text-sm shadow-lg border border-sky-300 flex items-center gap-2 transition-all hover:scale-105"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Replay From Start 🔄</span>
        </button>
      </motion.div>
    </div>
  );
}
