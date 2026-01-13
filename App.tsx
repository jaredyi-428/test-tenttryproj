import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TentCard from './components/TentCard';
import AIChat from './components/AIChat';
import BookingModal from './components/BookingModal';
import { TENTS } from './constants';
import { Page, Tent, BookingCriteria } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [cart, setCart] = useState<{tent: Tent, criteria: BookingCriteria}[]>([]);
  
  // Search State
  const [bookingCriteria, setBookingCriteria] = useState<BookingCriteria>({
    region: '',
    startDate: '',
    endDate: ''
  });

  // Modal State
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedTent, setSelectedTent] = useState<Tent | null>(null);

  // Initial Search from Hero
  const handleSearch = (criteria: BookingCriteria) => {
    setBookingCriteria(criteria);
    setCurrentPage(Page.CATALOG);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Modal for specific tent
  const handleCheckAvailability = (tent: Tent) => {
    setSelectedTent(tent);
    setIsBookingModalOpen(true);
  };

  // Confirm booking from Modal
  const handleConfirmBooking = (tent: Tent, criteria: BookingCriteria) => {
    setCart(prev => [...prev, { tent, criteria }]);
    setBookingCriteria(criteria); // Update global state to match last confirmed
    alert(`成功加入預訂清單！\n${tent.name}\n${criteria.startDate} 至 ${criteria.endDate}`);
  };

  const handleNavigate = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans selection:bg-brand-200 selection:text-brand-900">
      <Header onNavigate={handleNavigate} cartCount={cart.length} />
      
      <main>
        {currentPage === Page.HOME && (
          <>
            <Hero onSearch={handleSearch} currentCriteria={bookingCriteria} />
            
            {/* Features Section */}
            <section className="py-24 bg-white relative z-0">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-stone-900 mb-4">為什麼選擇 NomadNest？</h2>
                  <p className="text-lg text-stone-500">我們致力於提供最優質的戶外體驗，讓您專注於享受大自然的美好，而無需擔心裝備問題。</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-12">
                   {[
                     { title: "頂級裝備", desc: "嚴選 Hilleberg, Snow Peak 等國際知名品牌，定期保養與清潔。" },
                     { title: "靈活租期", desc: "無論是週末小旅行還是長途探險，我們提供彈性的租賃方案。" },
                     { title: "AI 專業嚮導", desc: "不知道該選哪款？我們的 AI 助手隨時為您分析天氣與地形建議。" }
                   ].map((feature, i) => (
                     <div key={i} className="text-center p-6 rounded-2xl hover:bg-stone-50 transition-colors">
                       <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                         {i + 1}
                       </div>
                       <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                       <p className="text-stone-500 leading-relaxed">{feature.desc}</p>
                     </div>
                   ))}
                </div>
              </div>
            </section>

            {/* Preview Catalog Section */}
            <section className="py-24 bg-stone-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                  <div>
                    <h2 className="text-3xl font-bold text-stone-900 mb-2">熱門帳篷</h2>
                    <p className="text-stone-500">本季最受歡迎的精選款式</p>
                  </div>
                  <button 
                    onClick={() => handleNavigate(Page.CATALOG)}
                    className="hidden sm:block text-brand-600 font-medium hover:text-brand-700 hover:underline"
                  >
                    查看全部款式 &rarr;
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {TENTS.slice(0, 4).map(tent => (
                    <TentCard key={tent.id} tent={tent} onCheckAvailability={handleCheckAvailability} />
                  ))}
                </div>
                
                <div className="mt-12 text-center sm:hidden">
                   <button 
                    onClick={() => handleNavigate(Page.CATALOG)}
                    className="px-6 py-3 bg-white border border-stone-200 rounded-full text-stone-700 font-medium shadow-sm hover:bg-stone-50"
                  >
                    查看全部款式
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {currentPage === Page.CATALOG && (
          <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
               <button onClick={() => setCurrentPage(Page.HOME)} className="text-sm text-stone-500 hover:text-brand-600 mb-4">&larr; 返回首頁</button>
               <h1 className="text-4xl font-bold text-stone-900 mb-4">全系列帳篷</h1>
               
               {/* Current Search Status */}
               {bookingCriteria.region && (
                 <div className="inline-flex items-center gap-2 bg-brand-50 border border-brand-100 px-4 py-2 rounded-lg text-brand-700 text-sm">
                   <span>📍 {bookingCriteria.region === 'North' ? '北台灣' : bookingCriteria.region === 'Central' ? '中台灣' : bookingCriteria.region === 'South' ? '南台灣' : '東台灣'}</span>
                   <span className="text-brand-300">|</span>
                   <span>📅 {bookingCriteria.startDate} ~ {bookingCriteria.endDate}</span>
                 </div>
               )}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TENTS.map(tent => (
                <TentCard key={tent.id} tent={tent} onCheckAvailability={handleCheckAvailability} />
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-stone-900 text-stone-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 text-white mb-6">
               <span className="text-xl font-bold">NomadNest</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              讓每個人都能輕鬆走進大自然。我們提供最專業的露營裝備租賃服務，為您的冒險保駕護航。
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">探索</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => handleNavigate(Page.CATALOG)} className="hover:text-brand-400 transition-colors">帳篷目錄</button></li>
              <li><button className="hover:text-brand-400 transition-colors">睡袋與寢具</button></li>
              <li><button className="hover:text-brand-400 transition-colors">野炊用具</button></li>
            </ul>
          </div>

          <div>
             <h4 className="text-white font-semibold mb-6">支援</h4>
            <ul className="space-y-4 text-sm">
              <li><button className="hover:text-brand-400 transition-colors">租賃條款</button></li>
              <li><button className="hover:text-brand-400 transition-colors">常見問題</button></li>
              <li><button className="hover:text-brand-400 transition-colors">聯繫我們</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">訂閱電子報</h4>
            <p className="text-sm mb-4">獲取最新露營地點推薦與獨家優惠。</p>
            <div className="flex gap-2">
              <input type="email" placeholder="您的 Email" className="bg-stone-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-1 focus:ring-brand-500" />
              <button className="bg-brand-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-brand-500 transition-colors">訂閱</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-stone-800 text-sm text-center">
          © 2025 NomadNest Inc. All rights reserved.
        </div>
      </footer>

      {/* AI Chat Widget */}
      <AIChat />

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        tent={selectedTent}
        criteria={bookingCriteria}
        onConfirm={handleConfirmBooking}
      />
    </div>
  );
};

export default App;