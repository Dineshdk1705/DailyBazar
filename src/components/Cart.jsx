import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeCartItem,
} from "../store/slices/cartSlice";

const Cart = () => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const cartItem = useSelector((state) => state.cartItem);
  const dispatch = useDispatch();

  const handleApplyPromoCode = () => {
    // Implement promo code logic here
    // For now, let's assume a promo code "SAVE10" gives a 10% discount
    if (promoCode === "SAVE10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const subtotal = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = subtotal * (1 - discount);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/3 p-4">
          <h1 className="text-2xl font-bold">
            Cart{" "}
            {cartItem && cartItem?.length > 0
              ? `(${cartItem.length} products)`
              : "is empty"}
          </h1>
          <ul className="mt-4">
            {cartItem.map((item) => {
              console.log("item", item);
              return (
                <li
                  key={item.id}
                  className="flex items-center justify-between p-4 border-b"
                >
                  <div className="flex items-center">
                    <img
                      className="w-16 h-16"
                      src={item?.image}
                      alt={item?.title}
                    />
                    <div className="ml-4">
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-gray-500">${item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        item.quantity > 1 &&
                        dispatch(decreaseQuantity(item?.id))
                      }
                      className="px-2 py-1 border"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item?.id))}
                      className="px-2 py-1 border"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center">
                    <span className="text-lg">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => dispatch(removeCartItem(item?.id))}
                      className="ml-4 text-red-500"
                    >
                      x
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:w-1/3 p-4 bg-gray-100">
          <h2 className="text-xl font-semibold">Promo code</h2>
          <div className="mt-2 flex">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-grow p-2 border"
              placeholder="Type here..."
            />
            <button
              onClick={handleApplyPromoCode}
              className="ml-2 px-4 py-2 bg-black text-white"
            >
              Apply
            </button>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span>-${(subtotal * discount).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-black text-white">
              Continue to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;