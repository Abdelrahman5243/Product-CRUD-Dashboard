import React from "react";
import InfoBoxes from "../components/analysis/InfoBoxes";
import { getAverageRatingData } from "../components/analysis/utils";
import RatingCharts from "../components/analysis/RatingCharts";

const AnalysisPage = ({ products }) => {
  return (
    <>
      <h2 className="mb-4 text-xl px-6 font-bold text-gray-900 dark:text-white">
        Products Analysis
      </h2>

      <InfoBoxes
        totalProducts={products.length}
        totalSales={50}
        totalRevenue={3000}
        averageRating={3.5}
      />

      <div className="mt-16 grid grid-cols-1 gap-8 2xl:grid-cols-3 xl:grid-cols-2 px-6">
        <RatingCharts data={getAverageRatingData(products)} />
        <RatingCharts data={getAverageRatingData(products)} />
        <RatingCharts data={getAverageRatingData(products)} />
        <RatingCharts data={getAverageRatingData(products)} />
      </div>
    </>
  );
};

export default AnalysisPage;
