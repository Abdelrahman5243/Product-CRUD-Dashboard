import { useState } from "react";
import { InputField, SelectField, TextAreaField } from "./FormFields";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const ProductForm = ({
  onSubmit,
  initialData,
  updateProduct,
  handleDelete,
}) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [price, setPrice] = useState(initialData?.price || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [image, setImage] = useState(initialData?.image || "");
  const [category, setCategory] = useState(
    initialData?.category || "men's clothing"
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !price || !description || !image || !category) {
      setError("Please fill in all required fields.");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      await onSubmit({ title, price, description, image, category });
      swal("Success!", "Product has been saved.", "success");
      navigate("/");
    } catch (err) {
      setError(err.message);
      swal("Error!", "There was an issue saving the product.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
        <InputField
          id="name"
          label="Product Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <InputField
          id="url"
          label="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <InputField
          id="price"
          label="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          required
        />
        <SelectField
          id="category"
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={[
            { value: "men's clothing", label: "Men's clothing" },
            { value: "women's clothing", label: "Women's clothing" },
            { value: "jewelery", label: "Jewelry" },
            { value: "electronics", label: "Electronics" },
          ]}
        />
        <TextAreaField
          id="description"
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="flex items-center space-x-4">
        <button
          type="submit"
          className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg
            border border-gray-200 hover:bg-gray-100 hover:text-blue-700 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          disabled={loading}
        >
          {loading
            ? "Loading..."
            : updateProduct
            ? "Update product"
            : "Add product"}
        </button>

        {updateProduct && handleDelete && (
          <button
            type="button"
            className={`text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleDelete}
            disabled={loading}
          >
            {loading ? "Loading..." : "Delete"}
          </button>
        )}
      </div>

      {error && <div className="text-red-600">{error}</div>}
    </form>
  );
};

export default ProductForm;
