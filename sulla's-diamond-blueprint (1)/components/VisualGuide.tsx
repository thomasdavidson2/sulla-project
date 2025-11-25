import React from 'react';
import { motion } from 'framer-motion';

export const VisualGuide: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  // Helper to determine opacity based on active state
  const getOpacity = (id: string) => (activeSection === 'all' || activeSection === id ? 1 : 0.2);
  const getScale = (id: string) => (activeSection === 'all' || activeSection === id ? 1 : 0.95);
  const getColor = (id: string, type: 'stroke' | 'fill') => {
    const isActive = activeSection === 'all' || activeSection === id;
    if (type === 'fill') return isActive ? 'currentColor' : 'transparent';
    return isActive ? 'currentColor' : '#E2E8F0';
  };

  return (
    <div className="flex flex-col items-center space-y-1">
      <div className="mb-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">Structure Map</div>
      
      {/* Top Triangle (Intro) */}
      <motion.div 
        animate={{ opacity: getOpacity('top-triangle'), scale: getScale('top-triangle') }}
        className="relative flex flex-col items-center"
      >
        <svg width="100" height="60" viewBox="0 0 100 60" className="text-slate-800 drop-shadow-sm">
           <path d="M50 0 L100 60 L0 60 Z" fill="currentColor" />
        </svg>
        <div className="absolute top-8 font-cinzel text-[10px] font-bold text-white/90">INTRO</div>
      </motion.div>

      {/* Middle Diamond (Body) */}
      <motion.div 
        animate={{ opacity: getOpacity('middle-diamond'), scale: getScale('middle-diamond') }}
        className="relative -my-1 flex flex-col items-center z-10"
      >
         <svg width="100" height="100" viewBox="0 0 100 100" className="text-blue-600 drop-shadow-md">
           <rect x="50" y="7" width="61" height="61" transform="rotate(45 50 7)" fill="currentColor" rx="4" />
         </svg>
         <div className="absolute top-[38px] text-center">
           <div className="font-cinzel text-[11px] font-bold text-white">BODY</div>
           <div className="text-[9px] font-medium text-blue-100/80">70%</div>
         </div>
      </motion.div>

      {/* Bottom Triangle (Conclusion) */}
      <motion.div 
        animate={{ opacity: getOpacity('bottom-triangle'), scale: getScale('bottom-triangle') }}
        className="relative flex flex-col items-center"
      >
         <svg width="100" height="60" viewBox="0 0 100 60" className="text-slate-800 drop-shadow-sm">
           <path d="M0 0 L100 0 L50 60 Z" fill="currentColor" />
         </svg>
         <div className="absolute top-4 font-cinzel text-[10px] font-bold text-white/90">CONC</div>
      </motion.div>
      
      {/* Connection Line Graphic (Vertical line going through) */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-full w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent opacity-50" />
      </div>
    </div>
  );
};