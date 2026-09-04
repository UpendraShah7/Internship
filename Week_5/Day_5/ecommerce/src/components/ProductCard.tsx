import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import { useCart } from '../store/CartProvider';
import type { Product } from '../types/product';

function ProductCard({ id, title, price, image }: Product) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id, title, price, image, quantity: 1 });
  };

  return (
    <Card
      hoverable
      className="rounded-xl overflow-hidden"
      style={{ borderColor: '#e5e7eb' }}
      cover={
        <img
          src={image}
          alt={title}
          className="h-40 w-full object-contain p-4"
        />
      }
      onClick={() => navigate(`/products/${id}`)}
      actions={[
        <button
          key="add"
          onClick={handleAddToCart}
          className="w-[90%] bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 transition-colors"
        >
          Add to Cart
        </button>,
      ]}
    >
      <Card.Meta
        title={<span className="line-clamp-1">{title}</span>}
        description={<span className="text-gray-600">${price}</span>}
      />
    </Card>
  );
}

export default ProductCard;
