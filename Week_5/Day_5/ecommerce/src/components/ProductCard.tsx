import { useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import type { Product } from '../data';

function ProductCard({ id, title, price, image }: Product) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id, title, price, image, quantity: 1 });
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
      onClick={() => navigate(`/products/${id}`)} >
      <img src={image} alt={title} className="h-40 w-full object-contain p-4" />

      <div className="p-4">
        <div className="mb-4">
          <h3 className="line-clamp-1 font-semibold">{title}</h3>
          <p className="text-gray-600">${price}</p>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full rounded bg-blue-600 py-1.5 text-white transition-colors hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
