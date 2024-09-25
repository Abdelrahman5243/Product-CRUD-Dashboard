import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import ProductTable from "../components/products/ProductTable";
import { Error } from "../components/common";
import { removeProduct } from "../features/thunks";
import { getProductsByCategory } from "../features/utils";
import swal from "sweetalert";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const dispatch = useDispatch();
  const { products, categories, error } = useSelector(
    (state) => state.products
  );

  const filterProducts = useMemo(
    () =>
      selectedCategory
        ? getProductsByCategory(products, selectedCategory)
        : products,
    [products, selectedCategory]
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (error) {
    return (
      <Error
        title="Oops! Something went wrong"
        message="Please try again later or contact support if the problem persists."
      />
    );
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex m-4 items-center gap-4">
        <Link
          to="/add-product"
          className="flex items-center gap-4 min-w-max rounded-full px-5 py-2.5 bg-zinc-900 text-white"
        >
          <PlusIcon /> Add Product
        </Link>
        <label htmlFor="category" className="sr-only">
          Select Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="max-w-max bg-white border border-gray-300 cursor-pointer px-4 py-2.5 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <ProductTable products={filterProducts} />
    </div>
  );
};

export default Products;
