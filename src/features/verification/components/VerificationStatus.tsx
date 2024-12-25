import React from 'react';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

interface VerificationStatusProps {
  status: 'pending' | 'verified' | 'rejected';
  reason?: string;
}

export function VerificationStatus({ status, reason }: VerificationStatusProps) {
  return (
    <div className={`p-4 rounded-lg ${
      status === 'verified' ? 'bg-green-50' :
      status === 'rejected' ? 'bg-red-50' :
      'bg-yellow-50'
    }`}>
      <div className="flex items-center gap-3">
        {status === 'verified' && <CheckCircle className="h-5 w-5 text-green-600" />}
        {status === 'pending' && <Clock className="h-5 w-5 text-yellow-600" />}
        {status === 'rejected' && <XCircle className="h-5 w-5 text-red-600" />}
        
        <div>
          <h3 className={`font-medium ${
            status === 'verified' ? 'text-green-900' :
            status === 'rejected' ? 'text-red-900' :
            'text-yellow-900'
          }`}>
            {status === 'verified' && 'Profile Verified'}
            {status === 'pending' && 'Verification Pending'}
            {status === 'rejected' && 'Verification Failed'}
          </h3>
          
          {reason && status === 'rejected' && (
            <p className="mt-1 text-sm text-red-700">{reason}</p>
          )}
          
          {status === 'pending' && (
            <p className="mt-1 text-sm text-yellow-700">
              Your documents are being reviewed. This usually takes 24-48 hours.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}