import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartItem = useSelector((state) => state.cartItem.cartItems);
  const wishlistItem = useSelector((state) => state.wishlistItem.wishlistItems);

  const renderWishlistAndCartIcons = (
    <div className={`flex space-x-4 items-center`}>
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
    </div>
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center p-4">
        <Link to="/" className="flex items-center">
          <img src={`/daily_bazar.png`} alt="Logo" className="h-16 w-16 mr-1" />
          <span className="font-bold text-2xl hidden md:flex bg-gradient-to-r from-pink-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
            Daily Bazar
          </span>
        </Link>
        <div className="flex gap-2">
          <div className="flex md:hidden">{renderWishlistAndCartIcons}</div>

          <button
            className="text-xl md:hidden focus:outline-none ml-2"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose size={22} />
            ) : (
              <MdOutlineMenu size={22} />
            )}
          </button>
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Products
          </Link>
          <div className="hidden md:flex">{renderWishlistAndCartIcons}</div>
          {/* After adding Login and SignUp Component will add Link later  */}
          <div className="text-gray-700 hover:text-gray-900 hover:cursor-pointer">
            Login
          </div>
          <div className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 hover:cursor-pointer">
            Sign up
          </div>
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
        <div
          onClick={toggleMobileMenu}
          className="block text-gray-700 hover:text-gray-900 py-2"
        >
          Login
        </div>
        <div
          onClick={toggleMobileMenu}
          className="block bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 mt-2"
        >
          Sign up
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
