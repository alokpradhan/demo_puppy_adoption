import { connect } from "react-redux";
import FilterLink from "../components/elements/FilterLink";
import { setAvailabilityFilter } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.puppyFilters === ownProps.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: e => {
      e.preventDefault();
      dispatch(setAvailabilityFilter(ownProps.filter));
    }
  };
};

const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);

export default FilterLinkContainer;
