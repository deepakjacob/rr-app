import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import rootReducer from "./rootReducer";

const initialState = {
  organization: "Google"
};

const createConfiguredStore = (state = initialState) => {
  const store = createStore(rootReducer, state, applyMiddleware(thunk));
  return store;
};

export default createConfiguredStore;
