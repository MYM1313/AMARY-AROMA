import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 800], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 1000], [1.05, 1.15]);

  const scrollToCollections = () => {
     const element = document.getElementById('collections');
     if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
     } else {
         navigate('/#collections');
     }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#FAFAF9]">
      
      {/* Background: Depth and Realism */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://ik.imagekit.io/jabzmiuta/Whisk_b2e27c3a800313cb7de4440f5c306ba0dr.jpeg" 
          alt="Artistic perfume textures" 
          className="w-full h-full object-cover grayscale-[0.05]"
        />
        
        {/* Soft top gradient to ensure navbar readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-[#FAFAF9]/40 opacity-70" />
      </motion.div>

      {/* Hero Content: Ultra-Premium Visibility */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center pt-8 md:pt-12"
      >
          {/* Metadata Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-3 md:mb-4 scale-90 md:scale-100"
          >
            <span className="text-[#1C1917] text-[9px] md:text-[10px] font-bold uppercase tracking-[0.5em] block px-5 py-1.5 md:px-6 md:py-2 rounded-full border border-[#1C1917]/10 bg-white shadow-sm">
              Established 2026
            </span>
          </motion.div>
          
          {/* Refined Text Container: Increased Blur */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             className="relative w-full max-w-3xl text-center py-5 md:py-8 px-6 md:px-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/60 shadow-luxury mb-6 md:mb-8 overflow-hidden"
          >
              {/* Stronger Blur Overlay: White/30 with blur-xl */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-xl z-[-1]" />
              
              <h1 className="font-serif text-4xl md:text-7xl lg:text-[5.5rem] text-[#1C1917] font-medium leading-[1.1] md:leading-[1.05] tracking-tighter mb-4 md:mb-6 opacity-100">
                Crafted Scents.<br/>
                <span className="italic text-[#44403C]">Quiet Luxury.</span>
              </h1>

              <div className="relative">
                <p className="text-[#1C1917] text-base md:text-xl font-medium max-w-xl mx-auto leading-relaxed opacity-100 px-2 md:px-0">
                  Experience an olfactory journey where every note is a whispered secret of stone and heritage.
                </p>
              </div>
          </motion.div>

          {/* CTA: High Contrast Solid Element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.button 
              onClick={scrollToCollections}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group relative inline-flex items-center gap-6 pl-10 pr-6 py-4 bg-[#1C1917] text-white rounded-full shadow-heavy hover:bg-black transition-all duration-500"
            >
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase">The Collection</span>
               <div className="bg-white/10 p-2 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowRight size={16} strokeWidth={2.5} />
               </div>
            </motion.button>
          </motion.div>
      </motion.div>

      {/* Ambient Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
         <span className="text-[8px] font-bold uppercase tracking-[0.5em] text-[#1C1917]/50">Explore</span>
         <div className="w-[1px] h-8 bg-[#1C1917]/20" />
      </motion.div>
    </div>
  );
};