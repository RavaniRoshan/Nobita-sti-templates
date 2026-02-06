import React from 'react';
import { Layers, Split, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Semantic Decomposition",
    description: "Complex queries are broken into atomic, non-overlapping research tasks using recursive prompt engineering.",
    icon: <Split className="w-5 h-5" />
  },
  {
    id: "02",
    title: "Recursive Validation",
    description: "Each atomic task is executed and validated against primary sources. Hallucinations are pruned in real-time.",
    icon: <ShieldCheck className="w-5 h-5" />
  },
  {
    id: "03",
    title: "Synthesis & Audit",
    description: "Results are re-assembled with a complete chain-of-thought audit log, ready for human review.",
    icon: <Layers className="w-5 h-5" />
  }
];

const Architecture: React.FC = () => {
  return (
    <section className="bg-axiom-light py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="text-axiom-blue font-bold tracking-wider text-sm mb-4 uppercase"
            >
              How it works
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight"
            >
              Logic you can <br />finally <span className="text-axiom-accent">audit.</span>
            </motion.h2>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Black boxes are unacceptable for critical decisions. AXIOM-ONE provides a transparent view into every step of the reasoning process, ensuring compliance and accuracy.
            </p>
            <a href="#" className="inline-flex items-center gap-2 text-axiom-dark font-semibold border-b-2 border-axiom-accent pb-1 hover:text-axiom-accent transition-colors">
              Read the Technical Whitepaper <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative">
            {/* Connector Line Background */}
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gray-200 hidden md:block" />
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex gap-6 items-start group"
                >
                  {/* Icon Node */}
                  <div className="hidden md:flex flex-none w-16 h-16 rounded-full bg-white border-2 border-gray-100 items-center justify-center z-10 group-hover:border-axiom-accent group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                    <div className="text-gray-400 group-hover:text-axiom-accent transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-xs font-bold text-axiom-accent mb-2 font-mono tracking-widest">{step.id}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Architecture;