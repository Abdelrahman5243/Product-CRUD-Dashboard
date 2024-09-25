import React from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/products/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../features/thunks";
import { Error } from "../components/common";

const EditProduct = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === Number(productID))
  );

  const { status, error } = useSelector((state) => state.products);

  if (status === "failed") return <Error message={error} />;
  if (!product)
    return (
      <Error
        title="Product not found"
        message="The Product you are looking for doesn't exist."
      />
    );

  const handleUpdateProduct = async (updates) => {
    dispatch(editProduct({ id: product.id, updates }));
  };

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Edit Product {product.id}
      </h2>
      <ProductForm
        onSubmit={handleUpdateProduct}
        initialData={product}
        updateProduct
      />
    </div>
  );
};

export default EditProduct;
