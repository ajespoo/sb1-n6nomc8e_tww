import React from 'react';
import { Calendar, User, MapPin } from 'lucide-react';
import type { Match } from '../types/agent';

interface MatchConfirmationProps {
  onConfirm: (match: Match) => void;
  onPrint: () => void;
}

export default function MatchConfirmation({ onConfirm, onPrint }: MatchConfirmationProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold mb-4">Match Details</h3>
        
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-700">Seeker</p>
              <p className="text-sm text-gray-900">John Doe</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-700">Companion</p>
              <p className="text-sm text-gray-900">Jane Smith</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-700">Travel Dates</p>
              <p className="text-sm text-gray-900">Mar 15, 2024 - Mar 20, 2024</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <div>
              <p className="text-sm font-medium text-gray-700">Destination</p>
              <p className="text-sm text-gray-900">Tokyo, Japan</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-4">
          <button
            onClick={() => onConfirm({
              id: '1',
              seekerId: '1',
              companionId: '1',
              startDate: '2024-03-15',
              endDate: '2024-03-20',
              destination: 'Tokyo, Japan',
              price: 500,
              status: 'pending'
            })}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Confirm Match
          </button>
          
          <button
            onClick={onPrint}
            className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            Print Confirmation
          </button>
        </div>
      </div>
    </div>
  );
}