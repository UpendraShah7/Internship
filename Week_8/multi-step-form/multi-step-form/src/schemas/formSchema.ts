import { z } from "zod";

export const fullFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  cardNumber: z.string().min(16, "Card number is required"),
  expiry: z.string().min(1, "Expiry is required"),
});

export type FullFormData = z.infer<typeof fullFormSchema>;