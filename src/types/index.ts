export interface User {
  id: string;
  name: string;
  email: string;
  role: 'traveler' | 'companion' | 'agent';
  region: string;
  profileImage?: string;
  bio?: string;
}

export interface TravelPlan {
  id: string;
  travelerId: string;
  companionId?: string;
  destination: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'matched' | 'completed';
  requirements?: string;
}

export interface LoyaltyPoints {
  userId: string;
  points: number;
  history: {
    date: string;
    amount: number;
    type: 'earned' | 'redeemed';
    description: string;
  }[];
}