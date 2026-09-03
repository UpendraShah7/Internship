import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(1, 'Name is required'),

  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address')
    .refine((val) => val.endsWith('.com'), {
      message: 'Email must end with .com',
    }),

  age: z
    .number({ error: 'Age is required' })
    .min(18, 'You must be at least 18 years old')
    .max(50, 'You must be under 50 years old'),

  dob: z.coerce.date(),

  country: z.string().optional(),

  gender: z.string().optional(),

  skills: z.array(z.string()).min(1, 'Select at least one skill'),

  phonenumber: z.array(z.string().optional()).optional(),

  social: z.object({
    facebook: z.string().optional(),
    twitter: z.string().optional(),
  }),
});
