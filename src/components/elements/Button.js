import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { size, type, color, children, ...rest } = props;
  const sizeClass = size ? `btn-${size}` : "";

  return (
    <button type={type} className={`btn btn-${color} ${sizeClass}`} {...rest}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  color: "default",
  children: "Submit"
};

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node
};

export default Button;
