import React, { Component } from "react";
import Upload from "./Upload";
import { Route, withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/upload" component={Upload} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
