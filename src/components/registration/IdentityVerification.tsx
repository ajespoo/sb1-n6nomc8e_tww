import React from 'react';
import { CreditCard } from 'lucide-react';
import type { IdentityDocument } from '../../types/registration';

interface IdentityVerificationProps {
  value: IdentityDocument;
  onChange: (value: IdentityDocument) => void;
  error?: string;
}

export function IdentityVerification({ value, onChange, error }: IdentityVerificationProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <CreditCard className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-medium">Identity Verification</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Document Type</label>
          <select
            value={value.type}
            onChange={(e) => onChange({ ...value, type: e.target.value as IdentityDocument['type'] })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="passport">Passport</option>
            <option value="national_id">National ID</option>
            <option value="drivers_license">Driver's License</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Document Number</label>
          <input
            type="text"
            value={value.number}
            onChange={(e) => onChange({ ...value, number: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Issuing Country</label>
          <input
            type="text"
            value={value.country}
            onChange={(e) => onChange({ ...value, country: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input
            type="date"
            value={value.expiryDate}
            onChange={(e) => onChange({ ...value, expiryDate: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}