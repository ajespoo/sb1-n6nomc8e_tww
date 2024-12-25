import React, { useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import type { TravelPlan } from '../types/seeker';

export default function TravelPlanning() {
  const [plan, setPlan] = useState<TravelPlan>({
    destination: '',
    startDate: '',
    endDate: '',
    preferences: {
      companionType: '',
      activities: [],
      budget: ''
    }
  });

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Destination</label>
          <div className="mt-1 relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={plan.destination}
              onChange={(e) => setPlan({ ...plan, destination: e.target.value })}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Where do you want to go?"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Companion Type</label>
          <div className="mt-1 relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              value={plan.preferences.companionType}
              onChange={(e) => setPlan({
                ...plan,
                preferences: { ...plan.preferences, companionType: e.target.value }
              })}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Select companion type</option>
              <option value="local">Local Guide</option>
              <option value="photographer">Photographer</option>
              <option value="interpreter">Interpreter</option>
              <option value="medical">Medical Assistant</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Start Date</label>
          <div className="mt-1 relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={plan.startDate}
              onChange={(e) => setPlan({ ...plan, startDate: e.target.value })}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">End Date</label>
          <div className="mt-1 relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="date"
              value={plan.endDate}
              onChange={(e) => setPlan({ ...plan, endDate: e.target.value })}
              className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <button
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Save Travel Plan
      </button>
    </div>
  );
}