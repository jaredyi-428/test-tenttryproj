import React from 'react';
import { Page } from '../types';

interface InsurancePageProps {
    onNavigate: (page: Page) => void;
}

const InsurancePage: React.FC<InsurancePageProps> = ({ onNavigate }) => {
    const insuranceSteps = [
        {
            step: 1,
            title: '預訂時自動啟用',
            description: '當您完成租賃預訂時，基礎保險方案會自動納入，無需額外操作。',
            icon: '🛡️'
        },
        {
            step: 2,
            title: '取貨時確認裝備狀態',
            description: '我們的工作人員會與您一同確認裝備完整性，並記錄於檢查報告中。',
            icon: '📋'
        },
        {
            step: 3,
            title: '使用期間全程保障',
            description: '保險涵蓋意外損壞、遺失及第三方責任。讓您安心享受戶外時光。',
            icon: '⛺'
        },
        {
            step: 4,
            title: '歸還時快速理賠',
            description: '若有任何損壞情況，現場即可啟動理賠流程，最快 3 個工作天完成處理。',
            icon: '✅'
        }
    ];

    const insurancePlans = [
        {
            name: '基礎保障',
            price: '免費',
            features: [
                '裝備意外損壞保障（最高 NT$5,000）',
                '基本遺失保障（最高 NT$3,000）',
                '24/7 客服支援'
            ],
            recommended: false
        },
        {
            name: '全面保障',
            price: 'NT$99 / 次',
            features: [
                '裝備意外損壞保障（最高 NT$30,000）',
                '完整遺失保障（全額賠付）',
                '第三方責任險（最高 NT$100,000）',
                '免自付額',
                '優先理賠處理'
            ],
            recommended: true
        },
        {
            name: '尊榮保障',
            price: 'NT$199 / 次',
            features: [
                '全面保障所有內容',
                '天候因素取消全額退費',
                '緊急救援服務',
                '備用裝備即時調度',
                '專屬客服經理'
            ],
            recommended: false
        }
    ];

    return (
        <div className="pt-24 pb-24 bg-stone-50">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-brand-600 to-brand-800 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <button
                        onClick={() => onNavigate(Page.HOME)}
                        className="text-white/70 hover:text-white mb-6 text-sm flex items-center gap-2"
                    >
                        ← 返回首頁
                    </button>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">完善的租賃保險保障</h1>
                    <p className="text-xl text-white/80 max-w-2xl">
                        戶外活動充滿未知，但您的租賃保障不該如此。我們提供業界最完整的保險方案，讓您無後顧之憂。
                    </p>
                </div>
            </div>

            {/* Insurance Process */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">保險流程</h2>
                        <p className="text-lg text-stone-500">簡單四步驟，全程為您的裝備保駕護航</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {insuranceSteps.map((item, index) => (
                            <div key={item.step} className="relative">
                                {/* Connector Line */}
                                {index < insuranceSteps.length - 1 && (
                                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-brand-200" />
                                )}

                                <div className="relative bg-white rounded-2xl p-6 text-center border border-stone-100 hover:border-brand-200 hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                                        {item.icon}
                                    </div>
                                    <div className="inline-flex items-center justify-center w-8 h-8 bg-brand-600 text-white text-sm font-bold rounded-full mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3 text-stone-900">{item.title}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insurance Plans */}
            <section className="py-20 bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">選擇您的保障方案</h2>
                        <p className="text-lg text-stone-500">依照您的需求選擇合適的保障等級</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {insurancePlans.map((plan) => (
                            <div
                                key={plan.name}
                                className={`relative bg-white rounded-2xl p-8 border-2 transition-all ${plan.recommended
                                        ? 'border-brand-500 shadow-xl scale-105'
                                        : 'border-stone-100 hover:border-brand-200'
                                    }`}
                            >
                                {plan.recommended && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                        最熱門
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-stone-900 mb-2">{plan.name}</h3>
                                <div className="text-3xl font-bold text-brand-600 mb-6">{plan.price}</div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-stone-600">
                                            <span className="text-brand-500 mt-0.5">✓</span>
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    className={`w-full py-3 rounded-xl font-medium transition-colors ${plan.recommended
                                            ? 'bg-brand-600 text-white hover:bg-brand-700'
                                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                                        }`}
                                >
                                    選擇此方案
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-stone-900 mb-4">常見問題</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                q: '保險何時開始生效？',
                                a: '保險自您取貨確認裝備狀態後立即生效，直到歸還完成為止。'
                            },
                            {
                                q: '如果裝備在使用中損壞該怎麼辦？',
                                a: '請先拍照記錄損壞情況，並於歸還時告知工作人員。我們會協助您啟動理賠流程，基礎保障方案可支付處理，無需另外付費。'
                            },
                            {
                                q: '保險是否涵蓋人為疏失造成的損壞？',
                                a: '基礎保障涵蓋一般使用中的意外損壞。若為明顯人為疏失（如燒毀帳篷），建議選購全面保障或尊榮保障以獲得更完整的保護。'
                            },
                            {
                                q: '理賠需要多久時間？',
                                a: '一般理賠案件在 3-5 個工作天內完成審核與處理。尊榮保障會員享有優先處理服務。'
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-stone-50 rounded-xl p-6">
                                <h4 className="font-semibold text-stone-900 mb-2">{faq.q}</h4>
                                <p className="text-stone-600 text-sm leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-brand-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">準備好開始您的冒險了嗎？</h2>
                    <p className="text-white/80 mb-8">立即預訂裝備，享受完整的保險保障服務</p>
                    <button
                        onClick={() => onNavigate(Page.CATALOG)}
                        className="bg-white text-brand-600 px-8 py-4 rounded-xl font-semibold hover:bg-stone-100 transition-colors"
                    >
                        瀏覽裝備目錄
                    </button>
                </div>
            </section>
        </div>
    );
};

export default InsurancePage;
