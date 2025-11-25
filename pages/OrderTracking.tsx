import React, { useState } from 'react';

const OrderTracking: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  // Mock steps
  const steps = [
    { label: 'Order Placed', date: 'Oct 24', completed: true },
    { label: 'Processing', date: 'Oct 25', completed: true },
    { label: 'Packed', date: 'Oct 25', completed: true },
    { label: 'Shipped', date: 'Oct 26', completed: true },
    { label: 'Out for Delivery', date: 'Today', completed: false, current: true },
    { label: 'Delivered', date: 'Est. 4pm', completed: false },
  ];

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if(orderId) setIsTracking(true);
  };

  return (
    <div className="min-h-screen bg-[#071033] text-white pt-24 px-6 font-sans flex flex-col items-center">
      
      {/* Search Section */}
      <div className="w-full max-w-xl text-center mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <h1 className="text-4xl font-bold mb-4">Track Your Order</h1>
        <p className="text-gray-400 mb-8">Enter your order ID to see real-time updates.</p>
        
        <form onSubmit={handleTrack} className="flex gap-2 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#38E3FF] rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
          <input 
            type="text" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="e.g. RQL-88219" 
            className="flex-1 bg-[#0a1128] border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#0066FF] relative z-10"
          />
          <button className="bg-gradient-to-r from-[#0066FF] to-[#0099FF] px-8 rounded-xl font-bold shadow-lg relative z-10 hover:scale-105 transition-transform">
            Track
          </button>
        </form>
      </div>

      {/* Tracking Result Card */}
      {isTracking && (
        <div className="w-full max-w-3xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl animate-in zoom-in duration-500">
          <div className="flex justify-between items-start mb-8 border-b border-white/10 pb-6">
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wider">Order ID</p>
              <h2 className="text-2xl font-bold text-white">{orderId}</h2>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400 uppercase tracking-wider">Est. Arrival</p>
              <h2 className="text-2xl font-bold text-[#38E3FF]">Today by 4:00 PM</h2>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-700 md:w-full md:h-0.5 md:left-0 md:top-4 md:bottom-auto"></div>
            
            {/* Steps */}
            <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
              {steps.map((step, idx) => (
                <div key={idx} className="flex md:flex-col items-center gap-4 md:gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-all ${
                    step.completed ? 'bg-[#0066FF] border-[#0066FF] text-white shadow-[0_0_15px_#0066FF]' : 
                    step.current ? 'bg-[#071033] border-[#38E3FF] text-[#38E3FF] animate-pulse shadow-[0_0_10px_#38E3FF]' : 
                    'bg-[#071033] border-gray-700 text-gray-500'
                  }`}>
                    {step.completed ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    ) : (
                      <span className="text-xs">{idx + 1}</span>
                    )}
                  </div>
                  <div className="text-left md:text-center">
                    <p className={`text-sm font-semibold ${step.current ? 'text-[#38E3FF]' : 'text-gray-300'}`}>{step.label}</p>
                    <p className="text-xs text-gray-500">{step.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courier Info */}
          <div className="mt-10 bg-white/5 rounded-xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
               {/* FedEx/DHL Placeholder */}
               <span className="text-black font-bold text-xs">DHL</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold">DHL Express</p>
              <p className="text-xs text-gray-400">Tracking: 1Z 999 AA1 01 2345 6784</p>
            </div>
            <button className="text-sm text-[#0066FF] hover:text-white transition-colors">Visit Courier Site</button>
          </div>

        </div>
      )}
    </div>
  );
};

export default OrderTracking;