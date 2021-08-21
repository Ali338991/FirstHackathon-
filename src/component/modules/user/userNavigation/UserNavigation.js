import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from '../User'
import UserNavigationBar from "../userNavigationBar/UserNavigationBar";

import createBrowserHistory from "history/createBrowserHistory";


export default function UserNavigation() {
  const history = createBrowserHistory();

  return (
    <Router>
      <UserNavigationBar/>
      <Switch>    
        <Route exact path="/User/">
          <User />
        </Route>

    
      </Switch>
    </Router>
  );
}
