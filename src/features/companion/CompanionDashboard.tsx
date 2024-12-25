import React, { useState } from 'react';
import { Layout, Calendar, Users, MessageSquare, MapPin } from 'lucide-react';
import ProfileSection from './sections/ProfileSection';
import CalendarSection from './sections/CalendarSection';
import MatchSection from './sections/MatchSection';
import SystemFeaturesSection from './sections/SystemFeaturesSection';
import type { DashboardSection } from './types';

export default function CompanionDashboard() {
  const [activeSection, setActiveSection] = useState<DashboardSection>('profile');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md">
          {/* Navigation */}
          <nav className="px-6 py-4 border-b border-gray-200">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveSection('profile')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'profile' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
                }`}
              >
                <Users className="h-5 w-5 inline-block mr-2" />
                Profile
              </button>
              <button
                onClick={() => setActiveSection('calendar')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'calendar' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
                }`}
              >
                <Calendar className="h-5 w-5 inline-block mr-2" />
                Calendar
              </button>
              <button
                onClick={() => setActiveSection('matches')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'matches' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
                }`}
              >
                <MessageSquare className="h-5 w-5 inline-block mr-2" />
                Matches
              </button>
              <button
                onClick={() => setActiveSection('system')}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  activeSection === 'system' ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
                }`}
              >
                <MapPin className="h-5 w-5 inline-block mr-2" />
                System Features
              </button>
            </div>
          </nav>

          {/* Content */}
          <div className="p-6">
            {activeSection === 'profile' && <ProfileSection />}
            {activeSection === 'calendar' && <CalendarSection />}
            {activeSection === 'matches' && <MatchSection />}
            {activeSection === 'system' && <SystemFeaturesSection />}
          </div>
        </div>
      </div>
    </div>
  );
}