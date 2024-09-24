import React, { useState } from "react";
import ProductTable from "../components/products/ProductTable";
import CategorySelector from "../components/products/CategorySelector";
import { Link } from "react-router-dom";
import { PlusIcon } from "lucide-react";

const Products = ({ products, getProducts, removeProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    getProducts(category); // Fetch products for the selected category
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex m-4 items-center gap-4">
        <Link
          to="/add-product"
          className="flex items-center gap-4 min-w-max rounded-full px-5 py-2.5 bg-zinc-900 text-white"
        >
          <PlusIcon /> Add Product
        </Link>
        <CategorySelector
          selectedCategory={selectedCategory}
          onChange={handleCategoryChange}
        />
      </div>
      <ProductTable products={products} removeProduct={removeProduct} />
    </div>
  );
};

export default Products;
