import React from "react";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav></nav>
        <main>
          <Switch>{/* <Route exact path="/" component={Home} /> */}</Switch>
        </main>
      </div>
    </Router>
  );
};

export default Routes;