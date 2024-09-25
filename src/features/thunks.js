import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/productsAPI";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (category = null, { rejectWithValue }) => {
    try {
      const data = await fetchProducts(category);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product, { rejectWithValue }) => {
    try {
      const newProduct = await createProduct(product);
      return newProduct;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, updates }, { rejectWithValue }) => {
    try {
      const updatedProduct = await updateProduct(id, updates);
      return updatedProduct;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeProduct = createAsyncThunk(
  "products/removeProduct",
  async (id, { rejectWithValue }) => {
    try {
      await deleteProduct(id);
      return id; 
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
