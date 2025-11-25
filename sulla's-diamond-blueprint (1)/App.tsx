import React, { useState, useEffect } from 'react';
import { essayData } from './data';
import { SectionCard } from './components/SectionCard';
import { VisualGuide } from './components/VisualGuide';
import { Printer, Download, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [scrolled, setScrolled] = useState(false);
  // Store expanded section IDs in a Set for O(1) lookup
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const expandAll = () => {
    const allIds = essayData.flatMap(s => s.content.map(sub => sub.id));
    setExpandedSections(new Set(allIds));
  };

  const collapseAll = () => {
    setExpandedSections(new Set());
  };

  const handlePrint = () => {
    // 1. Expand all sections so print has full content
    expandAll();
    
    // 2. Wait for animation/state update, then print
    setTimeout(() => {
      window.print();
    }, 600);
  };

  const filteredData = activeTab === 'all' 
    ? essayData 
    : essayData.filter(section => section.id === activeTab);

  return (
    <div className="min-h-screen pb-20">
      
      {/* iOS-style Sticky Header */}
      <header 
        className={`fixed top-0 z-50 w-full transition-all duration-300 print:hidden ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
             <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white shadow-md">
               <span className="font-cinzel text-xs font-bold">S</span>
             </div>
             <span className="font-medium tracking-tight text-slate-900">Imperium</span>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => expandedSections.size > 0 ? collapseAll() : expandAll()}
              className="hidden sm:flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {expandedSections.size > 0 ? (
                <>
                  <ChevronUp size={14} /> Collapse All
                </>
              ) : (
                <>
                  <ChevronDown size={14} /> Expand All
                </>
              )}
            </button>
            
            <button 
              onClick={handlePrint}
              className="group flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 active:scale-95"
            >
              <Download size={16} className="text-blue-100" />
              <span>Save as PDF</span>
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 pt-24 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <span className="no-print mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-500 shadow-sm">
            Architectural Blueprint
          </span>
          <h1 className="mb-6 font-serif-header text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            The Sullan Rupture
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 font-serif italic">
            "Sulla made the fall of the Roman Republic inevitable because he normalized political violence and dismantled institutional safeguards."
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:gap-12">
          
          {/* Left Sidebar: Structure Map (Sticky) */}
          <div className="hidden lg:block lg:w-64 lg:shrink-0 visual-guide-container">
            <div className="sticky top-24">
               <VisualGuide activeSection={activeTab} />
            </div>
          </div>

          {/* Right Content: Cards */}
          <div className="flex-1 min-w-0">
            
            {/* Segmented Control Tabs */}
            <div className="no-print sticky top-16 z-40 -mx-4 mb-8 overflow-x-auto bg-[#F2F2F7]/95 px-4 pb-2 pt-2 backdrop-blur sm:static sm:mx-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none">
              <div className="flex w-full sm:w-fit items-center rounded-lg bg-slate-200/50 p-1 sm:inline-flex">
                {['all', 'top-triangle', 'middle-diamond', 'bottom-triangle'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative flex-1 whitespace-nowrap rounded-md px-4 py-1.5 text-xs font-semibold transition-all sm:flex-none ${
                      activeTab === tab 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-md shadow-sm ring-1 ring-black/5"
                        style={{ backgroundColor: 'white', zIndex: -1 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">
                      {tab === 'all' ? 'Full Plan' : tab.replace('-', ' ').toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sections List */}
            <div className="space-y-10">
              <AnimatePresence mode="wait">
                {filteredData.map((section) => (
                  <motion.div 
                    key={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }} // Apple-like spring/ease
                    className="relative"
                  >
                    {/* Section Heading */}
                    <div className="mb-5 flex items-center justify-between">
                       <div className="flex items-baseline gap-3">
                         <h2 className="font-cinzel text-lg font-bold text-slate-900">
                           {section.title}
                         </h2>
                         <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                           {section.subtitle}
                         </span>
                       </div>
                       <div className="text-xs font-bold text-slate-300">
                         {section.percentage}%
                       </div>
                    </div>

                    {/* Cards Container */}
                    <div className="flex flex-col gap-4">
                      {section.content.map((sub, idx) => (
                        <SectionCard 
                          key={sub.id} 
                          section={sub} 
                          colorTheme={section.colorTheme} 
                          index={idx}
                          isOpen={expandedSections.has(sub.id)}
                          onToggle={() => toggleSection(sub.id)}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}