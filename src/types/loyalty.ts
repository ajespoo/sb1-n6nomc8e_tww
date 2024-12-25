export interface LoyaltyTier {
  name: 'bronze' | 'silver' | 'gold' | 'platinum';
  minimumPoints: number;
  benefits: string[];
  multiplier: number;
}

export interface LoyaltyAccount {
  userId: string;
  points: number;
  tier: LoyaltyTier['name'];
  history: LoyaltyTransaction[];
}

export interface LoyaltyTransaction {
  id: string;
  userId: string;
  points: number;
  type: 'earned' | 'redeemed';
  source: 'travel' | 'feedback' | 'referral' | 'promotion';
  description: string;
  createdAt: string;
}