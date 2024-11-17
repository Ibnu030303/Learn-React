import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailProducts } from "../services/product.service";
import Spinner from "../components/Spinner"; // Import Spinner

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getDetailProducts(id, (data, err) => {
      if (err) {
        setError("Failed to load product details");
      } else {
        setProduct(data);
      }
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
      {Object.keys(product).length > 0 && (
        <div className="bg-white shadow-lg rounded-lg max-w-2xl flex p-6">
          <div className="flex-none w-48 relative">
            {product?.image && (
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg shadow-md h-60 w-full object-cover"
                loading="lazy"
              />
            )}
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {product?.title}
              </h1>
              <div className="text-xl font-semibold text-gray-600 mb-2">
                ${product?.price}
              </div>
              <div className="text-sm text-gray-500 mb-4">
                {product?.rating && (
                  <>
                    Review {product.rating.rate}/5 ({product.rating.count}{" "}
                    reviews)
                  </>
                )}
              </div>
            </div>
            <div className="border-b border-gray-200 mb-4 pb-4">
              <p className="text-gray-700 text-sm">{product?.description}</p>
            </div>
            <div className="flex space-x-4 mb-6">
              <button
                className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-700 transition duration-200"
                type="submit"
              >
                Buy Now
              </button>
              <button
                className="h-10 px-6 font-semibold rounded-md border border-gray-300 text-gray-800 hover:bg-gray-100 transition duration-200"
                type="button"
              >
                Add to Bag
              </button>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-md text-gray-400 border border-gray-300 hover:text-gray-600 transition duration-200"
                type="button"
                aria-label="Add to favorites"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-gray-600">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default DetailProductPage;
