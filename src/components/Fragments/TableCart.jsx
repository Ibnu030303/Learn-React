import { useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { DarkMode as DarkModeContext } from "../../context/DarkMode";
import {
  useTotalPrice,
  useTotalPriceDispatch,
} from "../../context/TotalPriceContext";

const TableCart = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);
  const totalPriceRef = useRef(null);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      return acc + (product ? product.price * item.qty : 0);
    }, 0);

    dispatch({
      type: "UPDATE", // Use the correct action type defined in the reducer
      payload: { total: sum },
    });

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart, products, dispatch]);

  return (
    <table
      className={`text-left table-auto w-full border-separate border-spacing-x-5 ${
        isDarkMode ? "text-white" : ""
      }`}
    >
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((item) => {
          const product = products.find((product) => product.id === item.id);
          return (
            <tr
              key={item.id}
              className="hover:bg-gray-200 transition duration-200"
            >
              <td>{product?.title.substring(0, 10)} ...</td>
              <td>
                {product?.price.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td>{item.qty}</td>
              <td>
                {(item.qty * (product?.price || 0)).toLocaleString("id-ID", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
          );
        })}
        {cart.length > 0 && (
          <tr ref={totalPriceRef} className="font-bold">
            <td colSpan={3}>
              <b>Total Price</b>
            </td>
            <td>
              <b>
                {total.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "USD",
                })}
              </b>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

// Define prop types for the TableCart component
TableCart.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TableCart;
