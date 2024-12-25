import React from 'react';
import { LucideIcon } from 'lucide-react';
import { CityDropdown } from './CityDropdown';

interface LocationSearchProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  icon: LucideIcon;
  placeholder: string;
}

export function LocationSearch({ label, value, onChange, icon: Icon, placeholder }: LocationSearchProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <CityDropdown
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}