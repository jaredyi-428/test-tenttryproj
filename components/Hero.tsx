import React from 'react';
import { Page, BookingCriteria } from '../types';
import SearchForm from './SearchForm';

interface HeroProps {
  onSearch: (criteria: BookingCriteria) => void;
  currentCriteria: BookingCriteria;
}

const Hero: React.FC<HeroProps> = ({ onSearch, currentCriteria }) => {
  return (
    <div className="relative pt-32 pb-32 lg:pt-48 lg:pb-48 overflow-visible">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070&auto=format&fit=crop"
          alt="Camping under stars"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/80 to-stone-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-brand-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
            <span>2025 新裝備已上架</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            探索自然 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-100">
              從選擇合適的裝備開始
            </span>
          </h1>

          <p className="text-lg text-stone-200 mb-8 leading-relaxed max-w-xl">
            無論是北海岸的星空，還是中央山脈的晨曦。先決定您的目的地，我們為您準備最合適的庇護所。
          </p>

          {/* Search Form Integration */}
          <div className="mt-8 relative z-20">
            <SearchForm initialCriteria={currentCriteria} onSearch={onSearch} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;