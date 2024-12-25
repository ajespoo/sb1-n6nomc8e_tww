import React, { useState } from 'react';
import { CreditCard, DollarSign } from 'lucide-react';
import type { PaymentMethod } from '../../services/types';

interface PaymentFormProps {
  amount: number;
  onSubmit: (method: PaymentMethod) => Promise<void>;
}

export default function PaymentForm({ amount, onSubmit }: PaymentFormProps) {
  const [method, setMethod] = useState<PaymentMethod['provider']>('stripe');
  const [type, setType] = useState<PaymentMethod['type']>('credit_card');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit({
      provider: method,
      type,
      details: {}
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Payment Method</label>
        <select
          value={method}
          onChange={(e) => setMethod(e.target.value as PaymentMethod['provider'])}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="stripe">Credit/Debit Card (Stripe)</option>
          <option value="paypal">PayPal</option>
          <option value="paytm">Paytm</option>
          <option value="ccavenue">CCAvenue</option>
          <option value="billdesk">BillDesk</option>
        </select>
      </div>

      <div className="bg-gray-50 p-4 rounded-md">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Amount to Pay</span>
          <span className="text-lg font-semibold">${amount}</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <CreditCard className="h-5 w-5" />
        Proceed to Pay
      </button>
    </form>
  );
}