import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-10 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-700 ease-[0.16,1,0.3,1]";
  
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-black shadow-luxury hover:shadow-xl",
    outline: "border border-stone-200 text-stone-900 hover:border-stone-900 hover:bg-stone-50",
    text: "text-stone-500 hover:text-stone-900 underline-offset-8 hover:underline px-0 py-1"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.03, y: -2 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export const FadeIn: React.FC<{ children: ReactNode; delay?: number; direction?: 'up' | 'down' | 'none' }> = ({ children, delay = 0, direction = 'up' }) => (
  <motion.div
    initial={{ 
      opacity: 0, 
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0 
    }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ 
      duration: 1.2, 
      delay, 
      ease: [0.16, 1, 0.3, 1] 
    }}
  >
    {children}
  </motion.div>
);

export const Reveal: React.FC<{ children: ReactNode; delay?: number }> = ({ children, delay = 0 }) => (
  <div className="relative overflow-hidden inline-block w-full">
    <motion.div
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  </div>
);

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  const uniqueId = React.useId();
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
        <svg viewBox="0 0 120 100" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id={`gold-gradient-${uniqueId}`} x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#C5A059" />
                    <stop offset="30%" stopColor="#EBCB80" />
                    <stop offset="70%" stopColor="#A07636" />
                    <stop offset="100%" stopColor="#C5A059" />
                </linearGradient>
            </defs>
            <text 
                x="50%" 
                y="85%" 
                fontSize="90" 
                fontFamily="'Playfair Display', serif" 
                fontWeight="700" 
                fill={`url(#gold-gradient-${uniqueId})`}
                textAnchor="middle"
                letterSpacing="-0.15em"
                style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))' }}
            >
                AA
            </text>
        </svg>
    </div>
  );
};