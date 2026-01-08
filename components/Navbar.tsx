import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, Menu, ArrowRight } from 'lucide-react';
import { Logo } from './UI';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setScrolled(latest > 50);
    if (latest > previous && latest > 200 && !isMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location, setIsMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const handleNavigation = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#/', '');
    const target = sectionId ? document.getElementById(sectionId) : null;
    
    setIsMenuOpen(false);
    
    setTimeout(() => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                window.scrollTo({ 
                  top: target ? target.offsetTop - 100 : 0, 
                  behavior: 'smooth' 
                });
            }, 100);
        } else {
            window.scrollTo({ 
              top: target ? target.offsetTop - 100 : 0, 
              behavior: 'smooth' 
            });
        }
    }, 500); // Slightly longer delay to allow sidebar to close smoothly
  };

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -25, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[70] flex justify-center transition-all duration-700 ${
           scrolled ? 'pt-4' : 'pt-6 md:pt-10'
        }`}
      >
        <motion.div 
            layout
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className={`
                relative flex items-center justify-between px-6 transition-all duration-700 ease-[0.16,1,0.3,1]
                ${scrolled && !isMenuOpen 
                    ? 'w-[94%] md:w-[90%] max-w-6xl bg-white rounded-full border border-stone-100 shadow-luxury py-3' 
                    : 'w-[96%] max-w-7xl bg-white rounded-2xl border border-white/20 py-4 shadow-sm'
                }
            `}
        >
          {/* Left: AA Logo */}
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             <motion.div 
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               className="flex items-center justify-center"
             >
                <Logo className="w-12 h-12" />
             </motion.div>
          </Link>

          {/* Center: Brand Name */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
             <motion.span 
                layout
                className={`
                    font-serif font-bold tracking-[0.4em] uppercase text-[#1C1917] transition-all duration-700 text-center
                    ${scrolled ? 'text-[10px] md:text-sm' : 'text-sm md:text-lg'}
                `}
             >
                AMARY AROMA
             </motion.span>
          </div>

          {/* Right: Menu */}
          <motion.button 
            onClick={() => setIsMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className={`
                w-10 h-10 flex items-center justify-center rounded-full transition-all duration-500 bg-stone-50 text-[#1C1917] shadow-sm border border-stone-100/50
            `}
          >
            <Menu size={18} strokeWidth={2} />
          </motion.button>
        </motion.div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-[#1C1917]/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 180, damping: 28, mass: 0.8 }}
              className="fixed top-0 right-0 h-full w-full md:w-[480px] z-[110] bg-[#FAFAF9]/95 backdrop-blur-3xl border-l border-stone-200 flex flex-col shadow-2xl"
            >
               {/* Sidebar Header */}
               <div className="flex justify-between items-center px-8 md:px-10 py-10 border-b border-stone-200/50">
                  <span className="font-serif font-bold text-2xl tracking-[0.2em] text-[#1C1917] uppercase flex items-center gap-2">
                      <Logo className="w-10 h-10" />
                  </span>
                  <motion.button
                     onClick={() => setIsMenuOpen(false)}
                     whileHover={{ rotate: 90, scale: 1.1 }}
                     whileTap={{ scale: 0.9 }}
                     className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-stone-200 text-stone-900 shadow-sm hover:bg-stone-100 transition-colors"
                  >
                     <X size={20} strokeWidth={2} />
                  </motion.button>
               </div>

               {/* Navigation Links - CTA Style */}
               <div className="flex-1 overflow-y-auto px-6 md:px-10 py-8 space-y-4">
                  {NAV_ITEMS.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <a 
                        href={item.href}
                        onClick={(e) => handleNavigation(e, item.href)}
                        className="block w-full"
                      >
                         <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative flex items-center justify-between p-5 md:p-6 rounded-[1.5rem] bg-white border border-stone-200 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(28,25,23,0.3)] hover:border-stone-900 hover:bg-[#1C1917] transition-all duration-300 overflow-hidden cursor-pointer"
                         >
                            {/* Text Content */}
                            <div className="relative z-10 flex flex-col">
                                <span className="font-serif text-lg md:text-xl text-stone-900 group-hover:text-white transition-colors duration-300 tracking-wide font-semibold">
                                    {item.label}
                                </span>
                                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-stone-400 group-hover:text-stone-400 transition-colors duration-300 mt-1 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-2 transform translate-y-2 group-hover:translate-y-0">
                                    Explore Section
                                </span>
                            </div>

                            {/* Arrow Icon */}
                            <div className="relative z-10 w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-all duration-300">
                                <ArrowRight size={18} className="text-stone-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
                            </div>
                         </motion.div>
                      </a>
                    </motion.div>
                  ))}
               </div>

               {/* Sidebar Footer */}
               <div className="p-8 border-t border-stone-200/50 bg-stone-50/50 text-center">
                 <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-stone-400 block mb-2">
                    Est. 2026 • New Delhi
                 </span>
                 <p className="text-[9px] text-stone-300 tracking-widest">Designed for Silence</p>
               </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};