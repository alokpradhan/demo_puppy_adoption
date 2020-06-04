import React from "react";
import PropTypes from "prop-types";

const InputGroup = ({ name, labelText, children }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{labelText}</label>
      <br />
      {children}
    </div>
  );
};

InputGroup.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default InputGroup;
