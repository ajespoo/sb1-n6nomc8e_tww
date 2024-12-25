import React from 'react';
import { Award, Gift } from 'lucide-react';

interface LoyaltyCardProps {
  points: number;
  tier: 'bronze' | 'silver' | 'gold' | 'platinum';
  nextTierPoints: number;
}

export default function LoyaltyCard({ points, tier, nextTierPoints }: LoyaltyCardProps) {
  const progress = (points / nextTierPoints) * 100;

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Award className="h-6 w-6" />
          <h3 className="text-lg font-semibold">Loyalty Rewards</h3>
        </div>
        <Gift className="h-5 w-5" />
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-90">Current Tier</span>
            <span className="font-medium capitalize">{tier}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm opacity-90">Points Balance</span>
            <span className="font-medium">{points}</span>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2 text-sm">
            <span>Next Tier Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full">
            <div
              className="h-full bg-white rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm mt-2 opacity-90">
            {nextTierPoints - points} points until next tier
          </p>
        </div>
      </div>
    </div>
  );
}