
import React from 'react';
import { PageRoute } from '../types';

interface DashboardProps {
  setPage: (page: PageRoute) => void;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ setPage, onLogout }) => {
  const sidebarItems = [
    { label: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', action: () => setPage('home') },
    { label: 'My Devices', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', active: true },
    { label: 'Emergency Reports', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    { label: 'Subscription', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { label: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  ];

  return (
    <div className="min-h-screen bg-[#071033] text-white flex font-sans pt-16">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white/5 backdrop-blur-lg border-r border-white/10 hidden md:flex flex-col">
        {/* Logo Area */}
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="ResQLink" 
            className="h-8 w-auto"
            onError={(e) => {
              e.currentTarget.onerror = null; 
              e.currentTarget.src = "https://placehold.co/40x40/0066FF/ffffff?text=RQL"; 
            }}
          />
          <span className="font-bold text-lg tracking-wide">ResQLink</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item, idx) => (
            <button 
              key={idx}
              onClick={item.action}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active 
                  ? 'bg-[#0066FF]/20 text-[#38E3FF] border border-[#0066FF]/30 shadow-[0_0_15px_rgba(0,102,255,0.2)]' 
                  : 'text-gray-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* User Profile Bottom */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-4 px-2">
             <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-xs font-bold">JD</div>
             <div className="overflow-hidden">
               <p className="text-sm font-medium truncate">John Doe</p>
               <p className="text-xs text-gray-500">Premium</p>
             </div>
          </div>
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-gray-400 text-sm">Welcome back, John.</p>
          </div>
          <div className="flex gap-4">
             <button onClick={() => setPage('activation')} className="px-6 py-2.5 bg-gradient-to-r from-[#0066FF] to-[#38E3FF] rounded-lg text-sm font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all">
               + Activate New Device
             </button>
             <button className="p-2.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors relative">
               <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
               </svg>
               <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
             </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Main Status Card */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF] rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
            
            <div className="flex justify-between items-start mb-6">
               <div>
                 <h3 className="text-lg font-bold">ResQLink Pro X</h3>
                 <p className="text-green-400 text-sm flex items-center gap-1.5">
                   <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                   Online & Monitoring
                 </p>
               </div>
               <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-mono text-gray-300">ID: RQL-8829-X</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
               <div className="bg-black/20 rounded-xl p-4 text-center">
                 <p className="text-gray-400 text-xs mb-1">BATTERY</p>
                 <p className="text-xl font-bold text-[#38E3FF]">94%</p>
               </div>
               <div className="bg-black/20 rounded-xl p-4 text-center">
                 <p className="text-gray-400 text-xs mb-1">SIGNAL</p>
                 <p className="text-xl font-bold text-[#38E3FF]">Strong</p>
               </div>
               <div className="bg-black/20 rounded-xl p-4 text-center">
                 <p className="text-gray-400 text-xs mb-1">GPS</p>
                 <p className="text-xl font-bold text-[#38E3FF]">Locked</p>
               </div>
            </div>

            <div className="h-32 bg-gray-700/50 rounded-xl flex items-center justify-center relative overflow-hidden">
               {/* Map Placeholder */}
               <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-122.4194,37.7749,12,0/600x300?access_token=placeholder')] bg-cover opacity-50 grayscale"></div>
               <div className="relative z-10 bg-black/60 px-4 py-2 rounded-lg text-sm flex items-center gap-2 backdrop-blur-sm border border-white/10">
                 <svg className="w-4 h-4 text-[#38E3FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                 San Francisco, CA • Updated 2m ago
               </div>
            </div>
          </div>

          {/* Alert History */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-4">Recent Alerts</h3>
            <div className="space-y-4">
              {[
                { type: 'Test', date: 'Today, 10:23 AM', status: 'Cleared' },
                { type: 'Movement', date: 'Yesterday, 4:45 PM', status: 'Logged' },
                { type: 'Connection', date: 'Oct 24, 9:00 AM', status: 'Restored' }
              ].map((alert, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                   <div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                     <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   </div>
                   <div className="flex-1">
                     <p className="text-sm font-semibold text-gray-200">{alert.type} Alert</p>
                     <p className="text-xs text-gray-500">{alert.date}</p>
                   </div>
                   <span className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300">{alert.status}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm text-[#38E3FF] hover:text-white transition-colors">View All Logs</button>
          </div>
        </div>

        {/* Quick Actions Grid */}
        <h2 className="text-lg font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {['Emergency Contacts', 'Geo-Fence Settings', 'Device Diagnostics', 'Support Ticket'].map((action, i) => (
             <button key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-[#0066FF]/20 hover:border-[#0066FF]/40 transition-all text-left group">
               <span className="block mb-2 text-[#38E3FF] group-hover:translate-x-1 transition-transform">→</span>
               <span className="text-sm font-semibold text-gray-300 group-hover:text-white">{action}</span>
             </button>
           ))}
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
