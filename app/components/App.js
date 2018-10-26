import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
