import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) setCart(JSON.parse(storedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((product) => product.id !== productId));
  };

  const inCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <ProductContext.Provider
      value={{ cart, addToCart, removeFromCart, inCart, clearCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};
