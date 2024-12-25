export type UserType = 'seeker' | 'companion' | 'agent';

export interface Calendar {
  id: string;
  userId: string;
  events: CalendarEvent[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  type: 'travel' | 'meetup' | 'availability';
  status: 'pending' | 'confirmed' | 'completed';
}

export interface TravelMatch {
  id: string;
  seekerId: string;
  companionId: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  startDate: string;
  endDate: string;
  meetupPoint?: string;
  paymentStatus: 'pending' | 'completed';
  feedback?: Feedback;
}

export interface Feedback {
  rating: number;
  comment: string;
  createdAt: string;
  loyaltyPointsEarned?: number;
}