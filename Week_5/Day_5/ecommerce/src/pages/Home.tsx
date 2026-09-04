import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/ProductServices';
import type { Product } from '../types/product';
import { Spin } from 'antd';

function Home() {
  const [featured, setFeatured] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((data) => setFeatured(data.slice(0, 4)))
      .catch((err) => console.error('Failed to load products:', err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Welcome to Sasto
        </h1>
        <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
          Quality products at prices that make sense. Shop smarter, spend less.
        </p>
        <Link
          to="/products"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Shop Now
        </Link>
      </section>

      <section className="max-w-7xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link
            to="/products"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            View All →
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-10">
            <Spin size="large" />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;
