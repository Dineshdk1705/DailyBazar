import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem, removeCartItem } from "../store/slices/cartSlice";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import {
  addToWishlist,
  removeFromWishlist,
} from "../store/slices/wishlistSlice";

const ProductCard = ({
  id,
  price,
  title,
  brand,
  image,
  reviews,
  rating,
  imagesCount,
  inCart,
  inWishlist,
}) => {
  const [wishlistToggle, setWishlistToggle] = useState(inWishlist);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addCartItem({ id, price, title, image, brand, quantity: 1 }));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeCartItem(id));
  };

  const handleAddWishlist = () => {
    setWishlistToggle(true);
    dispatch(
      addToWishlist({
        id,
        price,
        title,
        brand,
        image,
      })
    );
  };

  const handleRemoveWishlist = () => {
    setWishlistToggle(false);
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-3 w-full sm:w-48 m-2 flex flex-col">
      <Link to={`/product/${id}`} className="flex-1">
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover rounded-t-lg"
        />
        {imagesCount > 1 && (
          <div className="text-right text-gray-500 mt-2 text-sm">
            +{imagesCount} More
          </div>
        )}
        <h2 className="text-sm font-semibold mt-2">{title}</h2>
        <div className="text-lg font-bold text-gray-800 mt-1">
          ₹{price} onwards
        </div>
        <div className="text-green-600 text-xs mt-1">Free Delivery</div>
      </Link>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <div className="bg-green-500 text-white px-1 py-0.5 rounded-md text-xs">
            {rating}
          </div>
          <div className="text-gray-700 ml-2 text-xs">
            {reviews?.length} Reviews
          </div>
        </div>
        <div className="hover:cursor-pointer">
          {wishlistToggle ? (
            <IoIosHeart size={23} color="red" onClick={handleRemoveWishlist} />
          ) : (
            <IoIosHeartEmpty size={23} onClick={handleAddWishlist} />
          )}
        </div>
      </div>
      <div className="flex justify-between mt-2">
        {!inCart ? (
          <button
            className="bg-blue-500 w-full text-white px-2 py-1 text-xs rounded-md hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className="bg-red-500 w-full text-white px-2 py-1 text-xs rounded-md hover:bg-red-600"
            onClick={handleRemoveFromCart}
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
