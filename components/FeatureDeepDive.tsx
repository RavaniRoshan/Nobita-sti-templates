import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, Zap, Database, GitBranch, Terminal } from 'lucide-react';

const FeatureDeepDive: React.FC = () => {
  return (
    <section className="bg-[#020617] py-32 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="flex items-center gap-2 text-axiom-accent font-mono text-xs tracking-wider uppercase mb-6"
            >
              <div className="w-2 h-2 bg-axiom-accent rounded-full animate-pulse" />
              <span>Enterprise Infrastructure</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight"
            >
              Designed for <span className="text-white">zero-trust</span> <br />
              <span className="text-gray-500">information environments.</span>
            </motion.h2>
          </div>
          <div className="text-right hidden md:block">
             <div className="text-xs text-gray-500 font-mono mb-2">VALIDATION_PROTOCOL</div>
             <div className="text-2xl font-bold text-white">v2.4.0-rc1</div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: Total Attribution (Span 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-start justify-between">
                 <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <GitBranch className="w-6 h-6" />
                 </div>
                 <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                    <div className="w-2 h-2 rounded-full bg-gray-700" />
                 </div>
              </div>

              <div className="space-y-4">
                 <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">Traceability Engine</div>
                 <h3 className="text-2xl font-bold">Semantic Lineage</h3>
                 <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                   Every output token is back-linked to a primary source. Hover over any generated claim to reveal the vector database reference ID and confidence interval.
                 </p>
              </div>

              {/* Visual Decoration: Mock Lineage Graph */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 opacity-40 group-hover:opacity-60 transition-opacity duration-500 hidden md:block">
                 <div className="flex flex-col gap-4 items-end">
                    <div className="w-32 h-2 bg-gray-700 rounded-full" />
                    <div className="w-48 h-2 bg-gray-600 rounded-full" />
                    <div className="w-24 h-2 bg-gray-700 rounded-full" />
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-blue-500" />
                       <div className="w-40 h-2 bg-blue-500/50 rounded-full" />
                    </div>
                    <div className="w-36 h-2 bg-gray-700 rounded-full" />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Confidence Score */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col justify-between"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="relative z-10">
                <div className="p-3 w-fit rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                   <Zap className="w-6 h-6" />
                </div>
                <div className="font-mono text-[10px] text-gray-500 uppercase tracking-widest mb-2">Accuracy</div>
                <div className="text-5xl font-display font-bold text-white mb-2">99.9%</div>
                <div className="text-emerald-400 text-xs font-mono flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                   Deterministic Mode
                </div>
             </div>
             
             {/* Visual: Chart Line */}
             <div className="absolute bottom-0 left-0 right-0 h-16 opacity-50">
                 <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0 20 L0 15 Q20 18 40 10 T100 2 V20 Z" fill="rgba(16, 185, 129, 0.1)" />
                    <path d="M0 15 Q20 18 40 10 T100 2" stroke="rgba(16, 185, 129, 0.5)" strokeWidth="0.5" fill="none" />
                 </svg>
             </div>
          </motion.div>

          {/* Card 3: Air-gapped (Span 1) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:col-span-1 bg-white/[0.02] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="p-3 w-fit rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                   <Shield className="w-6 h-6" />
                </div>
                <div>
                   <h3 className="text-xl font-bold mb-2">VPC Deployment</h3>
                   <p className="text-gray-400 text-xs leading-relaxed">
                     Complete data isolation. No egress. <br /> SOC2 Type II Certified.
                   </p>
                </div>
                {/* Visual: Lock animation */}
                <div className="flex items-center gap-2 mt-4 text-[10px] font-mono text-purple-300 bg-purple-500/10 py-1 px-2 rounded border border-purple-500/20 w-fit">
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                   AIR_GAP_ACTIVE
                </div>
             </div>
          </motion.div>

          {/* Card 4: Vector Store (Span 2) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-white/10 transition-colors flex flex-col md:flex-row items-center gap-8"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <div className="flex-1 relative z-10 order-2 md:order-1">
                <div className="p-3 w-fit rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6">
                   <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Live Knowledge Injection</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                   Connect your existing enterprise knowledge bases (Notion, Drive, Jira) and query them with semantic precision.
                </p>
             </div>
             
             {/* Visual: Mock Connector */}
             <div className="flex-1 w-full h-full relative z-10 flex items-center justify-center order-1 md:order-2 opacity-80">
                <div className="relative w-full max-w-xs">
                   <div className="absolute inset-0 bg-indigo-500/20 blur-2xl rounded-full" />
                   <div className="relative bg-black/50 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-3 border-b border-white/5 pb-2">
                         <Terminal className="w-4 h-4 text-gray-500" />
                         <span className="text-[10px] font-mono text-gray-400">connector.config.json</span>
                      </div>
                      <div className="space-y-1">
                         <div className="h-2 w-3/4 bg-gray-800 rounded-sm" />
                         <div className="h-2 w-1/2 bg-gray-800 rounded-sm" />
                         <div className="h-2 w-full bg-indigo-900/40 rounded-sm" />
                         <div className="h-2 w-2/3 bg-gray-800 rounded-sm" />
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureDeepDive;