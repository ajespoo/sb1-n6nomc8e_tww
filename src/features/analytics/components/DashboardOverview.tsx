import React from 'react';
import { Users, Calendar, DollarSign, TrendingUp } from 'lucide-react';
import AnalyticsCard from './AnalyticsCard';
import TravelMetricsChart from './TravelMetricsChart';
import RevenueChart from './RevenueChart';

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnalyticsCard
          title="Total Users"
          value="1,234"
          change="+12%"
          trend="up"
          icon={Users}
          color="blue"
        />
        <AnalyticsCard
          title="Active Bookings"
          value="156"
          change="+8%"
          trend="up"
          icon={Calendar}
          color="green"
        />
        <AnalyticsCard
          title="Revenue"
          value="$45,678"
          change="+15%"
          trend="up"
          icon={DollarSign}
          color="purple"
        />
        <AnalyticsCard
          title="Conversion Rate"
          value="3.2%"
          change="-2%"
          trend="down"
          icon={TrendingUp}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TravelMetricsChart />
        <RevenueChart />
      </div>
    </div>
  );
}