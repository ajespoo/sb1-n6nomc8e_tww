import React, { useState } from 'react';
import { Calendar, Users, MessageSquare, Clock } from 'lucide-react';
import ProfileCreation from './ProfileCreation';
import CalendarManagement from './CalendarManagement';
import MatchConfirmation from './MatchConfirmation';
import TravelPlanning from './TravelPlanning';
import FeedbackSystem from '../../feedback/components/FeedbackSystem';
import CollocationFinder from './CollocationFinder';
import type { SeekerMatch } from '../types/seeker';

export default function SeekerDashboard() {
  const [activeSection, setActiveSection] = useState<string>('profile');
  const [selectedMatch, setSelectedMatch] = useState<SeekerMatch | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Travel Companion Search</h1>

          {/* Main Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button
              onClick={() => setActiveSection('profile')}
              className="p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-3"
            >
              <Users className="h-5 w-5 text-blue-600" />
              <div className="text-left">
                <span className="font-medium">Profile Management</span>
                <p className="text-sm text-gray-500">Create and update your profile</p>
              </div>
            </button>

            <button
              onClick={() => setActiveSection('calendar')}
              className="p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-3"
            >
              <Calendar className="h-5 w-5 text-green-600" />
              <div className="text-left">
                <span className="font-medium">Calendar Management</span>
                <p className="text-sm text-gray-500">Schedule your travel plans</p>
              </div>
            </button>

            <button
              onClick={() => setActiveSection('matches')}
              className="p-4 border rounded-lg hover:bg-gray-50 flex items-center gap-3"
            >
              <MessageSquare className="h-5 w-5 text-purple-600" />
              <div className="text-left">
                <span className="font-medium">Active Matches</span>
                <p className="text-sm text-gray-500">Manage your companion matches</p>
              </div>
            </button>
          </div>

          {/* Active Section Content */}
          <div className="mt-8">
            {activeSection === 'profile' && <ProfileCreation />}
            {activeSection === 'calendar' && <CalendarManagement />}
            {activeSection === 'matches' && (
              <MatchConfirmation
                match={selectedMatch}
                onReschedule={() => {}}
                onCancel={() => {}}
                onModify={() => {}}
                onInitiateChat={() => {}}
                onSwitchCompanion={() => {}}
              />
            )}
          </div>

          {/* System Features */}
          <div className="mt-8 border-t pt-8">
            <h2 className="text-lg font-semibold mb-4">Additional Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CollocationFinder />
              <div className="p-4 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h3 className="font-medium">Leaving Time Threshold</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Set your preferred notice period for travel arrangements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}