import { StarIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { totalSales, totalRevenue, totalOrders } from "../../features/utils";
import DeleteButton from "./DeleteButton";

const ProductRow = ({ product }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th scope="row">
        <img
          src={product.image}
          alt={product.title}
          className="mx-4 p-2 w-16 h-16 object-cover rounded"
        />
      </th>
      <td className="max-w-40 md:max-w-60 truncate overflow-ellipsis px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {product.title}
      </td>
      <td className="px-6 py-4">${product.price}</td>
      <td className="px-6 py-4 text-[#3ec972]">${totalRevenue([product])}</td>
      <td className="px-6 py-4">{totalSales([product])}</td>
      <td className="px-6 py-4 text-[#67bfff]">{totalOrders([product])}</td>
      <td className="px-6 py-4">{product.category}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <StarIcon color="gold" size={15} />
          {product.rating ? product.rating.rate : 0}
        </div>
      </td>
      <td className="px-6 py-4">
        <Link
          to={`/edit-product/${product.id}`}
          className="font-medium text-blue-600 hover:underline"
        >
          Edit
        </Link>
      </td>
      <td className="px-6 py-4">
        <DeleteButton
          productId={product.id}
          className="font-medium text-red-600 hover:underline"
        />
      </td>
      <td className="px-6 py-4">
        <Link
          to={`/product/${product.id}`}
          className="font-medium text-blue-600 hover:underline text-nowrap"
        >
          Open Details
        </Link>
      </td>
    </tr>
  );
};

export default ProductRow;
