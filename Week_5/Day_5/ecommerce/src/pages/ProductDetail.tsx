import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, type Product } from '../data';
import { useCart } from '../CartContext';
import { Spin, Button } from 'antd';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    getProducts()
      .then((data) => {
        const found = data.find((p) => p.id === Number(id));
        setProduct(found ?? null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Spin size="large" />
      </div>
    );
  }

  if (!product) {
    return <p className="text-center py-10">Product not found.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full object-contain h-80"
      />

      <div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="text-sm text-gray-500 mb-1 capitalize">{product.category}</p>
        <p className="text-xl font-semibold text-gray-800 mb-4">${product.price}</p>
        {product.rating && (
          <p className="text-sm text-gray-500 mb-4">
            ⭐ {product.rating.rate} ({product.rating.count} reviews)
          </p>
        )}
        <p className="mb-6">{product.description}</p>
        <Button
          type="primary"
          onClick={() => addToCart({ ...product, quantity: 1 })}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductDetail;