import React from 'react';
import { Section } from './UI';
import { PERFUMES } from '../constants';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Instagram } from 'lucide-react';

const FragranceCard: React.FC<{ perfume: typeof PERFUMES[0]; index: number }> = ({ perfume, index }) => {
  const navigate = useNavigate();
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 20 });

  function onMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const xPct = (event.clientX - left) / width - 0.5;
    const yPct = (event.clientY - top) / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full perspective-1000"
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={() => navigate(`/perfume/${perfume.id}`)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative h-[300px] md:h-[500px] w-full cursor-pointer rounded-[30px] bg-stone-900 shadow-lg transition-all duration-300 overflow-hidden border border-white/10"
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-stone-800">
           <motion.img
             src={perfume.image}
             alt={perfume.name}
             className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90"
           />
           {/* Cinematic Gradient */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-z-20">
           <motion.div 
             className="transform"
             style={{ transformStyle: "preserve-3d", translateZ: 20 }}
           >
             <h3 className="font-serif text-xl md:text-3xl text-white mb-1 tracking-wide">
               {perfume.name}
             </h3>
             <p className="text-white/70 text-[10px] uppercase tracking-[0.2em]">
                Click to Explore
             </p>
           </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Signatures: React.FC = () => {
  const gridItems = PERFUMES.slice(0, 4);

  return (
    <Section id="collections" className="py-6 md:py-12">
      <div className="text-center mb-6 md:mb-8 max-w-2xl mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
         >
            <span className="text-stone-500 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase mb-1 md:mb-2 block">Signature Series</span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-800 mb-1 tracking-tight">The Collection</h2>
         </motion.div>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-5xl mx-auto px-3 md:px-2 mb-8 md:mb-10">
        {gridItems.map((perfume, index) => (
          <FragranceCard key={perfume.id} perfume={perfume} index={index} />
        ))}
      </div>

      {/* Refined 3D Instagram CTA with PERMANENT Red/Theme Colors */}
      <div className="flex justify-center">
        <motion.button
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ y: 1, scale: 0.98 }}
            onClick={() => window.open('https://www.instagram.com/amary.aroma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
            className="group relative flex items-center gap-4 pl-7 pr-8 py-4 rounded-full bg-white border border-rose-200 shadow-[0_8px_25px_-5px_rgba(220,39,67,0.15),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_20px_40px_-12px_rgba(220,39,67,0.25),inset_0_1px_0_rgba(255,255,255,1)] hover:border-rose-300 transition-all duration-500 ease-[0.16,1,0.3,1]"
        >
            {/* Soft colored background tint */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f09433]/5 via-[#dc2743]/5 to-[#bc1888]/5 pointer-events-none" />
            
            {/* Icon Container with permanent color */}
            <div className="relative z-10 p-2.5 bg-rose-50/80 rounded-full border border-rose-100 group-hover:rotate-12 transition-all duration-700 shadow-sm">
                <Instagram size={16} className="text-[#dc2743]" />
            </div>
            
            {/* Text with gradient */}
            <span className="relative z-10 font-bold text-[10px] tracking-[0.3em] uppercase bg-gradient-to-r from-[#d6249f] via-[#dc2743] to-[#f09433] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                Discover on Instagram
            </span>

            {/* Permanent accent line */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-orange-400 via-rose-500 to-purple-600 opacity-40 group-hover:opacity-80 group-hover:w-16 transition-all duration-700" />
        </motion.button>
      </div>
    </Section>
  );
};