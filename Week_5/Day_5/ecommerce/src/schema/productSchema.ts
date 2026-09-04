import { z } from "zod";

export const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  price: z.number().positive("Price must be greater than 0"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  image: z.string().url("Must be a valid image URL"),
  category: z.string().min(1, "Category is required"),
});

export type ProductFormData = z.infer<typeof productSchema>;