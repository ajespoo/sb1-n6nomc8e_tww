export interface TravelFeedback {
  id: string;
  travelId: string;
  userId: string;
  companionId: string;
  rating: number;
  communication: number;
  punctuality: number;
  knowledge: number;
  comment: string;
  createdAt: string;
  loyaltyPointsEarned: number;
}

export interface FeedbackSummary {
  averageRating: number;
  totalReviews: number;
  categories: {
    communication: number;
    punctuality: number;
    knowledge: number;
  };
}