import React from 'react';
import { Users, Compass, Briefcase } from 'lucide-react';
import type { UserRole } from '../../../types/auth';
import type { ValidationError } from '../../../types/auth';

interface RoleSelectorProps {
  selectedRole: UserRole;
  onRoleSelect: (role: UserRole) => void;
  error?: ValidationError;
}

export default function RoleSelector({ selectedRole, onRoleSelect, error }: RoleSelectorProps) {
  const roles = [
    {
      id: 'seeker',
      name: 'Travel Seeker',
      description: 'Looking for travel companions',
      icon: Users
    },
    {
      id: 'companion',
      name: 'Travel Companion',
      description: 'Offer travel companionship',
      icon: Compass
    },
    {
      id: 'agent',
      name: 'Travel Agent',
      description: 'Professional travel services',
      icon: Briefcase
    }
  ] as const;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        I want to join as
      </label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {roles.map(({ id, name, description, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => onRoleSelect(id)}
            className={`p-4 border rounded-lg text-left transition-colors ${
              selectedRole === id
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200 hover:border-blue-200'
            }`}
          >
            <Icon className={`h-6 w-6 ${
              selectedRole === id ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <h3 className="mt-2 font-medium text-gray-900">{name}</h3>
            <p className="mt-1 text-sm text-gray-500">{description}</p>
          </button>
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error.message}</p>
      )}
    </div>
  );
}