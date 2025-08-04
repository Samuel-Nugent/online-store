import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useProductContext } from "../contexts/ProductContext";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { clearCart } = useProductContext();
  const hasCleared = useRef(false);
  const order = location.state?.order;

  useEffect(() => {
    if (!order || !order.items || order.items.length === 0) {
      navigate("/");
      return;
    }

    if (!hasCleared.current) {
      clearCart();
      hasCleared.current = true;
    }
  }, [order, navigate, clearCart]);

  if (!order) return null;

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4 text-green-700">
        Thank you for your order!
      </h1>
      <p className="text-gray-700 mb-8">
        Your payment method:{" "}
        <strong className="capitalize">{order.paymentMethod}</strong>
      </p>

      <h2 className="text-xl font-semibold mb-2">Order Summary:</h2>
      <ul className="space-y-4">
        {order.items.map((item) => (
          <li
            key={item.id}
            className="flex items-center gap-4 border rounded-lg p-3 shadow-sm"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </li>
        ))}
      </ul>

      <p className="text-lg font-semibold mt-8">
        Total: ${order.items.reduce((sum, i) => sum + i.price, 0).toFixed(2)}
      </p>
    </div>
  );
};

export default OrderConfirmation;
