import React from 'react'

export const Dashboard = props => (
  <div className="App">
    <div>Welcome to App</div>
    <button onClick={props.show}>Press Me</button>
    <div>{props.visible ? <div> Visible </div> : <div> Not visible </div>}</div>

    <button onClick={props.showProfile}>Press Me</button>
    <div>
      Name: {props.profile.name}, Role: {props.profile.role}
    </div>
  </div>
)
