import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Create an Axios instance for easier configuration
const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchProducts = async (category = "") => {
  try {
    const response = category
      ? await apiClient.get(`/products?category=${category}`)
      : await apiClient.get(`/products`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
};

export const fetchProductsById = async (id) => {
  try {
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching product with ID ${id}: ${error.message}`);
  }
};

export const createProduct = async (product) => {
  try {
    const response = await apiClient.post("/products", {
      ...product,
      rating: {
        rate:0,
        count: 0,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error creating product: ${error.message}`);
  }
};

export const updateProduct = async (id, updates) => {
  try {
    const response = await apiClient.put(`/products/${id}`, updates);
    return response.data;
  } catch (error) {
    throw new Error(`Error updating product: ${error.message}`);
  }
};

export const deleteProduct = async (id) => {
  try {
    await apiClient.delete(`/products/${id}`);
  } catch (error) {
    throw new Error(`Error deleting product with ID ${id}: ${error.message}`);
  }
};
