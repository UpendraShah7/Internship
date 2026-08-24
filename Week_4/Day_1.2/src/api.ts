export type ProductCategory = 'Electronics' | 'Clothing' | 'Food' | 'Books';
export type ProductStatus ='Active' | 'Inactive' | 'Discontinued' | 'OutOfStock';
export type ProductChanges = Partial<Product>;

export interface Product {
  id: string;
  name: string;
  description?: string;
  price: number;
  stock: number;
  category: ProductCategory;
  status: ProductStatus;
}

export const products: Product[] = [
  {
    id: '7675756',
    name: 'Wireless Headphones',
    description: 'Bluetooth headphones with noise cancellation.',
    price: 5999,
    stock: 24,
    category: 'Electronics',
    status: 'Active',
  },
  {
    id: '42342342',
    name: 'Classic Cotton T-Shirt',
    description: 'Comfortable everyday cotton t-shirt.',
    price: 899,
    stock: 48,
    category: 'Clothing',
    status: 'Discontinued',
  },
  {
    id: '434234234',
    name: 'Arabica Coffee Beans',
    description: 'Freshly roasted medium-dark Arabica coffee beans.',
    price: 749,
    stock: 16,
    category: 'Food',
    status: 'Inactive',
  },
  {
    id: '423423442',
    name: 'TypeScript Handbook',
    description: 'A practical guide to modern TypeScript development.',
    price: 1299,
    stock: 0,
    category: 'Books',
    status: 'OutOfStock',
  },
];
