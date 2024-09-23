const CategorySelector = ({ selectedCategory, onChange }) => {
  return (
    <select
      id="category"
      value={selectedCategory}
      onChange={(e) => onChange(e.target.value)}
      className="max-w-max bg-white border border-gray-300 cursor-pointer px-4 py-2.5 text-gray-900 text-sm rounded-lg outline-none focus:ring-blue-500 focus:border-blue-500 block"
    >
      <option value="">All Categories</option>
      <option value="men's clothing">Men's clothing</option>
      <option value="women's clothing">Women's clothing</option>
      <option value="jewelery">Jewelry</option>
      <option value="electronics">Electronics</option>
    </select>
  );
};

export default CategorySelector;
