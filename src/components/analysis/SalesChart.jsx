import React from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const SalesChart = ({ data = [] }) => {

  return (
    <div className="p-8 pl-0 bg-white rounded-lg shadow-md shadow-gray-200">
      <h2 className="font-medium text-gray-700 pl-8 mb-4 text-lg">
        Total Sales by Product
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, "dataMax"]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
