import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.findIndex((wishlistItem) => wishlistItem.id === action.payload);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  loading: false,
  error: "",
  reducers: {
    addToWishlist(state, action) {
      state.push({ ...action.payload });
    },
    removeFromWishlist(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.splice(existingItemIndex, 1);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
