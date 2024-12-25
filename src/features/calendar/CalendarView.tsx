import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import type { CalendarEvent } from '../../types/user-management';

interface CalendarViewProps {
  events: CalendarEvent[];
  onEventClick: (event: CalendarEvent) => void;
}

export default function CalendarView({ events, onEventClick }: CalendarViewProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          <h2 className="text-lg font-semibold">Travel Schedule</h2>
        </div>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => onEventClick(event)}
            className="w-full p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-gray-900">{event.title}</h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{new Date(event.startDate).toLocaleDateString()}</span>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                event.status === 'confirmed' ? 'bg-green-100 text-green-800' :
                event.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {event.status}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}