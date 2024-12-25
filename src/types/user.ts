export type UserRole = 'admin' | 'subadmin' | 'traveler' | 'companion' | 'agent';

export interface Permission {
  id: string;
  name: string;
  description: string;
  module: 'users' | 'bookings' | 'payments' | 'loyalty';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  permissions: string[];
  status: 'active' | 'inactive' | 'suspended';
  createdAt: string;
  lastLogin?: string;
  profileImage?: string;
}

export interface SubadminRole {
  id: string;
  name: string;
  permissions: string[];
  description: string;
  createdBy: string;
  createdAt: string;
}