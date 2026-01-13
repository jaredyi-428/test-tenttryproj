import { Tent } from "./types";

export const TENTS: Tent[] = [
  {
    id: '1',
    name: 'Solo Hiker Lite',
    description: '專為極簡主義者設計。這款超輕量單人帳篷適合長途徒步旅行，收納體積極小。',
    pricePerDay: 450,
    capacity: 1,
    weight: '1.2kg',
    season: 3,
    imageUrl: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?auto=format&fit=crop&q=80&w=800',
    features: ['超輕量鋁合金桿', '抗撕裂尼龍', '快速搭建 (5分鐘)']
  },
  {
    id: '2',
    name: 'Duo Trekker',
    description: '經典的雙人圓頂帳篷。雙門設計方便進出，頂部通風良好，適合情侶或好友露營。',
    pricePerDay: 700,
    capacity: 2,
    weight: '2.5kg',
    season: 3,
    imageUrl: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&q=80&w=800',
    features: ['雙前庭空間', '防蚊細網', '防雨係數 3000mm']
  },
  {
    id: '3',
    name: 'Family Basecamp',
    description: '寬敞的四人帳篷，內部高度可站立。堅固的結構能抵禦強風，適合家庭或車宿露營。',
    pricePerDay: 1200,
    capacity: 4,
    weight: '8.5kg',
    season: 4,
    imageUrl: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=800',
    features: ['站立高度 190cm', '多重置物袋', '加強防風繩']
  },
  {
    id: '4',
    name: 'Glamp King Bell',
    description: '豪華鐘型帳篷，採用透氣科技棉。打造極致的野外奢華體驗，拍照打卡首選。',
    pricePerDay: 2500,
    capacity: 6,
    weight: '25kg',
    season: 3,
    imageUrl: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&q=80&w=800',
    features: ['科技棉材質', '可放置雙人床', '防火煙囪孔']
  }
];
