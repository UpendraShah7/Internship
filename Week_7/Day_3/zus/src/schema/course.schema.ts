import { z } from 'zod';

export const CourseSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  duration: z.string(),
  completed: z.boolean(),
});

export type Course = z.infer<typeof CourseSchema>;