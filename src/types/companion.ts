export interface Companion {
  id: string;
  name: string;
  region: string;
  caste?: string;
  languages: string[];
  specialties: string[];
  rating: number;
  reviews: number;
  price: number;
  loyaltyPoints: number;
  availability: {
    startDate: string;
    endDate: string;
  };
  verificationStatus: 'verified' | 'pending' | 'unverified';
  travelHistory: {
    destination: string;
    date: string;
    duration: number;
  }[];
  profileImage: string;
  bio: string;
}

export interface CompanionFilter {
  region?: string;
  caste?: string;
  languages?: string[];
  specialties?: string[];
  minRating?: number;
  maxPrice?: number;
  startDate?: string;
  endDate?: string;
}