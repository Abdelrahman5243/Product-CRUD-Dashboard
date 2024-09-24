import React from "react";
import InfoBox from "./InfoBox";
import { Store, BadgeDollarSign, ShoppingCart, Star } from "lucide-react";

const InfoBoxes = ({
  totalProducts,
  totalSales,
  totalRevenue,
  averageRating,
}) => {
  return (
    <div className="info-boxes grid grid-cols-1 gap-8 px-6 xl:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2">
      <InfoBox
        title="Number of Products"
        value={totalProducts}
        icon={<Store />}
        color="bg-pink-500 bg-opacity-15"
      />
      <InfoBox
        title="Total Sales"
        value={totalSales}
        icon={<BadgeDollarSign />}
        color="bg-indigo-500 bg-opacity-15"
      />
      <InfoBox
        title="Total Revenue"
        value={`$${totalRevenue}`}
        icon={<ShoppingCart />}
        color="bg-sky-500 bg-opacity-15"
      />
      <InfoBox
        title="Average Rating"
        value={averageRating}
        icon={<Star />}
        color="bg-teal-500 bg-opacity-15"
      />
    </div>
  );
};

export default InfoBoxes;
