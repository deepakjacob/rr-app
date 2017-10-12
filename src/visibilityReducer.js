import { SET_VISIBILITY } from "./constants";


const initialVisibilityState = {
  visible: true
};

export default (state = initialVisibilityState, action) => {
  switch (action.type) {
    case SET_VISIBILITY:
      return Object.assign({}, { visible: !action.visible });
    default:
      return state;
  }
};
