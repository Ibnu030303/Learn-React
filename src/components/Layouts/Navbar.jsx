import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";
import { DarkMode as DarkModeContext } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => acc + item.qty, 0); // Use 0 instead of [0]
    setTotalCart(sum); // Correct the state update
  }, [cart]); // Run this effect only when 'cart' changes

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-5 shadow-lg">
      <span className="text-lg font-semibold mr-5">{username}</span>

      <Button
        className="ml-5 bg-black hover:bg-gray-800 transition duration-200"
        onClick={handleLogout}
      >
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
        Item : {totalCart} | price: ${total}
      </div>
      <Button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="right-4 top-4 text-white p-2 rounded bg-black px-10 mx-5"
      >
        {isDarkMode ? "Light" : "Dark"} Mode
      </Button>
    </div>
  );
};

export default Navbar;
