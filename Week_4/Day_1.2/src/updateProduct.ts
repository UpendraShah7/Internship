import { type Product, type ProductChanges } from './api.js';
import { getProductById } from './getProducts.js';

export function updateProduct(
  id: string,
  changes: ProductChanges
): Product | undefined {
  const product = getProductById(id);
  if (!product) return undefined;
  Object.assign(product, changes);
  return product;
}
