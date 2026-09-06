import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { message } from 'antd';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id: number, title: string) => {
    removeFromCart(id);
    message.success(`${title} removed`);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-xl font-semibold text-gray-700 mb-2">
          Your cart is empty
        </p>
        <p className="text-gray-500 mb-6">
          Looks like you haven't added anything yet.
        </p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-20 w-20 object-contain flex-shrink-0"
            />

            <div className="flex-1 min-w-0">
              <p className="font-semibold truncate">{item.title}</p>
              <p className="text-gray-500 text-sm mt-1">
                ${item.price.toFixed(2)} each
              </p>
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() =>
                  updateQuantity(item.id, Math.max(1, item.quantity - 1))
                }
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg"
              >
                -
              </button>
              <span className="px-4 py-1 font-medium">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg"
              >
                +
              </button>
            </div>

            <p className="w-20 text-right font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => handleRemove(item.id, item.title)}
              className="text-red-500 hover:text-red-700 text-sm font-medium"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={clearCart}
        className="mt-4 ml-auto block rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition-colors hover:border-red-300 hover:bg-red-100 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        Clear Cart
      </button>

      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6 flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">Order Total</p>
          <p className="text-2xl font-bold">${total.toFixed(2)}</p>
        </div>
        <Link
          to="/checkout"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;
