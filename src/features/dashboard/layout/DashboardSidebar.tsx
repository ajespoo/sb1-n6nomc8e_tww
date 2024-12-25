import React from 'react';
import { Home, Users, Shield, AlertTriangle, MessageSquare, Calendar, Globe, Map } from 'lucide-react';
import type { DashboardSection } from '../types/dashboard';

interface DashboardSidebarProps {
  activeSection: DashboardSection;
  onSectionChange: (section: DashboardSection) => void;
}

export default function DashboardSidebar({ activeSection, onSectionChange }: DashboardSidebarProps) {
  const sections = [
    { id: 'overview', name: 'Overview', icon: Home },
    { id: 'profile', name: 'Profile', icon: Users },
    { id: 'verification', name: 'Verification', icon: Shield },
    { id: 'bookings', name: 'Travel Bookings', icon: Calendar },
    { id: 'destinations', name: 'Destinations', icon: Map },
    { id: 'messages', name: 'Messages', icon: MessageSquare },
    { id: 'support', name: 'Support', icon: AlertTriangle }
  ] as const;

  return (
    <aside className="w-64 bg-white shadow-sm min-h-screen">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <Globe className="h-6 w-6 text-blue-600" />
          <span className="font-semibold text-gray-900">TAW Dashboard</span>
        </div>
      </div>
      
      <nav className="px-4 py-6">
        <ul className="space-y-2">
          {sections.map(({ id, name, icon: Icon }) => (
            <li key={id}>
              <button
                onClick={() => onSectionChange(id)}
                className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                  activeSection === id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="h-5 w-5" />
                {name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}