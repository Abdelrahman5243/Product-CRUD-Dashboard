import { useState } from "react";
import {
  fetchProducts,
  fetchProductsById,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../api/productsAPI";
import swal from "sweetalert";

const useProducts = (category = null, productID = null) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProducts = async (category) => {
    try {
      setLoading(true);
      const data = await fetchProducts(category);
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    try {
      setLoading(true);
      const newProduct = await createProduct(product);
      setProducts((prevProducts) => [...prevProducts, newProduct]); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const editProduct = async (id, initialData, updates) => {
    try {
      setLoading(true);
      const updatedData = { ...initialData, ...updates };
      const updatedProduct = await updateProduct(id, updatedData);
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? updatedProduct : product
        )
      );
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getProductById = async (id) => {
    try {
      setLoading(true);
      const data = await fetchProductsById(id);
      setProduct(data);
      return data; 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const removeProduct = async (id) => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Do you want to delete this product?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (willDelete) {
      try {
        await deleteProduct(id);
        swal("Deleted!", "Product has been deleted.", "success");

        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } catch (err) {
        setError(err.message);
        swal("Error", "There was an issue deleting the product.", "error");
      }
    }
  };

  return {
    products,
    product,
    loading,
    error,
    removeProduct,
    addProduct,
    editProduct,
    getProducts,
    getProductById,
  };
};

export default useProducts;
