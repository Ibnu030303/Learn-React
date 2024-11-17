import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Define PropTypes for DarkModeContextProvider
DarkModeContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // This ensures `children` prop is validated
};

export const DarkMode = DarkModeContext;
export default DarkModeContextProvider;
