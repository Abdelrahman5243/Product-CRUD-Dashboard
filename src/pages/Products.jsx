import React, { useState, useEffect } from "react";
import ProductTable from "../components/ProductTable";
import CategorySelector from "../components/CategorySelector";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";
import { Loading } from "../components/common/Loading";
import { Error } from "../components/common/Error";
import { PlusIcon } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { products, loading, error, removeProduct, getProducts } =
    useProducts(selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    getProducts(category);
  };

  useEffect(() => {
    getProducts(selectedCategory);
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

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
