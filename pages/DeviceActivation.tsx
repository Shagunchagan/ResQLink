
import React, { useState } from 'react';
import { PageRoute } from '../types';

interface DeviceActivationProps {
  setPage?: (page: PageRoute) => void;
}

const DeviceActivation: React.FC<DeviceActivationProps> = ({ setPage }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleActivate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(3); // Success step
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#071033] text-white pt-24 pb-12 px-6 font-sans flex items-center justify-center relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0066FF] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>

      <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <img 
            src="/logo.png" 
            alt="ResQLink" 
            className="h-16 w-auto mx-auto mb-6"
            onError={(e) => {
              e.currentTarget.onerror = null; 
              e.currentTarget.src = "https://placehold.co/80x80/0066FF/ffffff?text=RQL"; 
            }}
          />
          <h1 className="text-2xl font-bold mb-2">Activate Your Device</h1>
          <p className="text-gray-400 text-sm">Follow the steps to connect your ResQLink to the network.</p>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center mb-10 gap-4">
          {[1, 2, 3].map(s => (
            <div key={s} className={`h-1.5 w-12 rounded-full transition-all ${s <= step ? 'bg-[#38E3FF]' : 'bg-gray-700'}`}></div>
          ))}
        </div>

        {/* STEP 1: Identification */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="mb-6">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Serial Number</label>
              <input 
                type="text" 
                placeholder="XXXX-XXXX-XXXX"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-[#38E3FF] transition-all font-mono tracking-widest"
              />
              <p className="text-xs text-gray-500 mt-2">Found on the back of your device or box.</p>
            </div>
            <div className="mb-8">
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Activation Code</label>
              <input 
                type="text" 
                placeholder="123 456"
                className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-[#38E3FF] transition-all font-mono tracking-widest"
              />
            </div>
            <button 
              onClick={() => setStep(2)}
              className="w-full py-4 bg-gradient-to-r from-[#0066FF] to-[#38E3FF] rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all"
            >
              Verify Device
            </button>
          </div>
        )}

        {/* STEP 2: User Info */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
             <div className="space-y-4 mb-8">
                <div>
                   <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Owner Name</label>
                   <input type="text" className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-[#38E3FF]" />
                </div>
                <div>
                   <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Mobile Number for Alerts</label>
                   <input type="tel" className="w-full px-4 py-3 bg-black/20 border border-white/10 text-white rounded-xl focus:outline-none focus:border-[#38E3FF]" />
                </div>
             </div>
             
             <div className="bg-blue-900/20 border border-blue-500/20 p-4 rounded-xl mb-8 flex gap-3 items-start">
               <svg className="w-5 h-5 text-blue-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               <p className="text-xs text-blue-200 leading-relaxed">By activating, you agree to the 24/7 monitoring terms. Emergency services will be dispatched to your location if an SOS is triggered.</p>
             </div>

             <div className="flex gap-4">
               <button onClick={() => setStep(1)} className="flex-1 py-4 bg-white/5 border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-colors">Back</button>
               <button 
                 onClick={handleActivate}
                 disabled={loading}
                 className="flex-[2] py-4 bg-gradient-to-r from-[#0066FF] to-[#38E3FF] rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all flex justify-center"
               >
                 {loading ? (
                   <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                 ) : 'Complete Activation'}
               </button>
             </div>
          </div>
        )}

        {/* STEP 3: Success */}
        {step === 3 && (
          <div className="text-center animate-in zoom-in duration-300">
            <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50">
               <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Activation Successful!</h2>
            <p className="text-gray-400 mb-8">Your device is now live and monitored by our network.</p>
            
            <button 
              onClick={() => { if(setPage) setPage('dashboard'); }}
              className="w-full py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-100 transition-colors"
            >
              Go to Dashboard
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default DeviceActivation;
