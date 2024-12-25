export interface CompanionProfile {
  id: string;
  name: string;
  region: string;
  languages: string[];
  specialties: string[];
  rating: number;
  price: number;
  availability: {
    startDate: string;
    endDate: string;
  };
}

export interface Match {
  id: string;
  seekerId: string;
  companionId: string;
  startDate: string;
  endDate: string;
  destination: string;
  price: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

export interface AgentSubscription {
  id: string;
  plan: 'basic' | 'premium' | 'enterprise';
  companionLimit: number;
  companionsRegistered: number;
  expiryDate: string;
}