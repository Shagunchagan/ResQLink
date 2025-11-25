
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import LearnMore from './pages/LearnMore';
import OrderNow from './pages/OrderNow';
import Dashboard from './pages/Dashboard';
import OrderTracking from './pages/OrderTracking';
import DeviceActivation from './pages/DeviceActivation';
import Contact from './pages/Contact';
import { PageRoute, User, Theme } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>('dark');

  // Handle system theme preference on init
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleLogin = (userData: User) => {
    setUser(userData);
    setIsAuthModalOpen(false);
    // No redirect - user stays on current page
  };

  const handleLogout = () => {
    setUser(null);
    // Optional: redirect to home if they were on a protected route like dashboard
    if (currentPage === 'dashboard') {
      setCurrentPage('home');
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setPage={setCurrentPage} />;
      case 'learn':
        return <LearnMore />;
      case 'order':
        return <OrderNow />;
      case 'dashboard':
        return <Dashboard setPage={setCurrentPage} onLogout={handleLogout} />;
      case 'tracking':
        return <OrderTracking />;
      case 'activation':
        return <DeviceActivation setPage={setCurrentPage} />;
      case 'contact':
        return <Contact theme={theme} />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 font-sans selection:bg-[#0066FF] selection:text-white ${
      theme === 'dark' ? 'bg-[#000814] text-white' : 'bg-[#F5F9FF] text-[#071033]'
    }`}>
      
      {/* Liquid Mesh Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {theme === 'dark' ? (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#0066FF]/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[60%] bg-[#38E3FF]/10 rounded-full blur-[100px]"></div>
            <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-[#071033] rounded-full blur-[80px]"></div>
          </>
        ) : (
          <>
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E6F4FF] rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[50%] bg-[#38E3FF]/5 rounded-full blur-[80px]"></div>
          </>
        )}
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          currentPage={currentPage} 
          setPage={setCurrentPage} 
          user={user}
          onLogout={handleLogout}
          onOpenAuth={() => setIsAuthModalOpen(true)}
          theme={theme}
          toggleTheme={toggleTheme}
        />
        
        <main className="flex-grow pt-20">
          {renderPage()}
        </main>
        
        <Footer setPage={setCurrentPage} />
      </div>

      {/* Auth Overlay */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        onLogin={handleLogin} 
        theme={theme}
      />
    </div>
  );
};

export default App;