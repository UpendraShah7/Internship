import axios from 'axios';
import { z } from 'zod';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  rating?: {
    rate: number;
    count: number;
  };
}




export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}






export const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;






export const productSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  price: z.number().positive('Price must be greater than 0'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  image: z.string().url('Must be a valid image URL'),
  category: z.string().min(1, 'Category is required'),
});

export type ProductFormData = z.infer<typeof productSchema>;






const BASE_URL = 'https://fakestoreapi.com';

export async function getProducts(): Promise<Product[]> {
  const response = await axios.get<Product[]>(`${BASE_URL}/products`);
  return response.data;
}



export async function getProductById(id: number): Promise<Product> {
  const response = await axios.get<Product>(`${BASE_URL}/products/${id}`);
  return response.data;
}
