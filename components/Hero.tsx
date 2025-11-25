import React from 'react';
import { PageRoute } from '../types';

interface HeroProps {
  setPage: (page: PageRoute) => void;
}

const Hero: React.FC<HeroProps> = ({ setPage }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://i.ibb.co/3yYtcF1s/freepik-expand-11826.png" 
          alt="ResQLink Hero" 
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
          ResQLink
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl font-light drop-shadow-md">
          Your Emergency Companion. A smart distress and crash-detection device designed to protect every life.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button 
            onClick={() => setPage('order')}
            className="bg-white text-black px-12 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-64 shadow-lg"
          >
            Order Now
          </button>
          <button 
            onClick={() => setPage('learn')}
            className="bg-black/50 backdrop-blur-md text-white border border-white/20 px-12 py-3 rounded-full font-medium hover:bg-black/70 transition-colors w-64 shadow-lg"
          >
            Learn More
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;