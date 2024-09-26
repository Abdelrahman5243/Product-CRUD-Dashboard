import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { removeProduct } from "../../features/thunks";

const DeleteButton = ({ productId, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
        await dispatch(removeProduct(productId)).unwrap();
        swal("Deleted!", "Product has been deleted.", "success");
        navigate("/");
      } catch (error) {
        swal("Error!", error.message, "error");
      }
    }
  };

  return (
    <button
      onClick={handleDelete}
      title="Delete product"
      className={`btn ${className}`}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
