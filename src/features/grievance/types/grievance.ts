export interface GrievanceSubmission {
  type: string;
  subject: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  attachments: File[];
}

export interface Grievance extends GrievanceSubmission {
  id: string;
  userId: string;
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  resolution?: string;
}