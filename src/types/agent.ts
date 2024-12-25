export interface TravelAgent {
  id: string;
  name: string;
  agency: string;
  email: string;
  phone: string;
  rating: number;
  subscriptionPlan: 'basic' | 'premium' | 'enterprise';
  specializations: string[];
  activeBookings: number;
}

export interface AgentBooking {
  id: string;
  agentId: string;
  seekerId: string;
  companionId: string;
  status: 'pending' | 'confirmed' | 'completed';
  commission: number;
  notes?: string;
}