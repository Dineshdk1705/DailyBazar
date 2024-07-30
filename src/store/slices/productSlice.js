import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk(
  "product/fetchAllProducts",
  async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products`);
      return response.json();
    } catch (err) {
      throw err;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    productsList: [],
    error: "",
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsList = action.payload;
        state.error = "";
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong !!";
      });
  },
});

export default productSlice.reducer;
