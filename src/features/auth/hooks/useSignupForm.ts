import { useState } from 'react';
import type { SignupFormData, ValidationError } from '../../../types/auth';

const initialFormData: SignupFormData = {
  email: '',
  password: '',
  name: '',
  role: 'seeker',
  region: '',
};

export function useSignupForm() {
  const [formData, setFormData] = useState<SignupFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): ValidationError[] => {
    const newErrors: ValidationError[] = [];

    if (!formData.email) {
      newErrors.push({ field: 'email', message: 'Email is required' });
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.push({ field: 'email', message: 'Invalid email format' });
    }

    if (!formData.password) {
      newErrors.push({ field: 'password', message: 'Password is required' });
    } else if (formData.password.length < 8) {
      newErrors.push({ field: 'password', message: 'Password must be at least 8 characters' });
    }

    if (!formData.name) {
      newErrors.push({ field: 'name', message: 'Name is required' });
    }

    if (!formData.region) {
      newErrors.push({ field: 'region', message: 'Please select a region' });
    }

    if (formData.role === 'companion' && !formData.phone) {
      newErrors.push({ field: 'phone', message: 'Phone number is required for companions' });
    }

    return newErrors;
  };

  const handleChange = (field: keyof SignupFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(errors.filter(error => error.field !== field));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      // Here you would integrate with your authentication service
      console.log('Form submitted:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  };
}