import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, X, ArrowRight } from 'lucide-react';

export default function SceneEnvelopeLetter({ onNextScene }) {
  const [countdown, setCountdown] = useState('In...');
  const [isOpen, setIsOpen] = useState(false);
  const [letterMessage] = useState(
    `Dear VAISHUU! ✨\n\nHappy Birthday!\n\nAs I sit here trying to figure out the right words to say, I realize how lucky I am to have you in my life. We wear so many hats together—we’re best friends, classmates, and colleagues sharing the daily grind—but somewhere along the way, you became so much more than all of that. To me, you are my soulmate.\n\nThank you for being my constant, my safe space, and the person I always look forward to seeing every single day. I hope this year brings you as much happiness, love, and light as you effortlessly bring into the lives of everyone around you—especially mine.\n\nWishing you the most wonderful birthday. I'm so grateful for you, today and always. ❤️`
  );

  // Countdown timer effect ("In..." -> "3" -> "2" -> "1")
  useEffect(() => {
    const steps = ['In...', '3', '2', '1', 'Tap the Envelope! 💌'];
    let stepIndex = 0;
    const interval = setInterval(() => {
      stepIndex++;
      if (stepIndex < steps.length) {
        setCountdown(steps[stepIndex]);
      } else {
        clearInterval(interval);
      }
    }, 900);
    return () => clearInterval(interval);
  }, []);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-pink-200 via-pink-300 to-pink-200 flex flex-col justify-center items-center p-3 sm:p-6 md:p-8 pb-24 overflow-hidden select-none">
      
      {/* Liquid Pink Wave Drop Transition Top Decor */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-20">
        <svg
          className="relative block w-full h-16 md:h-24 text-pink-400"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,60 C650,140 900,10 1200,40 L1200,0 L0,0 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Background Floating White Sparkle Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/80 animate-sparkle"
            style={{
              top: `${(i * 13) % 92}%`,
              left: `${(i * 19) % 92}%`,
              animationDelay: `${i * 0.25}s`,
            }}
          >
            <Sparkles className="w-4 h-4 md:w-6 md:h-6" />
          </div>
        ))}
      </div>

      {/* Decorative Outer Frame (Torn Paper + Heart Stamps & Red Tulips) */}
      <div className="relative z-10 w-full max-w-3xl bg-pink-100/90 rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 md:p-12 border-4 sm:border-8 border-white/90 shadow-2xl flex flex-col items-center justify-center min-h-[420px] sm:min-h-[500px]">
        
        {/* Top Right Red Tulips Sticker */}
        <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 z-20 bg-white p-2 sm:p-3 rounded-full shadow-lg border-2 border-pink-200 flex items-center gap-1 transform rotate-12">
          <span className="text-xl sm:text-2xl">🌷🌷</span>
        </div>

        {/* Top Left & Bottom Heart Stamps */}
        <div className="absolute top-4 left-4 text-rose-500 opacity-80 flex gap-1">
          <Heart className="w-5 h-5 fill-current" />
          <Heart className="w-3 h-3 fill-current" />
        </div>
        <div className="absolute bottom-4 right-4 text-rose-500 opacity-80 flex gap-1">
          <Heart className="w-4 h-4 fill-current" />
          <Heart className="w-5 h-5 fill-current" />
        </div>
        <div className="absolute bottom-4 left-4 text-rose-500 opacity-80 flex gap-1">
          <Heart className="w-5 h-5 fill-current" />
        </div>

        {/* COUNTDOWN TEXT HEADER ABOVE ENVELOPE */}
        <motion.div
          key={countdown}
          initial={{ opacity: 0, scale: 0.8, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h2 className="font-handwriting text-4xl md:text-6xl font-bold text-pink-900 drop-shadow-sm">
            {countdown}
          </h2>
        </motion.div>

        {/* VINTAGE BEIGE ENVELOPE WITH WAX SEAL */}
        <motion.div
          whileHover={{ scale: 1.03, rotate: 1 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOpenEnvelope}
          className="relative cursor-pointer group w-full max-w-md bg-[#E5D3B3] rounded-3xl p-6 md:p-8 shadow-2xl border-4 border-[#C8B28B] flex flex-col items-center justify-center transition-all duration-300"
        >
          {/* Top Envelope Triangular Flap Graphic */}
          <div className="absolute top-0 inset-x-0 h-28 bg-[#D8C29D] clip-triangle border-b-2 border-[#BFA57B] rounded-t-3xl opacity-90 group-hover:scale-y-110 origin-top transition-transform"></div>

          {/* Envelope Graphic Image */}
          <div className="relative z-10 w-full flex justify-center py-4">
            <img
              src="/assets/vintage_wax_envelope.jpg"
              alt="Vintage Envelope with Wax Seal"
              className="w-64 md:w-80 h-48 md:h-56 object-cover rounded-2xl shadow-md group-hover:brightness-105 transition-all border-2 border-[#BFA57B]"
            />

            {/* Glowing Wax Seal Highlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-red-700/20 rounded-full animate-ping pointer-events-none"></div>
          </div>

          <div className="relative z-10 mt-2 bg-[#8B0000] text-amber-100 px-6 py-2 rounded-full font-handwriting text-xl font-bold shadow-lg border border-amber-300/40 flex items-center gap-2 group-hover:bg-red-700 transition-colors">
            <Heart className="w-5 h-5 fill-amber-300 text-amber-300" />
            <span>Click Wax Seal to Read 💌</span>
          </div>
        </motion.div>

        {/* Navigation Action Button to Camera Scene */}
        <div className="mt-8">
          <button
            onClick={() => {
              onNextScene();
            }}
            className="flex items-center gap-2 text-pink-900 font-soft font-bold text-base hover:text-pink-950 underline decoration-pink-400 underline-offset-4 transition-all"
          >
            <span>Skip to Memory Camera 📸</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* UNFOLDING PARCHMENT LETTER MODAL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.7, y: 50, rotate: -3 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.7, y: 50 }}
              transition={{ type: 'spring', damping: 20 }}
              className="relative w-full max-w-lg bg-[#F5EBE0] text-amber-950 p-6 md:p-10 rounded-3xl shadow-2xl border-8 border-[#E6D7C3] my-8"
            >
              {/* Close Modal Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 bg-amber-200/80 hover:bg-amber-300 p-2 rounded-full text-amber-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative Envelope Badge */}
              <div className="flex items-center justify-between border-b-2 border-amber-800/20 pb-4 mb-4">
                <span className="font-handwriting text-2xl font-bold text-amber-900">
                  💌 Birthday Note
                </span>
              </div>

              {/* Letter Content */}
              <div className="font-handwriting text-2xl leading-relaxed whitespace-pre-line text-amber-950 font-medium my-4">
                {letterMessage}
              </div>

              {/* Modal Footer Actions */}
              <div className="mt-6 pt-4 border-t-2 border-amber-800/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-xs font-soft text-amber-800 font-semibold flex items-center gap-1">
                  <Sparkles className="w-4 h-4 text-amber-600" /> Sealed with love
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onNextScene();
                  }}
                  className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-full font-soft font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <span>See Memories Camera 📸</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
