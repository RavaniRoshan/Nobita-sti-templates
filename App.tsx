import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Architecture from './components/Architecture';
import Testimonials from './components/Testimonials';
import FeatureDeepDive from './components/FeatureDeepDive';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-axiom-blue selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <SocialProof />
        <Architecture />
        <FeatureDeepDive />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;