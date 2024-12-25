import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import type { CompanionProfile } from '../types/agent';

export default function CompanionLookup() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    availability: '',
    priceRange: ''
  });

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search companions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Search className="h-5 w-5" />
          Search
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <select
          value={filters.region}
          onChange={(e) => setFilters({ ...filters, region: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">All Regions</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="americas">Americas</option>
        </select>

        <select
          value={filters.availability}
          onChange={(e) => setFilters({ ...filters, availability: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Any Availability</option>
          <option value="available">Available Now</option>
          <option value="next-week">Next Week</option>
          <option value="next-month">Next Month</option>
        </select>

        <select
          value={filters.priceRange}
          onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Any Price Range</option>
          <option value="budget">Budget ($0-$50)</option>
          <option value="mid">Mid-Range ($51-$100)</option>
          <option value="premium">Premium ($101+)</option>
        </select>
      </div>

      {/* Results will be displayed here */}
      <div className="mt-6">
        {/* Companion results will be mapped here */}
      </div>
    </div>
  );
}