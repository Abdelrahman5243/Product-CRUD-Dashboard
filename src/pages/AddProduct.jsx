import React from "react";
import ProductForm from "../components/products/ProductForm";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/thunks";

const AddProduct = () => {
  const dispatch = useDispatch();
  const handleAddProduct = async (productData) => {
    dispatch(addProduct(productData));
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
