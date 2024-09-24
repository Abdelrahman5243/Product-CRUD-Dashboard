import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Loading, Error } from "./components/common/Loading";
import useProducts from "./hooks/useProducts";

const AddProduct = lazy(() => import("./pages/AddProduct"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const EditProduct = lazy(() => import("./pages/EditProduct"));
const AnalysisPage = lazy(() => import("./pages/AnalysisPage"));

const App = () => {
  const { products, loading, error, getProducts, removeProduct } =
    useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Products
                products={products}
                getProducts={getProducts}
                removeProduct={removeProduct}
              />
            }
          />
          <Route path="add-product" element={<AddProduct />} />
          <Route
            path="analysis"
            element={<AnalysisPage products={products} />}
          />
          <Route path="edit-product/:productID" element={<EditProduct />} />
          <Route path="product/:productID" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
