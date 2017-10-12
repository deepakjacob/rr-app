import { combineReducers } from "redux";
import visibility from "./visibilityReducer";
import profile from "./profileReducer";

export default combineReducers({
  visibility,
  profile
});

//console.log("State of the store => ", JSON.stringify(store.getState()));
//
//export let unsubscribe = store.subscribe(()=>{
//  console.log("Some value in store chnaged");
//});

//store.unsubscribe();
