import { products } from "../assets/assets";
import ProductCard from "../components/ProductCard";

function ProductView() {
  return (
    <div className="container mx-auto p-4 pt-6">
      <h1 className="text-3xl font-bold text-center mb-8">E-commerce Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductView;
