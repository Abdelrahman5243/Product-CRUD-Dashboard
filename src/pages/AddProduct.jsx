import React from "react";
import ProductForm from "../components/ProductForm";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";

const AddProduct = () => {
  const navigate = useNavigate();
  const { addProduct } = useProducts();
  const handleAddProduct = async (productData) => {
    await addProduct(productData);
    navigate("/");
  };

  return (
    <>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add Product
      </h2>
      <ProductForm onSubmit={handleAddProduct} updateProduct={false} />
    </>
  );
};

export default AddProduct;
