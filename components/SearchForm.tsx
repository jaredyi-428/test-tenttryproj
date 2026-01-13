import React, { useState } from 'react';
import { BookingCriteria, Region } from '../types';

interface SearchFormProps {
  initialCriteria: BookingCriteria;
  onSearch: (criteria: BookingCriteria) => void;
  className?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ initialCriteria, onSearch, className = "" }) => {
  const [region, setRegion] = useState<Region>(initialCriteria.region);
  const [startDate, setStartDate] = useState(initialCriteria.startDate);
  const [endDate, setEndDate] = useState(initialCriteria.endDate);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ region, startDate, endDate });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`bg-white p-6 rounded-3xl shadow-xl shadow-stone-900/10 border border-stone-100 flex flex-col md:flex-row gap-4 items-end ${className}`}
    >
      <div className="w-full md:flex-1">
        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">露營地區</label>
        <select 
          value={region}
          onChange={(e) => setRegion(e.target.value as Region)}
          className="w-full bg-stone-50 border border-stone-200 text-stone-900 text-sm rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3 outline-none transition-all"
          required
        >
          <option value="" disabled>選擇地區</option>
          <option value="North">北台灣 (North)</option>
          <option value="Central">中台灣 (Central)</option>
          <option value="South">南台灣 (South)</option>
          <option value="East">東台灣 (East)</option>
        </select>
      </div>

      <div className="w-full md:flex-1">
        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">開始日期</label>
        <input 
          type="date" 
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="w-full bg-stone-50 border border-stone-200 text-stone-900 text-sm rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3 outline-none transition-all"
          required
        />
      </div>

      <div className="w-full md:flex-1">
        <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">結束日期</label>
        <input 
          type="date" 
          value={endDate}
          min={startDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="w-full bg-stone-50 border border-stone-200 text-stone-900 text-sm rounded-xl focus:ring-brand-500 focus:border-brand-500 block p-3 outline-none transition-all"
          required
        />
      </div>

      <button 
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all shadow-md shadow-brand-500/30 whitespace-nowrap"
      >
        查詢空位
      </button>
    </form>
  );
};

export default SearchForm;