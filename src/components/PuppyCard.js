import React from "react";
import AdoptButton from "./AdoptButton";
import PropTypes from "prop-types";

const PuppyCard = ({ puppy, onAdoptClick }) => {
  const { name, breed, available, avatar } = puppy;

  return (
    <div className="PuppyCard card" style={{ maxWidth: "320px" }}>
      <img
        className="card-img-top img-fluid"
        src={avatar ? avatar : "http://placehold.it/320x320"}
        alt="puppy photo"
      />
      <div className="card-block">
        <h4>{name}</h4>
        <p>{breed}</p>
        <AdoptButton available={available} onAdoptClick={onAdoptClick} />
      </div>
    </div>
  );
};

PuppyCard.propTypes = {
  puppy: PropTypes.object.isRequired,
  onAdoptClick: PropTypes.func.isRequired
};

export default PuppyCard;
