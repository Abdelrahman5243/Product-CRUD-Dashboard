import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PlusIcon, ChevronDown } from "lucide-react";
import ProductTable from "../components/products/ProductTable";
import Pagination from "../components/products/Pagination";
import { Error } from "../components/common";
import { getProductsByCategory } from "../features/utils";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchInput, setSearchInput] = useState("");

  const { products, categories, error } = useSelector(
    (state) => state.products
  );

  const filterProducts = useMemo(() => {
    let filtered = selectedCategory
      ? getProductsByCategory(products, selectedCategory)
      : products;

    if (searchInput) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    return filtered;
  }, [products, selectedCategory, searchInput]);

  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setCurrentPage(1);
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
      <div className="relative overflow-x-auto border border-gray-200 rounded-lg">
        <div className="flex m-4 items-center gap-4 flex-wrap">
          <Link
            to="/add-product"
            className="flex items-center gap-4 w-full sm:max-w-max rounded-lg px-5 py-2.5 bg-zinc-900 text-white transition duration-300 ease hover:bg-zinc-800"
          >
            <PlusIcon /> Add Product
          </Link>

          <label htmlFor="category" className="sr-only">
            Select Category
          </label>
          <div className="relative w-full sm:max-w-max">
  <select
    id="category"
    value={selectedCategory}
    onChange={(e) => handleCategoryChange(e.target.value)}
    className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-lg px-4 py-2.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm appearance-none cursor-pointer pr-10"
  >
    <option value="">All Categories</option>
    {categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ))}
  </select>
  <ChevronDown className="h-5 w-5 absolute top-1/2 right-2 transform -translate-y-1/2 text-slate-700" />
</div>


          <input
            type="text"
            value={searchInput}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="w-full sm:max-w-max bg-white placeholder:text-slate-400 text-slate-700 border border-slate-200 rounded-lg px-4 py-2.5 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm"
          />
        </div>


        <ProductTable
          products={filterProducts.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          )}
        />
      </div>

      {totalPages > 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default Products;
