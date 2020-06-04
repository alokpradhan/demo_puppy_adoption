import React from "react";
import PuppyCard from "./PuppyCard";
import PropTypes from "prop-types";
import Filters from "./Filters";

const PuppyList = ({ puppies, adoptPuppy }) => {
  const puppyList = puppies.map(puppy => (
    <PuppyCard
      puppy={puppy}
      key={puppy.id}
      onAdoptClick={() => adoptPuppy(puppy.id)}
    />
  ));

  const noPuppies = <p className="text-muted">Oops, no puppies</p>;

  return (
    <div className="PuppyList container">
      <h1>Our puppies</h1>
      <Filters />
      <div className="card-deck">
        {puppies.length > 0 ? puppyList : noPuppies}
      </div>
    </div>
  );
};

PuppyList.propTypes = {
  puppies: PropTypes.array.isRequired,
  adoptPuppy: PropTypes.func.isRequired
};

export default PuppyList;
