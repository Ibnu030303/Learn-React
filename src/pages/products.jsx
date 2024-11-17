import { useEffect, useState, useContext } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import Spinner from "../components/Spinner";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode as DarkModeContext } from "../context/DarkMode";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { isDarkMode } = useContext(DarkModeContext);

  useLogin();

  useEffect(() => {
    getProducts((data, err) => {
      if (err) {
        setError("Failed to load products");
      } else {
        setProducts(data);
      }
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div
        className={`flex justify-center py-5 ${isDarkMode && "bg-slate-900"}`}
      >
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner />
          </div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="w-4/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
          </div>
        )}
        <div className="w-2/6 p-5 rounded-lg shadow-lg ml-5">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Cart</h1>
          <TableCart products={products.length ? products : []} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
