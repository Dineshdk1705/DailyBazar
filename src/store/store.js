import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import productSlice from "./slices/productSlice";
import productDetailSlice from "./slices/productDetailSlice";

export const store = configureStore({
  reducer: {
    cartItem: cartSlice,
    wishlistItem: wishlistSlice,
    productsItem: productSlice,
    productDetailItem: productDetailSlice,
  },
});
