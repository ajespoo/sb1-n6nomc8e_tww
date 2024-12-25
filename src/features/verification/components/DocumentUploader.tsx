import React, { useRef } from 'react';
import { Upload, Check } from 'lucide-react';

interface DocumentUploaderProps {
  title: string;
  description: string;
  acceptedTypes: string[];
  onUpload: (file: File) => Promise<void>;
  uploaded: boolean;
}

export function DocumentUploader({
  title,
  description,
  acceptedTypes,
  onUpload,
  uploaded
}: DocumentUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await onUpload(file);
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-900">{title}</h3>
        {uploaded && (
          <span className="flex items-center gap-1 text-green-600">
            <Check className="h-4 w-4" />
            <span className="text-sm">Uploaded</span>
          </span>
        )}
      </div>
      
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept={acceptedTypes.join(',')}
        className="hidden"
      />
      
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <Upload className="h-4 w-4" />
        {uploaded ? 'Upload New Document' : 'Upload Document'}
      </button>
    </div>
  );
}