import {
  products,
  type Product,
  type ProductCategory,
  type ProductStatus,
} from './api.js';

export function createProduct(
  name: string,
  description: string,
  price: number,
  stock: number,
  category: ProductCategory,
  status: ProductStatus
): Product {
  const newProduct: Product = {
    id: Date.now().toString(),
    name,
    description,
    price,
    stock,
    category,
    status,
  };
  products.push(newProduct);
  return newProduct;
}
