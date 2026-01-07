import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { DetailView } from './components/DetailView';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/perfume/');

  return (
    <div className="antialiased text-stone-800 selection:bg-amber-100 selection:text-amber-900 bg-[#FAF9F6] min-h-screen overflow-x-hidden">
      {!isDetailPage && <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
      
      <motion.div
        animate={{
          scale: isMenuOpen ? 0.97 : 1,
          filter: isMenuOpen ? 'blur(4px)' : 'blur(0px)',
          opacity: isMenuOpen ? 0.8 : 1,
        }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="origin-top"
        onClick={() => isMenuOpen && setIsMenuOpen(false)}
      >
        {children}
        {!isDetailPage && <Footer />}
      </motion.div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <LayoutWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfume/:id" element={<DetailView />} />
        </Routes>
      </LayoutWrapper>
    </Router>
  );
};

export default App;