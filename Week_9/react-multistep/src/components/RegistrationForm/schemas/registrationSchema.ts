import { z } from 'zod'

export const stepOneSchema = z.object({
  fullName: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
})

export const stepTwoSchema = z.object({
  address: z.string().min(5, 'Address is too short'),
  city: z.string().min(2, 'City is required'),
})

export const stepThreeSchema = z.object({
  paymentMethod: z.enum(['card', 'cod']),
})

export const fullSchema = stepOneSchema.merge(stepTwoSchema).merge(stepThreeSchema)
export type RegistrationFormData = z.infer<typeof fullSchema>