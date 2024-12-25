import React from 'react';
import { Filter, X } from 'lucide-react';
import type { CompanionFilter } from '../../types/companion';

interface SearchFiltersProps {
  filters: CompanionFilter;
  onFilterChange: (filters: CompanionFilter) => void;
  onReset: () => void;
}

export default function SearchFilters({ filters, onFilterChange, onReset }: SearchFiltersProps) {
  const languages = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic'];
  const specialties = ['Local Guide', 'Photographer', 'Interpreter', 'Medical Assistant', 'Cultural Expert'];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold">Advanced Filters</h3>
        </div>
        <button
          onClick={onReset}
          className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          <X className="h-4 w-4" />
          Reset
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Languages
          </label>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  const currentLangs = filters.languages || [];
                  const newLangs = currentLangs.includes(lang)
                    ? currentLangs.filter(l => l !== lang)
                    : [...currentLangs, lang];
                  onFilterChange({ ...filters, languages: newLangs });
                }}
                className={`px-3 py-1 rounded-full text-sm ${
                  filters.languages?.includes(lang)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Specialties
          </label>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty) => (
              <button
                key={specialty}
                onClick={() => {
                  const currentSpecs = filters.specialties || [];
                  const newSpecs = currentSpecs.includes(specialty)
                    ? currentSpecs.filter(s => s !== specialty)
                    : [...currentSpecs, specialty];
                  onFilterChange({ ...filters, specialties: newSpecs });
                }}
                className={`px-3 py-1 rounded-full text-sm ${
                  filters.specialties?.includes(specialty)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {specialty}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Minimum Rating
          </label>
          <input
            type="range"
            min="1"
            max="5"
            step="0.5"
            value={filters.minRating || 1}
            onChange={(e) => onFilterChange({ ...filters, minRating: parseFloat(e.target.value) })}
            className="w-full"
          />
          <div className="text-sm text-gray-600 mt-1">
            {filters.minRating || 1} stars and above
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Maximum Price per Day
          </label>
          <input
            type="number"
            value={filters.maxPrice || ''}
            onChange={(e) => onFilterChange({ ...filters, maxPrice: parseInt(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter maximum price"
          />
        </div>
      </div>
    </div>
  );
}