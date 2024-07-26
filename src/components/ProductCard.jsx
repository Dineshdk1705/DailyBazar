import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem, removeCartItem } from "../store/slices/cartSlice";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
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
}) => {
  const [inCart, setInCart] = useState(false);
  const [wishlistToggle, setWishlistToggle] = useState(false);
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state);
  console.log(("wishlisss ", wishlist));

  const handleAddToCart = () => {
    setInCart(true);
    dispatch(addCartItem({ id, price, title, image, brand }));
  };

  const handleRemoveFromCart = () => {
    setInCart(false);
    dispatch(removeCartItem(id));
  };

  const handleAddWishlist = () => {
    setWishlistToggle(!wishlistToggle);
    dispatch(
      addToWishlist({
        id,
        price,
        title,
        brand,
        image,
        reviews,
        rating,
        imagesCount,
      })
    );
  };

  const handleRemoveWishlist = () => {
    setWishlistToggle(!wishlistToggle);
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className=" bg-white shadow-lg rounded-lg p-4 w-full sm:w-64 m-2">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />

        <div className="text-right text-gray-500 mt-2">
          +{imagesCount?.length} More
        </div>
        <h2 className="text-lg font-semibold mt-2">{title}</h2>
        <div className="text-xl font-bold text-gray-800 mt-1">
          ₹{price} onwards
        </div>
        <div className="text-green-600 text-sm mt-1">Free Delivery</div>
      </Link>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <div className="bg-green-500 text-white px-2 py-1 rounded-md">
            {rating}
          </div>
          <div className="text-gray-700 ml-2">{reviews?.length} Reviews</div>
        </div>
        <div className="hover:cursor-pointer">
          {wishlistToggle ? (
            <IoIosHeart size={22} color="red" onClick={handleRemoveWishlist} />
          ) : (
            <IoIosHeartEmpty size={22} onClick={handleAddWishlist} />
          )}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        {!inCart ? (
          <button
            className="z-50 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        ) : (
          <button
            className="z-50 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
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
