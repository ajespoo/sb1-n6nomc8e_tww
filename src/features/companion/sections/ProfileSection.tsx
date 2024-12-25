import React from 'react';
import { User, Mail, Phone, Globe, Languages } from 'lucide-react';
import ProfileVerification from '../../verification/components/ProfileVerifier';

export default function ProfileSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Companion Profile</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <div className="mt-1 relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Languages</label>
            <div className="mt-1 relative">
              <Languages className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <select
                multiple
                className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              >
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Specialties</label>
            <div className="mt-1 space-y-2">
              {['Local Guide', 'Photographer', 'Interpreter', 'Medical Assistant'].map((specialty) => (
                <label key={specialty} className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                  <span className="ml-2 text-sm text-gray-600">{specialty}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ProfileVerification
        userId="companion-123"
        documents={[]}
        onDocumentUpload={async () => {}}
        verificationStatus="pending"
      />
    </div>
  );
}