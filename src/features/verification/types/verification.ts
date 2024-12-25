export interface VerificationDocument {
  id: string;
  userId: string;
  type: 'government_id' | 'address_proof' | 'profile_photo';
  status: 'pending' | 'verified' | 'rejected';
  uploadedAt: string;
  verifiedAt?: string;
  rejectionReason?: string;
  fileUrl: string;
}

export interface VerificationRequest {
  id: string;
  userId: string;
  status: 'pending' | 'verified' | 'rejected';
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
  documents: VerificationDocument[];
  notes?: string;
}