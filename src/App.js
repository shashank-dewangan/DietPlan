import React, { Component } from "react";
import { Products, PageHeader,Data } from "./Components";

import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <PageHeader />
          <Switch>
            <Route exact path={`/products`} component={Products} />
            <Route exact path={`/data`} component={Data} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
