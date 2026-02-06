import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-12 border-t border-gray-100 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-32">
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">System Operational</span>
                </div>
                <p className="text-xs text-gray-400 font-mono mb-4">contact@axiom-one.com</p>
                <p className="text-xs text-gray-400 font-mono">San Francisco, CA</p>
            </div>
            
            <div className="col-span-1 md:col-span-1">
                <h4 className="font-bold text-slate-900 mb-6">Product</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">Methodology</a></li>
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">Validation Engine</a></li>
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">Enterprise Security</a></li>
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">Pricing</a></li>
                </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
                <h4 className="font-bold text-slate-900 mb-6">Resources</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">Documentation</a></li>
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">API Reference</a></li>
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">Research Papers</a></li>
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">Status</a></li>
                </ul>
            </div>

            <div className="col-span-1 md:col-span-1">
                <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">Terms of Service</a></li>
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="hover:text-axiom-blue transition-colors">SLA</a></li>
                </ul>
            </div>
        </div>

        {/* Massive Brand Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center md:items-start border-t border-gray-100 pt-16"
        >
             <div className="w-full flex items-center justify-between">
                 <h1 className="text-[15vw] leading-none font-display font-bold tracking-tighter text-slate-900 select-none">
                     AXIOM
                 </h1>
                 
                 {/* Integrated Logo Mark */}
                 <motion.div 
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="hidden md:flex w-[10vw] h-[10vw] bg-slate-900 rotate-45 rounded-2xl items-center justify-center flex-shrink-0 mr-[4vw]"
                 >
                     <div className="w-[3vw] h-[3vw] bg-white rounded-full" />
                 </motion.div>
             </div>
             <p className="text-[4vw] md:text-[2vw] font-display font-bold text-gray-300 tracking-tight leading-none mt-[-2vw] pl-2">
                 INTELLIGENCE SYSTEMS
             </p>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-16 pt-8">
            <p>© 2025 AXIOM-ONE. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
               <span className="w-2 h-2 rounded-full bg-gray-300"></span>
               <span className="w-2 h-2 rounded-full bg-gray-300"></span>
               <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;