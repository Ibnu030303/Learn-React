import PropTypes from "prop-types";

const Button = ({
  children = "...",
  classname = "bg-black",
  onClick = () => {},
  type = "button",
}) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
