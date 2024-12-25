export type DashboardSection = 'profile' | 'calendar' | 'matches' | 'system';

export interface CompanionProfile {
  id: string;
  name: string;
  languages: string[];
  specialties: string[];
  bio: string;
  hourlyRate: number;
  availability: {
    startDate: string;
    endDate: string;
  };
  verificationStatus: 'pending' | 'verified' | 'rejected';
}

export interface Match {
  id: string;
  seekerId: string;
  destination: string;
  startDate: string;
  endDate: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  meetupLocation?: string;
}

export interface MeetupLocation {
  id: string;
  name: string;
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}