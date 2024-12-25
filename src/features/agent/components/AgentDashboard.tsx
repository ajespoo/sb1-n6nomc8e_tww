import React, { useState } from 'react';
import { Users, Calendar, DollarSign, Printer } from 'lucide-react';
import CompanionLookup from './CompanionLookup';
import MatchConfirmation from './MatchConfirmation';
import PaymentProcessor from '../../payment/PaymentProcessor';
import ChatInitiator from './ChatInitiator';
import FeedbackSystem from './FeedbackSystem';
import type { Match, CompanionProfile } from '../types/agent';

export default function AgentDashboard() {
  const [activeSection, setActiveSection] = useState('lookup');
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  const handleMatchConfirmation = (match: Match) => {
    setSelectedMatch(match);
    // Handle match confirmation logic
  };

  const handlePrintConfirmation = () => {
    if (selectedMatch) {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Travel Agent Dashboard</h1>

          <div className="grid grid-cols-1 gap-6">
            {/* Registration Status */}
            <div className="p-4 bg-blue-50 rounded-lg">
              <h2 className="font-semibold text-blue-900">Monthly Subscription Status</h2>
              <p className="text-sm text-blue-700 mt-1">
                Active - 15 companion registrations remaining
              </p>
            </div>

            {/* Main Actions */}
            <div className="space-y-4">
              <button
                onClick={() => setActiveSection('lookup')}
                className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center gap-3"
              >
                <Users className="h-5 w-5 text-blue-600" />
                <span>Lookup Companion Profiles</span>
              </button>

              <button
                onClick={() => setActiveSection('match')}
                className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center gap-3"
              >
                <Calendar className="h-5 w-5 text-green-600" />
                <span>Confirm a Match</span>
              </button>

              <button
                onClick={() => setActiveSection('payment')}
                className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center gap-3"
              >
                <DollarSign className="h-5 w-5 text-purple-600" />
                <span>Process Payment</span>
              </button>

              <button
                onClick={handlePrintConfirmation}
                className="w-full text-left px-4 py-3 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center gap-3"
              >
                <Printer className="h-5 w-5 text-gray-600" />
                <span>Print Match Confirmation</span>
              </button>
            </div>

            {/* Active Section Content */}
            <div className="mt-6">
              {activeSection === 'lookup' && <CompanionLookup />}
              {activeSection === 'match' && (
                <MatchConfirmation 
                  onConfirm={handleMatchConfirmation}
                  onPrint={handlePrintConfirmation}
                />
              )}
              {activeSection === 'payment' && selectedMatch && (
                <PaymentProcessor
                  amount={selectedMatch.price}
                  travelId={selectedMatch.id}
                  onSuccess={() => {}}
                  onError={() => {}}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}