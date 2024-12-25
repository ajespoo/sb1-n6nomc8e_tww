import { RegistrationFormData, ValidationResult } from '../types/registration';

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

export function validatePhoneNumber(phoneNumber: string, countryCode: string): boolean {
  // Basic validation - should be enhanced based on country-specific formats
  return /^\d{8,15}$/.test(phoneNumber);
}

export function validateNationalId(nationalId: string, country: string): boolean {
  // Implement country-specific ID validation logic
  // This is a basic example - should be enhanced per country
  return nationalId.length >= 5 && /^[A-Z0-9]+$/.test(nationalId);
}

export function validateRegistrationForm(data: RegistrationFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!validateEmail(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!validatePassword(data.password)) {
    errors.password = 'Password must be at least 8 characters with uppercase, lowercase, number, and special character';
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  if (!validatePhoneNumber(data.phoneNumber, data.countryCode)) {
    errors.phoneNumber = 'Invalid phone number';
  }

  if (!validateNationalId(data.nationalId, data.identityDocument.country)) {
    errors.nationalId = 'Invalid national ID format';
  }

  const today = new Date();
  const birthDate = new Date(data.dateOfBirth);
  const age = today.getFullYear() - birthDate.getFullYear();
  if (age < 18) {
    errors.dateOfBirth = 'Must be at least 18 years old';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}