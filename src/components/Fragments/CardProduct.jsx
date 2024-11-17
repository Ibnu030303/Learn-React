import PropTypes from "prop-types";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-xs bg-gradient-to-b from-gray-700 to-gray-800 border border-gray-600 rounded-lg shadow-lg mx-2 flex flex-col justify-between my-4 transition-transform transform hover:scale-105">
      {children}
    </div>
  );
};

CardProduct.propTypes = {
  children: PropTypes.node.isRequired,
};

const Body = ({ children, name }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <Link to="#">
        <h5 className="text-xl font-semibold tracking-tight text-white hover:underline">
          {name.substring(0, 20)} ...
        </h5>
        <p className="text-sm text-gray-300">
          {children.substring(0, 100)} ...
        </p>
      </Link>
    </div>
  );
};

Body.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

const Footer = ({ price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </span>
      <Button
        className="bg-blue-600 hover:bg-blue-700 transition duration-200"
        onClick={() => dispatch(addToCart({ id, qty: 1 }))} // Dispatching to add to cart
      >
        Add to cart
      </Button>
    </div>
  );
};

Footer.propTypes = {
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

const Header = ({ image, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="Product"
        className="p-8 rounded-t-lg h-60 w-full object-cover transition-transform transform hover:scale-105"
      />
    </Link>
  );
};

Header.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired, // Marking id as required since it's used in the link
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
