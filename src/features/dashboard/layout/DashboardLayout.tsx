import React from 'react';
import { Layout } from 'lucide-react';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';
import type { DashboardSection } from '../types/dashboard';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: DashboardSection;
  onSectionChange: (section: DashboardSection) => void;
}

export default function DashboardLayout({ 
  children, 
  activeSection,
  onSectionChange 
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <div className="flex">
        <DashboardSidebar 
          activeSection={activeSection} 
          onSectionChange={onSectionChange}
        />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}