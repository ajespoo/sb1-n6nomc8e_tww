import React, { useState } from 'react';
import { Map, Search } from 'lucide-react';
import type { CollocationResult } from '../types/seeker';

export default function CollocationFinder() {
  const [searchRadius, setSearchRadius] = useState<number>(5);
  const [results, setResults] = useState<CollocationResult[]>([]);

  return (
    <div className="p-4 border rounded-lg">
      <div className="flex items-center gap-2 mb-4">
        <Map className="h-5 w-5 text-blue-600" />
        <h3 className="font-medium">Find Nearby Companions</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Search Radius (km)</label>
          <input
            type="range"
            min="1"
            max="50"
            value={searchRadius}
            onChange={(e) => setSearchRadius(parseInt(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-600">{searchRadius} km</span>
        </div>

        <button
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Search className="h-4 w-4" />
          Find Companions
        </button>
      </div>
    </div>
  );
}