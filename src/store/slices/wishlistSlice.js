import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) =>
  state.wishlistItems.findIndex(
    (wishlistItem) => wishlistItem.id === action.payload
  );

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: [],
    wishlistIds: [],
    loading: false,
    error: "",
  },
  reducers: {
    addToWishlist(state, action) {
      state.wishlistItems.push({ ...action.payload });
      state.wishlistIds.push(action.payload.id);
    },
    removeFromWishlist(state, action) {
      const existingItemIndex = findItemIndex(state, action);
      state.wishlistItems.splice(existingItemIndex, 1);
      state.wishlistIds.splice(existingItemIndex, 1);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
