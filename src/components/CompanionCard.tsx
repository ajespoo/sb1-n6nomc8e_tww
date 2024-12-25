import React from 'react';
import { Star, MessageCircle, Award } from 'lucide-react';

interface CompanionCardProps {
  name: string;
  rating: number;
  reviews: number;
  specialties: string[];
  image: string;
  price: number;
  loyaltyPoints: number;
}

export default function CompanionCard({
  name,
  rating,
  reviews,
  specialties,
  image,
  price,
  loyaltyPoints
}: CompanionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{reviews} reviews</p>
        
        <div className="mt-3 flex flex-wrap gap-2">
          {specialties.map((specialty, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold">${price}</span>
            <span className="text-gray-500 text-sm">/day</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-purple-500" />
            <span className="text-sm font-medium">{loyaltyPoints} points</span>
          </div>
        </div>
        
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Contact Companion
        </button>
      </div>
    </div>
  );
}