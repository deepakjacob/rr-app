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

export const changeVisibility = (visible) => {
  return {
    type: 'SET_VISIBILITY',
    visible
  };
}
