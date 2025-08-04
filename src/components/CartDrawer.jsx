import { useProductContext } from "../contexts/ProductContext";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useProductContext();
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    onClose();
    navigate("/checkout");
  };

  return (
    <div
      className={`fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col overflow-y-auto ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ overflowX: "hidden" }}
    >
      <div className="p-6 flex justify-between items-center border-b shrink-0">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <XMarkIcon
          className="h-7 w-7 text-gray-700 cursor-pointer"
          onClick={onClose}
        />
      </div>

      <div className="flex-1 p-6">
        {cart.length === 0 ? (
          <div className="text-gray-500 text-base">Your cart is empty.</div>
        ) : (
          <div className="flex flex-col gap-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600 text-base">
                    ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  className="text-base text-red-600 hover:text-red-800 font-medium cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="p-6 border-t bg-white shrink-0">
        <div className="flex justify-between font-semibold text-lg mb-4">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button
          className="w-full bg-blue-600 text-white py-3 rounded text-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50 cursor-pointer"
          onClick={handleCheckout}
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
