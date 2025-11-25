import React from 'react';
import { SubSection } from '../types';
import { ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionCardProps {
  section: SubSection;
  colorTheme: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}

export const SectionCard: React.FC<SectionCardProps> = ({ section, colorTheme, index, isOpen, onToggle }) => {
  const themeColors = {
    slate: 'bg-slate-900',
    blue: 'bg-blue-600',
    rose: 'bg-rose-500'
  };
  
  const activeColor = themeColors[colorTheme as keyof typeof themeColors] || themeColors.slate;

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`section-card group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md ${isOpen ? 'ring-1 ring-black/5' : ''} print-break-inside-avoid`}
    >
      <button 
        onClick={onToggle}
        className="flex w-full items-start gap-4 p-5 text-left transition-colors active:bg-gray-50"
      >
        {/* Index Indicator */}
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white transition-colors duration-300 ${isOpen ? activeColor : 'bg-gray-200 text-gray-500 group-hover:bg-gray-300'}`}>
          {index + 1}
        </div>

        <div className="flex-1 pt-1">
          <div className="flex items-center justify-between">
            <h3 className={`text-base font-semibold text-slate-900 transition-colors ${isOpen ? 'text-blue-600' : ''}`}>
              {section.title}
            </h3>
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="no-print"
            >
              <ChevronRight className="h-5 w-5 text-gray-300" />
            </motion.div>
          </div>
          
          <p className="mt-1 text-sm text-slate-500 leading-relaxed">
            {section.description}
          </p>
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="section-content"
          >
            <div className="px-5 pb-8 pl-[4.5rem]">
              <div className="border-l-2 border-gray-100 pl-5 space-y-8">
                {section.blocks.map((block) => (
                  <div key={block.id} className="space-y-3 print-break-inside-avoid">
                    {block.title && (
                      <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                        {block.title}
                      </h4>
                    )}
                    <div className="space-y-3">
                      {block.bullets.map((bullet) => (
                        <motion.div 
                          key={bullet.id} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3 }}
                          className="group/item relative"
                        >
                          <div className="flex gap-3 text-sm leading-relaxed text-slate-700">
                            {/* Bullet Marker */}
                            <div className="shrink-0 pt-1.5">
                               {bullet.isQuote ? (
                                 <Quote className="h-3 w-3 text-blue-500 fill-blue-500/20" />
                               ) : (
                                 <div className="h-1.5 w-1.5 rounded-full bg-slate-300 group-hover/item:bg-slate-500 transition-colors" />
                               )}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                              <span className={`${bullet.isQuote ? 'font-serif italic text-slate-800' : ''}`}>
                                {bullet.text}
                              </span>
                              {bullet.citation && (
                                <div className="mt-1">
                                  <span className="inline-flex items-center rounded bg-slate-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-400 border border-slate-100">
                                    {bullet.citation}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};