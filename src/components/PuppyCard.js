import React, { PropTypes } from "react";
import AdoptButton from "./AdoptButton";

const PuppyCard = ({ puppy, onAdoptClick }) => {
  const { name, breed, available } = puppy;

  return (
    <div className="PuppyCard card">
      <div className="card-block">
        <h4>{name}</h4>
        <p>{breed}</p>
        <AdoptButton
          available={available}
          onAdoptClick={onAdoptClick}
        ></AdoptButton>
      </div>
    </div>
  );
};

PuppyCard.propTypes = {
  puppy: PropTypes.object.isRequired,
  onAdoptClick: PropTypes.func.isRequired
};

export default PuppyCard;
