import { products, type Product } from './api.js';

export function findById<T extends { id: string }>( items: T[], id: string ): T | undefined {
  return items.find((item) => item.id === id);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return findById(products, id);
}
