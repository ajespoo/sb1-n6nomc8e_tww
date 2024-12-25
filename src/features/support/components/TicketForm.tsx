import React, { useState } from 'react';
import { Send } from 'lucide-react';
import type { SupportTicket } from '../types';

export default function TicketForm() {
  const [ticket, setTicket] = useState<Partial<SupportTicket>>({
    subject: '',
    description: '',
    priority: 'medium',
    category: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit ticket logic
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Subject</label>
        <input
          type="text"
          value={ticket.subject}
          onChange={(e) => setTicket({ ...ticket, subject: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <select
          value={ticket.category}
          onChange={(e) => setTicket({ ...ticket, category: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select category</option>
          <option value="booking">Booking Issues</option>
          <option value="payment">Payment Problems</option>
          <option value="technical">Technical Support</option>
          <option value="account">Account Management</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={ticket.description}
          onChange={(e) => setTicket({ ...ticket, description: e.target.value })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        <Send className="h-4 w-4" />
        Submit Ticket
      </button>
    </form>
  );
}