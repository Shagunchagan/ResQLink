
import React, { useState } from 'react';
import { PageRoute, User } from '../types';

interface AuthPageProps {
  setPage: (page: PageRoute) => void;
  onLogin: (user: User) => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ setPage, onLogin }) => {
  const [view, setView] = useState<'signin' | 'signup' | 'reset'>('signin');
  const [showPassword, setShowPassword] = useState(false);
  
  // State for sign up form to capture name
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate authentication logic
    let userData: User;
    
    if (view === 'signup' && fullName) {
      userData = { name: fullName, email: email || 'user@example.com' };
    } else {
      // Default mock user for Sign In since we don't have a real backend
      userData = { name: 'John Doe', email: email || 'john@example.com' };
    }

    // Trigger global login state and redirect to home
    onLogin(userData);
  };

  const InputField = ({ label, type = "text", placeholder, icon, value, onChange }: any) => (
    <div className="mb-4">
      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{label}</label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0066FF] transition-colors">
          {icon}
        </div>
        <input 
          type={type} 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all backdrop-blur-sm"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-[#071033] text-white font-sans overflow-hidden">
      
      {/* Left Side - Product Image */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#071033]/40 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1614713568397-b30b7e6720f7?q=80&w=2669&auto=format&fit=crop" 
          alt="ResQLink Device" 
          className="w-full h-full object-cover animate-[scaleIn_20s_infinite_alternate]"
          style={{ animation: 'scaleIn 20s infinite alternate' }}
        />
        <div className="absolute bottom-12 left-12 z-20">
          <h2 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">Always Connected.</h2>
          <p className="text-xl text-[#38E3FF] font-light">Your guardian in every journey.</p>
        </div>
      </div>

      {/* Right Side - Auth Forms */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12 relative">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0066FF] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#38E3FF] rounded-full blur-[100px] opacity-5 pointer-events-none"></div>

        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* Logo */}
          <div className="flex justify-center mb-8">
             <div className="h-14 w-14 bg-gradient-to-br from-[#0066FF] to-[#38E3FF] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
               <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                 <path d="M12 8v4" />
                 <path d="M12 16h.01" />
               </svg>
             </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">ResQLink</h1>
            <p className="text-gray-400">Smart Safety. Instant Response.</p>
          </div>

          {/* VIEW: SIGN IN */}
          {view === 'signin' && (
            <form onSubmit={handleLogin}>
              <div className="flex gap-4 mb-8 bg-black/20 p-1 rounded-xl">
                <button type="button" className="flex-1 py-2 rounded-lg bg-white/10 text-white text-sm font-medium shadow-sm border border-white/5">Sign In</button>
                <button type="button" onClick={() => setView('signup')} className="flex-1 py-2 rounded-lg text-gray-400 hover:text-white text-sm font-medium transition-colors">Create Account</button>
              </div>

              <InputField 
                label="Email Address" 
                type="email" 
                placeholder="name@example.com"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>}
              />

              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Password</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0066FF] transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="w-full pl-11 pr-12 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all backdrop-blur-sm"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-gray-500 hover:text-white transition-colors"
                  >
                    {showPassword ? 'HIDE' : 'SHOW'}
                  </button>
                </div>
              </div>

              <div className="flex justify-end mb-6">
                <button type="button" onClick={() => setView('reset')} className="text-sm text-[#38E3FF] hover:text-[#0066FF] transition-colors">Forgot Password?</button>
              </div>

              <button className="w-full py-3.5 bg-gradient-to-r from-[#0066FF] to-[#0099FF] rounded-xl font-bold text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all duration-300">
                Sign In
              </button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10"></div></div>
                <div className="relative flex justify-center text-xs uppercase tracking-widest text-gray-500"><span className="px-3 bg-[#0a1128]">Or continue with</span></div>
              </div>

              <div className="flex gap-4">
                <button type="button" className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex justify-center items-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.347.533 12S5.867 24 12.48 24c3.44 0 6.04-1.133 8.16-3.293 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.12H12.48z"/></svg>
                </button>
                <button type="button" className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors flex justify-center items-center">
                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .315.2.69.825.57C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </button>
              </div>
            </form>
          )}

          {/* VIEW: SIGN UP */}
          {view === 'signup' && (
            <form onSubmit={handleLogin}>
              <div className="flex gap-4 mb-8 bg-black/20 p-1 rounded-xl">
                <button type="button" onClick={() => setView('signin')} className="flex-1 py-2 rounded-lg text-gray-400 hover:text-white text-sm font-medium transition-colors">Sign In</button>
                <button type="button" className="flex-1 py-2 rounded-lg bg-white/10 text-white text-sm font-medium shadow-sm border border-white/5">Create Account</button>
              </div>

              <InputField 
                label="Full Name" 
                placeholder="John Doe" 
                value={fullName}
                onChange={(e: any) => setFullName(e.target.value)}
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} 
              />
              <InputField 
                label="Email Address" 
                type="email" 
                placeholder="name@example.com" 
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>} 
              />
              
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Create Password</label>
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all backdrop-blur-sm"
                />
              </div>

              <div className="flex items-center mb-6">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-600 bg-white/10 text-[#0066FF] focus:ring-[#0066FF]" />
                <span className="ml-2 text-xs text-gray-400">I agree to the <span className="text-white underline cursor-pointer">Terms</span> and <span className="text-white underline cursor-pointer">Privacy Policy</span></span>
              </div>

              <button className="w-full py-3.5 bg-gradient-to-r from-[#0066FF] to-[#38E3FF] rounded-xl font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all duration-300">
                Create Account
              </button>
            </form>
          )}

          {/* VIEW: RESET PASSWORD */}
          {view === 'reset' && (
            <form onSubmit={() => setView('signin')}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
                  <svg className="w-8 h-8 text-[#38E3FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                     <path d="M12 8v4" />
                     <path d="M12 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Reset Password</h3>
                <p className="text-sm text-gray-400 mt-2">Enter your email to receive instructions.</p>
              </div>

              <InputField label="Email Address" type="email" placeholder="name@example.com" icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>} />

              <button className="w-full py-3.5 bg-gradient-to-r from-[#0066FF] to-[#0099FF] rounded-xl font-bold text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all duration-300 mb-4">
                Send Reset Email
              </button>
              
              <button type="button" onClick={() => setView('signin')} className="w-full py-3 text-sm text-gray-400 hover:text-white transition-colors">
                Back to Sign In
              </button>
            </form>
          )}

        </div>
        
        {/* Footer info */}
        <div className="absolute bottom-6 text-xs text-white/20">
          &copy; 2025 ResQLink Security Systems.
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
