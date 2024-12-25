import React from 'react';
import CompanionCard from '../CompanionCard';
import type { Companion } from '../../types/companion';

interface CompanionResultsProps {
  companions: Companion[];
  loading?: boolean;
}

export default function CompanionResults({ companions, loading }: CompanionResultsProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-gray-200 h-48 rounded-t-lg"></div>
            <div className="bg-white p-4 rounded-b-lg space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="flex gap-2">
                <div className="h-6 bg-gray-200 rounded w-20"></div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (companions.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900">No companions found</h3>
        <p className="mt-2 text-sm text-gray-500">
          Try adjusting your filters or search criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companions.map((companion) => (
        <CompanionCard
          key={companion.id}
          name={companion.name}
          rating={companion.rating}
          reviews={companion.reviews}
          specialties={companion.specialties}
          image={companion.profileImage}
          price={companion.price}
          loyaltyPoints={companion.loyaltyPoints}
        />
      ))}
    </div>
  );
}