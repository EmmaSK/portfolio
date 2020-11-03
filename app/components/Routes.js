import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  About,
  AllEntries,
  SingleEntry,
  Solo,
  Team,
  Offline,
  Design,
} from "./index";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/entries/:id" component={SingleEntry} />
        <Route exact path="/entries" component={AllEntries} />

        <Route path="/team" component={Team} />
        <Route path="/solo" component={Solo} />
        <Route path="/design" component={Design} />
        <Route path="/offline" component={Offline} />
      </Switch>
    </div>
  );
};

export default Routes;
