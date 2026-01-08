import React from 'react';
import { NAV_ITEMS } from '../constants';
import { Instagram, Mail } from 'lucide-react';
import { Logo } from './UI';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-50 pt-16 pb-12 border-t border-stone-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Brand Logo */}
        <div className="mb-6 opacity-90">
            <Logo className="w-16 h-16" />
        </div>

        <h2 className="text-xl font-serif font-bold text-stone-900 mb-8 tracking-widest uppercase">AMARY AROMA</h2>
        
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {NAV_ITEMS.filter(i => !i.href.includes('perfume')).map(item => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => {
                const sectionId = item.href.replace('#/', '');
                const target = sectionId ? document.getElementById(sectionId) : null;
                if (target) {
                  e.preventDefault();
                  window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                  });
                }
              }}
              className="text-stone-500 hover:text-stone-900 text-[10px] uppercase font-bold tracking-[0.15em] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4 mb-10">
          <a 
            href="https://www.instagram.com/amary.aroma?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-stone-400 hover:text-stone-900 border border-stone-100"
          >
            <Instagram size={18} />
          </a>
          <a href="mailto:hello@amaryaroma.com" className="p-3 bg-white rounded-full shadow-sm hover:shadow-md transition-all text-stone-400 hover:text-stone-900 border border-stone-100">
            <Mail size={18} />
          </a>
        </div>

        <div className="text-center text-stone-400 text-[9px] tracking-[0.3em] uppercase">
          <p className="mb-2">&copy; 2026 Amary Aroma. Handcrafted in India.</p>
          <p className="font-bold opacity-60">Quiet Luxury • Essential Form</p>
        </div>
      </div>
    </footer>
  );
};