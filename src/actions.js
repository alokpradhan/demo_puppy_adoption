// Set constants for action types
export const CREATE_PUPPY = "CREATE_PUPPY";
export const ADOPT_PUPPY = "ADOPT_PUPPY";
export const UPDATE_PUPPY = "UPDATE_PUPPY";
export const SET_AVAILABILITY_FILTER = "SET_AVAILABILITY_FILTER";

// Action creators
let nextPuppyId = 1;
export const createPuppy = data => {
  return {
    type: CREATE_PUPPY,
    data: {
      ...data,
      id: nextPuppyId++
    }
  };
};

export const adoptPuppy = id => {
  return {
    type: ADOPT_PUPPY,
    data: id
  };
};

export const updatePuppy = data => {
  return {
    type: UPDATE_PUPPY,
    data
  };
};

export const setAvailablityFilter = data => {
  return {
    type: SET_AVAILABILITY_FILTER,
    data
  };
};
