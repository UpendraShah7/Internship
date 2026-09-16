import { z } from 'zod';

export const getUserSchema = (isEditMode: boolean) =>
  z
    .object({
      fullName: z
        .string()
        .trim()
        .min(3, 'Full name must be at least 3 characters'),

      email: z
        .string()
        .min(1, 'Email is required')
        .email('Enter a valid email address'),

      password: z.string().optional(),

      gender: z
        .union([z.enum(['Male', 'Female', 'Other']), z.literal('')])
        .refine((value) => value !== '', 'Select a gender'),

      skills: z.array(z.string()).min(1, 'Select at least one skill'),

      country: z.string().min(1, 'Country is required'),

      agreedToTerms: z.boolean().refine((val) => val === true, {
        message: 'You must accept the terms and conditions',
      }),
    })
    .superRefine((values, ctx) => {
      if (isEditMode) return;
      if (!values.password) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['password'],
          message: 'Password is required',
        });
      } else if (values.password.length < 8) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['password'],
          message: 'Password must be at least 8 characters',
        });
      } else if (!/\d/.test(values.password)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ['password'],
          message: 'Password must contain at least one number',
        });
      }
    });
