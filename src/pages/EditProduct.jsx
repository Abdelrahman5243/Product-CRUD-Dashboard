import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import useProducts from "../hooks/useProducts";
import { Loading } from "../components/common/Loading";

const EditProduct = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const { editProduct, removeProduct, getProductById } = useProducts(
    null,
    productID
  );

  useEffect(() => {
    const getProductDetails = async () => {
      const data = await getProductById(productID);
      setInitialData(data);
    };
    getProductDetails();
  }, [productID]);

  const handleUpdateProduct = async (updates) => {
    await editProduct(productID, initialData, updates);
    navigate("/");
  };

  const handleDelete = async () => {
    await removeProduct(productID);
    navigate("/");
  };

  if (!initialData) return <Loading />;

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Edit Product {productID}
      </h2>
      <ProductForm
        onSubmit={handleUpdateProduct}
        initialData={initialData}
        updateProduct={true}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EditProduct;
