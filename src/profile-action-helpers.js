import { SET_PROFILE } from "./constants";

export const fetchRemoteProfile = () =>
  fetch("/profile").then(res => res.json());

export const changeProfile = profile => ({ type: SET_PROFILE, profile });
  
