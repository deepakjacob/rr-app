import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect, Provider } from "react-redux";

import * as visibilityActions from "./visibility-actions";
import * as profileActions from "./profile-actions";

import createConfiguredStore from "./createConfiguredStore";
import { Dashboard } from "./Dashboard";
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

  /*prettier-ignore*/
  showProfile = () => {
    const { changeToRemoteProfile } = this.props
    changeToRemoteProfile()
  }

  render() {
    const { visible, profile } = this.props;
    return (
      <Dashboard
        visible={visible}
        profile={profile}
        show={this.show}
        showProfile={this.showProfile}
      />
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
  return bindActionCreators(
    { ...visibilityActions, ...profileActions },
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
