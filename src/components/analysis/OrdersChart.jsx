import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const staticColors = ["#ff7300", "#387908", "#00C49F", "#FFBB28", "#0088FE"];

const OrdersChart = ({ data = [] }) => {

  return (
    <div className="p-8 pl-0 bg-white rounded-lg shadow-md shadow-gray-200">
      <h2 className="font-medium text-gray-700 pl-8 mb-4 text-lg">
        Orders Distribution by Product
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="orders"
            stroke="#ff7300"
            fill="#ff7300"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersChart;
