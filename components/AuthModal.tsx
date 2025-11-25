
import React, { useState, useEffect } from 'react';
import { AuthModalProps, User } from '../types';

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin, theme }) => {
  const [view, setView] = useState<'signin' | 'signup'>('signin');
  const [isVisible, setIsVisible] = useState(false);
  
  // Form States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData: User = {
      name: fullName || 'Alex Freeman',
      email: email || 'alex@example.com'
    };
    onLogin(userData);
  };

  if (!isVisible && !isOpen) return null;

  // Dynamic Theme Styles
  const isDark = theme === 'dark';
  
  const modalBase = isDark 
    ? 'bg-[#0A0F1F]/80 border-white/10 shadow-[0_0_40px_rgba(0,102,255,0.2)]' 
    : 'bg-white/80 border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.1)]';
    
  const inputBase = isDark
    ? 'bg-black/20 border-white/10 text-white placeholder-gray-500 focus:border-[#38E3FF] focus:shadow-[0_0_15px_rgba(56,227,255,0.1)]'
    : 'bg-white/50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white';

  const textPrimary = isDark ? 'text-white' : 'text-[#071033]';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-500 ${
        isOpen ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 backdrop-blur-none'
      }`}
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity" 
        onClick={onClose}
      />

      {/* Liquid Glass Card */}
      <div 
        className={`relative w-full max-w-md mx-4 backdrop-blur-2xl border rounded-3xl p-1 overflow-hidden transform transition-all duration-500 ease-out ${
          isOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 translate-y-8 opacity-0'
        } ${modalBase}`}
      >
        {/* Neon Glow Edges */}
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 ${isDark ? 'bg-gradient-to-r from-transparent via-[#38E3FF] to-transparent opacity-70' : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-50'}`}></div>

        <div className="relative p-8 rounded-[20px] h-full">
          {/* Close Button */}
          <button 
            onClick={onClose}
            className={`absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors ${textSecondary}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo Header */}
          <div className="text-center mb-8">
            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${isDark ? 'bg-white/5 shadow-inner' : 'bg-blue-50'}`}>
              <img 
                src="/mnt/data/7c547b8d-74ea-4481-9cb0-d1cb8fa3be38.png" 
                alt="ResQLink" 
                className="h-10 w-10 object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null; 
                  e.currentTarget.src = "/logo.png";
                }}
              />
            </div>
            <h2 className={`text-2xl font-bold tracking-tight mb-1 ${textPrimary}`}>ResQLink</h2>
            <p className={`text-sm ${textSecondary}`}>Secure access to your emergency dashboard.</p>
          </div>

          {/* Liquid Tabs */}
          <div className={`relative flex p-1 rounded-xl mb-8 ${isDark ? 'bg-black/30' : 'bg-gray-100'}`}>
            <div 
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-lg shadow-sm transition-all duration-300 ${isDark ? 'bg-[#1A2333]' : 'bg-white'}`}
              style={{ left: view === 'signin' ? '4px' : 'calc(50%)' }}
            ></div>
            <button 
              onClick={() => setView('signin')}
              className={`relative z-10 flex-1 py-2.5 text-sm font-medium transition-colors ${view === 'signin' ? textPrimary : textSecondary}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setView('signup')}
              className={`relative z-10 flex-1 py-2.5 text-sm font-medium transition-colors ${view === 'signup' ? textPrimary : textSecondary}`}
            >
              Create Account
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {view === 'signup' && (
              <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={`w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-1 transition-all ${inputBase}`}
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={`w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-1 transition-all ${inputBase}`}
                />
              </div>
            )}

            <input
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-1 transition-all ${inputBase}`}
            />
            
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-1 transition-all ${inputBase}`}
            />

            {view === 'signin' && (
              <div className="flex justify-end">
                <button type="button" className="text-xs font-medium text-[#0066FF] hover:text-[#38E3FF] transition-colors">
                  Forgot Password?
                </button>
              </div>
            )}

            {view === 'signup' && (
               <div className="flex items-center gap-2 text-xs">
                 <input type="checkbox" className="rounded border-gray-500 text-blue-500 focus:ring-0" />
                 <span className={textSecondary}>I agree to the <span className="underline cursor-pointer">Terms</span> & <span className="underline cursor-pointer">Privacy Policy</span></span>
               </div>
            )}

            <button 
              type="submit"
              className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                isDark 
                 ? 'bg-gradient-to-r from-[#0066FF] to-[#0099FF] shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]'
                 : 'bg-[#071033] hover:bg-[#0066FF]'
              }`}
            >
              {view === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative flex justify-center text-xs uppercase tracking-widest text-gray-500 mb-6">
              <span className={`px-3 z-10 ${isDark ? 'bg-[#0A0F1F]' : 'bg-white'}`}>Or continue with</span>
              <div className={`absolute top-1/2 left-0 right-0 h-px ${isDark ? 'bg-white/10' : 'bg-gray-200'}`}></div>
            </div>
            
            <div className="flex gap-4">
              <button type="button" className={`flex-1 py-3 border rounded-xl flex items-center justify-center transition-colors ${isDark ? 'border-white/10 hover:bg-white/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
              </button>
              <button type="button" className={`flex-1 py-3 border rounded-xl flex items-center justify-center transition-colors ${isDark ? 'border-white/10 hover:bg-white/5' : 'border-gray-200 hover:bg-gray-50'}`}>
                <img src="https://www.svgrepo.com/show/512317/github-142.svg" className={`w-5 h-5 ${isDark ? 'invert' : ''}`} alt="Apple" />
              </button>
            </div>
          </div>

          <div className="mt-8 text-center">
             <p className={`text-[10px] ${textSecondary}`}>© 2025 ResQLink. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
