export type Gender = 'Male' | 'Female' | 'Other';

export interface User {
  id: string;
  fullName: string;
  email: string;
  gender: Gender;
  skills: string[];
  country: string;
  agreedToTerms: boolean;
}

export interface UserFormValues {
  fullName: string;
  email: string;
  password?: string;
  gender: Gender | '';
  skills: string[];
  country: string;
  agreedToTerms: boolean;
}