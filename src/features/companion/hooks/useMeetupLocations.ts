import { useState } from 'react';
import type { MeetupLocation } from '../types';

export function useMeetupLocations() {
  const [locations, setLocations] = useState<MeetupLocation[]>([]);

  const addLocation = (location: Omit<MeetupLocation, 'id'>) => {
    const newLocation = {
      ...location,
      id: Date.now().toString()
    };
    setLocations(prev => [...prev, newLocation]);
  };

  const updateLocation = (id: string, updates: Partial<MeetupLocation>) => {
    setLocations(prev => 
      prev.map(loc => loc.id === id ? { ...loc, ...updates } : loc)
    );
  };

  const deleteLocation = (id: string) => {
    setLocations(prev => prev.filter(loc => loc.id !== id));
  };

  return {
    locations,
    addLocation,
    updateLocation,
    deleteLocation
  };
}