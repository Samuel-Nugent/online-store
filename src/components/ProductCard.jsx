import { useProductContext } from "../contexts/ProductContext";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function ProductCard({ product }) {
  const { inCart, addToCart, removeFromCart } = useProductContext();
  const isInCart = inCart(product.id);

  function onCartClick(e) {
    e.preventDefault();
    if (isInCart) removeFromCart(product.id);
    else addToCart(product);
  }

  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full aspect-square object-cover rounded-md mb-4"
      />

      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded mt-2 cursor-pointer transition text-white
    ${
      isInCart ? "bg-green-500 hover:bg-red-600" : "bg-sky-500 hover:bg-sky-700"
    }   // Default blue for add
  `}
        onClick={onCartClick}
      >
        {isInCart ? "Remove" : "Add to Cart"}
        <ShoppingCartIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

export default ProductCard;
