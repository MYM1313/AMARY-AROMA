import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { PERFUMES } from '../constants';
import { ArrowLeft, Clock, Sparkles, Droplets, Instagram, ShieldCheck, Heart, Leaf } from 'lucide-react';

const FloatingPanel: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  function handleMouseMove(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const xPct = (event.clientX - rect.left) / rect.width - 0.5;
    const yPct = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-3, 3]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative group p-6 md:p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.08)] transition-shadow duration-500 ${className}`}
    >
      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
      {/* Gloss reflection */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
    </motion.div>
  );
};

export const DetailView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const perfume = PERFUMES.find(p => p.id === id);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!perfume) return <div className="h-screen flex items-center justify-center font-serif text-2xl text-stone-500">Perfume not found.</div>;

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-x-hidden selection:bg-[#E1306C]/10 selection:text-[#E1306C]">
      
      {/* Luxury Ambient Background */}
      <div className="fixed inset-0 z-0 bg-[#FAF9F6]">
        <div className="absolute top-0 right-0 w-[80vw] h-[80vh] bg-gradient-to-br from-amber-50 via-rose-50/30 to-transparent blur-[120px] opacity-70" />
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-gradient-to-tr from-stone-200/40 via-transparent to-transparent blur-[100px] opacity-50" />
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      </div>

      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <motion.button 
          whileHover={{ x: -2, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')} 
          className="flex items-center gap-3 px-5 py-3 bg-white/70 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-white/80 text-stone-600 hover:text-stone-900 transition-all"
        >
          <ArrowLeft size={18} strokeWidth={2} />
        </motion.button>
      </div>

      {/* Layout */}
      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row min-h-screen">
          
          {/* Hero Image Section (Sticky on Desktop, Top on Mobile) */}
          <div className="lg:w-1/2 lg:h-screen lg:sticky lg:top-0 relative h-[55vh] w-full">
             <motion.div 
               initial={{ opacity: 0, scale: 1.05 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
               className="h-full w-full relative overflow-hidden lg:rounded-r-[60px] shadow-[0_0_0_0_rgba(0,0,0,0)] lg:shadow-[20px_0_60px_-20px_rgba(0,0,0,0.05)]"
             >
                {/* Parallax Image Wrapper */}
                <div className="absolute inset-0 bg-stone-200">
                    <img 
                      src={perfume.image} 
                      alt={perfume.name} 
                      className="w-full h-full object-cover object-center"
                    />
                </div>
                
                {/* Cinematic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF9F6] lg:to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10 mix-blend-multiply opacity-50" />
                <div className="absolute inset-0 bg-stone-900/5 mix-blend-overlay" />

                {/* Mobile Curve Mask (Bottom) */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAF9F6] to-transparent lg:hidden" />
             </motion.div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 px-6 py-12 lg:py-32 lg:px-20 flex flex-col justify-center">
             
             {/* Header */}
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="mb-12"
             >
                <div className="flex items-center gap-3 mb-4">
                   <span className="px-3 py-1 rounded-full border border-stone-200 bg-white/50 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 backdrop-blur-sm">
                      {perfume.collection}
                   </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1] mb-4 tracking-tight drop-shadow-sm">
                  {perfume.name}
                </h1>
                <p className="text-xl md:text-2xl text-stone-500 font-serif italic mb-8">
                  "{perfume.tagline}"
                </p>
                <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed mb-8 border-l-2 border-stone-200 pl-6">
                  {perfume.description}
                </p>
             </motion.div>

             {/* Details Grid */}
             <div className="grid grid-cols-1 gap-4 mb-10">
                
                {/* Notes Panel */}
                <FloatingPanel delay={0.1} className="w-full">
                   <div className="flex items-center gap-3 mb-4">
                      <Sparkles size={16} className="text-amber-500/80" />
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-stone-400">Olfactory Notes</h3>
                   </div>
                   <div className="flex flex-wrap gap-2">
                      {perfume.notes.map((note, i) => (
                        <span key={i} className="px-4 py-2 rounded-xl bg-white border border-stone-100 text-stone-600 text-xs font-medium shadow-sm">
                           {note}
                        </span>
                      ))}
                   </div>
                </FloatingPanel>

                <div className="grid grid-cols-2 gap-4">
                    {/* Longevity */}
                    <FloatingPanel delay={0.2}>
                       <div className="flex flex-col gap-2">
                          <Clock size={18} className="text-stone-400 mb-1" />
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">Longevity</span>
                          <span className="text-stone-800 text-sm font-medium">{perfume.longevity}</span>
                       </div>
                    </FloatingPanel>
                    
                    {/* Mood */}
                    <FloatingPanel delay={0.3}>
                       <div className="flex flex-col gap-2">
                          <Heart size={18} className="text-stone-400 mb-1" />
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">Best For</span>
                          <span className="text-stone-800 text-sm font-medium">{perfume.mood}</span>
                       </div>
                    </FloatingPanel>
                </div>

                {/* Inspiration */}
                <FloatingPanel delay={0.4}>
                   <div className="flex flex-col gap-3">
                       <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">Inspiration</span>
                       <p className="font-serif italic text-lg text-stone-700">"{perfume.inspiration}"</p>
                   </div>
                </FloatingPanel>
             </div>

             {/* CTA Section - Instagram Focus */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mb-12"
             >
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://instagram.com/direct/t/amaryaroma', '_blank')}
                  className="group relative w-full py-5 rounded-[20px] bg-white border border-[#E1306C]/30 shadow-[0_20px_40px_-10px_rgba(225,48,108,0.15)] hover:shadow-[0_25px_50px_-10px_rgba(225,48,108,0.25)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
                >
                   {/* Instagram Gradient Background Reveal */}
                   <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-pink-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   
                   <Instagram size={24} className="text-[#E1306C] relative z-10" strokeWidth={2} />
                   <span className="text-[#E1306C] font-bold uppercase tracking-[0.2em] text-sm relative z-10">
                      Order via Instagram DM
                   </span>
                </motion.button>
                <div className="flex justify-between items-center px-4 mt-4 text-[9px] font-bold uppercase tracking-widest text-stone-400">
                    <span>Personal Concierge</span>
                    <span>•</span>
                    <span>Hand-packed in India</span>
                </div>
             </motion.div>

             {/* 3D Assurance Grid */}
             <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { icon: Leaf, label: "Eco-Conscious" },
                  { icon: Droplets, label: "Pure Oils" },
                  { icon: ShieldCheck, label: "Ethically Made" },
                  { icon: Sparkles, label: "Paraben Free" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    whileHover={{ y: -3 }}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/40 border border-white/60 shadow-sm"
                  >
                    <item.icon size={16} className="text-stone-400 mb-2" strokeWidth={1.5} />
                    <span className="text-[8px] font-bold uppercase tracking-wider text-stone-500 text-center">{item.label}</span>
                  </motion.div>
                ))}
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};