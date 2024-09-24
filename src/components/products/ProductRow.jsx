import { StarIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ProductRow = ({ product, onDelete }) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <th
        scope="row"
        className="max-w-40 md:max-w-60 truncate overflow-ellipsis px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {product.title}
      </th>
      <td className="px-6 py-4">${product.price}</td>
      <td className="px-6 py-4">{product.category}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <StarIcon color="gold" size={15} />
          {product.rating ? product.rating.rate : 0}
        </div>
      </td>
      <td className="px-6 py-4 flex gap-4">
        <Link
          to={`/edit-product/${product.id}`}
          className="font-medium text-blue-600 hover:underline"
        >
          Edit
        </Link>
        <button
          onClick={() => onDelete(product.id)}
          className="font-medium text-red-600 hover:underline"
        >
          Delete
        </button>
      </td>
      <td className="px-6 py-4">
        <Link
          to={`/product/${product.id}`}
          className="font-medium text-blue-600 hover:underline"
        >
          Open Details
        </Link>
      </td>
    </tr>
  );
};

export default ProductRow;
