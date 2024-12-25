export interface IdentityDocument {
  type: 'passport' | 'national_id' | 'drivers_license';
  number: string;
  country: string;
  expiryDate: string;
}

export interface RegistrationFormData {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  countryCode: string;
  nationalId: string;
  dateOfBirth: string;
  identityDocument: IdentityDocument;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}