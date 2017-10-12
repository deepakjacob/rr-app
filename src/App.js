import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect, Provider } from "react-redux";

import * as visibilityActions from "./visibility-actions";
import * as profileActions from "./profile-actions";

import createConfiguredStore from "./createConfiguredStore";
import "./App.css";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.showProfile = this.showProfile.bind(this);
  }
  show = () => {
    const { visible, changeVisibility } = this.props;
    changeVisibility(visible);
  };

  showProfile = () => {
    const { changeToRemoteProfile } = this.props;
    changeToRemoteProfile();
  };

  render() {
    const { visible, profile } = this.props;
    return (
      <div className="App">
        <button onClick={this.show}>Press Me</button>
        <div>{visible ? <div> Visible </div> : <div> Not visible </div>}</div>

        <button onClick={this.showProfile}>Press Me</button>
        <div>
          Name: {profile.name}, Role: {profile.role}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    visible: state.visibility.visible,
    profile: state.profile
  };
};

const mapDispatchToProps = dispatch => {
  // console.log(visibilityActions);
  // console.log(profileActions);

  return bindActionCreators(
    Object.assign({}, visibilityActions, profileActions),
    dispatch
  );
};

const MainComponent = connect(mapStateToProps, mapDispatchToProps)(
  AppComponent
);

const App = () => {
  let store = createConfiguredStore();
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
};

export default App;

// {
//   visibility: {
//     visible:true
//   }
//   profile: {
//     role: "Developer"
//     name: "Deepak"
//   }
// }
