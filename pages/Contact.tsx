
import React, { useState } from 'react';
import { Theme } from '../types';

interface ContactProps {
  theme: Theme;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  // Dynamic Styles based on theme
  const glassCardClass = isDark
    ? 'bg-[#0A0F1F]/60 backdrop-blur-2xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'
    : 'bg-white/60 backdrop-blur-2xl border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]';
  
  const inputClass = isDark
    ? 'bg-black/20 border-white/10 text-white placeholder-gray-500 focus:border-[#38E3FF] focus:shadow-[0_0_15px_rgba(56,227,255,0.1)]'
    : 'bg-white/50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white';

  const textPrimary = isDark ? 'text-white' : 'text-[#071033]';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 relative overflow-hidden font-sans">
      
      {/* Abstract Background Shapes (Theme Aware) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className={`absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 ${isDark ? 'bg-[#0066FF]' : 'bg-blue-200'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${isDark ? 'bg-[#38E3FF]' : 'bg-cyan-200'}`}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 tracking-tight ${textPrimary} drop-shadow-sm`}>
            Contact Us
          </h1>
          <p className={`text-xl md:text-2xl font-light max-w-2xl mx-auto ${textSecondary}`}>
            We are here to support you at every step of your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Contact Form */}
          <div className={`rounded-[30px] p-8 md:p-10 border transition-all duration-300 hover:shadow-2xl ${glassCardClass} animate-in fade-in slide-in-from-left-8 duration-700`}>
            <div className="mb-8">
              <h2 className={`text-2xl font-bold mb-2 ${textPrimary}`}>Send a Message</h2>
              <p className={textSecondary}>Our team typically responds within 2 hours.</p>
            </div>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className={`text-2xl font-bold mb-2 ${textPrimary}`}>Message Sent!</h3>
                <p className={textSecondary}>Thank you for reaching out. We'll be in touch shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-[#0066FF] hover:text-[#38E3FF] font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${textSecondary}`}>Name</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0066FF] transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl border outline-none transition-all ${inputClass}`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${textSecondary}`}>Phone</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0066FF] transition-colors">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full pl-11 pr-4 py-3.5 rounded-xl border outline-none transition-all ${inputClass}`}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${textSecondary}`}>Email</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#0066FF] transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border outline-none transition-all ${inputClass}`}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${textSecondary}`}>Message</label>
                  <div className="relative group">
                    <div className="absolute top-3.5 left-4 flex items-start pointer-events-none text-gray-400 group-focus-within:text-[#0066FF] transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="How can we help you today?"
                      className={`w-full pl-11 pr-4 py-3.5 rounded-xl border outline-none transition-all resize-none ${inputClass}`}
                    ></textarea>
                  </div>
                </div>

                <button 
                  type="submit"
                  className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                    isDark 
                     ? 'bg-gradient-to-r from-[#0066FF] to-[#0099FF] shadow-[0_0_20px_rgba(0,102,255,0.4)] hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]'
                     : 'bg-[#071033] hover:bg-[#0066FF]'
                  }`}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Info */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
            
            {/* Info Cards */}
            <div className={`p-8 rounded-[30px] border transition-all hover:scale-[1.02] ${glassCardClass}`}>
              <h3 className={`text-xl font-bold mb-6 ${textPrimary}`}>Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${isDark ? 'bg-[#0066FF]/20 text-[#38E3FF]' : 'bg-blue-100 text-blue-600'}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${textSecondary}`}>Support</p>
                    <a href="mailto:support@resqlink.com" className={`text-lg font-medium hover:underline ${textPrimary}`}>support@resqlink.com</a>
                    <p className={`text-sm mt-1 ${textSecondary}`}>For technical issues and general help.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${isDark ? 'bg-[#0066FF]/20 text-[#38E3FF]' : 'bg-blue-100 text-blue-600'}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${textSecondary}`}>Business</p>
                    <a href="mailto:info@resqlink.com" className={`text-lg font-medium hover:underline ${textPrimary}`}>info@resqlink.com</a>
                    <p className={`text-sm mt-1 ${textSecondary}`}>For partnerships and media inquiries.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${isDark ? 'bg-[#0066FF]/20 text-[#38E3FF]' : 'bg-blue-100 text-blue-600'}`}>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${textSecondary}`}>Headquarters</p>
                    <p className={`text-lg font-medium ${textPrimary}`}>Nagpur, Maharashtra, India</p>
                    <p className={`text-sm mt-1 ${textSecondary}`}>Phone: +91 98765 43210</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={`p-8 rounded-[30px] border flex justify-around items-center ${glassCardClass}`}>
              {[
                { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01' },
                { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                { name: 'YouTube', icon: 'M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29.015 29.015 0 001 13.38a29.015 29.015 0 00.46 6.92 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29.015 29.015 0 00.46-6.92 29.015 29.015 0 00-.46-6.96z' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`p-3 rounded-2xl transition-all hover:scale-110 hover:shadow-lg ${isDark ? 'bg-white/5 hover:bg-[#0066FF] text-white' : 'bg-white hover:bg-[#0066FF] hover:text-white text-gray-700'}`}
                  aria-label={social.name}
                >
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                     {social.name === 'Instagram' ? (
                       <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d={social.icon}></path></>
                     ) : social.name === 'LinkedIn' ? (
                       <path d={social.icon}></path>
                     ) : (
                        <path d={social.icon}></path>
                     )}
                     {social.name === 'YouTube' && <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" stroke="none"></polygon>}
                   </svg>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
