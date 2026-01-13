import React from 'react';
import { Page } from '../types';

interface AboutPageProps {
    onNavigate: (page: Page) => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
    const stats = [
        { number: '10,000+', label: '滿意顧客' },
        { number: '500+', label: '頂級裝備' },
        { number: '50+', label: '合作營地' },
        { number: '5', label: '服務據點' },
    ];

    const team = [
        {
            name: '林志偉',
            role: '創辦人 & 執行長',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
            bio: '擁有 15 年戶外運動經驗，曾攀登多座百岳。',
        },
        {
            name: '陳雅琳',
            role: '營運長',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
            bio: '專精於供應鏈管理，確保裝備品質。',
        },
        {
            name: '王建宏',
            role: '裝備顧問主管',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
            bio: '國際嚮導認證，熟悉各種戶外環境。',
        },
        {
            name: '張雅婷',
            role: '客戶體驗經理',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
            bio: '致力於打造最佳租賃體驗。',
        },
    ];

    const timeline = [
        { year: '2019', event: '創立於台北，從 10 頂帳篷起步' },
        { year: '2020', event: '擴展至全系列露營裝備租賃' },
        { year: '2021', event: '成立台中服務據點' },
        { year: '2022', event: '累積服務超過 5,000 位露營愛好者' },
        { year: '2023', event: '推出線上預訂系統，服務更便利' },
        { year: '2024', event: '成為台灣最大露營裝備租賃平台' },
    ];

    const values = [
        {
            icon: '🌿',
            title: '永續經營',
            description: '減少一次性消費，讓更多人共享優質裝備，降低環境負擔。',
        },
        {
            icon: '⭐',
            title: '品質至上',
            description: '嚴選國際知名品牌，每件裝備都經過專業清潔與檢測。',
        },
        {
            icon: '🤝',
            title: '誠信服務',
            description: '透明的價格、完善的保障，讓每位顧客都能安心租賃。',
        },
        {
            icon: '💡',
            title: '創新思維',
            description: '持續優化服務流程，提供更便捷的租賃體驗。',
        },
    ];

    return (
        <div className="pt-24 pb-24 bg-stone-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-stone-800 to-stone-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1517824806704-9040b037703b?w=1600"
                        alt="背景"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <button
                        onClick={() => onNavigate(Page.HOME)}
                        className="text-white/70 hover:text-white mb-6 text-sm flex items-center gap-2 transition-colors"
                    >
                        ← 返回首頁
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">關於 NomadNest</h1>
                    <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
                        我們相信，探索自然不該被昂貴的裝備費用阻擋。NomadNest 致力於讓每個人都能輕鬆走進大自然，享受露營的美好時光。
                    </p>
                </div>
            </div>

            {/* Stats */}
            <section className="py-16 bg-white relative -mt-12 mx-4 sm:mx-8 lg:mx-auto max-w-6xl rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">{stat.number}</div>
                            <div className="text-stone-500">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-stone-900 mb-6">我們的故事</h2>
                            <div className="space-y-4 text-stone-600 leading-relaxed">
                                <p>
                                    2019 年，一群熱愛戶外活動的夥伴發現：許多人想嘗試露營，卻因為高昂的裝備費用而卻步。我們思考，如果能讓優質的露營裝備被更多人共享，不是更好嗎？
                                </p>
                                <p>
                                    於是，NomadNest 誕生了。從最初的 10 頂帳篷，到現在超過 500 件各式裝備；從台北的小倉庫，到遍布全台的服務據點。我們始終堅持同一個理念：<strong className="text-stone-900">讓每個人都能無負擔地走進大自然</strong>。
                                </p>
                                <p>
                                    今天，我們已經幫助超過一萬名露營愛好者實現他們的戶外夢想。未來，我們將繼續努力，成為您探索自然的最佳夥伴。
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1525811902-f2342640856e?w=800"
                                alt="團隊露營"
                                className="rounded-2xl shadow-lg"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-brand-600 text-white p-6 rounded-xl shadow-lg">
                                <div className="text-3xl font-bold">5+</div>
                                <div className="text-white/80">年專業經驗</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">發展歷程</h2>
                    <div className="space-y-8">
                        {timeline.map((item, i) => (
                            <div key={i} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-20 text-right">
                                    <span className="text-xl font-bold text-brand-600">{item.year}</span>
                                </div>
                                <div className="relative">
                                    <div className="w-4 h-4 bg-brand-600 rounded-full mt-1.5" />
                                    {i < timeline.length - 1 && (
                                        <div className="absolute top-6 left-1.5 w-0.5 h-12 bg-brand-200" />
                                    )}
                                </div>
                                <div className="flex-1 pb-8">
                                    <p className="text-stone-700 text-lg">{item.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">核心價值</h2>
                        <p className="text-lg text-stone-500">我們的經營理念與承諾</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                                <div className="text-5xl mb-6">{value.icon}</div>
                                <h3 className="text-xl font-semibold text-stone-900 mb-3">{value.title}</h3>
                                <p className="text-stone-500 text-sm leading-relaxed">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">核心團隊</h2>
                        <p className="text-lg text-stone-500">熱愛戶外的專業團隊為您服務</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, i) => (
                            <div key={i} className="text-center group">
                                <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-stone-100 group-hover:ring-brand-200 transition-all">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-stone-900 mb-1">{member.name}</h3>
                                <p className="text-brand-600 text-sm font-medium mb-3">{member.role}</p>
                                <p className="text-stone-500 text-sm">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-stone-800 to-stone-900">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">加入我們的露營家族</h2>
                    <p className="text-white/70 mb-8">立即探索我們的裝備目錄，開始您的戶外冒險</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => onNavigate(Page.CATALOG)}
                            className="bg-brand-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-brand-500 transition-colors"
                        >
                            瀏覽裝備目錄
                        </button>
                        <button
                            onClick={() => onNavigate(Page.GUIDE)}
                            className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                        >
                            閱讀露營指南
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
