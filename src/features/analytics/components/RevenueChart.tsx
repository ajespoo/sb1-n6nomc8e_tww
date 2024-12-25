import React from 'react';
import { DollarSign } from 'lucide-react';

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Revenue Overview</h3>
        <select className="border rounded-md px-3 py-1 text-sm">
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Yearly</option>
        </select>
      </div>
      
      <div className="h-64 flex items-center justify-center border-t">
        {/* Chart will be implemented using a charting library */}
        <p className="text-gray-500">Revenue chart visualization</p>
      </div>
    </div>
  );
}