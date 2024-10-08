import React, { useEffect, Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
const AddProduct = lazy(() => import("./pages/AddProduct"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const EditProduct = lazy(() => import("./pages/EditProduct"));
const AnalysisPage = lazy(() => import("./pages/AnalysisPage"));
import NotFound from "./pages/NotFound";
import { Loading, Error } from "./components/common";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "./features/thunks";

const App = () => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.products);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    if (status === "idle" && isFirstLoad) {
      dispatch(getProducts());
    }
  }, [dispatch, status, isFirstLoad]);

  useEffect(() => {
    if (status !== "loading" && isFirstLoad) {
      setIsFirstLoad(false);
    }
  }, [status, isFirstLoad]);

  if (status === "loading" && isFirstLoad) return <Loading />;
  if (error)
    return (
      <Error
        title="Oops! Something went wrong"
        message="Please try again later or contact support if the problem persists."
      />
    );

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Products />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="analysis" element={<AnalysisPage />} />
          <Route path="edit-product/:productID" element={<EditProduct />} />
          <Route path="product/:productID" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />}/> 

      </Routes>
    </Suspense>
  );
};

export default App;
