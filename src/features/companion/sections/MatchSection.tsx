import React from 'react';
import { Calendar, MessageSquare, Printer, RefreshCw, UserX } from 'lucide-react';
import type { Match } from '../types';

export default function MatchSection() {
  const handleReschedule = (matchId: string) => {
    // Implement reschedule logic
  };

  const handleCancel = (matchId: string) => {
    // Implement cancel logic
  };

  const handlePrint = (matchId: string) => {
    // Implement print logic
  };

  const handleChat = (matchId: string) => {
    // Implement chat initiation
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Active Matches</h2>

      <div className="space-y-4">
        {/* Match Card */}
        <div className="border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">Match #12345</h3>
              <p className="text-sm text-gray-500">Tokyo, Japan</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Mar 15 - Mar 20, 2024</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => handleChat('12345')}
                className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
              >
                <MessageSquare className="h-5 w-5" />
              </button>
              <button
                onClick={() => handlePrint('12345')}
                className="p-2 text-gray-600 hover:bg-gray-50 rounded-full"
              >
                <Printer className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleReschedule('12345')}
                className="p-2 text-yellow-600 hover:bg-yellow-50 rounded-full"
              >
                <RefreshCw className="h-5 w-5" />
              </button>
              <button
                onClick={() => handleCancel('12345')}
                className="p-2 text-red-600 hover:bg-red-50 rounded-full"
              >
                <UserX className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}