import React from 'react';
import { Shield, FileCheck, AlertCircle } from 'lucide-react';
import { DocumentUploader } from './DocumentUploader';
import { VerificationStatus } from './VerificationStatus';
import type { VerificationDocument } from '../types/verification';

interface ProfileVerifierProps {
  userId: string;
  documents: VerificationDocument[];
  onDocumentUpload: (document: File, type: string) => Promise<void>;
  verificationStatus: 'pending' | 'verified' | 'rejected';
  rejectionReason?: string;
}

export default function ProfileVerifier({
  userId,
  documents,
  onDocumentUpload,
  verificationStatus,
  rejectionReason
}: ProfileVerifierProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-6">
        <Shield className="h-6 w-6 text-blue-600" />
        <h2 className="text-xl font-semibold">Profile Verification</h2>
      </div>

      <VerificationStatus status={verificationStatus} reason={rejectionReason} />

      <div className="mt-6 space-y-6">
        <DocumentUploader
          title="Government ID"
          description="Upload a valid passport, national ID, or driver's license"
          acceptedTypes={['.jpg', '.jpeg', '.png', '.pdf']}
          onUpload={(file) => onDocumentUpload(file, 'government_id')}
          uploaded={documents.some(doc => doc.type === 'government_id')}
        />

        <DocumentUploader
          title="Address Proof"
          description="Upload a recent utility bill or bank statement (not older than 3 months)"
          acceptedTypes={['.jpg', '.jpeg', '.png', '.pdf']}
          onUpload={(file) => onDocumentUpload(file, 'address_proof')}
          uploaded={documents.some(doc => doc.type === 'address_proof')}
        />

        <DocumentUploader
          title="Profile Photo"
          description="Upload a clear, recent photo of yourself"
          acceptedTypes={['.jpg', '.jpeg', '.png']}
          onUpload={(file) => onDocumentUpload(file, 'profile_photo')}
          uploaded={documents.some(doc => doc.type === 'profile_photo')}
        />
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start gap-3">
          <FileCheck className="h-5 w-5 text-blue-600 mt-0.5" />
          <div>
            <h3 className="font-medium text-blue-900">Verification Process</h3>
            <p className="mt-1 text-sm text-blue-700">
              Documents are typically reviewed within 24-48 hours. You'll be notified via email once the verification is complete.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}