import React, { useState } from 'react';
import { Layout, Shield, AlertTriangle, User } from 'lucide-react';
import ProfileVerifier from '../verification/components/ProfileVerifier';
import GrievanceForm from '../grievance/components/GrievanceForm';
import DashboardNav from './components/DashboardNav';
import DashboardStats from './components/DashboardStats';
import type { VerificationDocument } from '../verification/types/verification';
import type { GrievanceSubmission } from '../grievance/types/grievance';

export default function UserDashboard() {
  const [activeTab, setActiveTab] = useState<'profile' | 'verification' | 'grievance'>('profile');
  const [documents, setDocuments] = useState<VerificationDocument[]>([]);

  const handleDocumentUpload = async (file: File, type: string) => {
    // Implement document upload logic
    console.log('Uploading document:', { file, type });
  };

  const handleGrievanceSubmit = async (grievance: GrievanceSubmission) => {
    // Implement grievance submission logic
    console.log('Submitting grievance:', grievance);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <DashboardStats />
        </div>

        <div className="space-y-6">
          {activeTab === 'profile' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-6">
                <User className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-semibold">Profile Information</h2>
              </div>
              {/* Profile content */}
            </div>
          )}

          {activeTab === 'verification' && (
            <ProfileVerifier
              userId="user-123"
              documents={documents}
              onDocumentUpload={handleDocumentUpload}
              verificationStatus="pending"
            />
          )}

          {activeTab === 'grievance' && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center gap-2 mb-6">
                <AlertTriangle className="h-6 w-6 text-blue-600" />
                <h2 className="text-xl font-semibold">Submit Grievance</h2>
              </div>
              <GrievanceForm onSubmit={handleGrievanceSubmit} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}