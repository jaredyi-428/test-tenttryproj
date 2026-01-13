import React from 'react';
import { Page } from '../types';

interface GuidePageProps {
    onNavigate: (page: Page) => void;
}

const GuidePage: React.FC<GuidePageProps> = ({ onNavigate }) => {
    const guides = [
        {
            title: '新手必讀：第一次露營就上手',
            description: '從選擇營地到打包行李，完整的新手入門指南讓您輕鬆踏出第一步。',
            image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800',
            category: '入門指南',
            readTime: '10 分鐘',
        },
        {
            title: '四季露營裝備選擇攻略',
            description: '不同季節需要不同的裝備配置，學會如何根據天氣選擇最適合的帳篷與睡袋。',
            image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800',
            category: '裝備知識',
            readTime: '8 分鐘',
        },
        {
            title: '台灣十大絕美露營地推薦',
            description: '從海邊到高山，精選台灣最具特色的露營地點，每一處都是打卡聖地。',
            image: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?w=800',
            category: '營地推薦',
            readTime: '12 分鐘',
        },
        {
            title: '野炊料理：戶外美食教學',
            description: '露營不只是泡麵！學會這些簡單又美味的野炊食譜，讓露營體驗更加分。',
            image: 'https://images.unsplash.com/photo-1526491109672-74740652b963?w=800',
            category: '露營料理',
            readTime: '15 分鐘',
        },
        {
            title: '親子露營安全須知',
            description: '帶著孩子露營需要特別注意的安全事項，讓全家人都能安心享受戶外時光。',
            image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=800',
            category: '安全須知',
            readTime: '7 分鐘',
        },
        {
            title: '雨天露營生存指南',
            description: '遇到下雨不用慌！掌握這些技巧，即使雨天也能有美好的露營回憶。',
            image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800',
            category: '進階技巧',
            readTime: '9 分鐘',
        },
    ];

    const tips = [
        { icon: '🏕️', title: '提早抵達', desc: '建議下午 2-3 點前抵達營地，預留充足時間搭帳篷。' },
        { icon: '🌡️', title: '注意溫差', desc: '山區日夜溫差大，務必準備保暖衣物。' },
        { icon: '🔦', title: '照明設備', desc: '頭燈比手電筒實用，雙手可以自由活動。' },
        { icon: '🗑️', title: '無痕山林', desc: '帶走所有垃圾，維護環境人人有責。' },
    ];

    return (
        <div className="pt-24 pb-24 bg-stone-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-emerald-600 to-teal-800 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <button
                        onClick={() => onNavigate(Page.HOME)}
                        className="text-white/70 hover:text-white mb-6 text-sm flex items-center gap-2 transition-colors"
                    >
                        ← 返回首頁
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">露營指南</h1>
                    <p className="text-xl text-white/80 max-w-2xl">
                        從新手到達人，我們整理了最完整的露營知識庫，助您成為戶外生活專家。
                    </p>
                </div>
            </div>

            {/* Quick Tips */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">快速小提醒</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {tips.map((tip, i) => (
                            <div key={i} className="text-center p-6 bg-stone-50 rounded-2xl hover:bg-brand-50 transition-colors">
                                <div className="text-4xl mb-4">{tip.icon}</div>
                                <h3 className="font-semibold text-stone-900 mb-2">{tip.title}</h3>
                                <p className="text-sm text-stone-500">{tip.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guide Articles */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">精選文章</h2>
                        <p className="text-lg text-stone-500">深入了解露營的各種知識與技巧</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {guides.map((guide, i) => (
                            <article
                                key={i}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                            >
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-brand-100 text-brand-700 text-xs font-medium rounded-full">
                                            {guide.category}
                                        </span>
                                        <span className="text-stone-400 text-sm">⏱️ {guide.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-semibold text-stone-900 mb-3 group-hover:text-brand-600 transition-colors">
                                        {guide.title}
                                    </h3>
                                    <p className="text-stone-500 text-sm leading-relaxed">
                                        {guide.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">準備好開始您的露營之旅？</h2>
                    <p className="text-white/80 mb-8">選擇適合的裝備，踏出探索自然的第一步</p>
                    <button
                        onClick={() => onNavigate(Page.CATALOG)}
                        className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold hover:bg-stone-100 transition-colors"
                    >
                        瀏覽裝備目錄
                    </button>
                </div>
            </section>
        </div>
    );
};

export default GuidePage;
