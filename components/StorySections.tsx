import React from 'react';
import { Section, Button } from './UI';
import { REVIEWS } from '../constants';
import { Star, Hourglass, Scale, FlaskConical, Ear, Instagram, Mail, ArrowRight, CircleDashed } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const About: React.FC = () => {
    return (
        <Section id="about" className="py-20 bg-[#FAFAF9] relative overflow-hidden">
            {/* Minimalist Background Geometry */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                 <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full border border-stone-200/40 border-dashed opacity-50"
                 />
                 <div className="absolute top-[10%] left-[10%] w-[1px] h-[30%] bg-gradient-to-b from-transparent via-amber-900/10 to-transparent" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center relative z-10">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1 relative"
                >
                    {/* Decorative accent */}
                    <div className="absolute -left-6 top-2 w-1 h-12 bg-[#1C1917] hidden md:block" />

                    <span className="text-stone-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-6 flex items-center gap-3">
                        <span className="w-6 h-[1px] bg-stone-300"></span>
                        Our Philosophy
                    </span>
                    
                    <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-[1.1] tracking-tight">
                        Essence over<br/>
                        <span className="italic text-stone-400 font-light relative inline-block">
                            Excess.
                            <svg className="absolute -bottom-2 left-0 w-full h-2 text-amber-900/10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="1" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    
                    <div className="space-y-6 pl-2 md:pl-0">
                        <p className="text-stone-600 text-lg font-light leading-relaxed">
                           In a world of noise, we choose silence. We believe true luxury lies not in what you add, but in what you take away. 
                        </p>
                        <p className="text-stone-500 text-sm font-medium leading-relaxed tracking-wide border-l border-amber-900/20 pl-6 py-2">
                           Every bottle is a study in restraint—a quiet conversation between the wearer and the world, composed of only the most essential notes.
                        </p>
                    </div>

                    <div className="mt-10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400">
                             <Scale size={18} strokeWidth={1.5} />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-stone-400">Mastery through Balance</span>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="order-1 md:order-2 relative flex justify-center md:justify-end"
                >
                    <div className="relative w-full max-w-[340px] aspect-[3/4]">
                        {/* Frame Offset */}
                        <div className="absolute top-4 right-4 w-full h-full border border-stone-200 rounded-[2rem] z-0" />
                        
                        <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-10 bg-white">
                            <img 
                                src="https://ik.imagekit.io/jabzmiuta/Whisk_1e99b6b9d5df174959842ed09be8ff8bdr.jpeg"
                                alt="Philosophy"
                                className="w-full h-full object-cover grayscale-[0.2] contrast-[0.95]"
                            />
                             {/* Abstract Minimal Texture Overlay */}
                             <div className="absolute inset-0 bg-gradient-to-tr from-stone-100/40 via-transparent to-stone-50/20 mix-blend-soft-light" />
                             <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};

const FeatureCard: React.FC<{ title: string; subtitle: string; Icon: React.ElementType; index: number; image: string }> = ({ title, subtitle, Icon, index, image }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="flex-shrink-0 snap-center py-4 px-3"
        >
            <motion.div
                whileHover={{ y: -8 }}
                className="relative w-[300px] h-[400px] rounded-[2rem] overflow-hidden shadow-luxury flex flex-col items-center justify-end p-8 group bg-stone-900"
            >
                <div className="absolute inset-0 z-0">
                    <img src={image} alt={title} className="w-full h-full object-cover opacity-80 transition-transform duration-1000 ease-out group-hover:scale-110" />
                    {/* Deep gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                        <Icon size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-xl text-white font-medium mb-3 tracking-wide">{title}</h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed max-w-[240px] tracking-wide">
                        {subtitle}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const WhyAmary: React.FC = () => {
  const features = [
    { 
        title: "Long-Lasting Character", 
        subtitle: "Fragrances that stay refined throughout the day", 
        icon: Hourglass, 
        image: "https://ik.imagekit.io/jabzmiuta/Whisk_2033cb3f85c3ab488a84b394a0286d53dr.jpeg" 
    },
    { 
        title: "Thoughtfully Composed", 
        subtitle: "Every note placed with intention and balance", 
        icon: Scale, 
        image: "https://ik.imagekit.io/jabzmiuta/Whisk_9f38e062ce5363aae724913538680793dr.jpeg" 
    },
    { 
        title: "Quiet, Modern Luxury", 
        subtitle: "Designed to be noticed, never loud", 
        icon: FlaskConical, 
        image: "https://ik.imagekit.io/jabzmiuta/Whisk_a42528fd61591eba5764e9a0f5fe32b6dr.jpeg" 
    },
    { 
        title: "Made to Endure", 
        subtitle: "Crafted for consistency, depth, and time", 
        icon: Ear, 
        image: "https://ik.imagekit.io/jabzmiuta/Whisk_ce23003844db9c4ba7846637e4cbebe9dr.jpeg" 
    }
  ];

  return (
    <section id="why-amary" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
            <span className="text-stone-400 uppercase tracking-[0.3em] text-[10px] font-bold block mb-3">Our Distinction</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">Why Amary</h2>
        </div>

        <div className="w-full overflow-hidden">
            <div className="flex gap-6 overflow-x-auto px-6 pb-12 pt-2 hide-scrollbar snap-x snap-mandatory justify-start md:justify-center items-center">
                {features.map((feature, idx) => (
                    <FeatureCard key={idx} index={idx} title={feature.title} subtitle={feature.subtitle} Icon={feature.icon} image={feature.image} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export const Reviews: React.FC = () => {
  return (
    <Section id="reviews" className="relative py-12 bg-[#FAFAF9]">
        <div className="text-center mb-12">
             <span className="text-stone-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-2 block">Voices</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight">Reviews</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto px-6 pb-8 pt-2 hide-scrollbar snap-x snap-mandatory">
            {REVIEWS.map((review) => (
              <div key={review.id} className="flex-shrink-0 w-[320px] snap-center">
                <div className="p-8 rounded-[2rem] bg-white border border-stone-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] h-full flex flex-col justify-between hover:border-stone-200 transition-colors duration-500">
                    <div>
                         {/* Stars */}
                         <div className="flex gap-1 mb-5">
                             {[...Array(review.rating)].map((_, i) => (
                                 <Star key={i} size={10} fill="currentColor" className="text-amber-900" />
                             ))}
                         </div>
                         <p className="text-stone-600 text-base font-light leading-relaxed mb-8 italic relative">
                           <span className="absolute -left-2 -top-2 text-4xl text-stone-100 font-serif leading-none">“</span>
                           {review.text}
                         </p>
                    </div>
                    
                    <div className="flex items-center gap-4 border-t border-stone-50 pt-5">
                        <div className="relative">
                           <img 
                              src={review.image} 
                              alt={review.author} 
                              className="w-12 h-12 rounded-full object-cover shadow-sm grayscale-[0.2]" 
                           />
                           <div className="absolute inset-0 rounded-full border border-black/5"></div>
                        </div>
                        <div>
                            <h4 className="font-serif font-bold text-stone-900 text-sm tracking-wide">{review.author}</h4>
                            <span className="text-[9px] text-stone-400 uppercase tracking-widest block mt-1">{review.location}</span>
                        </div>
                    </div>
                </div>
              </div>
            ))}
        </div>
    </Section>
  );
};

