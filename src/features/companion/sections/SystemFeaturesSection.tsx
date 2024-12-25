import React, { useState } from 'react';
import { MapPin, Users } from 'lucide-react';
import CollocationFinder from '../../shared/CollocationFinder';
import MeetupLocations from './MeetupLocations';

export default function SystemFeaturesSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">System Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CollocationFinder />
        <MeetupLocations />
      </div>
    </div>
  );
}