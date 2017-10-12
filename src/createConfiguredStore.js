import { createStore } from "redux";
import rootReducer from "./rootReducer";

const createConfiguredStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState);
  return store;
}

export default createConfiguredStore;
