import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "How is this different from chatbots?",
    answer: "Chatbots rely on probabilistic token prediction. AXIOM-ONE utilizes a deterministic reasoning engine that breaks tasks down, validates them against external truth sources, and self-corrects before presenting an answer."
  },
  {
    question: "Is my data secure?",
    answer: "We employ enterprise-grade encryption for all data at rest and in transit. Our architecture ensures that reasoning sub-agents operate in isolated sandboxes to prevent data leakage."
  },
  {
    question: "Can I integrate this into my existing workflow?",
    answer: "Yes. AXIOM-ONE offers a robust REST API and SDKs for Python and TypeScript, allowing seamless integration into your existing data pipelines and research tools."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-display font-bold text-gray-900 mb-6 relative"
        >
             <span className="text-gray-300/50 absolute -top-8 left-0 text-8xl -z-10 select-none">FAQ</span>
             FAQ: Research-grade <br /> reasoning
        </motion.h2>
        <p className="text-gray-500 mb-16">Clear, objective answers about our validation reasoning pipeline.</p>

        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {faqData.map((item, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              className="bg-white border border-gray-100 rounded-sm overflow-hidden"
            >
              <button 
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-800">{item.question}</span>
                {openIndex === index ? <Minus className="text-axiom-blue w-4 h-4" /> : <Plus className="text-gray-400 w-4 h-4" />}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 p-8 bg-gray-100 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
        >
            <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">Need more information?</p>
                <p className="text-sm text-gray-600">Our team can help.</p>
            </div>
            <button className="bg-blue-100 text-axiom-blue px-6 py-2 rounded-sm text-sm font-bold hover:bg-blue-200 transition-colors">
                Contact
            </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;