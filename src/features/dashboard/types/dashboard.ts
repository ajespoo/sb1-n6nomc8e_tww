export type DashboardSection = 
  | 'overview'
  | 'profile'
  | 'verification'
  | 'bookings'
  | 'messages'
  | 'grievance';

export interface DashboardState {
  activeSection: DashboardSection;
  isLoading: boolean;
  error?: string;
}