import React from "react";
import PropTypes from "prop-types";

const Alert = ({ type, children }) => {
  return <div className={`alert alert-${type}`}>{children}</div>;
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Alert;
