import { useProductContext } from "../contexts/ProductContext";
import ProductCard from "./ProductCard";

const Cart = () => {
  const { cart } = useProductContext();

  if (cart) {
    return (
      <div className="cart">
        <h2>Your Cart</h2>
        <div className="movies-grid">
          {cart.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="cart-empty">
      <h2>Your Cart is Empty</h2>
      <p>Start adding products and they will appear here.</p>
    </div>
  );
};

export default Cart;
