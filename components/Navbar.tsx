
import React, { useState, useEffect } from 'react';
import { NavProps, PageRoute } from '../types';

const Navbar: React.FC<NavProps> = ({ currentPage, setPage, user, onLogout, onOpenAuth, theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Liquid glass styling classes
  const glassClasses = theme === 'dark' 
    ? 'bg-[#0A0F1F]/70 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
    : 'bg-white/70 backdrop-blur-xl border-white/40 shadow-[0_4px_30px_rgba(200,200,255,0.2)]';

  const textPrimary = theme === 'dark' ? 'text-white' : 'text-[#071033]';
  const textSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';

  const navLinks: { label: string; value: PageRoute | string }[] = [
    { label: 'Home', value: 'home' },
    { label: 'Features', value: 'learn' },
    { label: 'Pricing', value: 'order' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-40 rounded-2xl transition-all duration-500 border ${
        isScrolled 
          ? glassClasses 
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <div 
          className="flex items-center cursor-pointer group" 
          onClick={() => setPage('home')}
        >
          {/* Liquid Chip Background for Logo */}
          <div className={`p-1.5 rounded-xl mr-3 transition-colors ${theme === 'dark' ? 'bg-white/5' : 'bg-blue-50'}`}>
            <img 
              src="/logo.png" 
              alt="ResQLink" 
              className="h-8 w-8 object-contain"
              onError={(e) => {
                e.currentTarget.onerror = null; 
                e.currentTarget.src = "https://i.postimg.cc/R6NBB4P7/Chat-GPT-Image-Nov-25-2025-09-52-10-AM-1-removebg-preview.png"; 
              }}
            />
          </div>
          <span className={`text-xl font-bold tracking-tight ${textPrimary}`}>ResQLink</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 p-1 rounded-full">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setPage(link.value as PageRoute)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden ${
                currentPage === link.value ? (theme === 'dark' ? 'text-white' : 'text-blue-600') : textSecondary
              }`}
            >
              <span className="relative z-10">{link.label}</span>
              {currentPage === link.value && (
                <div className={`absolute inset-0 rounded-full opacity-20 ${theme === 'dark' ? 'bg-white' : 'bg-blue-500'}`}></div>
              )}
              <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity ${theme === 'dark' ? 'bg-white' : 'bg-blue-500'}`}></div>
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center space-x-4">
          
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {user ? (
            <div className="flex items-center gap-3 animate-in fade-in slide-in-from-right-4 duration-500">
              <span className={`font-semibold text-sm ${textPrimary}`}>
                Hello, {user.name}
              </span>
              <button
                onClick={onLogout}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                  theme === 'dark' 
                    ? 'border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white hover:shadow-[0_0_20px_rgba(0,102,255,0.5)]'
                    : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="relative px-6 py-2.5 rounded-full text-sm font-bold text-white overflow-hidden group shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#38E3FF] transition-all duration-300 group-hover:scale-110"></div>
              <span className="relative z-10">Sign In / Create Account</span>
            </button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-4">
           {/* Mobile Theme Toggle */}
           <button onClick={toggleTheme} className={textSecondary}>
             {theme === 'dark' ? '☀️' : '🌙'}
           </button>
           
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 focus:outline-none ${textPrimary}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-20 left-0 right-0 mx-4 p-6 rounded-3xl shadow-2xl ${glassClasses}`}>
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => {
                   setPage(link.value as PageRoute);
                   setIsMobileMenuOpen(false);
                }}
                className={`text-left text-lg font-bold ${textPrimary} hover:text-[#0066FF]`}
              >
                {link.label}
              </button>
            ))}
            
            <hr className={`border-${theme === 'dark' ? 'white/10' : 'gray-200'}`} />
            
            {user ? (
              <div className="flex flex-col gap-4">
                <span className={`text-sm ${textSecondary}`}>Signed in as {user.name}</span>
                <button onClick={onLogout} className="text-left text-[#0066FF] font-bold">Sign Out</button>
              </div>
            ) : (
              <button 
                onClick={() => { onOpenAuth(); setIsMobileMenuOpen(false); }}
                className="w-full py-3 bg-[#0066FF] text-white rounded-xl font-bold"
              >
                Sign In / Join
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;