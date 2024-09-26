import React from "react";
import InfoBox from "./InfoBox";
import {
  Store,
  BadgeDollarSign,
  ShoppingCart,
  Star,
  TrendingUp,
} from "lucide-react";

const InfoBoxes = ({
  totalProducts,
  totalSales,
  totalOrders,
  totalRevenue,
  averageRating,
}) => {
  return (
    <div className="info-boxes grid grid-cols-1 gap-8 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2">
      <InfoBox
        title="Number of Products"
        value={totalProducts}
        icon={<Store />}
        color="bg-pink-500"
      />
      <InfoBox
        title="Total Sales"
        value={totalSales}
        icon={<BadgeDollarSign />}
        color="bg-indigo-500"
      />
      <InfoBox
        title="Total Revenue"
        value={`$${totalRevenue}`}
        icon={<ShoppingCart />}
        color="bg-sky-500"
      />
      <InfoBox
        title="Average Rating"
        value={averageRating}
        icon={<Star />}
        color="bg-teal-500"
      />
      <InfoBox
        title="Sales Conversion Rate"
        progress={`${
          totalOrders > 0 ? ((totalSales / totalOrders) * 100).toFixed(2) : 0
        }%`}
        icon={<TrendingUp size={30} />}
        color="bg-yellow-500"
      />
    </div>
  );
};

export default InfoBoxes;
