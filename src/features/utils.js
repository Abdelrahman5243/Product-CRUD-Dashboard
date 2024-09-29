// export const productData = [
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//     sales: [
//       {
//         month: "January",
//         units_sold: 60,
//         revenue: 1338,
//       },
//       {
//         month: "February",
//         units_sold: 75,
//         revenue: 1662.5,
//       },
//     ],
//     orders: [
//       {
//         month: "January",
//         units_ordered: 80,
//       },
//       {
//         month: "February",
//         units_ordered: 90,
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//     sales: [
//       {
//         month: "January",
//         units_sold: 120,
//         revenue: 6718.8,
//       },
//       {
//         month: "February",
//         units_sold: 100,
//         revenue: 5599,
//       },
//     ],
//     orders: [
//       {
//         month: "January",
//         units_ordered: 130,
//       },
//       {
//         month: "February",
//         units_ordered: 110,
//       },
//     ],
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 20,
//     description:
//       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     rating: {
//       rate: 2.1,
//       count: 430,
//     },
//     sales: [
//       {
//         month: "January",
//         units_sold: 40,
//         revenue: 800,
//       },
//       {
//         month: "February",
//         units_sold: 30,
//         revenue: 600,
//       },
//     ],
//     orders: [
//       {
//         month: "January",
//         units_ordered: 50,
//       },
//       {
//         month: "February",
//         units_ordered: 45,
//       },
//     ],
//   },
// ];

export const getProductsByCategory = (productData, category) => {
  return productData.filter((product) => product.category === category);
};

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
export const totalOrders = (productData) => {
  return productData.reduce(
    (acc, product) =>
      acc + product.orders.reduce((sum, order) => sum + order.units_ordered, 0),
    0
  );
};
export const totalRevenue = (productData) => {
  return productData
    .reduce(
      (acc, product) =>
        acc + product.sales.reduce((sum, sale) => sum + sale.revenue, 0),
      0
    )
    .toFixed(2);
};
export const averageRating = (productData) => {
  return (
    productData.reduce((acc, product) => acc + product.rating.rate, 0) /
    productData.length
  ).toFixed(1);
};
