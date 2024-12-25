export type UserRole = 'seeker' | 'companion' | 'agent';

export interface SignupFormData {
  email: string;
  password: string;
  name: string;
  role: UserRole;
  region: string;
  phone?: string;
  bio?: string;
  specialties?: string[];
  agencyName?: string;
}

export interface ValidationError {
  field: keyof SignupFormData;
  message: string;
}