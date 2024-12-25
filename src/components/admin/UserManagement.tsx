import React, { useState } from 'react';
import { Users } from 'lucide-react';
import UserTable from './UserTable';
import RoleManagement from './RoleManagement';
import type { User, SubadminRole, Permission } from '../../types/user';

const MOCK_PERMISSIONS: Permission[] = [
  { id: '1', name: 'Manage Users', description: 'Create, edit, and delete users', module: 'users' },
  { id: '2', name: 'Manage Bookings', description: 'Handle travel bookings', module: 'bookings' },
  { id: '3', name: 'Manage Payments', description: 'Process payments', module: 'payments' },
  { id: '4', name: 'Manage Loyalty', description: 'Handle loyalty programs', module: 'loyalty' },
];

const MOCK_ROLES: SubadminRole[] = [
  {
    id: '1',
    name: 'User Manager',
    permissions: ['1'],
    description: 'Can manage user accounts',
    createdBy: 'admin',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Booking Manager',
    permissions: ['2'],
    description: 'Can manage travel bookings',
    createdBy: 'admin',
    createdAt: new Date().toISOString(),
  },
];

const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'john@example.com',
    name: 'John Doe',
    role: 'admin',
    permissions: ['1', '2', '3', '4'],
    status: 'active',
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  },
  {
    id: '2',
    email: 'jane@example.com',
    name: 'Jane Smith',
    role: 'subadmin',
    permissions: ['1', '2'],
    status: 'active',
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
  },
];

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>(MOCK_USERS);
  const [roles, setRoles] = useState<SubadminRole[]>(MOCK_ROLES);

  const handleEditUser = (user: User) => {
    // Implement edit user logic
    console.log('Edit user:', user);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleStatusChange = (userId: string, status: User['status']) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status } : user
    ));
  };

  const handleCreateRole = () => {
    // Implement create role logic
    console.log('Create new role');
  };

  const handleEditRole = (role: SubadminRole) => {
    // Implement edit role logic
    console.log('Edit role:', role);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex items-center">
          <Users className="h-6 w-6 text-blue-600 mr-2" />
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Manage users, roles, and permissions for the TAWW platform
        </p>
      </div>

      <div className="space-y-8">
        <UserTable
          users={users}
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
          onStatusChange={handleStatusChange}
        />

        <RoleManagement
          roles={roles}
          permissions={MOCK_PERMISSIONS}
          onCreateRole={handleCreateRole}
          onEditRole={handleEditRole}
        />
      </div>
    </div>
  );
}