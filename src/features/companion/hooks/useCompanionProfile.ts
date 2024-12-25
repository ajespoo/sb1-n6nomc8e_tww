import { useState } from 'react';
import type { CompanionProfile } from '../types';

export function useCompanionProfile() {
  const [profile, setProfile] = useState<CompanionProfile | null>(null);

  const updateProfile = (updates: Partial<CompanionProfile>) => {
    setProfile(prev => prev ? { ...prev, ...updates } : null);
  };

  const deleteProfile = () => {
    // Add confirmation logic here
    setProfile(null);
  };

  return {
    profile,
    updateProfile,
    deleteProfile
  };
}