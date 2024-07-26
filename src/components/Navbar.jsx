import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItem = useSelector((state) => state.cartItem);
  const wishlistItem = useSelector((state) => state.wishlistItem);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          {/* <img src="logo.png" alt="Logo" className="h-8 w-8 mr-2" /> */}
          <span className="font-bold text-xl">dMart</span>
        </div>
        <button
          className="text-xl md:hidden focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? "x" : "☰"}
        </button>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <Link to="/wishlist" className="text-gray-700 hover:text-gray-900">
            <div className="relative">
              <IoIosHeartEmpty size={22} />
              {wishlistItem?.length > 0 && (
                <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 text-white rounded-full w-[14px] h-[14px]">
                  <div className="flex items-center justify-center -mt-[1px]">
                    {wishlistItem?.length}
                  </div>
                </div>
              )}
            </div>
          </Link>
          <Link to="/cart" className="text-gray-700 hover:text-gray-900">
            <div className="relative">
              <AiOutlineShoppingCart size={22} />
              {cartItem?.length > 0 && (
                <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 text-white rounded-full w-[14px] h-[14px]">
                  <div className="flex items-center justify-center -mt-[1px]">
                    {cartItem?.length}
                  </div>
                </div>
              )}
            </div>
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-gray-900">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700"
          >
            Sign up
          </Link>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden p-4`}>
        <Link
          to="/"
          onClick={toggleMobileMenu}
          className="block text-gray-700 hover:text-gray-900 py-2"
        >
          Products
        </Link>
        <Link
          to="/wishlist"
          onClick={toggleMobileMenu}
          className="block text-gray-700 hover:text-gray-900 py-2"
        >
          Wishlist
        </Link>
        <Link
          to="/cart"
          onClick={toggleMobileMenu}
          className="block text-gray-700 hover:text-gray-900 py-2"
        >
          Cart
        </Link>
        <Link
          to="/login"
          onClick={toggleMobileMenu}
          className="block text-gray-700 hover:text-gray-900 py-2"
        >
          Login
        </Link>
        <Link
          to="/signup"
          onClick={toggleMobileMenu}
          className="block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 mt-2"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
