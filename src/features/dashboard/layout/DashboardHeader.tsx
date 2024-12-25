import React from 'react';
import { Globe, Bell, Settings, User } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <div>
              <span className="text-xl font-semibold text-gray-900">Travel Assist Worldwide</span>
              <span className="text-sm text-gray-500 block">Your Global Travel Companion</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-400 hover:text-gray-500 relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="h-5 w-5" />
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium hidden md:block">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}