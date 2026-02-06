import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
        ${isScrolled 
          ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl shadow-black/50' 
          : 'bg-transparent border-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative w-8 h-8 flex items-center justify-center">
             <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="w-8 h-8 bg-white border border-gray-200 rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center justify-center z-10">
                <div className="w-3 h-3 bg-axiom-blue rounded-full" />
             </div>
          </div>
          <span className="text-white font-display font-bold text-xl tracking-wider mix-blend-difference">AXIOM-ONE</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {['Methodology', 'Enterprise', 'Research', 'Company'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="px-4 py-2 text-gray-400 hover:text-white text-sm font-medium transition-all duration-200 rounded-full hover:bg-white/5"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-gray-300 font-medium text-xs hover:text-white transition-colors uppercase tracking-widest font-mono">Log in</a>
          
          <button 
            className="relative group bg-white text-axiom-dark px-6 py-2.5 rounded-lg font-bold text-sm overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10" />
            <div className="relative z-20 flex items-center gap-2">
              Access Engine
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-[#020617]/95 z-40 flex flex-col pt-32 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Methodology', 'Enterprise', 'Research', 'Company'].map((item, idx) => (
                <motion.a 
                  key={item} 
                  href="#" 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-white/90 font-display font-bold text-4xl hover:text-axiom-accent transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-auto mb-12 flex flex-col gap-4">
              <button className="bg-axiom-accent text-white px-5 py-4 rounded-lg font-bold text-lg w-full shadow-lg shadow-blue-900/50">
                Get Started
              </button>
              <button className="text-gray-400 px-5 py-4 text-sm font-mono uppercase tracking-widest text-center">
                Existing User Login
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;