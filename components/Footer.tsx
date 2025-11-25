import React from 'react';
import { PageRoute } from '../types';

interface FooterProps {
  setPage: (page: PageRoute) => void;
}

const Footer: React.FC<FooterProps> = ({ setPage }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-lg mb-2">ResQLink</span>
          <p className="text-xs text-gray-500">© {currentYear} ResQLink. All Rights Reserved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
          <button onClick={() => setPage('home')} className="hover:text-black transition-colors">Home</button>
          <button onClick={() => setPage('learn')} className="hover:text-black transition-colors">Learn More</button>
          <button onClick={() => setPage('order')} className="hover:text-black transition-colors">Order Now</button>
          <button className="hover:text-black transition-colors">Contact</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;