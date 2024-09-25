import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import InfoBoxes from "../components/analysis/InfoBoxes";
import {
  getRevenueData,
  getSalesData,
  getOrderData,
  getAverageRatingData,
  totalSales,
  totalRevenue,
  averageRating,
} from "../features/utils";
import { Error, Loading } from "../components/common";

const RatingCharts = React.lazy(() =>
  import("../components/analysis/RatingCharts")
);
const OrdersChart = React.lazy(() =>
  import("../components/analysis/OrdersChart")
);
const RevenueChart = React.lazy(() =>
  import("../components/analysis/RevenueChart")
);
const SalesChart = React.lazy(() =>
  import("../components/analysis/SalesChart")
);

const AnalysisPage = () => {
  const { products, error } = useSelector((state) => state.products);

  return (
    <>
      <h2 className="mb-4 text-xl px-6 font-bold text-gray-900 dark:text-white">
        Products Analysis
      </h2>

      <InfoBoxes
        totalProducts={products.length}
        totalSales={totalSales(products)}
        totalRevenue={totalRevenue(products)}
        averageRating={averageRating(products)}
      />

      <Suspense fallback={<Loading />}>
        <div className="mt-16 grid grid-cols-1 gap-8 2xl:grid-cols-3 xl:grid-cols-2 px-6">
          {products.length === 0 || error ? (
            <Error
              title="No Products Available"
              message="Currently, there are no products to analyze. Please add some products to view the data."
            />
          ) : (
            <>
              <RatingCharts data={getAverageRatingData(products)} />
              <OrdersChart data={getOrderData(products)} />
              <RevenueChart data={getRevenueData(products)} />
              <SalesChart data={getSalesData(products)} />
            </>
          )}
        </div>
      </Suspense>
    </>
  );
};

export default AnalysisPage;
