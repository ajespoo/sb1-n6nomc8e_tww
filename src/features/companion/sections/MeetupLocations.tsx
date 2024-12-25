import React, { useState } from 'react';
import { MapPin, Plus, Pencil, Trash2 } from 'lucide-react';
import { useMeetupLocations } from '../hooks/useMeetupLocations';
import type { MeetupLocation } from '../types';

export default function MeetupLocations() {
  const { locations, addLocation, updateLocation, deleteLocation } = useMeetupLocations();
  const [newLocation, setNewLocation] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleAdd = () => {
    if (newLocation) {
      addLocation({
        name: newLocation,
        address: newLocation
      });
      setNewLocation('');
    }
  };

  const handleUpdate = (id: string, name: string) => {
    updateLocation(id, { name, address: name });
    setEditingId(null);
  };

  return (
    <div className="border rounded-lg p-4">
      <h3 className="font-medium flex items-center gap-2">
        <MapPin className="h-5 w-5 text-blue-600" />
        Meetup Locations
      </h3>

      <div className="mt-4 space-y-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={newLocation}
            onChange={(e) => setNewLocation(e.target.value)}
            placeholder="Add a meetup location"
            className="flex-1 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={handleAdd}
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-2">
          {locations.map((location) => (
            <div key={location.id} className="flex items-center justify-between p-2 bg-gray-50 rounded-md">
              {editingId === location.id ? (
                <input
                  type="text"
                  value={location.name}
                  onChange={(e) => handleUpdate(location.id, e.target.value)}
                  className="flex-1 rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  onBlur={() => setEditingId(null)}
                  autoFocus
                />
              ) : (
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm">{location.name}</span>
                </div>
              )}
              
              <div className="flex gap-2">
                <button
                  onClick={() => setEditingId(location.id)}
                  className="p-1 text-blue-600 hover:bg-blue-50 rounded-full"
                >
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  onClick={() => deleteLocation(location.id)}
                  className="p-1 text-red-600 hover:bg-red-50 rounded-full"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}