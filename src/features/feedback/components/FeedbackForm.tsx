import React, { useState } from 'react';
import { Star, MessageSquare, Clock, Brain } from 'lucide-react';
import type { TravelFeedback } from '../types/feedback';

interface FeedbackFormProps {
  travelId: string;
  companionId: string;
  onSubmit: (feedback: Omit<TravelFeedback, 'id' | 'createdAt' | 'loyaltyPointsEarned'>) => void;
}

export default function FeedbackForm({ travelId, companionId, onSubmit }: FeedbackFormProps) {
  const [ratings, setRatings] = useState({
    rating: 0,
    communication: 0,
    punctuality: 0,
    knowledge: 0
  });
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      travelId,
      userId: 'current-user', // Would come from auth context
      companionId,
      ...ratings,
      comment
    });
  };

  const RatingInput = ({ name, icon: Icon, value }: { name: string; icon: typeof Star; value: number }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
        {name}
      </label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRatings(prev => ({ ...prev, [name.toLowerCase()]: star }))}
            className="focus:outline-none"
          >
            <Icon
              className={`h-6 w-6 ${
                star <= value ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-6">Rate Your Experience</h3>
      
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <RatingInput name="rating" icon={Star} value={ratings.rating} />
          <RatingInput name="communication" icon={MessageSquare} value={ratings.communication} />
          <RatingInput name="punctuality" icon={Clock} value={ratings.punctuality} />
          <RatingInput name="knowledge" icon={Brain} value={ratings.knowledge} />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Your Comments
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Share your experience with this companion..."
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Submit Feedback
        </button>

        <p className="text-sm text-gray-500 text-center">
          You'll earn loyalty points for providing feedback!
        </p>
      </div>
    </form>
  );
}