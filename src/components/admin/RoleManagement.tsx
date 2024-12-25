import React from 'react';
import { Shield, Plus } from 'lucide-react';
import type { SubadminRole, Permission } from '../../types/user';

interface RoleManagementProps {
  roles: SubadminRole[];
  permissions: Permission[];
  onCreateRole: () => void;
  onEditRole: (role: SubadminRole) => void;
}

export default function RoleManagement({ roles, permissions, onCreateRole, onEditRole }: RoleManagementProps) {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-gray-900">Role Management</h2>
          </div>
          <button
            onClick={onCreateRole}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Create Role
          </button>
        </div>
      </div>
      
      <div className="px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((role) => (
            <div
              key={role.id}
              className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => onEditRole(role)}
            >
              <h3 className="text-lg font-medium text-gray-900">{role.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{role.description}</p>
              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Permissions:</h4>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permId) => {
                    const permission = permissions.find(p => p.id === permId);
                    return permission ? (
                      <span
                        key={permId}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {permission.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}