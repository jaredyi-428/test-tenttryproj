import React, { useState, useEffect } from 'react';
import { Tent, BookingCriteria, Region } from '../types';
import { XIcon, TentIcon } from './Icons';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  tent: Tent | null;
  criteria: BookingCriteria;
  onConfirm: (tent: Tent, criteria: BookingCriteria) => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, tent, criteria, onConfirm }) => {
  const [localCriteria, setLocalCriteria] = useState<BookingCriteria>(criteria);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setLocalCriteria(criteria);
      // Reset availability check if criteria was empty initially
      if (!criteria.startDate || !criteria.endDate || !criteria.region) {
        setIsAvailable(null);
      } else {
        // Mock automatic check if data is present
        handleCheck();
      }
    }
  }, [isOpen, criteria]);

  if (!isOpen || !tent) return null;

  const handleCheck = () => {
    if (!localCriteria.startDate || !localCriteria.endDate || !localCriteria.region) return;
    
    setIsChecking(true);
    setIsAvailable(null);
    
    // Simulate API delay
    setTimeout(() => {
      setIsChecking(false);
      setIsAvailable(true); // Mock availability is always true for demo
    }, 800);
  };

  const handleConfirm = () => {
    if (isAvailable) {
      onConfirm(tent, localCriteria);
      onClose();
    }
  };

  const calculateDays = () => {
    if (!localCriteria.startDate || !localCriteria.endDate) return 0;
    const start = new Date(localCriteria.startDate);
    const end = new Date(localCriteria.endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return diffDays > 0 ? diffDays : 1; // Minimum 1 day
  };

  const days = calculateDays();
  const totalPrice = tent.pricePerDay * days;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header with Image */}
        <div className="relative h-32 bg-stone-100">
          <img src={tent.imageUrl} alt={tent.name} className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent flex items-end p-6">
            <div>
               <h3 className="text-2xl font-bold text-white leading-none mb-1">{tent.name}</h3>
               <p className="text-stone-300 text-sm">${tent.pricePerDay} / 天</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-colors"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-xs font-bold text-stone-500 uppercase mb-1">露營地區</label>
              <select 
                value={localCriteria.region}
                onChange={(e) => {
                  setLocalCriteria({...localCriteria, region: e.target.value as Region});
                  setIsAvailable(null);
                }}
                className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:ring-brand-500 outline-none"
              >
                <option value="" disabled>選擇地區</option>
                <option value="North">北台灣</option>
                <option value="Central">中台灣</option>
                <option value="South">南台灣</option>
                <option value="East">東台灣</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-1">開始</label>
                <input 
                  type="date"
                  value={localCriteria.startDate}
                  onChange={(e) => {
                    setLocalCriteria({...localCriteria, startDate: e.target.value});
                    setIsAvailable(null);
                  }}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:ring-brand-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-stone-500 uppercase mb-1">結束</label>
                <input 
                  type="date"
                  value={localCriteria.endDate}
                  min={localCriteria.startDate}
                  onChange={(e) => {
                    setLocalCriteria({...localCriteria, endDate: e.target.value});
                    setIsAvailable(null);
                  }}
                  className="w-full bg-stone-50 border border-stone-200 rounded-lg p-3 text-sm focus:ring-brand-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Action Area */}
          <div className="bg-stone-50 rounded-xl p-4 border border-stone-100">
            {!localCriteria.startDate || !localCriteria.endDate || !localCriteria.region ? (
              <div className="text-center text-stone-500 text-sm py-2">
                請先選擇地區與日期以查詢庫存
              </div>
            ) : isChecking ? (
              <div className="flex items-center justify-center gap-2 text-brand-600 py-2">
                <div className="w-5 h-5 border-2 border-brand-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="font-medium">正在查詢庫存...</span>
              </div>
            ) : isAvailable ? (
              <div className="animate-in fade-in slide-in-from-bottom-2">
                 <div className="flex justify-between items-center mb-4 text-sm">
                   <span className="text-stone-600">租期 {days} 天</span>
                   <span className="text-xl font-bold text-stone-900">${totalPrice}</span>
                 </div>
                 <button 
                  onClick={handleConfirm}
                  className="w-full py-3 bg-stone-900 text-white font-bold rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                 >
                   <TentIcon className="w-5 h-5" />
                   加入預訂
                 </button>
                 <div className="text-center mt-2 text-xs text-green-600 font-medium">
                   ✨ 目前此時段有空位！
                 </div>
              </div>
            ) : (
              <button 
                onClick={handleCheck}
                className="w-full py-3 bg-brand-600 text-white font-bold rounded-lg hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/20"
              >
                查詢此時段空位
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;