export const Heritage: React.FC = () => {
  return (
    <section id="heritage" className="relative py-24 bg-[#FDFCF8] overflow-hidden">
        {/* Heritage Visual Overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply pointer-events-none">
            <img 
                src="https://images.unsplash.com/photo-1590732823183-f9a8194a917e?q=80&w=2000&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale" 
                alt="Heritage Texture"
            />
        </div>
        
        {/* Subtle Jali/Lattice Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%">
                <pattern id="jaliPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-amber-900" />
                    <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" className="text-amber-900" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#jaliPattern)" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-transparent to-[#FDFCF8]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                
                {/* Visual Side: Abstract Heritage Architecture */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 flex justify-center items-center relative h-[400px]"
                >
                    {/* Abstract Arch Illustration */}
                    <div className="relative w-[300px] h-[400px]">
                        {/* Architectural Arches */}
                        <div className="absolute inset-0 border border-stone-200 rounded-t-full"></div>
                        <div className="absolute inset-4 border border-stone-100 rounded-t-full opacity-60"></div>
                        <div className="absolute inset-8 border border-stone-50 rounded-t-full opacity-40"></div>
                        
                        {/* Textured Background */}
                        <div className="absolute inset-0 rounded-t-full bg-[#FAF9F6] opacity-30 shadow-inner"></div>
                        
                        <div className="absolute bottom-0 w-full h-[1px] bg-stone-200"></div>
                        
                        {/* Center decorative element */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-stone-100 flex items-center justify-center">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-stone-50 to-transparent opacity-50"></div>
                        </div>

                        {/* Floating Image Card */}
                        <motion.div 
                             whileHover={{ y: -5 }}
                             className="absolute bottom-10 -right-4 md:-right-10 w-48 h-64 bg-white rounded-[2rem] shadow-luxury p-2 border border-white"
                        >
                            <div className="w-full h-full rounded-[1.5rem] overflow-hidden">
                                <img src="https://ik.imagekit.io/jabzmiuta/Whisk_50ee0eaaf88670596ee4346877db13f9dr_1767922359535.jpeg" className="w-full h-full object-cover grayscale opacity-60" alt="Rooted in Heritage" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Text Side */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="w-full md:w-1/2 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-900/10 bg-white/50 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-amber-600/60"></span>
                        <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-amber-900/60">Legacy</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
                        Rooted in <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800">Heritage.</span>
                    </h2>
                    
                    <p className="text-stone-600 text-lg font-light leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                        Inspired by the royal durbars and ancient perfumery traditions of India. We blend sacred ingredients—Sandalwood, Saffron, Jasmine—with modern molecular precision.
                    </p>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <Button variant="outline" className="border-amber-900/20 text-amber-900 hover:bg-amber-50 text-[10px] px-8">
                            Our Story
                        </Button>
                    </div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mt-12 relative max-w-md mx-auto md:mx-0"
                    >
                        <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-luxury border border-stone-100 bg-stone-50">
                            <img 
                                src="https://ik.imagekit.io/jabzmiuta/Whisk_50ee0eaaf88670596ee4346877db13f9dr.jpeg" 
                                alt="Heritage Craftsmanship"
                                className="w-full h-full object-cover grayscale-[0.1] hover:scale-105 transition-transform duration-1000"
                            />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </div>
    </section>
  );
};

export const ContactPanel: React.FC = () => (
    <Section className="py-20 bg-white" id="connection">
        <div className="max-w-4xl mx-auto px-6">
             <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative bg-[#FAFAF9] rounded-[4rem] p-12 md:p-20 text-center border border-stone-200 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,1)] overflow-hidden"
             >
                 {/* Subtle Noise Texture */}
                 <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
                 
                 <div className="relative z-10">
                    <span className="text-stone-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">Personal Concierge</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-stone-900 mb-12 tracking-tight">Connect with AMARY</h2>
                    
                    <div className="flex flex-col md:flex-row justify-center gap-6 max-w-2xl mx-auto">
                        {/* 3D Instagram CTA */}
                        <motion.button
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ y: 2, scale: 0.98 }}
                            onClick={() => window.open('https://www.instagram.com/amary.aroma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
                            className="group flex-1 flex items-center justify-center gap-5 px-8 py-5 rounded-[2rem] bg-white border border-stone-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_20px_40px_-10px_rgba(225,48,108,0.12),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-500 ease-[0.16,1,0.3,1] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#f09433]/5 via-[#dc2743]/5 to-[#bc1888]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 p-2 bg-stone-50 rounded-xl text-[#dc2743] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] group-hover:bg-white group-hover:shadow-md transition-all">
                                <Instagram size={20} strokeWidth={2} />
                            </div>
                            <span className="relative z-10 text-stone-800 font-bold text-xs uppercase tracking-[0.2em] group-hover:text-black transition-colors">Instagram</span>
                        </motion.button>

                        {/* 3D Email CTA */}
                        <motion.button
                            whileHover={{ y: -4, scale: 1.02 }}
                            whileTap={{ y: 2, scale: 0.98 }}
                            onClick={() => window.open('mailto:hello@amaryaroma.com', '_blank')}
                            className="group flex-1 flex items-center justify-center gap-5 px-8 py-5 rounded-[2rem] bg-white border border-stone-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_20px_40px_-10px_rgba(30,58,138,0.1),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-500 ease-[0.16,1,0.3,1] relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-stone-900/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 p-2 bg-stone-50 rounded-xl text-stone-600 shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] group-hover:bg-white group-hover:shadow-md group-hover:text-stone-900 transition-all">
                                <Mail size={20} strokeWidth={2} />
                            </div>
                            <span className="relative z-10 text-stone-800 font-bold text-xs uppercase tracking-[0.2em] group-hover:text-black transition-colors">Email Us</span>
                        </motion.button>
                    </div>
                    
                    <div className="mt-12 flex items-center justify-center gap-4 text-[9px] font-bold uppercase tracking-[0.3em] text-stone-400">
                        <span className="w-12 h-[1px] bg-stone-200"></span>
                        <span className="w-12 h-[1px] bg-stone-200"></span>
                    </div>
                 </div>
             </motion.div>
        </div>
    </Section>
);