import { useProductContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, removeFromCart } = useProductContext();
  const navigate = useNavigate();

  const grandTotal = cart.reduce((sum, item) => sum + item.price, 0);

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-empty text-center py-10">
        <h2 className="text-xl font-bold">Your Cart is Empty</h2>
        <p className="text-gray-600 mt-2">
          Items added to your cart will appear here.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6">Your Shopping Cart</h1>
      <div className="space-y-6">
        {cart.map((product) => (
          <div
            key={product.id}
            className="flex items-center border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-24 h-24 object-cover rounded mr-4"
            />

            <div className="flex-1">
              <h2 className="text-lg font-medium">{product.name}</h2>
              <p className="text-gray-500">${product.price.toFixed(2)}</p>
            </div>

            <div className="flex flex-col items-end space-y-2">
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-600 hover:text-red-800 text-sm cursor-pointer"
              >
                Remove
              </button>
              <span className="text-sm font-semibold">
                ${product.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 border rounded-lg shadow">
        <div className="flex justify-between text-lg font-semibold mb-4">
          <span>Total:</span>
          <span>${grandTotal.toFixed(2)}</span>
        </div>
        <button
          onClick={() => navigate("/payment")}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded transition cursor-pointer"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;
