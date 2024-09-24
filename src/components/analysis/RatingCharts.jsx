import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const RatingCharts = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="p-8 pl-0 bg-white rounded-lg shadow-md shadow-gray-200">
        No data available
      </div>
    );
  }

  return (
    <div className="p-8 pl-0 bg-white rounded-lg shadow-md shadow-gray-200">
      <h2 className="font-medium text-gray-700 pl-8 mb-4 text-lg">rate</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" domain={[0, 5]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="averageRating" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingCharts;
