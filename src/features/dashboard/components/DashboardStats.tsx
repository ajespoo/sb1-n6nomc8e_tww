import React from 'react';
import { Users, Calendar, Award } from 'lucide-react';

export default function DashboardStats() {
  const stats = [
    {
      name: 'Profile Status',
      value: 'Pending Verification',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'Active Bookings',
      value: '2',
      icon: Calendar,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      name: 'Loyalty Points',
      value: '1,250',
      icon: Award,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white rounded-lg shadow-md p-6 flex items-center"
        >
          <div className={`${stat.bgColor} p-3 rounded-lg`}>
            <stat.icon className={`h-6 w-6 ${stat.color}`} />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">{stat.name}</p>
            <p className="mt-1 text-xl font-semibold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}