import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  XMarkIcon,
  Bars3Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { useProductContext } from "../contexts/ProductContext";

const NavBar = ({ onCartToggle }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { cart } = useProductContext();

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-30 backdrop-blur bg-white/80 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-5 px-6 md:px-20 lg:px-32">
          <Link
            to="/"
            className="text-2xl font-bold text-purple-700 hover:text-purple-900 transition cursor-pointer"
          >
            Online Tech Store
          </Link>

          <div className="hidden md:flex gap-16 items-center text-lg font-semibold text-gray-700">
            <Link
              to="/"
              className="hover:text-purple-500 transition cursor-pointer"
            >
              Store
            </Link>
            <Link
              to="/checkout"
              className="hover:text-orange-500 transition cursor-pointer"
            >
              Checkout
            </Link>
            <div className="relative cursor-pointer" onClick={onCartToggle}>
              <ShoppingCartIcon className="w-7 h-7 text-gray-600 hover:text-gray-800" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold rounded-full px-2">
                  {cart.length}
                </span>
              )}
            </div>
          </div>

          <Bars3Icon
            className="h-8 w-8 text-gray-700 md:hidden cursor-pointer"
            onClick={() => setShowMobileMenu(true)}
          />
        </div>
      </nav>

      {showMobileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20"
          onClick={() => setShowMobileMenu(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-64 bg-white z-40 shadow-lg transform transition-transform duration-300 flex flex-col ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6 shrink-0">
          <XMarkIcon
            className="h-6 w-6 text-gray-700 cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

        <ul className="flex flex-col flex-grow justify-center items-center gap-12 px-6 text-xl font-semibold text-gray-800">
          <Link
            to="/"
            onClick={() => setShowMobileMenu(false)}
            className="hover:text-purple-500 transition cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/checkout"
            onClick={() => setShowMobileMenu(false)}
            className="hover:text-orange-500 transition cursor-pointer"
          >
            Checkout
          </Link>
          <ShoppingCartIcon
            className="h-7 w-7 text-gray-600 cursor-pointer mt-8"
            onClick={() => {
              setShowMobileMenu(false);
              onCartToggle();
            }}
          />
        </ul>
      </div>
    </>
  );
};

export default NavBar;
