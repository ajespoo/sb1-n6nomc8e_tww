import React, { useState } from 'react';
import { Search, MapPin, Calendar, Globe, Users } from 'lucide-react';
import { TravelDates } from './search/TravelDates';
import { LocationSearch } from './search/LocationSearch';

interface SearchParams {
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  region: string;
  companionType: string;
}

export default function SearchCompanion() {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    origin: '',
    destination: '',
    startDate: '',
    endDate: '',
    region: '',
    companionType: ''
  });

  const handleSearch = () => {
    console.log('Searching with params:', searchParams);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Find Your Travel Companion</h2>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LocationSearch
            label="Traveling From"
            value={searchParams.origin}
            onChange={(value) => setSearchParams(prev => ({ ...prev, origin: value }))}
            icon={MapPin}
            placeholder="Enter origin city"
          />
          
          <LocationSearch
            label="Destination"
            value={searchParams.destination}
            onChange={(value) => setSearchParams(prev => ({ ...prev, destination: value }))}
            icon={Globe}
            placeholder="Where are you going?"
          />
        </div>

        <TravelDates
          startDate={searchParams.startDate}
          endDate={searchParams.endDate}
          onStartDateChange={(date) => setSearchParams(prev => ({ ...prev, startDate: date }))}
          onEndDateChange={(date) => setSearchParams(prev => ({ ...prev, endDate: date }))}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Region Preference
            </label>
            <select 
              value={searchParams.region}
              onChange={(e) => setSearchParams(prev => ({ ...prev, region: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any region</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="namerica">North America</option>
              <option value="samerica">South America</option>
              <option value="africa">Africa</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Companion Type
            </label>
            <select 
              value={searchParams.companionType}
              onChange={(e) => setSearchParams(prev => ({ ...prev, companionType: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select type</option>
              <option value="local">Local Guide</option>
              <option value="photographer">Photographer</option>
              <option value="interpreter">Interpreter</option>
              <option value="medical">Medical Assistant</option>
              <option value="cultural">Cultural Expert</option>
            </select>
          </div>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={handleSearch}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2"
          >
            <Search className="h-5 w-5" />
            Find Companions
          </button>
        </div>
      </div>
    </div>
  );
}