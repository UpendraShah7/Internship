import { z } from 'zod';

export const postSchema = z.object({
  id: z.number(),
  title: z.string(),
});

export type Post = z.infer<typeof postSchema>;

export const postListSchema = z.array(postSchema);
