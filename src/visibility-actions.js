// Only define action functions here because this is imported into
// AppComponent like the following:

// import * as actions from "./actions";
// ...
// 
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(actions, dispatch);
// };

// The bindActionCreators takes action as an array and wraps each
// of them in dispatch(..) method.

// Note that only dispatch can send messages to store.

import { SET_VISIBILITY } from "./constants"

export const changeVisibility = (visible) => ({
   type: SET_VISIBILITY,
   visible
});

// equivalent to the above, but in ols syntax

// function changeVisibility (visible){
//  var o = {
//    type: 'SET_VISIBILITY',
//    visible: visible
//  }
//   return o;
// };


// dispatch(changeVisibility(true));
