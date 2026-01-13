export interface Tent {
  id: string;
  name: string;
  description: string;
  pricePerDay: number;
  capacity: number; // number of people
  weight: string; // e.g., "2.5kg"
  season: number; // 3-season or 4-season
  imageUrl: string;
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Page {
  HOME = 'HOME',
  CATALOG = 'CATALOG',
  DETAILS = 'DETAILS',
  INSURANCE = 'INSURANCE',
  GUIDE = 'GUIDE',
  ABOUT = 'ABOUT',
}

export type Region = 'North' | 'Central' | 'South' | 'East' | '';

export interface BookingCriteria {
  region: Region;
  startDate: string;
  endDate: string;
}
