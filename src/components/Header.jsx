import { useState } from "react";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div
      className="py-8 flex 
    items-center w-full overflow-hidden"
      id="Header"
    >
      <Navbar onCartToggle={() => setIsCartOpen((prev) => !prev)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Header;
