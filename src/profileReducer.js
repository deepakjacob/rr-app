import { SET_PROFILE } from "./constants";

const initialProfileState = {
  name: "Jyothis",
  role: "Manager"
};

export default (state = initialProfileState, action) => {
  switch (action.type) {
    case SET_PROFILE:
    return Object.assign({}, state, action.profile);
    default:
      return state;
  }
};
