import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductDetail = createAsyncThunk(
  "productDetail/fetchProductDetail",
  async (id) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      return response.json();
    } catch (err) {
      throw err;
    }
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    productDetailsData: [],
    error: "",
    loading: false,
  },
  reducers: {
    resetProductDetail: (state) => {
      state.productDetailsData = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetailsData = action.payload;
        state.error = "";
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong !!";
      });
  },
});

export const { resetProductDetail } = productDetailSlice.actions;

export default productDetailSlice.reducer;
