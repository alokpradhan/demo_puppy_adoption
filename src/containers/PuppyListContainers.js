import { connect } from "react-redux";
import PuppyList from "../components/PuppyList";
import { adoptPuppy } from "../actions";

const getVisiblePuppies = (puppies, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return puppies;
    case "SHOW_AVAILABLE":
      return puppies.filter(puppy => puppy.available);
    case "SHOW_ADOPTED":
      return puppies.filter(puppy => !puppy.available);
    default:
      return puppies;
  }
};

const mapStateToProps = state => {
  return {
    puppies: getVisiblePuppies(state.puppies, state.puppyFilters)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    adoptPuppy: id => {
      dispatch(adoptPuppy(id));
    }
  };
};

const PuppyListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PuppyList);

export default PuppyListContainer;
