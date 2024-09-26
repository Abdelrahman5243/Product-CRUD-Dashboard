import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";
import ProductTable from "../components/products/ProductTable";
import { Error } from "../components/common";
import { getProductsByCategory } from "../features/utils";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
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
    <>
      <h1 className="text-2xl font-bold mb-4">Products Dashboard</h1>
      <p className="mb-3 text-gray-500 dark:text-gray-400">
        Welcome to the products management page. Here, you can view, filter, and
        manage all products in the system. Use the dropdown menu to filter
        products by category or click the "Add Product" button to create a new
        entry. If you encounter any issues, please contact support for
        assistance.
      </p>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex m-4 items-center gap-4 flex-wrap">
          <Link
            to="/add-product"
            className="flex items-center gap-4 w-full sm:max-w-max rounded-full px-5 py-2.5 bg-zinc-900 text-white"
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
            className="w-full sm:max-w-max bg-white border border-gray-300 cursor-pointer px-4 py-2.5 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block"
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
    </>
  );
};

export default Products;
