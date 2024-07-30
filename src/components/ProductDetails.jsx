import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addCartItem,
  decreaseQuantity,
  increaseQuantity,
  removeCartItem,
} from "../store/slices/cartSlice";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import {
  addToWishlist,
  removeFromWishlist,
} from "../store/slices/wishlistSlice";
import {
  fetchProductDetail,
  resetProductDetail,
} from "../store/slices/productDetailSlice";
import Loading from "./Loading";

const ProductDetails = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [customQuantity, setCustomQuantity] = useState(1);
  const { id } = useParams();
  const cartIds = useSelector((state) => state.cartItem.cartIds);
  const cartItem = useSelector((state) => state.cartItem.cartItems);
  const wishlistIds = useSelector((state) => state.wishlistItem.wishlistIds);
  const details = useSelector(
    (state) => state.productDetailItem.productDetailsData
  );
  const isLoading = useSelector((state) => state.productDetailItem.loading);

  const dispatch = useDispatch();

  const checkIdIsInCart = useCallback(
    (id) => {
      return cartIds.includes(id);
    },
    [cartIds]
  );

  const findItemIndex = useCallback(
    (id) => {
      return cartItem.findIndex((item) => item.id === id);
    },
    [cartItem]
  );

  useEffect(() => {
    dispatch(fetchProductDetail(id));

    return () => dispatch(resetProductDetail());
  }, [dispatch, id]);

  useEffect(() => {
    if (details) {
      const existingIndex = findItemIndex(details.id);
      if (existingIndex !== -1) {
        setCustomQuantity(cartItem[existingIndex].quantity);
      }
    }
  }, [details, findItemIndex, cartItem]);

  const images = details
    ? Array.isArray(details.images)
      ? details.images
      : [details.images]
    : [];

  const checkIdIsInWishlist = (id) => {
    return wishlistIds.includes(id);
  };

  const incQuantity = (id) => {
    const existingIndex = findItemIndex(id);
    if (existingIndex !== -1) {
      setCustomQuantity(cartItem[existingIndex].quantity + 1);
      dispatch(increaseQuantity(id));
    }
  };

  const decQuantity = (id) => {
    const existingIndex = findItemIndex(id);
    if (existingIndex !== -1 && cartItem[existingIndex].quantity > 1) {
      setCustomQuantity(cartItem[existingIndex].quantity - 1);
      dispatch(decreaseQuantity(id));
    }
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white">
      <div className="flex flex-col md:flex-row items-start">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {images.length > 0 && (
            <>
              <img
                className="w-full h-auto max-h-[30rem] object-contain"
                src={images[imageIndex]}
                alt="Product"
              />
              <div className="flex mt-4 space-x-2 overflow-auto">
                {images.map((img, index) => (
                  <img
                    key={index}
                    onClick={() => setImageIndex(index)}
                    className={`${
                      index === imageIndex
                        ? "border-gray-300"
                        : "border-gray-100"
                    } w-16 h-16 object-cover cursor-pointer border-[1px] rounded-sm`}
                    src={img}
                    alt={`Product ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="w-full md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <h1 className="text-3xl font-bold">{details?.title}</h1>
          <p className="text-sm text-gray-500 my-5">{details?.description}</p>
          <p className="text-2xl font-semibold mt-4">${details?.price}</p>
          <p className="text-sm text-gray-500">inclusive of all taxes</p>
          <div className="flex items-center justify-start mt-4 space-x-2">
            <div className="w-[30%] flex gap-3 items-center justify-between border-[1px] border-gray-200">
              <button
                onClick={() =>
                  checkIdIsInCart(details?.id)
                    ? decQuantity(details.id)
                    : setCustomQuantity((prev) => (prev > 1 ? prev - 1 : 1))
                }
                className="border-r-[1px] border-gray-200 p-2 text-xl hover:bg-gray-800 hover:text-white w-[3rem] transition-all duration-200"
              >
                -
              </button>
              <span className="text-md text-gray-500">{customQuantity}</span>
              <button
                onClick={() =>
                  checkIdIsInCart(details?.id)
                    ? incQuantity(details.id)
                    : setCustomQuantity((prev) => prev + 1)
                }
                className="border-l-[1px] border-gray-200 p-2 text-xl hover:bg-gray-800 hover:text-white w-[3rem] transition-all duration-200"
              >
                +
              </button>
            </div>
            <p className="text-md text-gray-600">Quantity</p>
          </div>
          <div className="mt-4 flex flex-col gap-2 md:gap-0 md:flex-row items-center">
            {checkIdIsInCart(details?.id) ? (
              <button
                onClick={() => dispatch(removeCartItem(details?.id))}
                className="px-4 py-2 bg-red-500 text-white rounded w-full md:w-auto"
              >
                Remove cart
              </button>
            ) : (
              <button
                onClick={() =>
                  dispatch(
                    addCartItem({
                      id: details?.id,
                      title: details?.title,
                      price: details?.price,
                      brand: details?.brand,
                      image: images[0],
                      quantity: customQuantity,
                    })
                  )
                }
                className="px-4 py-2 bg-black text-white rounded w-full md:w-auto"
              >
                Add to cart
              </button>
            )}

            <button
              onClick={() =>
                checkIdIsInWishlist(details?.id)
                  ? dispatch(removeFromWishlist(details?.id))
                  : dispatch(
                      addToWishlist({
                        id: details.id,
                        title: details.title,
                        price: details.price,
                        brand: details.brand,
                        image: images[0],
                      })
                    )
              }
              className="flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-400 rounded w-full md:w-auto md:ml-2"
            >
              {checkIdIsInWishlist(details?.id) ? (
                <IoIosHeart size={22} color="red" />
              ) : (
                <IoIosHeartEmpty size={22} />
              )}
            </button>
          </div>
          <div className="mt-4 text-gray-600">
            <p>Free delivery on order over $30.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
