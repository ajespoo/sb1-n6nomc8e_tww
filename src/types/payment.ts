export interface PaymentDetails {
  id: string;
  amount: number;
  currency: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
  travelId: string;
  payerId: string;
  receiverId: string;
}

export interface PaymentMethod {
  id: string;
  type: 'credit_card' | 'debit_card' | 'bank_transfer';
  last4: string;
  expiryDate?: string;
  isDefault: boolean;
}