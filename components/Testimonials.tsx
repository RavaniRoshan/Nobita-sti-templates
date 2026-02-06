import React from 'react';
import { motion } from 'framer-motion';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "AXIOM-ONE's transparent validation process supports our most demanding research workflows with clear, inspectable reasoning.",
    author: "Taylor Kim",
    role: "Cortex Analytics",
    company: "Cortex Analytics",
    image: "https://picsum.photos/seed/taylor/100/100"
  },
  {
    id: 2,
    quote: "Every claim is rigorously validated, making this an essential tool for our engineering review and compliance processes.",
    author: "Jordan Patel",
    role: "Vector Insights",
    company: "Vector Insights",
    image: "https://picsum.photos/seed/jordan/100/100"
  },
  {
    id: 3,
    quote: "Reliable, actionable results that have transformed our daily decision-making logic.",
    author: "Morgan Lee",
    role: "DataForge Labs",
    company: "DataForge Labs",
    image: "https://picsum.photos/seed/morgan/100/100"
  },
  {
    id: 4,
    quote: "The ability to audit the chain of thought gives us the confidence to automate critical paths.",
    author: "Casey Nguyen",
    role: "Evident Research",
    company: "Evident Research",
    image: "https://picsum.photos/seed/casey/100/100"
  },
  {
    id: 5,
    quote: "A transparent reasoning pipeline is critical for auditability and compliance in our research operations.",
    author: "Riley Chen",
    role: "Quantis Group",
    company: "Quantis Group",
    image: "https://picsum.photos/seed/riley/100/100"
  },
  {
    id: 6,
    quote: "Explicit uncertainty reporting clarifies assumptions and limitations, supporting informed, risk-aware actions.",
    author: "Alex Rivera",
    role: "Synthesis Partners",
    company: "Synthesis Partners",
    image: "https://picsum.photos/seed/alex/100/100"
  }
];

const Testimonials: React.FC = () => {
  // Split testimonials into two columns
  const col1 = [testimonials[0], testimonials[2], testimonials[4]];
  const col2 = [testimonials[1], testimonials[3], testimonials[5]];

  // Triple the data to ensure smooth infinite scrolling (A-B-C-A-B-C-A-B-C pattern)
  // We animate -33.33% of the height, so we pass through one full set seamlessly.
  const col1Dup = [...col1, ...col1, ...col1];
  const col2Dup = [...col2, ...col2, ...col2];

  return (
    <section className="bg-gray-50 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-4"
          >
            Relied on by critical thinkers
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 relative inline-block">
              Validation
              <span className="absolute inset-0 text-center text-gray-200/50 blur-[2px] select-none pointer-events-none transform translate-x-1 translate-y-1 -z-10">Validation</span>
            </h2>
             <h2 className="text-5xl md:text-7xl font-display font-bold text-gray-900 inline-block ml-4">
              you trust
             </h2>
          </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-xl mx-auto mt-6 text-gray-600"
            >
                Professionals trust our research-grade reasoning system for transparent, auditable outputs. Explore how structured validation empowers confident decisions.
            </motion.div>
        </div>

        {/* Scrolling Grid Container */}
        <div className="relative h-[800px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            
            {/* Column 1 */}
            <motion.div
               animate={{ y: ["0%", "-33.333%"] }}
               transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
               className="flex flex-col gap-6"
            >
              {col1Dup.map((t, idx) => (
                <div key={`col1-${idx}`} className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm">
                   <p className={`text-xl text-gray-700 font-display mb-8 leading-relaxed ${t.quote.length < 60 ? 'font-medium' : 'font-light'}`}>
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full grayscale object-cover" />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{t.author}</div>
                      <div className="text-xs text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Column 2 - Offset and slightly different speed */}
            <motion.div className="flex flex-col gap-6 md:pt-12">
               <motion.div
                  animate={{ y: ["0%", "-33.333%"] }}
                  transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-6" 
               >
                  {col2Dup.map((t, idx) => (
                    <div key={`col2-${idx}`} className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm">
                       <p className={`text-xl text-gray-700 font-display mb-8 leading-relaxed ${t.quote.length < 60 ? 'font-medium' : 'font-light'}`}>
                        "{t.quote}"
                      </p>
                      <div className="flex items-center gap-4">
                        <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full grayscale object-cover" />
                        <div>
                          <div className="font-bold text-gray-900 text-sm">{t.author}</div>
                          <div className="text-xs text-gray-500">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
               </motion.div>
            </motion.div>

          </div>
        </div>

        <div className="mt-16 text-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-axiom-blue text-white px-8 py-3 rounded-sm font-semibold hover:bg-blue-800 transition-colors"
            >
                View demo
            </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;