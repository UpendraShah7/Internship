import { z } from "zod";
import { fullFormSchema } from "./formSchema";

export const step1Schema = fullFormSchema.pick({ name: true, email: true });
export const step2Schema = fullFormSchema.pick({ address: true, city: true });
export const step3Schema = fullFormSchema.pick({ cardNumber: true, expiry: true });

export type Step1Data = z.infer<typeof step1Schema>;
export type Step2Data = z.infer<typeof step2Schema>;
export type Step3Data = z.infer<typeof step3Schema>;