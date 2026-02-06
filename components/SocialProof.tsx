import React from 'react';

const SocialProof: React.FC = () => {
  const brands = ['MIT LIDS', 'Stanford HAI', 'DeepMind', 'OpenAI', 'Anthropic', 'Google Research', 'CERN', 'NASA JPL'];
  const duplications = [...brands, ...brands, ...brands]; // Ensure enough for smooth scroll

  return (
    <section className="bg-white border-b border-gray-100 py-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-xs font-bold text-center text-gray-400 uppercase tracking-widest">
          Trusted by research teams at
        </p>
      </div>
      
      <div className="relative flex w-full">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex animate-scroll whitespace-nowrap">
          {duplications.map((brand, idx) => (
            <div 
              key={idx}
              className="mx-8 md:mx-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
            >
              <span className="font-display font-bold text-xl md:text-2xl text-slate-900">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;