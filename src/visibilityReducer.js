import { SET_VISIBILITY } from "./constants";

const visibilityState = {
  visible: true
};

export default (state = visibilityState, action) => {
  switch (action.type) {
    case SET_VISIBILITY:
      return Object.assign({}, { visible: !action.visible });
    default:
      return state;
  }
};
