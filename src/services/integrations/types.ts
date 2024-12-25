export interface FlightStatus {
  flightNumber: string;
  status: 'scheduled' | 'delayed' | 'departed' | 'arrived' | 'cancelled';
  departureTime: string;
  arrivalTime: string;
  gate?: string;
  terminal?: string;
}

export interface PaymentMethod {
  type: 'stripe' | 'paypal' | 'razorpay' | 'other';
  token?: string;
  details?: Record<string, any>;
}

export interface PaymentResult {
  success: boolean;
  transactionId: string;
  error?: string;
}

export interface PNRDetails {
  pnrNumber: string;
  status: 'confirmed' | 'waitlisted' | 'cancelled';
  passengerDetails: Array<{
    name: string;
    seatNumber?: string;
  }>;
  flightDetails: Array<{
    flightNumber: string;
    departure: string;
    arrival: string;
  }>;
}