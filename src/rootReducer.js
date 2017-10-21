import { combineReducers } from "redux"

import profile from "./profileReducer"
import visibility from "./visibilityReducer"

// {
//   visibility: {
//     visible:true
//   }
//   profile: {
//     role: "Developer"
//     name: "Deepak"
//   }
// }

export default combineReducers({
  visibility,
  profile
})

//console.log("State of the store => ", JSON.stringify(store.getState()));
//
//export let unsubscribe = store.subscribe(()=>{
//  console.log("Some value in store chnaged");
//});

//store.unsubscribe();
