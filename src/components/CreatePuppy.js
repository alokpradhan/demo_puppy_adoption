import React from "react";
import PropTypes from "prop-types";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";

const CreatePuppy = ({ onSubmit }) => {
  return (
    <form className="container" onSubmit={onSubmit}>
      <h1>Add puppy</h1>
      <InputGroup name="name" labelText="Name">
        <Input type="text" name="name" />
      </InputGroup>
      <InputGroup name="breed" labelText="Breed">
        <Input type="text" name="breed" />
      </InputGroup>
      <InputGroup name="avatar" labelText="Avatar">
        <Input type="text" name="avatar" />
      </InputGroup>
      <Button type="submit" color="primary">
        Add Puppy
      </Button>
    </form>
  );
};

CreatePuppy.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default CreatePuppy;
