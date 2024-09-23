import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { Loading } from "./components/common/Loading";
// Lazy load the page components
const AddProduct = lazy(() => import("./pages/AddProduct"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const EditProduct = lazy(() => import("./pages/EditProduct"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product/:productID" element={<EditProduct />} />
          <Route path="product/:productID" element={<ProductDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
