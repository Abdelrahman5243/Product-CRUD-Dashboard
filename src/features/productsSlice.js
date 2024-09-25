import { createSlice } from "@reduxjs/toolkit";
import { getProducts, addProduct, editProduct, removeProduct } from "./thunks";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setCategories(state, action) {
      state.categories = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        const categories = [
          ...new Set(action.payload.map((product) => product.category)),
        ];
        state.categories = categories;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products.push(action.payload);
        if (!state.categories.includes(action.payload.category)) {
          state.categories.push(action.payload.category);
        }
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(editProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedProduct = action.payload;
        state.products = state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        );
        const categories = [
          ...new Set(state.products.map((product) => product.category)),
        ];
        state.categories = categories;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(removeProduct.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
        const categories = [
          ...new Set(state.products.map((product) => product.category)),
        ];
        state.categories = categories;
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const getAllCategories = (state) => state.products.categories;

export default productsSlice.reducer;
