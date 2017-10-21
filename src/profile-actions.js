import { changeProfile, fetchRemoteProfile } from "./profile-action-helpers"

export const changeToRemoteProfile = () => dispatch => {
  return fetchRemoteProfile()
    .then(profile => {
      dispatch(changeProfile(profile))
    })
    .catch(e => {
      dispatch(changeProfile({ name: "", role: "" }))
    })
}
  
