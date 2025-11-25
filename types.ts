
import React from 'react';

export type PageRoute = 'home' | 'learn' | 'order' | 'dashboard' | 'tracking' | 'activation' | 'contact';
export type Theme = 'light' | 'dark';

export interface User {
  name: string;
  email: string;
}

export interface NavProps {
  currentPage: PageRoute;
  setPage: (page: PageRoute) => void;
  user: User | null;
  onLogout: () => void;
  onOpenAuth: () => void;
  theme: Theme;
  toggleTheme: () => void;
}

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: User) => void;
  theme: Theme;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}