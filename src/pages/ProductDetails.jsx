import {useEffect} from "react";
import useProducts from "../hooks/useProducts";
import { useParams, useNavigate, Link } from "react-router-dom";
import {Loading} from "../components/common/Loading";
import {Error} from "../components/common/Error";
import { StarIcon } from "lucide-react";

const ProductDetails = () => {
  const { productID } = useParams();
  const navigate = useNavigate();
  const { product, loading, error, removeProduct, getProductById } = useProducts(null, productID);

  const handleDelete = async () => {
    await removeProduct(productID);
    navigate("/");
  };

  useEffect(() => {
    getProductById(productID); 
  }, [productID]);

  if (loading) return <Loading />;
  if (!product || error) return <Error message={error || "Product not found"} />;

  return (
    <section className="py-8 md:py-16 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto max-h-[500px] overflow-hidden">
            <img className="w-full" src={product.image} alt={product.title} />
          </div>
          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
              {product.title}
            </h1>
            <span className="flex max-w-max bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 my-4 items-center justify-center">
              {product.category}
            </span>
            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
              <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                ${product.price}
              </p>
              <div className="flex items-center gap-2 mt-2 sm:mt-0">
                <StarIcon color="gold" size={15} />
                {product.rating ? product.rating.rate : 0}
              </div>
            </div>
            <div className="mt-6 sm:gap-4 sm:items-center flex items-center gap-4 sm:mt-8">
              <Link
                to={`/edit-product/${productID}`}
                className="max-w-max flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100"
              >
                Edit
              </Link>
              <button
                onClick={handleDelete}
                className="text-white sm:mt-0 bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Delete
              </button>
            </div>
            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
            <p className="mb-6 text-gray-500 dark:text-gray-400">{product.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
