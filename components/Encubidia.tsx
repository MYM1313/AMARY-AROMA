import React from 'react';
import { motion } from 'framer-motion';
import { Section, FadeIn } from './UI';
import { FRAGMENTS } from '../constants';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FragmentCard: React.FC<{ perfume: typeof FRAGMENTS[0]; index: number }> = ({ perfume, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative flex-shrink-0 w-[280px] md:w-[350px] snap-center py-6"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ 
        duration: 1.2, 
        delay: index * 0.15, 
        ease: [0.16, 1, 0.3, 1] 
      }}
    >
        <motion.div
            whileHover={{ y: -12 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate(`/perfume/${perfume.id}`)}
            className="group cursor-pointer relative h-[420px] rounded-[3rem] bg-white border border-stone-100 shadow-luxury hover:shadow-heavy transition-all duration-1000 ease-[0.16,1,0.3,1] overflow-hidden flex flex-col"
        >
            <div className="h-[65%] relative overflow-hidden bg-stone-50">
                <motion.img 
                    src={perfume.image} 
                    alt={perfume.name}
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-stone-900/5 mix-blend-multiply opacity-20"></div>
            </div>

            <div className="h-[35%] p-8 flex flex-col justify-between bg-white relative z-20">
                 <div>
                    <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-200"></span>
                        <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-stone-400">
                            Volume {index + 1}
                        </span>
                    </div>
                    <h3 className="font-serif text-3xl text-stone-900 group-hover:text-black transition-colors leading-tight">
                        {perfume.name}
                    </h3>
                 </div>
                 
                 <div className="flex justify-between items-center border-t border-stone-50 pt-4">
                    <span className="text-[9px] text-stone-400 uppercase tracking-[0.3em] font-bold">
                        {perfume.collection}
                    </span>
                    <div className="w-8 h-8 rounded-full border border-stone-100 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-700">
                        <ArrowRight size={14} className="text-stone-300 group-hover:text-white transition-colors" />
                    </div>
                 </div>
            </div>
        </motion.div>
    </motion.div>
  )
}

export const Encubidia: React.FC = () => {
  return (
    <Section id="encubidia" className="relative py-8 md:py-12 bg-[#FAFAF9] overflow-hidden">
       <div className="text-center mb-8 relative z-10 px-4">
          <FadeIn>
             <span className="text-stone-400 text-[10px] md:text-xs font-bold tracking-[0.6em] uppercase mb-2 block">
                The Archive
             </span>
             <h2 className="text-5xl md:text-8xl font-serif text-stone-900 tracking-tighter">
                Fragments
             </h2>
          </FadeIn>
       </div>

       <div className="w-full">
            <div className="flex gap-10 md:gap-16 overflow-x-auto px-6 md:px-12 pb-12 pt-2 hide-scrollbar snap-x snap-mandatory items-center cursor-grab active:cursor-grabbing">
                {FRAGMENTS.map((perfume, index) => (
                    <FragmentCard key={perfume.id} perfume={perfume} index={index} />
                ))}
                <div className="w-24 flex-shrink-0" />
            </div>
       </div>
    </Section>
  )
}