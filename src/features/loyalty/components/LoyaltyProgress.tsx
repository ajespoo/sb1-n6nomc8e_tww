import React from 'react';
import { Trophy, Star } from 'lucide-react';
import type { LoyaltyAccount, LoyaltyTier } from '../../../types/loyalty';

interface LoyaltyProgressProps {
  account: LoyaltyAccount;
  nextTier: LoyaltyTier;
}

export default function LoyaltyProgress({ account, nextTier }: LoyaltyProgressProps) {
  const progress = (account.points / nextTier.minimumPoints) * 100;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-6 w-6 text-yellow-500" />
          <h3 className="text-lg font-semibold">Loyalty Status</h3>
        </div>
        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full capitalize">
          {account.tier} Member
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span className="font-medium">{account.points} Points</span>
          </div>
          <span className="text-sm text-gray-500">
            {nextTier.minimumPoints - account.points} points to {nextTier.name}
          </span>
        </div>

        <div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-purple-600 rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <h4 className="font-medium mb-2">Next Tier Benefits</h4>
          <ul className="space-y-1">
            {nextTier.benefits.map((benefit, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
                <Star className="h-4 w-4 text-purple-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}