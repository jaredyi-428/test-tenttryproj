import React, { useState, useEffect } from 'react';
import { TentIcon } from './Icons';
import { Page } from '../types';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => onNavigate(Page.HOME)}
        >
          <div className="bg-brand-600 p-2 rounded-lg group-hover:bg-brand-700 transition-colors">
            <TentIcon className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
            NomadNest
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate(Page.HOME)} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-brand-600' : 'text-white/90 hover:text-white'}`}>首頁</button>
          <button onClick={() => onNavigate(Page.CATALOG)} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-brand-600' : 'text-white/90 hover:text-white'}`}>裝備目錄</button>
          <button onClick={() => onNavigate(Page.GUIDE)} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-brand-600' : 'text-white/90 hover:text-white'}`}>露營指南</button>
          <button onClick={() => onNavigate(Page.ABOUT)} className={`text-sm font-medium transition-colors ${isScrolled ? 'text-gray-600 hover:text-brand-600' : 'text-white/90 hover:text-white'}`}>關於我們</button>
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="hidden md:block px-5 py-2.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors"
            onClick={() => onNavigate(Page.CATALOG)}
          >
            立即預訂
          </button>
          <button className="relative p-2 text-gray-600 hover:text-brand-600 transition-colors">
            <span className="sr-only">Cart</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
