import React from 'react';
import { Tent } from '../types';
import { UsersIcon, ScaleIcon, SunSnowIcon } from './Icons';

interface TentCardProps {
  tent: Tent;
  onCheckAvailability: (tent: Tent) => void;
}

const TentCard: React.FC<TentCardProps> = ({ tent, onCheckAvailability }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={tent.imageUrl} 
          alt={tent.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-700 shadow-sm">
          ${tent.pricePerDay} / 天
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-stone-800 mb-2">{tent.name}</h3>
        <p className="text-stone-500 text-sm mb-4 line-clamp-2 flex-1">
          {tent.description}
        </p>
        
        <div className="grid grid-cols-3 gap-2 mb-6">
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-stone-50">
            <UsersIcon className="w-4 h-4 text-stone-400 mb-1" />
            <span className="text-xs font-medium text-stone-600">{tent.capacity} 人</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-stone-50">
            <ScaleIcon className="w-4 h-4 text-stone-400 mb-1" />
            <span className="text-xs font-medium text-stone-600">{tent.weight}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-stone-50">
            <SunSnowIcon className="w-4 h-4 text-stone-400 mb-1" />
            <span className="text-xs font-medium text-stone-600">{tent.season} 季</span>
          </div>
        </div>
        
        <button 
          onClick={() => onCheckAvailability(tent)}
          className="w-full py-3 rounded-xl bg-white border-2 border-stone-900 text-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-all active:scale-95 transform"
        >
          查詢可以租用的日期
        </button>
      </div>
    </div>
  );
};

export default TentCard;