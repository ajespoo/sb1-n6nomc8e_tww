export interface AnalyticsData {
  totalUsers: number;
  activeBookings: number;
  revenue: number;
  conversionRate: number;
  travelMetrics: {
    date: string;
    bookings: number;
    completedTrips: number;
    cancelledTrips: number;
  }[];
  revenueData: {
    date: string;
    amount: number;
    type: 'booking' | 'commission' | 'other';
  }[];
}

export interface MetricsFilter {
  startDate: string;
  endDate: string;
  interval: 'daily' | 'weekly' | 'monthly';
  category?: string;
}