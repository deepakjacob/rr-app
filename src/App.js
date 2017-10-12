import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import * as actions from "./actions";
import createConfiguredStore from "./createConfiguredStore";

import { bindActionCreators, createStore } from "redux";
import { connect, Provider } from "react-redux";

class AppComponent extends Component {
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
  }
  show = () => {
    const { visible, changeVisibility } = this.props;
    changeVisibility(visible);
  };

  render() {
    const { visible } = this.props;
    return (
      <div className="App">
        <button onClick={this.show}>Press Me</button>
        <div>{visible ? <div> Visible </div> : <div> Not visible </div>}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { visible: state.visibility.visible };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
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
