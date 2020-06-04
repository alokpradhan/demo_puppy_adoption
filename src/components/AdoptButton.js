import React from "react";
import Button from "./elements/Button";
import PropTypes from "prop-types";

const AdoptButton = ({ available, onAdoptClick }) => {
  if (!available) {
    return <p className="text-muted">Adopted!</p>;
  }

  return (
    <Button onClick={onAdoptClick} color="success">
      Adopt me!
    </Button>
  );
};

AdoptButton.propTypes = {
  available: PropTypes.bool.isRequired,
  onAdoptClick: PropTypes.func.isRequired
};

export default AdoptButton;
