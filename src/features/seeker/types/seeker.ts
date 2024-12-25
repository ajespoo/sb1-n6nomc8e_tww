export interface SeekerProfile {
  id: string;
  userId: string;
  preferences: {
    companionTypes: string[];
    languages: string[];
    interests: string[];
    budget: {
      min: number;
      max: number;
    };
  };
  verificationStatus: 'pending' | 'verified' | 'rejected';
}

export interface SeekerMatch {
  id: string;
  companionId: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  travelPlan: TravelPlan;
  chatEnabled: boolean;
  feedback?: {
    rating: number;
    comment: string;
  };
}

export interface TravelPlan {
  destination: string;
  startDate: string;
  endDate: string;
  preferences: {
    companionType: string;
    activities: string[];
    budget: string;
  };
}

export interface CollocationResult {
  companionId: string;
  distance: number;
  availability: {
    startDate: string;
    endDate: string;
  };
  rating: number;
}