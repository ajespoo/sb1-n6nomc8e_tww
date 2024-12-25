import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';
import type { PaymentDetails } from '../../types/payment';

interface PaymentProcessorProps {
  amount: number;
  travelId: string;
  onSuccess: (payment: PaymentDetails) => void;
  onError: (error: string) => void;
}

export default function PaymentProcessor({ amount, travelId, onSuccess, onError }: PaymentProcessorProps) {
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    setProcessing(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const payment: PaymentDetails = {
        id: Math.random().toString(36).substr(2, 9),
        amount,
        currency: 'USD',
        status: 'completed',
        createdAt: new Date().toISOString(),
        completedAt: new Date().toISOString(),
        travelId,
        payerId: 'user-123', // Would come from auth context
        receiverId: 'companion-456' // Would come from booking details
      };
      
      onSuccess(payment);
    } catch (error) {
      onError('Payment processing failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Lock className="h-5 w-5 text-green-600" />
        <h3 className="text-lg font-semibold">Secure Payment</h3>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Travel Companion Fee</span>
            <span className="font-medium">${amount}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Processing Fee</span>
            <span>$5.00</span>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between font-semibold">
            <span>Total</span>
            <span>${amount + 5}</span>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handlePayment}
            disabled={processing}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <CreditCard className="h-5 w-5" />
            {processing ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      </div>
    </div>
  );
}