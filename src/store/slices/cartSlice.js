import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, id) =>
  state.cartItems.findIndex((cartItem) => cartItem.id === id);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    cartIds: [],
    loading: false,
    error: "",
  },
  reducers: {
    addCartItem(state, action) {
      state.cartItems.push({
        ...action.payload,
        quantity: action.payload.quantity,
      });
      state.cartIds.push(action.payload.id);
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action.payload);
      state.cartItems.splice(existingItemIndex, 1);
      state.cartIds.splice(existingItemIndex, 1);
    },
    increaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action.payload);
      state.cartItems[existingItemIndex].quantity += 1;
    },
    decreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action.payload);
      state.cartItems[existingItemIndex].quantity -= 1;
    },
  },
});

export const {
  addCartItem,
  removeCartItem,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
