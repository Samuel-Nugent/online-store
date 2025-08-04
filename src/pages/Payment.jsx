import { useProductContext } from "../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SiApplepay, SiGooglepay, SiVisa } from "react-icons/si";

const Payment = () => {
  const { cart } = useProductContext();
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  useEffect(() => {
    if (Array.isArray(cart) && cart.length === 0) {
      navigate("/checkout");
    }
  }, [cart, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success(
      `You selected ${selected || "no"} payment method. (Simulated)`
    );

    setTimeout(() => {
      navigate("/order-confirmation", {
        state: {
          order: {
            items: cart,
            paymentMethod: selected || "None",
          },
        },
      });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-xl">
      <Toaster />
      <h1 className="text-2xl font-bold mb-6">Select Payment Method</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all has-[:checked]:bg-indigo-100 has-[:checked]:ring-2 has-[:checked]:ring-indigo-500">
          <input
            type="radio"
            name="payment"
            value="Google Pay"
            className="hidden"
            onChange={() => setSelected("Google Pay")}
          />
          <span className="flex items-center gap-2">
            <SiVisa className="text-2xl" />
            Credit/Debit Card
          </span>
        </label>

        <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all has-[:checked]:bg-indigo-100 has-[:checked]:ring-2 has-[:checked]:ring-indigo-500">
          <input
            type="radio"
            name="payment"
            value="Apple Pay"
            className="hidden"
            onChange={() => setSelected("Apple Pay")}
          />
          <span className="flex items-center gap-2">
            <SiGooglepay className="text-2xl" />
            Google Pay
          </span>
        </label>

        <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all has-[:checked]:bg-indigo-100 has-[:checked]:ring-2 has-[:checked]:ring-indigo-500">
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            className="hidden"
            onChange={() => setSelected("Credit Card")}
          />
          <span className="flex items-center gap-2">
            <SiApplepay className="text-2xl" />
            Apple Pay
          </span>
        </label>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded mt-6 hover:bg-green-700 transition cursor-pointer"
        >
          Confirm Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
