import { useState, useCallback } from 'react';
import type { LoyaltyTransaction } from '../../../types/loyalty';

export function useLoyaltyPoints(userId: string) {
  const [transactions, setTransactions] = useState<LoyaltyTransaction[]>([]);

  const addPoints = useCallback((points: number, source: LoyaltyTransaction['source']) => {
    const transaction: LoyaltyTransaction = {
      id: Math.random().toString(36).substr(2, 9),
      userId,
      points,
      type: 'earned',
      source,
      description: `Earned ${points} points from ${source}`,
      createdAt: new Date().toISOString()
    };
    setTransactions(prev => [...prev, transaction]);
  }, [userId]);

  const redeemPoints = useCallback((points: number, description: string) => {
    const transaction: LoyaltyTransaction = {
      id: Math.random().toString(36).substr(2, 9),
      userId,
      points: -points,
      type: 'redeemed',
      source: 'travel',
      description,
      createdAt: new Date().toISOString()
    };
    setTransactions(prev => [...prev, transaction]);
  }, [userId]);

  return { transactions, addPoints, redeemPoints };
}