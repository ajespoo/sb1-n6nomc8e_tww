export interface PaymentMethod {
  provider: 'stripe' | 'paypal' | 'ccavenue' | 'paytm' | 'billdesk';
  type: 'credit_card' | 'debit_card' | 'net_banking' | 'wallet';
  details: Record<string, any>;
}

export interface PaymentResult {
  success: boolean;
  transactionId: string;
  error?: string;
}

export interface LoyaltyTransaction {
  id: string;
  userId: string;
  points: number;
  type: 'earned' | 'redeemed';
  reason: string;
  timestamp: string;
}

export interface PNRDetails {
  pnrNumber: string;
  status: 'confirmed' | 'waitlisted' | 'cancelled';
  passengerDetails: any[];
  flightDetails: any[];
}

export interface TravelDetails {
  pnrNumber: string;
  itinerary: any[];
  passengers: any[];
  status: string;
}