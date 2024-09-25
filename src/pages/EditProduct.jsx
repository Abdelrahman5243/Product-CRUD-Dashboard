import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductForm from "../components/products/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { editProduct, removeProduct } from "../features/thunks";
import { Error } from "../components/common";
import swal from "sweetalert";

const EditProduct = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
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

  const handleDelete = async () => {
    const willDelete = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });

    if (willDelete) {
      try {
        await dispatch(removeProduct(product.id)).unwrap();
        swal("Deleted!", "Product has been deleted.", "success");
        navigate("/");
      } catch (error) {
        swal("Error!", error.message, "error");
      }
    }
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
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default EditProduct;
