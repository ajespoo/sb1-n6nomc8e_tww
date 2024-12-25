import React, { useState } from 'react';
import { LifeBuoy, MessageSquare, Search, Book } from 'lucide-react';
import TicketForm from './TicketForm';
import KnowledgeBase from './KnowledgeBase';
import LiveChat from './LiveChat';

export default function SupportPortal() {
  const [activeTab, setActiveTab] = useState<'tickets' | 'chat' | 'kb'>('tickets');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-md">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 px-6 py-4">
            <button
              onClick={() => setActiveTab('tickets')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === 'tickets' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <LifeBuoy className="h-5 w-5 mr-2" />
              Support Tickets
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === 'chat' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Live Chat
            </button>
            <button
              onClick={() => setActiveTab('kb')}
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === 'kb' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Book className="h-5 w-5 mr-2" />
              Knowledge Base
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'tickets' && <TicketForm />}
          {activeTab === 'chat' && <LiveChat />}
          {activeTab === 'kb' && <KnowledgeBase />}
        </div>
      </div>
    </div>
  );
}