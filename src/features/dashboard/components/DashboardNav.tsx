import React from 'react';
import { User, Shield, AlertTriangle } from 'lucide-react';

interface DashboardNavProps {
  activeTab: 'profile' | 'verification' | 'grievance';
  onTabChange: (tab: 'profile' | 'verification' | 'grievance') => void;
}

export default function DashboardNav({ activeTab, onTabChange }: DashboardNavProps) {
  const tabs = [
    { id: 'profile', name: 'Profile', icon: User },
    { id: 'verification', name: 'Verification', icon: Shield },
    { id: 'grievance', name: 'Grievance', icon: AlertTriangle }
  ] as const;

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {tabs.map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onTabChange(id)}
                className={`inline-flex items-center px-4 py-2 border-b-2 text-sm font-medium ${
                  activeTab === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-5 w-5 mr-2" />
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}