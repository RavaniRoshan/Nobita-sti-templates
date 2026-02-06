import React from 'react';
import { ChevronRight, Shield, Terminal, Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-axiom-dark min-h-screen flex flex-col justify-center pt-32 pb-20 overflow-hidden border-b border-white/5">
      
      {/* Cinematic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Subtle Grid */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
         
         {/* Ambient Glows */}
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-axiom-accent/10 rounded-[100%] blur-[100px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-blue-300 mb-8 backdrop-blur-md shadow-lg shadow-blue-500/10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>SYSTEM ONLINE: v2.4.0</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white font-display font-bold text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6"
            >
              Reasoning, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                Validated.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-lg font-light mb-10 leading-relaxed"
            >
              The first deterministic AI engine that audits its own chain of thought. Move from black-box probabilities to verifiable truth.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button className="relative overflow-hidden bg-axiom-accent text-white px-8 py-4 rounded-lg font-semibold text-sm hover:bg-blue-500 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                <span className="relative z-10 flex items-center gap-2">
                  Access Engine <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </button>
              
              <button className="px-8 py-4 rounded-lg font-semibold text-sm text-gray-300 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all flex items-center gap-2">
                 <Terminal className="w-4 h-4" />
                 View Documentation
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-12 flex items-center gap-6 text-xs text-gray-500 font-mono uppercase tracking-widest border-t border-white/5 pt-6"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-3 h-3 text-emerald-500" /> SOC2 Type II
              </div>
              <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-blue-500" /> 99.99% Uptime
              </div>
            </motion.div>
          </div>

          {/* Visual: Floating Interface */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotateX: 10 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            className="flex-1 w-full relative hidden lg:block perspective-1000"
          >
             <div className="relative z-10 bg-[#0A0F1E] border border-white/10 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Window Controls */}
                <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                   <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                   </div>
                   <div className="ml-4 text-[10px] text-gray-500 font-mono">axiom_core — validation_stream</div>
                </div>

                {/* Content */}
                <div className="p-6 font-mono text-xs md:text-sm">
                   <div className="space-y-3">
                      <div className="flex gap-3 text-gray-400">
                         <span className="text-blue-500">$</span>
                         <span>initiate_sequence --target="Q3_Market_Analysis"</span>
                      </div>
                      
                      <motion.div 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 1 }}
                         className="text-emerald-500"
                      >
                         {'>'} Analyzing semantic intent...
                      </motion.div>
                      
                      <motion.div 
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 1.5 }}
                         className="pl-4 border-l border-white/10 space-y-2"
                      >
                         <div className="flex items-center gap-2 text-gray-300">
                            <CheckCircle2 className="w-3 h-3 text-blue-500" />
                            <span>Hypothesis decomposed (3 sub-agents)</span>
                         </div>
                         <div className="flex items-center gap-2 text-gray-300">
                            <CheckCircle2 className="w-3 h-3 text-blue-500" />
                            <span>Fact-check: Cross-ref [VectorDB_01]</span>
                         </div>
                         <div className="flex items-center gap-2 text-gray-300">
                            <div className="w-3 h-3 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                            <span>Synthesizing confidence score...</span>
                         </div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ delay: 3.5 }}
                        className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded text-blue-200"
                      >
                         Output Confidence: 98.2% (Deterministic)
                      </motion.div>
                   </div>
                </div>
                
                {/* Glow behind */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-500/5 blur-3xl -z-10" />
             </div>
             
             {/* Decorative Elements around card */}
             <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-axiom-accent to-purple-600 rounded-full blur-[80px] opacity-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;