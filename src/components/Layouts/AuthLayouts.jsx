import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode as DarkModeContext } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext); // Updated destructuring
  console.log("DarkModeContextProvider is active:", isDarkMode);

  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode ? "bg-slate-900" : ""
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)} // Updated toggle logic
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don’t have an account?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>
      </p>
    );
  } else {
    return (
      <p className="text-sm mt-5 text-center">
        Already have an account?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>
      </p>
    );
  }
};

AuthLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["login", "register"]).isRequired,
};

Navigation.propTypes = {
  type: PropTypes.oneOf(["login", "register"]).isRequired,
};

export default AuthLayout;
