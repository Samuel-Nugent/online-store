import { useState } from "react";
import Navbar from "./Navbar";
import CartDrawer from "./CartDrawer";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div
      className="py-8 bg-cover bg-center flex 
    items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar onCartToggle={() => setIsCartOpen((prev) => !prev)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Header;
