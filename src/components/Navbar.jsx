import React from 'react';
import { Sparkles, Heart, Camera, PartyPopper, Mail } from 'lucide-react';

export default function Navbar({ currentScene, setCurrentScene }) {
  const scenes = [
    { id: 1, label: 'Cover', icon: Heart, color: 'bg-red-500' },
    { id: 2, label: 'Letter', icon: Mail, color: 'bg-pink-500' },
    { id: 3, label: 'Memories', icon: Camera, color: 'bg-rose-700' },
    { id: 4, label: 'Party', icon: PartyPopper, color: 'bg-sky-500' },
  ];

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 bg-white/80 backdrop-blur-md px-3 py-2 rounded-full shadow-2xl border-2 border-white/80 flex items-center gap-1.5 md:gap-2">
      {scenes.map((s) => {
        const Icon = s.icon;
        const isActive = currentScene === s.id;
        return (
          <button
            key={s.id}
            onClick={() => setCurrentScene(s.id)}
            className={`flex items-center gap-1.5 px-3 md:px-4 py-1.5 rounded-full font-soft text-xs md:text-sm font-bold transition-all duration-300 ${
              isActive
                ? `${s.color} text-white shadow-md scale-105`
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isActive ? 'animate-bounce' : ''}`} />
            <span className="hidden sm:inline">{s.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
