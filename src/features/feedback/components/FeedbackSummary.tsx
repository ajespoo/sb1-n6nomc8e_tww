import React from 'react';
import { Star, MessageSquare, Clock, Brain } from 'lucide-react';
import type { FeedbackSummary } from '../types/feedback';

interface FeedbackSummaryProps {
  summary: FeedbackSummary;
}

export default function FeedbackSummary({ summary }: FeedbackSummaryProps) {
  const categories = [
    { name: 'Communication', value: summary.categories.communication, icon: MessageSquare },
    { name: 'Punctuality', value: summary.categories.punctuality, icon: Clock },
    { name: 'Knowledge', value: summary.categories.knowledge, icon: Brain }
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Feedback Summary</h3>
        <div className="flex items-center gap-1">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="font-medium">{summary.averageRating.toFixed(1)}</span>
          <span className="text-gray-500 text-sm">({summary.totalReviews} reviews)</span>
        </div>
      </div>

      <div className="space-y-4">
        {categories.map(({ name, value, icon: Icon }) => (
          <div key={name} className="flex items-center gap-4">
            <Icon className="h-5 w-5 text-gray-400" />
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{name}</span>
                <span className="text-sm text-gray-500">{value.toFixed(1)}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <div
                  className="h-full bg-blue-600 rounded-full"
                  style={{ width: `${(value / 5) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}