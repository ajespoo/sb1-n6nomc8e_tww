import React, { useState, useRef, useEffect } from 'react';
import { Check, MapPin } from 'lucide-react';
import { popularCities } from '../../data/cities';

interface CityDropdownProps {
  value: string;
  onChange: (city: string) => void;
  onBlur?: () => void;
}

export function CityDropdown({ value, onChange, onBlur }: CityDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredCities = popularCities.filter(city => 
    city.name.toLowerCase().includes(search.toLowerCase()) ||
    city.country.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        if (onBlur) onBlur();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onBlur]);

  return (
    <div className="relative" ref={dropdownRef}>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search cities..."
      />
      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
          {filteredCities.map((city) => (
            <button
              key={city.id}
              onClick={() => {
                onChange(`${city.name}, ${city.country}`);
                setSearch(`${city.name}, ${city.country}`);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center justify-between"
            >
              <div>
                <span className="font-medium">{city.name}</span>
                <span className="text-sm text-gray-500 ml-2">{city.country}</span>
              </div>
              {value === `${city.name}, ${city.country}` && (
                <Check className="h-4 w-4 text-blue-500" />
              )}
            </button>
          ))}
          {filteredCities.length === 0 && (
            <div className="px-4 py-2 text-gray-500">No cities found</div>
          )}
        </div>
      )}
    </div>
  );
}