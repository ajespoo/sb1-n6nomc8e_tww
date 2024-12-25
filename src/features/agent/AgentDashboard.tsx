import React from 'react';
import { Users, Calendar, DollarSign } from 'lucide-react';
import type { TravelAgent, AgentBooking } from '../../types/agent';

interface AgentDashboardProps {
  agent: TravelAgent;
  bookings: AgentBooking[];
  onBookingAction: (bookingId: string, action: 'confirm' | 'complete') => void;
}

export default function AgentDashboard({ agent, bookings, onBookingAction }: AgentDashboardProps) {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">{agent.name}</h2>
            <p className="text-gray-500">{agent.agency}</p>
          </div>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
            {agent.subscriptionPlan} plan
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3">
            <Users className="h-8 w-8 text-blue-600" />
            <div>
              <div className="text-2xl font-semibold">{agent.activeBookings}</div>
              <div className="text-sm text-gray-500">Active Bookings</div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3">
            <Calendar className="h-8 w-8 text-green-600" />
            <div>
              <div className="text-2xl font-semibold">{bookings.length}</div>
              <div className="text-sm text-gray-500">Total Bookings</div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3">
            <DollarSign className="h-8 w-8 text-purple-600" />
            <div>
              <div className="text-2xl font-semibold">{agent.rating.toFixed(1)}</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Recent Bookings</h3>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <div className="font-medium">Booking #{booking.id}</div>
                <div className="text-sm text-gray-500">
                  Commission: ${booking.commission}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                {booking.status === 'pending' && (
                  <button
                    onClick={() => onBookingAction(booking.id, 'confirm')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Confirm
                  </button>
                )}
                {booking.status === 'confirmed' && (
                  <button
                    onClick={() => onBookingAction(booking.id, 'complete')}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}