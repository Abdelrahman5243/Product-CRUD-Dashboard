// export const productData = [
//   {
//     id: 1,
//     title: "Backpack",
//     sales: [
//       { month: "January", units_sold: 100, revenue: 10995 },
//       { month: "February", units_sold: 80, revenue: 8796 },
//     ],
//     orders: [
//       { month: "January", units_ordered: 50 },
//       { month: "February", units_ordered: 40 },
//     ],
//     rating: { rate: 3.9, count: 120 },
//   },
//   {
//     id: 2,
//     title: "T-Shirt",
//     sales: [
//       { month: "January", units_sold: 200, revenue: 3198 },
//       { month: "February", units_sold: 150, revenue: 2398 },
//     ],
//     orders: [
//       { month: "January", units_ordered: 120 },
//       { month: "February", units_ordered: 80 },
//     ],
//     rating: { rate: 4.5, count: 95 },
//   },
// ];

export const getRevenueData = (productData) => {
  return productData.map((product) => ({
    name: product.title,
    revenue: product.sales.reduce((sum, sale) => sum + sale.revenue, 0),
  }));
};
export const getSalesData = (productData) => {
  return productData.map((product) => ({
    name: product.title,
    sales: product.sales.reduce((sum, sale) => sum + sale.units_sold, 0),
  }));
};
export const getOrderData = (productData) => {
  return productData.map((product) => ({
    name: product.title,
    orders: product.orders.reduce((sum, order) => sum + order.units_ordered, 0),
  }));
};
export const getAverageRatingData = (productData) => {
  return productData.map((product) => ({
    name: product.title,
    averageRating: product.rating.rate,
  }));
};

export const totalSales = (productData) => {
  return productData.reduce(
    (acc, product) =>
      acc + product.sales.reduce((sum, sale) => sum + sale.units_sold, 0),
    0
  );
};
export const totalRevenue = (productData) => {
  return productData.reduce(
    (acc, product) =>
      acc + product.sales.reduce((sum, sale) => sum + sale.revenue, 0),
    0
  );
};
export const averageRating = (productData) => {
  return (
    productData.reduce((acc, product) => acc + product.rating.rate, 0) /
    productData.length
  ).toFixed(1);
};