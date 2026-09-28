import { type RegistrationFormData } from '../schemas/registrationSchema'

export const stepFields: Record<number, (keyof RegistrationFormData)[]> = {
  0: ['fullName', 'email'],
  1: ['address', 'city'],
  2: ['paymentMethod'],
}