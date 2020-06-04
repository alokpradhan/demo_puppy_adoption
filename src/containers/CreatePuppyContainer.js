import { connect } from "react-redux";
import { createPuppy } from "../actions";
import CreatePuppy from "../components/CreatePuppy";
import serialize from "form-serialize";

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(createPuppy(data));
      form.reset();
    }
  };
};

const CreatePuppyContainer = connect(
  null,
  mapDispatchToProps
)(CreatePuppy);

export default CreatePuppyContainer;
