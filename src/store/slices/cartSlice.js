import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((cartItem) => cartItem.id === action.payload);

// const findAddItemIndex = (state, action) => {
//   state.findIndex((cartItem) => cartItem.id === action.payload.id);
// };

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  loading: false,
  error: "",
  reducers: {
    addCartItem(state, action) {
      state.push({ ...action.payload, quantity: 1 });
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
    increaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      console.log("incItem++ ", action, existingItemIndex);
      state[existingItemIndex].quantity += 1;
    },
    decreaseQuantity(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      console.log("decItem-- ", action, existingItemIndex);
      state[existingItemIndex].quantity -= 1;
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
