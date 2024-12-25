import React from 'react';
import { Calendar } from 'lucide-react';

export default function TravelMetricsChart() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Travel Metrics</h3>
        <select className="border rounded-md px-3 py-1 text-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      
      <div className="h-64 flex items-center justify-center border-t">
        {/* Chart will be implemented using a charting library */}
        <p className="text-gray-500">Travel metrics visualization</p>
      </div>
    </div>
  );
}