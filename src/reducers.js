import { combineReducers } from "redux";
import {
  CREATE_PUPPY,
  ADOPT_PUPPY,
  UPDATE_PUPPY,
  SET_AVAILABILITY_FILTER
} from "./actions";

// Puppies reducer
const puppies = (state = [], action) => {
  switch (action.type) {
    case CREATE_PUPPY:
      return [...state, action.data];
    case ADOPT_PUPPY:
      return state.map(puppy => {
        if (puppy.id === action.data) {
          return {
            ...puppy,
            available: false
          };
        }

        return puppy;
      });

    case UPDATE_PUPPY:
      return state.map(puppy => {
        if (puppy.id === action.data.id) {
          return action.data;
        }
        return puppy;
      });
    default:
      return state;
  }
};

// Availability filter reducer
const puppyFilters = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case SET_AVAILABILITY_FILTER:
      return action.data;
    default:
      return state;
  }
};

// Combine 2 reducers
const puppiesApp = combineReducers({
  puppies,
  puppyFilters
});

export default puppiesApp;
