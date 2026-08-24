import { products } from './api.js';

export function deleteProduct(id: string): boolean {
  const productIndex = products.findIndex((product) => product.id === id);
  if (productIndex === -1) return false;
  products.splice(productIndex, 1);
  return true;
}

