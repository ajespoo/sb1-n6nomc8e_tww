import React from 'react';
import { MapPin, Calendar, DollarSign } from 'lucide-react';
import type { TravelMatch } from '../../types/user-management';

interface TravelMatchCardProps {
  match: TravelMatch;
  onAccept?: () => void;
  onDecline?: () => void;
}

export default function TravelMatchCard({ match, onAccept, onDecline }: TravelMatchCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Travel Match Request</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${
          match.status === 'confirmed' ? 'bg-green-100 text-green-800' :
          match.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {match.status}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-600">
          <Calendar className="h-4 w-4" />
          <span>{new Date(match.startDate).toLocaleDateString()} - {new Date(match.endDate).toLocaleDateString()}</span>
        </div>

        {match.meetupPoint && (
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{match.meetupPoint}</span>
          </div>
        )}

        <div className="flex items-center gap-2 text-gray-600">
          <DollarSign className="h-4 w-4" />
          <span>Payment Status: {match.paymentStatus}</span>
        </div>
      </div>

      {match.status === 'pending' && (
        <div className="flex gap-3 mt-6">
          <button
            onClick={onAccept}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Accept
          </button>
          <button
            onClick={onDecline}
            className="flex-1 border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50"
          >
            Decline
          </button>
        </div>
      )}
    </div>
  );
}